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
  const config = {
    headers: {
      'Content-Type': 'application/json',
      ...getAuthHeaders(),
      ...options.headers,
    },
    ...options,
  };

  try {
    const response = await fetch(url, config);

    // Handle token refresh on 401
    if (response.status === 401) {
      const refreshToken = localStorage.getItem('refresh_token');
      if (refreshToken) {
        try {
          const refreshResponse = await fetch(`${API_BASE_URL}/auth/token/refresh/`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ refresh: refreshToken }),
          });

          if (refreshResponse.ok) {
            const refreshData = await refreshResponse.json();
            localStorage.setItem('access_token', refreshData.access);

            // Retry the original request with new token
            config.headers.Authorization = `Bearer ${refreshData.access}`;
            const retryResponse = await fetch(url, config);
            return await handleResponse(retryResponse);
          }
        } catch (refreshError) {
          console.error('Token refresh failed:', refreshError);
        }
      }

      // If refresh failed or no refresh token, logout
      localStorage.removeItem('access_token');
      localStorage.removeItem('refresh_token');
      localStorage.removeItem('user');
      window.location.reload();
      throw new Error('Authentication failed');
    }

    return await handleResponse(response);
  } catch (error) {
    console.error('API request failed:', error);
    throw error;
  }
};

// Handle API response
const handleResponse = async (response) => {
  const data = await response.json();

  if (!response.ok) {
    const error = new Error(data.detail || data.message || 'API request failed');
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

  createUser: async (userData) => {
    return await apiRequest('/users/create/', {
      method: 'POST',
      body: JSON.stringify(userData),
    });
  },

  updateUser: async (userId, userData) => {
    return await apiRequest(`/users/${userId}/`, {
      method: 'PUT',
      body: JSON.stringify(userData),
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

  createVehicle: async (vehicleData) => {
    const formData = new FormData();

    // Add all fields to FormData
    Object.keys(vehicleData).forEach(key => {
      if (vehicleData[key] !== null && vehicleData[key] !== undefined) {
        if (key === 'image' && vehicleData[key] instanceof File) {
          formData.append(key, vehicleData[key]);
        } else {
          formData.append(key, vehicleData[key]);
        }
      }
    });

    return await apiRequest('/vehicles/', {
      method: 'POST',
      headers: {}, // Let browser set content-type for FormData
      body: formData,
    });
  },

  updateVehicle: async (id, vehicleData) => {
    const formData = new FormData();

    Object.keys(vehicleData).forEach(key => {
      if (vehicleData[key] !== null && vehicleData[key] !== undefined) {
        if (key === 'image' && vehicleData[key] instanceof File) {
          formData.append(key, vehicleData[key]);
        } else {
          formData.append(key, vehicleData[key]);
        }
      }
    });

    return await apiRequest(`/vehicles/${id}/`, {
      method: 'PUT',
      headers: {},
      body: formData,
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