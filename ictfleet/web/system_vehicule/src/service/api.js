// API Service for ICT Fleet Management System
const API_BASE_URL = '/api';

// Helper function to get auth headers
const getAuthHeaders = () => {
  const token = localStorage.getItem('access_token');
  return token ? { Authorization: `Bearer ${token}` } : {};
};

// Generic API request function
const apiRequest = async (endpoint, options = {}) => {
  const url = `${API_BASE_URL}${endpoint}`;
  
  // Don't set Content-Type if body is FormData - let browser set it automatically
  const shouldSetContentType = !(options.body instanceof FormData);
  
  const config = {
    headers: {
      ...(shouldSetContentType && { 'Content-Type': 'application/json' }),
      ...getAuthHeaders(),
      ...options.headers,
    },
    ...options,
  };

  try {
    const response = await fetch(url, config);
    
    console.log(`API: ${config.method || 'GET'} ${url} -> ${response.status}`);

    // Handle token refresh on 401
    if (response.status === 401) {
      console.log('API: Got 401 response, attempting token refresh...');
      const refreshToken = localStorage.getItem('refresh_token');
      if (refreshToken) {
        try {
          console.log('API: Sending refresh token request...');
          const refreshResponse = await fetch(`${API_BASE_URL}/auth/token/refresh/`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ refresh: refreshToken }),
          });

          console.log('API: Refresh response status:', refreshResponse.status);

          if (refreshResponse.ok) {
            const refreshData = await refreshResponse.json();
            localStorage.setItem('access_token', refreshData.access);
            console.log('API: Token refreshed successfully');

            // Retry the original request with new token
            config.headers.Authorization = `Bearer ${refreshData.access}`;
            const retryResponse = await fetch(url, config);
            return await handleResponse(retryResponse);
          } else {
            // Token refresh failed - get error details
            const refreshError = await refreshResponse.json().catch(() => ({}));
            console.log('API: Token refresh failed. Status:', refreshResponse.status, 'Error:', refreshError);
            const error = new Error('Token refresh failed: ' + JSON.stringify(refreshError));
            error.status = 401;
            error.data = refreshError;
            throw error;
          }
        } catch (refreshError) {
          console.error('Token refresh error caught:', refreshError);
          // Don't automatically reload - let the caller handle the error
          const error = new Error('Token refresh error: ' + refreshError.message);
          error.status = 401;
          error.data = { detail: refreshError.message };
          throw error;
        }
      } else {
        // No refresh token - throw error
        console.log('API: No refresh token available');
        const error = new Error('No refresh token available');
        error.status = 401;
        error.data = { detail: 'No refresh token available' };
        throw error;
      }
    }

    return await handleResponse(response);
  } catch (error) {
    console.error('API request failed:', error);
    throw error;
  }
};

// Handle API response
const handleResponse = async (response) => {
  let data;
  if (response.status === 204) {
    // No Content
    data = null;
  } else {
    data = await response.json();
  }

  if (!response.ok) {
    const error = new Error(data?.detail || data?.message || 'API request failed');
    error.status = response.status;
    error.data = data;
    throw error;
  }

  return data;
};

