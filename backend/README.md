# Vehicle Management System API

A comprehensive Django REST API for managing a vehicle fleet system with role-based access control, breakdown tracking, reporting, and inventory management.

## 🚗 Features

- **User Management**: Role-based authentication (Admin, Driver, Technician)
- **Vehicle Fleet**: Track vehicles, status, and assignments
- **Breakdown Management**: Report and track vehicle repairs
- **Inventory Control**: Spare parts management with stock tracking
- **Reporting System**: Daily and weekly driver reports
- **Audit Logging**: System activity tracking
- **JWT Authentication**: Secure token-based authentication
- **RESTful API**: Complete CRUD operations with proper permissions

## 🏗️ Architecture

### Backend
- **Framework**: Django 5.2.8 with Django REST Framework
- **Authentication**: JWT (JSON Web Tokens)
- **Database**: SQLite (development) / PostgreSQL (production)
- **Permissions**: Role-based access control

### Apps Structure
```
vehicle_system/
├── accounts/          # User management & authentication
├── fleet/            # Vehicle fleet operations
└── vehicle_system/   # Django project settings
```

## 📋 Requirements

- Python 3.8+
- Django 5.2.8
- Django REST Framework 3.16.1
- Simple JWT 5.5.1

## 🚀 Installation & Setup

### 1. Clone & Install Dependencies
```bash
git clone <repository-url>
cd vehicule_management_system
pip install -r requirements.txt
```

### 2. Database Setup
```bash
cd vehicle_system
python manage.py migrate
```

### 3. Create Superuser
```bash
python manage.py createsuperuser
# Or use the management command for testing
python manage.py shell -c "
from accounts.models import User
User.objects.create_superuser('admin', 'admin@example.com', 'password123')
"
```

### 4. Run Development Server
```bash
python manage.py runserver
```

The API will be available at `http://127.0.0.1:8000/`

## 🔐 Authentication

### Login
```bash
POST /api/accounts/users/login/
Content-Type: application/json

{
  "email": "admin@example.com",
  "password": "password123"
}
```

**Response:**
```json
{
  "message": "Login successful",
  "user": {
    "id": 1,
    "username": "admin",
    "email": "admin@example.com",
    "role": "ADMIN"
  },
  "tokens": {
    "refresh": "eyJ0eXAi...",
    "access": "eyJ0eXAi..."
  }
}
```

### Using JWT Tokens
Include the access token in Authorization header:
```
Authorization: Bearer <access_token>
```

## 📚 API Endpoints

### Authentication
- `POST /api/token/` - Obtain JWT token pair
- `POST /api/token/refresh/` - Refresh access token
- `POST /api/accounts/users/login/` - Login with email/password

### User Management (Admin Only)
- `GET /api/accounts/users/` - List all users
- `POST /api/accounts/users/` - Create new user
- `GET /api/accounts/users/{id}/` - Get user details
- `PUT /api/accounts/users/{id}/` - Update user
- `DELETE /api/accounts/users/{id}/` - Delete user

### Vehicle Management
- `GET /api/fleet/vehicles/` - List vehicles (role-based filtering)
- `POST /api/fleet/vehicles/` - Create vehicle (Admin only)
- `GET /api/fleet/vehicles/{id}/` - Get vehicle details
- `PUT /api/fleet/vehicles/{id}/` - Update vehicle (Admin only)
- `DELETE /api/fleet/vehicles/{id}/` - Delete vehicle (Admin only)

### Breakdown Management
- `GET /api/fleet/breakdowns/` - List breakdowns
- `POST /api/fleet/breakdowns/` - Report breakdown (Drivers only)
- `PUT /api/fleet/breakdowns/{id}/` - Update breakdown status (Technicians/Admins)
- `GET /api/fleet/breakdowns/{id}/` - Get breakdown details

### Spare Parts Inventory
- `GET /api/fleet/spare-parts/` - List spare parts
- `POST /api/fleet/spare-parts/` - Add spare part (Admins/Technicians)
- `PUT /api/fleet/spare-parts/{id}/` - Update spare part
- `DELETE /api/fleet/spare-parts/{id}/` - Remove spare part

### Reporting
- `GET /api/fleet/daily-reports/` - List daily reports
- `POST /api/fleet/daily-reports/` - Submit daily report (Drivers)
- `GET /api/fleet/weekly-reports/` - List weekly reports
- `POST /api/fleet/weekly-reports/` - Submit weekly report (Drivers)

