"""
Django Views for Prevision AI Chat Assistant
Integrates Groq API for AI-powered fleet management assistant
"""

import os
from dotenv import load_dotenv
load_dotenv()
import json
from django.http import JsonResponse
from django.views import View
from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator
from groq import Groq
from api.models import Vehicle, MaintenanceHistory, Breakdown, RepairRecord, Accessory, FuelUsage
from django.contrib.auth import get_user_model

User = get_user_model()


class GroqClient:
    """Singleton Groq client for AI interactions"""
    _instance = None
    _client = None
    
    def __new__(cls):
        if cls._instance is None:
            cls._instance = super().__new__(cls)
            # Initialize with API key
            api_key = os.environ.get('GROQ_API_KEY', '')
            if api_key:
                cls._client = Groq(api_key=api_key)
        return cls._instance
    
    def get_client(self):
        """Get the Groq client instance"""
        return self._client
    
    @property
    def is_configured(self):
        return self._client is not None


@method_decorator(csrf_exempt, name='dispatch')
class ChatView(View):
    """
    AI Chat endpoint for fleet assistant.
    Provides intelligent responses about vehicle fleet management using real data from the database.
    """
    
    def post(self, request):
        try:
            data = json.loads(request.body)
        except json.JSONDecodeError:
            return JsonResponse({'error': 'Invalid JSON'}, status=400)
        
        user_message = data.get('message', '')
        vehicle_id = data.get('vehicle_id')
        context = data.get('context', 'general')
        user_role = data.get('user_role', 'user')
        
        if not user_message:
            return JsonResponse({'error': 'Message is required'}, status=400)
        
        # Fetch real data from Django database
        try:
            fleet_data = self._get_fleet_data()
        except Exception as e:
            fleet_data = f"\nNote: Could not fetch real-time data from database: {str(e)}"
        
        # Build role-based system prompt
        system_prompt = self._get_role_prompt(user_role)
        
        # Add vehicle-specific context if provided
        vehicle_context = ""
        if vehicle_id:
            vehicle_context = f"\nNote: User is asking about a specific vehicle (ID: {vehicle_id}). " \
                            f"Provide detailed information about this vehicle if the user has access."
        
        # Build the full prompt with real data
        full_prompt = f"{system_prompt}\n\n{fleet_data}\n{vehicle_context}\n\nUser question: {user_message}"
        
        groq_client = GroqClient()
        client = groq_client.get_client()
        
        if not groq_client.is_configured:
            return JsonResponse({
                'response': "AI assistant is not configured. Please set the GROQ_API_KEY environment variable to enable AI responses. In the meantime, I can help you navigate the fleet management system. Try asking about vehicles, maintenance, or fuel reports."
            })
        
        try:
            response = client.chat.completions.create(
                model="llama-3.3-70b-versatile",
                messages=[
                    {"role": "system", "content": system_prompt},
                    {"role": "user", "content": full_prompt}
                ],
                temperature=0.7,
                max_tokens=256
            )
            
            ai_response = response.choices[0].message.content
            return JsonResponse({"response": ai_response})
        except Exception as e:
            return JsonResponse({
                "response": f"I apologize, but I encountered an error processing your request: {str(e)}. Please try again or ask a different question about your fleet."
            }, status=500)
    
    def _get_fleet_data(self):
        """Fetch real fleet data from the database"""
        
        # Get total vehicles count
        total_vehicles = Vehicle.objects.count()
        
        # Get total fuel usage
        total_fuel = FuelUsage.objects.all()
        total_liters = sum(float(f.liters) for f in total_fuel)
        total_fuel_cost = sum(float(f.total_cost) for f in total_fuel)
        
        # Get active vehicles
        active_vehicles = Vehicle.objects.filter(status='active').count()
        
        # Get maintenance records count
        total_maintenance = MaintenanceHistory.objects.count()
        
        # Get accessories count
        total_accessories = Accessory.objects.count()
        low_stock_accessories = Accessory.objects.filter(stock_level__lt=5).count()
        
        # Get breakdowns count
        total_breakdowns = Breakdown.objects.count()
        
        # Get repair records count
        total_repairs = RepairRecord.objects.count()
        
        # Get recent repairs (limit to 3)
        recent_repairs = RepairRecord.objects.order_by('-completed_at')[:3]
        recent_repairs_data = []
        for r in recent_repairs:
            try:
                recent_repairs_data.append({
                    'vehicle': f"{r.vehicle.make} {r.vehicle.model}" if r.vehicle else 'N/A',
                    'title': r.title,
                    'status': r.status,
                    'date': str(r.completed_at) if r.completed_at else 'N/A'
                })
            except:
                pass
        
        # Get users count
        total_users = User.objects.count()
        
        # Recent fuel entries (limit to 3)
        recent_fuel = FuelUsage.objects.order_by('-date')[:3]
        recent_fuel_data = []
        for f in recent_fuel:
            try:
                recent_fuel_data.append({
                    'vehicle': f"{f.vehicle.make} {f.vehicle.model}" if f.vehicle else 'N/A',
                    'liters': float(f.liters),
                    'cost': float(f.total_cost),
                    'date': str(f.date)
                })
            except:
                pass
        
        return f"""
Fleet: {total_vehicles} vehicles ({active_vehicles} active)
Fuel: {total_liters:.0f}L ({total_fuel_cost:.0f} Fcfa)
Maintenance: {total_maintenance} records
Repairs: {total_repairs}
Breakdowns: {total_breakdowns}
Accessories: {total_accessories} ({low_stock_accessories} low stock)
Users: {total_users}
Recent repairs: {recent_repairs_data}
Recent fuel: {recent_fuel_data}
"""
    
    def _get_role_prompt(self, user_role):
        """Get the appropriate system prompt based on user role"""
        
        role_prompts = {
            "admin": """You are ICT Fleet Assistant for an ADMINISTRATOR.
As an admin, you have full access to all vehicles, financial reports, user management.
Provide comprehensive answers with financial impact and fleet-wide statistics.""",
            
            "driver": """You are ICT Fleet Assistant for a DRIVER.
You have access to your assigned vehicle, driving history, fuel consumption, maintenance schedule.
Focus on vehicle operation and maintenance needs.""",
            
            "technician": """You are ICT Fleet Assistant for a TECHNICIAN/MECHANIC.
You have access to vehicle technical details, maintenance history, repair records, parts inventory.
Focus on repairs, maintenance procedures, and parts availability.""",
            
            "manager": """You are ICT Fleet Assistant for a MANAGER.
You have access to fleet overview, vehicle assignments, department reports, driver performance.
Focus on operational efficiency and team performance.""",
            
            "user": "You are ICT Fleet Assistant. Provide helpful information about the fleet management system."
        }
        
        base_prompt = role_prompts.get(user_role, role_prompts["user"])
        base_prompt += " You help with vehicle status, maintenance, fuel, costs, and general fleet questions. Be concise."
        
        return base_prompt