// Authentication API
export const authAPI = {
  login: async (username, password) => {
    const response = await fetch(`${API_BASE_URL}/auth/token/`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    });

    const data = await handleResponse(response);

    // Store tokens and user data
    localStorage.setItem('access_token', data.access);
    localStorage.setItem('refresh_token', data.refresh);
    localStorage.setItem('user', JSON.stringify(data.user));

    return data;
  },

  logout: async () => {
    try {
      const refreshToken = localStorage.getItem('refresh_token');
      if (refreshToken) {
        await apiRequest('/users/logout/', {
          method: 'POST',
          body: JSON.stringify({ refresh: refreshToken }),
        });
      }
    } catch (error) {
      console.error('Logout API call failed:', error);
    } finally {
      // Always clear local storage
      localStorage.removeItem('access_token');
      localStorage.removeItem('refresh_token');
      localStorage.removeItem('user');
    }
  },

  register: async (userData) => {
    return await apiRequest('/users/register/', {
      method: 'POST',
      body: JSON.stringify(userData),
    });
  },

  getProfile: async () => {
    return await apiRequest('/users/profile/');
  },

  updateProfile: async (userData) => {
    return await apiRequest('/users/profile/', {
      method: 'PUT',
      body: JSON.stringify(userData),
    });
  },

  getUsers: async () => {
    return await apiRequest('/users/list/');
  },

  getDrivers: async () => {
    return await apiRequest('/users/drivers/');
  },

  createUser: async (userData) => {
    // Handle both FormData and plain object
    let body, headers = {};

    if (userData instanceof FormData) {
      body = userData;
      // Don't set Content-Type for FormData, let browser set it
    } else {
      body = JSON.stringify(userData);
      headers = { 'Content-Type': 'application/json' };
    }

    return await apiRequest('/users/create/', {
      method: 'POST',
      headers,
      body,
    });
  },

  updateUser: async (userId, userData) => {
    // Handle both FormData and plain object
    let body, headers = {};

    if (userData instanceof FormData) {
      body = userData;
      // Don't set Content-Type for FormData, let browser set it
    } else {
      body = JSON.stringify(userData);
      headers = { 'Content-Type': 'application/json' };
    }

    return await apiRequest(`/users/${userId}/`, {
      method: 'PUT',
      headers,
      body,
    });
  },

  updateSelfProfile: async (userData) => {
    // Update current user's own profile
    let body, headers = {};

    if (userData instanceof FormData) {
      body = userData;
    } else {
      body = JSON.stringify(userData);
      headers = { 'Content-Type': 'application/json' };
    }

    return await apiRequest('/users/profile/update/', {
      method: 'PUT',
      headers,
      body,
    });
  },

  deleteUser: async (userId) => {
    return await apiRequest(`/users/${userId}/`, {
      method: 'DELETE',
    });
  },
};