### System Logs (Admin Only)
- `GET /api/fleet/system-logs/` - View audit logs

## 👥 User Roles & Permissions

### ADMIN
- Full access to all endpoints
- User management
- System configuration

### DRIVER
- View assigned vehicles
- Report breakdowns
- Submit daily/weekly reports
- View personal reports

### TECHNICIAN
- View all vehicles and breakdowns
- Update breakdown status
- Manage spare parts inventory
- View reports

## 🎨 Frontend Integration

### JavaScript (Fetch API)
```javascript
// Login
const login = async (email, password) => {
  const response = await fetch('/api/accounts/users/login/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  });
  const data = await response.json();
  localStorage.setItem('accessToken', data.tokens.access);
  return data;
};

// Authenticated Request
const getVehicles = async () => {
  const token = localStorage.getItem('accessToken');
  const response = await fetch('/api/fleet/vehicles/', {
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  });
  return response.json();
};
```

### React Example
```jsx
import { useState, useEffect } from 'react';

function VehicleList() {
  const [vehicles, setVehicles] = useState([]);
  const [token, setToken] = useState(localStorage.getItem('token'));

  useEffect(() => {
    if (token) {
      fetch('/api/fleet/vehicles/', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      .then(res => res.json())
      .then(data => setVehicles(data));
    }
  }, [token]);

  return (
    <div>
      {vehicles.map(vehicle => (
        <div key={vehicle.id}>
          {vehicle.plate_number} - {vehicle.brand} {vehicle.model}
        </div>
      ))}
    </div>
  );
}
```

### Vue.js Example
```javascript
// In your Vue component
export default {
  data() {
    return {
      vehicles: [],
      token: localStorage.getItem('token')
    }
  },
  async mounted() {
    if (this.token) {
      const response = await fetch('/api/fleet/vehicles/', {
        headers: {
          'Authorization': `Bearer ${this.token}`
        }
      });
      this.vehicles = await response.json();
    }
  }
}
```

### Angular Example
```typescript
// vehicle.service.ts
@Injectable({
  providedIn: 'root'
})
export class VehicleService {
  private apiUrl = '/api/fleet';

  constructor(private http: HttpClient) {}

  getVehicles(): Observable<Vehicle[]> {
    return this.http.get<Vehicle[]>(`${this.apiUrl}/vehicles/`);
  }

  login(credentials: {email: string, password: string}): Observable<any> {
    return this.http.post('/api/accounts/users/login/', credentials);
  }
}

// app.component.ts
export class AppComponent {
  vehicles: Vehicle[] = [];

  constructor(private vehicleService: VehicleService) {}

  ngOnInit() {
    this.vehicleService.getVehicles().subscribe(
      data => this.vehicles = data
    );
  }
}
```

## 🔧 Configuration

### Environment Variables
Create a `.env` file in the project root:

```env
SECRET_KEY=your-secret-key-here
DEBUG=True
DATABASE_URL=sqlite:///db.sqlite3
```

### Production Deployment
1. Set `DEBUG=False` in settings
2. Configure PostgreSQL database
3. Set up proper SECRET_KEY
4. Configure static files serving
5. Set up HTTPS

## 🧪 Testing

### Using cURL
```bash
# Login
curl -X POST http://127.0.0.1:8000/api/accounts/users/login/ \
  -H "Content-Type: application/json" \
  -d '{"email":"admin@example.com","password":"password123"}'

# Get vehicles (replace TOKEN with actual token)
curl -H "Authorization: Bearer TOKEN" \
  http://127.0.0.1:8000/api/fleet/vehicles/
```

### Using Postman
1. Import the API collection
2. Set base URL to `http://127.0.0.1:8000`
3. Use Bearer Token authentication for protected endpoints

## 📊 Data Models

### User
- id, username, email, first_name, last_name
- role (ADMIN/DRIVER/TECHNICIAN)
- employee_id

### Vehicle
- plate_number (unique), brand, model
- status (ACTIVE/BROKEN/MAINTENANCE)
- driver (ForeignKey to User)

### Breakdown
- vehicle, reported_by (driver)
- description, status (REPORTED/IN_PROGRESS/RESOLVED)
- created_at

### SparePart
- name, quantity, description

### DailyReport
- driver, vehicle, date
- mileage, fuel_used, route_taken, issues

### WeeklyReport
- driver, vehicle, week_start_date
- summary, total_mileage, maintenance_needs

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

