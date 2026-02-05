import React, { useState } from 'react';
import { vehiclesAPI } from '../service/api';

const VehicleDetailsPage = ({ vehicle, onBack, onEdit, onStatusChange, showHeader = true }) => {
  const [isUpdatingStatus, setIsUpdatingStatus] = useState(false);
  if (!vehicle) return null;

  const handleStatusChange = async (newStatus) => {
    if (!vehicle || !newStatus || newStatus === vehicle.status) return;
    
    setIsUpdatingStatus(true);
    try {
      await vehiclesAPI.updateVehicleStatus(vehicle.id, newStatus);
      if (onStatusChange) {
        onStatusChange(vehicle.id, newStatus);
      }
      alert(`Vehicle status changed to: ${newStatus.charAt(0).toUpperCase() + newStatus.slice(1).replace('_', ' ')}`);
    } catch (error) {
      console.error('Error updating status:', error);
      alert('Failed to update vehicle status');
    } finally {
      setIsUpdatingStatus(false);
    }
  };

  return (
    <div className="bg-background-light dark:bg-background-dark text-[#0d141b] dark:text-slate-50 h-full">
      {/* Top Navigation Bar */}
      {showHeader && (
      <header className="sticky top-0 z-50 w-full border-b border-solid border-[#e7edf3] dark:border-slate-800 bg-white dark:bg-background-dark px-10 py-3">
        <div className="max-w-[1200px] mx-auto flex items-center justify-between whitespace-nowrap">
          <div className="flex items-center gap-8">
            <button onClick={onBack} className="flex items-center gap-2 text-[#4c739a] hover:text-primary transition-colors">
              <span className="material-symbols-outlined">arrow_back</span>
              Back to Dashboard
            </button>
            <div className="flex items-center gap-3 text-primary">
              <span className="material-symbols-outlined text-3xl">local_shipping</span>
              <h2 className="text-[#0d141b] dark:text-white text-lg font-bold leading-tight tracking-tight">Campus Fleet</h2>
            </div>
            <nav className="hidden md:flex items-center gap-8">
              <a className="text-[#0d141b] dark:text-slate-300 text-sm font-medium hover:text-primary transition-colors" href="#">Dashboard</a>
              <a className="text-primary text-sm font-bold border-b-2 border-primary pb-1" href="#">Vehicles</a>
              <a className="text-[#0d141b] dark:text-slate-300 text-sm font-medium hover:text-primary transition-colors" href="#">Drivers</a>
              <a className="text-[#0d141b] dark:text-slate-300 text-sm font-medium hover:text-primary transition-colors" href="#">Inventory</a>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <label className="relative flex items-center">
              <span className="material-symbols-outlined absolute left-3 text-[#4c739a]">search</span>
              <input className="form-input w-64 rounded-lg border-none bg-[#e7edf3] dark:bg-slate-800 pl-10 pr-4 py-2 text-sm focus:ring-2 focus:ring-primary" placeholder="Search fleet..."/>
            </label>
            <button className="p-2 rounded-lg bg-[#e7edf3] dark:bg-slate-800 text-[#0d141b] dark:text-white hover:bg-slate-200 dark:hover:bg-slate-700">
              <span className="material-symbols-outlined">notifications</span>
            </button>
            <div className="h-10 w-10 rounded-full bg-cover bg-center border-2 border-white dark:border-slate-700" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBr5BPQj2iFV8XedpQjiJV70Z6qCTgT0iCxdlABKqxAY2SrSsXAAjHVoOLpYZDnC4DjCggMrUqKNzv7Jqrj8ZPv5uXchCSdm_EE5w1e8_jQ5LcGkJvef-FZnrZiAbLpCKfIpccN9Zt1450yV3E-tlooRhJ1QwbvJ0j4McGpkbEzicw3RRsolzXi0ddLxRq64NzTH24cGuDKK6I9pWxyrhlmsZcMT4RJyTE6WVAHZPXNRfgOMC_vrLxH1xP47QHQpHgeIDFu_iMI8U4");'}}></div>
          </div>
        </div>
      </header>
      )}

      {!showHeader && (
        <div className="px-4 md:px-10 py-4 bg-white dark:bg-background-dark border-b border-[#e7edf3] dark:border-slate-800">
          <button onClick={onBack} className="flex items-center gap-2 text-[#4c739a] hover:text-primary transition-colors">
            <span className="material-symbols-outlined">arrow_back</span>
            Back to Vehicles
          </button>
        </div>
      )}

      <main className="max-w-[1200px] mx-auto py-8 px-4 md:px-10">
        {/* Hero Header Image & Status */}
        <div className="relative w-full rounded-xl overflow-hidden shadow-lg mb-8 h-[350px]">
          <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0) 50%, rgba(0,0,0,0.7) 100%), url('${vehicle.image || 'https://lh3.googleusercontent.com/aida-public/AB6AXuAWf3xu-mvoZJ1YSRq5L_Q8lJY8aFRBEDDpHih9y_TMmPDLUpf0nFGqBiS1l6Ne4Wgd87kEy9UdkYNY5fV8odWFYtJYuYKfJBSl1vm3w6pr_Om6VR6qMO_bk_uqx1HhY7bNAoXBAA6WCzJeCdpQU38UuMu33qMh_K8Alm-j9MDfYt23zb0a3LNLLrUh12P3o8ceSBPe2lWGC8LPK7MXsyNcagMlm-Zm8twNsStNgD9yfCG4RMhA7yz2-ZHrU4p5UTp9NUxOIQrhLH8'}')`}}></div>
          <div className="absolute top-6 left-6 flex items-center gap-3">
            <select
              value={vehicle.status || 'active'}
              onChange={(e) => handleStatusChange(e.target.value)}
              disabled={isUpdatingStatus}
              className={`px-4 py-1.5 text-white text-sm font-bold rounded-full flex items-center gap-2 shadow-lg cursor-pointer transition-all ${
                vehicle.status === 'active' ? 'bg-green-500 hover:bg-green-600' :
                vehicle.status === 'maintenance' ? 'bg-orange-500 hover:bg-orange-600' :
                vehicle.status === 'breakdown' ? 'bg-red-600 hover:bg-red-700' :
                'bg-red-500 hover:bg-red-600'
              }`}
              style={{ minWidth: '140px' }}
            >
              <option value="active">In Service</option>
              <option value="maintenance">In Maintenance</option>
              <option value="breakdown">Breakdown</option>
              <option value="inactive">Inactive</option>
            </select>
            {isUpdatingStatus && (
              <span className="text-white text-sm animate-pulse">Updating...</span>
            )}
          </div>
          <div className="absolute bottom-6 left-8 text-white">
            <h1 className="text-4xl font-extrabold tracking-tight mb-1">{vehicle.year} {vehicle.make} {vehicle.model}</h1>
            <p className="text-lg text-slate-200 font-medium">{vehicle.license_plate}</p>
          </div>
        </div>
        {/* Secondary Profile Header with Actions */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-8 bg-white dark:bg-slate-900 p-6 rounded-xl shadow-sm border border-[#e7edf3] dark:border-slate-800">
          <div className="flex gap-5 items-center">
            <div className="h-16 w-16 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
              <span className="material-symbols-outlined text-4xl">license</span>
            </div>
            <div>
              <p className="text-[#4c739a] dark:text-slate-400 text-sm font-semibold uppercase tracking-wider">License Plate</p>
              <p className="text-2xl font-bold text-[#0d141b] dark:text-white">{vehicle.license_plate}</p>
            </div>
          </div>
          <div className="flex gap-3 w-full md:w-auto">
            <button onClick={() => onEdit && onEdit(vehicle)} className="flex-1 md:flex-none flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg border-2 border-[#e7edf3] dark:border-slate-700 bg-white dark:bg-slate-800 text-[#0d141b] dark:text-white font-bold hover:bg-slate-50 dark:hover:bg-slate-700 transition-all">
              <span className="material-symbols-outlined text-xl">edit</span>
              Edit Vehicle
            </button>
          </div>
        </div>
        {/* Tabs Navigation */}
        <div className="mb-6 border-b border-[#cfdbe7] dark:border-slate-800">
          <div className="flex gap-8 overflow-x-auto">
            <a className="flex items-center gap-2 border-b-4 border-primary text-primary pb-4 font-bold whitespace-nowrap" href="#">
              <span className="material-symbols-outlined text-xl">settings_input_component</span>
              Technical Specs
            </a>
            <a className="flex items-center gap-2 border-b-4 border-transparent text-[#4c739a] hover:text-primary pb-4 font-bold whitespace-nowrap transition-all" href="#">
              <span className="material-symbols-outlined text-xl">person</span>
              Assigned Driver
            </a>
            <a className="flex items-center gap-2 border-b-4 border-transparent text-[#4c739a] hover:text-primary pb-4 font-bold whitespace-nowrap transition-all" href="#">
              <span className="material-symbols-outlined text-xl">build</span>
              Maintenance
            </a>
            <a className="flex items-center gap-2 border-b-4 border-transparent text-[#4c739a] hover:text-primary pb-4 font-bold whitespace-nowrap transition-all" href="#">
              <span className="material-symbols-outlined text-xl">extension</span>
              Accessories
            </a>
          </div>
        </div>
        {/* Tab Content: Technical Specs */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-[#e7edf3] dark:border-slate-800 shadow-sm">
            <div className="flex items-center gap-3 mb-4 text-primary">
              <span className="material-symbols-outlined">engineering</span>
              <h3 className="font-bold text-lg">Vehicle Info</h3>
            </div>
            <div className="space-y-4">
              <div className="flex flex-col gap-1 border-b border-slate-100 dark:border-slate-800 pb-3">
                <p className="text-[#4c739a] text-xs font-bold uppercase tracking-widest">Vehicle Type</p>
                <p className="text-[#0d141b] dark:text-slate-200 font-medium">{vehicle.vehicle_type ? vehicle.vehicle_type.charAt(0).toUpperCase() + vehicle.vehicle_type.slice(1).replace('_', ' ') : 'N/A'}</p>
              </div>
              <div className="flex flex-col gap-1 border-b border-slate-100 dark:border-slate-800 pb-3">
                <p className="text-[#4c739a] text-xs font-bold uppercase tracking-widest">Make</p>
                <p className="text-[#0d141b] dark:text-slate-200 font-medium">{vehicle.make || 'N/A'}</p>
              </div>
              <div className="flex flex-col gap-1 border-b border-slate-100 dark:border-slate-800 pb-3">
                <p className="text-[#4c739a] text-xs font-bold uppercase tracking-widest">Model</p>
                <p className="text-[#0d141b] dark:text-slate-200 font-medium">{vehicle.model || 'N/A'}</p>
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-[#4c739a] text-xs font-bold uppercase tracking-widest">Year</p>
                <p className="text-[#0d141b] dark:text-slate-200 font-medium">{vehicle.year || 'N/A'}</p>
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-[#e7edf3] dark:border-slate-800 shadow-sm">
            <div className="flex items-center gap-3 mb-4 text-primary">
              <span className="material-symbols-outlined">speed</span>
              <h3 className="font-bold text-lg">Usage Stats</h3>
            </div>
            <div className="space-y-4">
              <div className="flex flex-col gap-1 border-b border-slate-100 dark:border-slate-800 pb-3">
                <p className="text-[#4c739a] text-xs font-bold uppercase tracking-widest">Current Mileage</p>
                <p className="text-[#0d141b] dark:text-slate-200 font-medium text-xl">{vehicle.mileage ? `${vehicle.mileage.toLocaleString()} km` : 'N/A'}</p>
              </div>
              <div className="flex flex-col gap-1 border-b border-slate-100 dark:border-slate-800 pb-3">
                <p className="text-[#4c739a] text-xs font-bold uppercase tracking-widest">Fuel Type</p>
                <p className="text-[#0d141b] dark:text-slate-200 font-medium">{vehicle.fuel_type || 'N/A'}</p>
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-[#4c739a] text-xs font-bold uppercase tracking-widest">Color</p>
                <p className="text-[#0d141b] dark:text-slate-200 font-medium">{vehicle.color || 'N/A'}</p>
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-[#e7edf3] dark:border-slate-800 shadow-sm">
            <div className="flex items-center gap-3 mb-4 text-primary">
              <span className="material-symbols-outlined">verified</span>
              <h3 className="font-bold text-lg">Assignment</h3>
            </div>
            <div className="space-y-4">
              <div className="flex flex-col gap-1 border-b border-slate-100 dark:border-slate-800 pb-3">
                <p className="text-[#4c739a] text-xs font-bold uppercase tracking-widest">Assigned Driver</p>
                <p className="text-[#0d141b] dark:text-slate-200 font-medium">{vehicle.assigned_driver_name || 'Not Assigned'}</p>
              </div>
              <div className="flex flex-col gap-1 border-b border-slate-100 dark:border-slate-800 pb-3">
                <p className="text-[#4c739a] text-xs font-bold uppercase tracking-widest">Status</p>
                <p className={`font-bold ${
                  vehicle.status === 'active' ? 'text-green-600' : 
                  vehicle.status === 'maintenance' ? 'text-orange-600' : 
                  vehicle.status === 'breakdown' ? 'text-red-600' :
                  'text-gray-600'
                }`}>
                  {vehicle.status === 'active' ? 'Active' : 
                   vehicle.status === 'maintenance' ? 'In Maintenance' : 
                   vehicle.status === 'breakdown' ? 'Breakdown' : 
                   'Inactive'}
                </p>
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-[#4c739a] text-xs font-bold uppercase tracking-widest">License Plate</p>
                <p className="text-[#0d141b] dark:text-slate-200 font-medium">{vehicle.license_plate || 'N/A'}</p>
              </div>
            </div>
          </div>
        </div>
        {/* Section Header */}
        <div className="flex items-center justify-between mt-12 mb-6">
          <h2 className="text-2xl font-bold text-[#0d141b] dark:text-white flex items-center gap-3">
            <span className="material-symbols-outlined text-3xl text-primary">build</span>
            Recent Maintenance
          </h2>
          <button className="text-primary text-sm font-bold flex items-center gap-1 hover:underline">
            View Full Log
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </button>
        </div>
        {/* Maintenance List */}
        <div className="bg-white dark:bg-slate-900 rounded-xl border border-[#e7edf3] dark:border-slate-800 shadow-sm overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead className="bg-[#f8f9fb] dark:bg-slate-800 text-[#4c739a] text-xs font-bold uppercase tracking-wider">
              <tr>
                <th className="px-6 py-4">Service Date</th>
                <th className="px-6 py-4">Maintenance Type</th>
                <th className="px-6 py-4">Parts Used</th>
                <th className="px-6 py-4 text-right">Cost</th>
                <th className="px-6 py-4 text-center">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#e7edf3] dark:divide-slate-800 text-sm">
              {vehicle.repairHistory && vehicle.repairHistory.length > 0 ? vehicle.repairHistory.map((repair, index) => (
                <tr key={index} className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                  <td className="px-6 py-4 font-medium">{repair.date}</td>
                  <td className="px-6 py-4">{repair.description}</td>
                  <td className="px-6 py-4 text-[#4c739a]">{repair.parts || 'None'}</td>
                  <td className="px-6 py-4 text-right">${repair.cost}</td>
                  <td className="px-6 py-4 text-center">
                    <span className="px-2 py-1 rounded bg-green-100 text-green-700 text-xs font-bold">Completed</span>
                  </td>
                </tr>
              )) : (
                <tr>
                  <td colSpan="5" className="px-6 py-4 text-center text-[#4c739a]">No maintenance history available</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </main>
      <footer className="w-full py-10 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-background-dark">
        <div className="max-w-[1200px] mx-auto px-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2 text-slate-400">
            <span className="material-symbols-outlined">shield</span>
            <span className="text-sm">Campus Asset Security Protocol v4.2</span>
          </div>
          <p className="text-sm text-slate-500">© 2023 Campus Fleet Management System. All rights reserved.</p>
          <div className="flex gap-6">
            <a className="text-xs font-bold text-slate-400 hover:text-primary transition-colors" href="#">Privacy Policy</a>
            <a className="text-xs font-bold text-slate-400 hover:text-primary transition-colors" href="#">System Status</a>
            <a className="text-xs font-bold text-slate-400 hover:text-primary transition-colors" href="#">Support</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default VehicleDetailsPage;