// Vehicles API
export const vehiclesAPI = {
  getVehicles: async (params = {}) => {
    const queryString = new URLSearchParams(params).toString();
    const endpoint = queryString ? `/vehicles/?${queryString}` : '/vehicles/';
    return await apiRequest(endpoint);
  },

  getVehicle: async (id) => {
    return await apiRequest(`/vehicles/${id}/`);
  },

  getMyVehicle: async () => {
    return await apiRequest('/vehicles/my_vehicle/');
  },

  getMyVehicles: async () => {
    return await apiRequest('/vehicles/my_vehicles/');
  },

  createVehicle: async (vehicleData) => {
    // If vehicleData is already FormData, use it directly
    if (vehicleData instanceof FormData) {
      return await apiRequest('/vehicles/', {
        method: 'POST',
        body: vehicleData,
      });
    }
    
    // Otherwise, convert to FormData
    const formData = new FormData();
    Object.keys(vehicleData).forEach(key => {
      if (vehicleData[key] !== null && vehicleData[key] !== undefined) {
        if (key === 'image' && vehicleData[key] instanceof File) {
          formData.append('image', vehicleData[key]);
        } else {
          formData.append(key, vehicleData[key]);
        }
      }
    });

    return await apiRequest('/vehicles/', {
      method: 'POST',
      body: formData,
    });
  },

  updateVehicle: async (id, vehicleData) => {
    // If vehicleData is already FormData, use it directly
    if (vehicleData instanceof FormData) {
      return await apiRequest(`/vehicles/${id}/`, {
        method: 'PUT',
        body: vehicleData,
      });
    }
    
    // Otherwise, convert to FormData
    const formData = new FormData();
    Object.keys(vehicleData).forEach(key => {
      if (vehicleData[key] !== null && vehicleData[key] !== undefined) {
        if (key === 'image' && vehicleData[key] instanceof File) {
          formData.append('image', vehicleData[key]);
        } else {
          formData.append(key, vehicleData[key]);
        }
      }
    });

    return await apiRequest(`/vehicles/${id}/`, {
      method: 'PUT',
      body: formData,
    });
  },

  updateVehicleStatus: async (id, status) => {
    return await apiRequest(`/vehicles/${id}/update_status/`, {
      method: 'PATCH',
      body: JSON.stringify({ status }),
    });
  },

  deleteVehicle: async (id) => {
    return await apiRequest(`/vehicles/${id}/`, {
      method: 'DELETE',
    });
  },

  getVehicleMaintenance: async (vehicleId) => {
    return await apiRequest(`/vehicles/${vehicleId}/maintenance/`);
  },

  addMaintenance: async (vehicleId, maintenanceData) => {
    return await apiRequest(`/vehicles/${vehicleId}/maintenance/`, {
      method: 'POST',
      body: JSON.stringify(maintenanceData),
    });
  },

  updateMaintenance: async (maintenanceId, maintenanceData) => {
    return await apiRequest(`/vehicles/maintenance/${maintenanceId}/`, {
      method: 'PUT',
      body: JSON.stringify(maintenanceData),
    });
  },

  deleteMaintenance: async (maintenanceId) => {
    return await apiRequest(`/vehicles/maintenance/${maintenanceId}/`, {
      method: 'DELETE',
    });
  },

  getAllMaintenance: async (params = {}) => {
    const queryString = new URLSearchParams(params).toString();
    const endpoint = queryString ? `/vehicles/maintenance/?${queryString}` : '/vehicles/maintenance/';
    return await apiRequest(endpoint);
  },

  reportBreakdown: async (breakdownData) => {
    return await apiRequest('/breakdowns/create/', {
      method: 'POST',
      body: breakdownData,
    });
  },

  getBreakdowns: async () => {
    return await apiRequest('/breakdowns/');
  },

  resolveBreakdown: async (breakdownId) => {
    return await apiRequest(`/breakdowns/${breakdownId}/resolve/`, {
      method: 'PATCH',
    });
  },

  recordRepair: async (repairData) => {
    return await apiRequest('/repairs/create/', {
      method: 'POST',
      body: repairData,
    });
  },

  getRepairs: async () => {
    return await apiRequest('/repairs/');
  },
};

// Accessories API
export const accessoriesAPI = {
  getAccessories: async (params = {}) => {
    const queryString = new URLSearchParams(params).toString();
    const endpoint = queryString ? `/accessories/?${queryString}` : '/accessories/';
    return await apiRequest(endpoint);
  },

  getAccessory: async (id) => {
    return await apiRequest(`/accessories/${id}/`);
  },

  createAccessory: async (accessoryData) => {
    const formData = new FormData();

    Object.keys(accessoryData).forEach(key => {
      if (accessoryData[key] !== null && accessoryData[key] !== undefined) {
        if (key === 'image' && accessoryData[key] instanceof File) {
          formData.append(key, accessoryData[key]);
        } else if (Array.isArray(accessoryData[key])) {
          // Handle arrays (like vehicles)
          accessoryData[key].forEach(item => {
            formData.append(key, item);
          });
        } else {
          formData.append(key, accessoryData[key]);
        }
      }
    });

    return await apiRequest('/accessories/', {
      method: 'POST',
      headers: {},
      body: formData,
    });
  },

  updateAccessory: async (id, accessoryData) => {
    const formData = new FormData();

    Object.keys(accessoryData).forEach(key => {
      if (accessoryData[key] !== null && accessoryData[key] !== undefined) {
        if (key === 'image' && accessoryData[key] instanceof File) {
          formData.append(key, accessoryData[key]);
        } else if (Array.isArray(accessoryData[key])) {
          // Handle arrays (like vehicles)
          accessoryData[key].forEach(item => {
            formData.append(key, item);
          });
        } else {
          formData.append(key, accessoryData[key]);
        }
      }
    });

    return await apiRequest(`/accessories/${id}/`, {
      method: 'PUT',
      headers: {},
      body: formData,
    });
  },

  deleteAccessory: async (id) => {
    return await apiRequest(`/accessories/${id}/`, {
      method: 'DELETE',
    });
  },

  updateStock: async (id, stockChange, reason = '') => {
    return await apiRequest(`/accessories/${id}/update_stock/`, {
      method: 'PATCH',
      body: JSON.stringify({ stock_change: stockChange, reason }),
    });
  },

  getStockAlerts: async () => {
    return await apiRequest('/accessories/alerts/');
  },

  resolveStockAlert: async (alertId) => {
    return await apiRequest(`/accessories/alerts/${alertId}/resolve/`, {
      method: 'PATCH',
    });
  },
};

// Messages API
export const messagesAPI = {
  getMessages: async (params = {}) => {
    const queryString = new URLSearchParams(params).toString();
    const endpoint = queryString ? `/messages/?${queryString}` : '/messages/';
    return await apiRequest(endpoint);
  },

  getInbox: async () => {
    return await apiRequest('/messages/inbox/');
  },

  getSent: async () => {
    return await apiRequest('/messages/sent/');
  },

  sendMessage: async (messageData) => {
    return await apiRequest('/messages/', {
      method: 'POST',
      body: JSON.stringify(messageData),
    });
  },

  markAsRead: async (messageId) => {
    return await apiRequest(`/messages/${messageId}/mark_read/`, {
      method: 'PATCH',
    });
  },

  deleteMessage: async (messageId) => {
    return await apiRequest(`/messages/${messageId}/`, {
      method: 'DELETE',
    });
  },
};

// Notifications API
export const notificationsAPI = {
  getNotifications: async (params = {}) => {
    const queryString = new URLSearchParams(params).toString();
    const endpoint = queryString ? `/notifications/?${queryString}` : '/notifications/';
    return await apiRequest(endpoint);
  },

  getUnread: async () => {
    return await apiRequest('/notifications/unread/');
  },

  markAsRead: async (notificationId) => {
    return await apiRequest(`/notifications/${notificationId}/mark_read/`, {
      method: 'PATCH',
    });
  },

  createNotification: async (notificationData) => {
    return await apiRequest('/notifications/', {
      method: 'POST',
      body: JSON.stringify(notificationData),
    });
  },

  broadcastNotification: async (notificationData) => {
    return await apiRequest('/notifications/broadcast/', {
      method: 'POST',
      body: JSON.stringify(notificationData),
    });
  },

  deleteNotification: async (notificationId) => {
    return await apiRequest(`/notifications/${notificationId}/`, {
      method: 'DELETE',
    });
  },
};

// Activities API
export const activitiesAPI = {
  getActivities: async (params = {}) => {
    const queryString = new URLSearchParams(params).toString();
    const endpoint = queryString ? `/activities/?${queryString}` : '/activities/';
    return await apiRequest(endpoint);
  },

  getRecentActivities: async () => {
    return await apiRequest('/activities/recent/');
  },

  createActivity: async (activityData) => {
    return await apiRequest('/activities/create/', {
      method: 'POST',
      body: JSON.stringify(activityData),
    });
  },
};

// Breakdowns API
export const breakdownsAPI = {
  getBreakdowns: async (params = {}) => {
    const queryString = new URLSearchParams(params).toString();
    const endpoint = queryString ? `/breakdowns/?${queryString}` : '/breakdowns/';
    return await apiRequest(endpoint);
  },

  getBreakdown: async (id) => {
    return await apiRequest(`/breakdowns/${id}/`);
  },

  createBreakdown: async (breakdownData) => {
    if (breakdownData instanceof FormData) {
      return await apiRequest('/breakdowns/create/', {
        method: 'POST',
        body: breakdownData,
      });
    }
    
    const formData = new FormData();
    Object.keys(breakdownData).forEach(key => {
      if (breakdownData[key] !== null && breakdownData[key] !== undefined) {
        // Handle multiple images
        if (key === 'images' && Array.isArray(breakdownData[key])) {
          breakdownData[key].forEach(img => {
            if (img instanceof File) {
              formData.append('images', img);
            }
          });
        } else if (key === 'image' && breakdownData[key] instanceof File) {
          // Keep backwards compatibility
          formData.append('images', breakdownData[key]);
        } else {
          formData.append(key, breakdownData[key]);
        }
      }
    });

    return await apiRequest('/breakdowns/create/', {
      method: 'POST',
      body: formData,
    });
  },

  updateBreakdown: async (id, breakdownData) => {
    return await apiRequest(`/breakdowns/${id}/`, {
      method: 'PUT',
      body: JSON.stringify(breakdownData),
    });
  },

  deleteBreakdown: async (id) => {
    return await apiRequest(`/breakdowns/${id}/`, {
      method: 'DELETE',
    });
  },
};

// Reports/Expenses API
export const reportsAPI = {
  getExpensesReport: async (params = {}) => {
    const queryString = new URLSearchParams(params).toString();
    const endpoint = queryString ? `/reports/expenses/?${queryString}` : '/reports/expenses/';
    return await apiRequest(endpoint);
  },
};

// Fuel Usage API
export const fuelAPI = {
  getFuelUsage: async (params = {}) => {
    const queryString = new URLSearchParams(params).toString();
    const endpoint = queryString ? `/fuel-usage/?${queryString}` : '/fuel-usage/';
    return await apiRequest(endpoint);
  },
  getFuelReport: async (params = {}) => {
    const queryString = new URLSearchParams(params).toString();
    const endpoint = queryString ? `/fuel-usage/report/?${queryString}` : '/fuel-usage/report/';
    return await apiRequest(endpoint);
  },
  addFuelUsage: async (data) => {
    return await apiRequest('/fuel-usage/', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  },
  exportFuelUsage: async (params = {}) => {
    const queryString = new URLSearchParams(params).toString();
    const endpoint = queryString ? `/fuel/export/?${queryString}` : '/fuel/export/';
    
    const token = localStorage.getItem('access_token');
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });
    
    if (!response.ok) {
      throw new Error('Failed to export fuel data');
    }
    
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `fuel_usage_report_${new Date().toISOString().split('T')[0]}.xlsx`;
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
  },
  getDrivers: async () => {
    return await apiRequest('/drivers/');
  },
};

// Repair Records API
export const repairAPI = {
  getRepairRecords: async (params = {}) => {
    const queryString = new URLSearchParams(params).toString();
    const endpoint = queryString ? `/repair-records/?${queryString}` : '/repair-records/';
    return await apiRequest(endpoint);
  },
  verifyRepairRecord: async (id, data) => {
    return await apiRequest(`/repair-records/${id}/verify/`, {
      method: 'POST',
      body: JSON.stringify(data),
    });
  },
};

// Alerts API
export const alertsAPI = {
  getBreakdownAlerts: async () => {
    return await apiRequest('/alerts/breakdowns/check/');
  },
  sendBreakdownAlertEmail: async () => {
    return await apiRequest('/alerts/breakdowns/', {
      method: 'GET',
    });
  },
};

// Utility functions
export const isAuthenticated = () => {
  return !!localStorage.getItem('access_token');
};

export const getCurrentUser = () => {
  const user = localStorage.getItem('user');
  return user ? JSON.parse(user) : null;
};

export const hasRole = (role) => {
  const user = getCurrentUser();
  return user && user.role === role;
};

export const isAdmin = () => hasRole('admin');
export const isManager = () => hasRole('manager');
export const isDriver = () => hasRole('driver');
export const isMechanic = () => hasRole('mechanic');