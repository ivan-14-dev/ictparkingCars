import React, { useState, useEffect } from 'react';
import { accessoriesAPI, vehiclesAPI } from '../service/api';
import AddAccessoryModal from '../component/AddAccessoryModal';

const AccessoriesPage = ({ onBack, showHeader = true }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [accessories, setAccessories] = useState([]);
  const [stockAlerts, setStockAlerts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showStockModal, setShowStockModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [selectedAccessory, setSelectedAccessory] = useState(null);
  const [isEditMode, setIsEditMode] = useState(false);
  const [stockChange, setStockChange] = useState(0);
  const [stockReason, setStockReason] = useState('');
  const [isAddAccessoryModalOpen, setIsAddAccessoryModalOpen] = useState(false);
  const [editForm, setEditForm] = useState({ name: '', description: '', price: '', vehicles: [] });
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    fetchAccessoriesData();
    fetchVehicles();
  }, []);

  const fetchVehicles = async () => {
    try {
      const response = await vehiclesAPI.getVehicles();
      setVehicles(response.results || response);
    } catch (error) {
      console.error('Error fetching vehicles:', error);
    }
  };

  const fetchAccessoriesData = async () => {
    try {
      setLoading(true);
      setError(null);

      // Fetch accessories first
      const accessoriesRes = await accessoriesAPI.getAccessories();
      setAccessories(accessoriesRes?.results || []);

      // Try to fetch stock alerts (optional)
      try {
        const alertsRes = await accessoriesAPI.getStockAlerts();
        setStockAlerts(alertsRes?.results || []);
      } catch (alertsError) {
        console.warn('Stock alerts not available:', alertsError);
        setStockAlerts([]); // Set empty array if alerts fail
      }

    } catch (err) {
      console.error('Error fetching accessories data:', err);
      setError('Failed to load accessories data');
    } finally {
      setLoading(false);
    }
  };

  const handleStockUpdate = async (accessoryId, change, reason) => {
    try {
      if (change === 0) {
        alert('Please enter a stock change amount');
        return;
      }
      const response = await accessoriesAPI.updateStock(accessoryId, change, reason);
      console.log('Stock update response:', response);
      // Refresh data
      await fetchAccessoriesData();
      setShowStockModal(false);
      setSelectedAccessory(null);
      setStockChange(0);
      setStockReason('');
      alert('Stock updated successfully');
    } catch (error) {
      console.error('Error updating stock:', error);
      alert('Failed to update stock: ' + (error.message || 'Unknown error'));
    }
  };

  const handleEditAccessory = (accessory) => {
    setSelectedAccessory(accessory);
    // Get vehicle IDs from the accessory
    const vehicleIds = accessory.vehicles ? accessory.vehicles.map(v => v.id) : [];
    setEditForm({
      name: accessory.name,
      description: accessory.description || '',
      price: accessory.price,
      vehicles: vehicleIds
    });
    setIsEditMode(false);
    setShowDetailsModal(true);
  };

  const handleSaveEdit = async () => {
    try {
      if (!editForm.name || editForm.price === '') {
        alert('Please fill in all required fields');
        return;
      }
      await accessoriesAPI.updateAccessory(selectedAccessory.id, editForm);
      // Refresh data
      await fetchAccessoriesData();
      setIsEditMode(false);
      // Keep the modal open but show view mode
      alert('Accessory updated successfully');
    } catch (error) {
      console.error('Error updating accessory:', error);
      alert('Failed to update accessory: ' + (error.message || 'Unknown error'));
    }
  };

  const handleResolveAlert = async (alertId) => {
    try {
      await accessoriesAPI.resolveStockAlert(alertId);
      // Refresh alerts - temporarily disabled due to endpoint issues
      // try {
      //   const alerts = await accessoriesAPI.getStockAlerts();
      //   setStockAlerts(alerts?.results || alerts || []);
      // } catch (alertsError) {
      //   console.warn('Could not refresh stock alerts:', alertsError);
      //   // Remove the resolved alert from local state
      //   setStockAlerts(prev => prev.filter(alert => alert.id !== alertId));
      // }
    } catch (error) {
      console.error('Error resolving alert:', error);
    }
  };

  const handleAccessoryAdded = () => {
    fetchAccessoriesData();
    setIsAddAccessoryModalOpen(false);
  };

  // Use all accessories (no filtering)
  const filteredAccessories = accessories;

  // Get status for accessories based on stock levels
  const getAccessoryStatus = (accessory) => {
    if (accessory.stock_level <= 0) return 'out-of-stock';
    if (accessory.stock_level <= accessory.min_stock_level) return 'low';
    return 'normal';
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'critical': return 'bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300';
      case 'low': return 'bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300';
      case 'out-of-stock': return 'bg-gray-100 text-gray-700 dark:bg-gray-900/40 dark:text-gray-300';
      default: return 'bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300';
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'critical': return 'Critical';
      case 'low': return 'Low Stock';
      case 'out-of-stock': return 'Out of Stock';
      default: return 'In Stock';
    }
  };

  return (
    <div className="bg-background-light dark:bg-background-dark text-[#0d141b] dark:text-slate-200 h-full">
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
            </div>
          </div>
        </header>
      )}

      {!showHeader && (
        <div className="px-4 md:px-10 py-4 bg-white dark:bg-background-dark border-b border-[#e7edf3] dark:border-slate-800">
          <button onClick={onBack} className="flex items-center gap-2 text-[#4c739a] hover:text-primary transition-colors">
            <span className="material-symbols-outlined">arrow_back</span>
            Back to Dashboard
          </button>
        </div>
      )}

      <main className="max-w-[1200px] mx-auto py-8 px-4 md:px-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-8">
          <div className="flex flex-col gap-1">
            <h1 className="text-slate-900 dark:text-white text-4xl font-black leading-tight tracking-[-0.033em] flex items-center gap-3">
              <span className="material-symbols-outlined text-5xl text-primary">settings</span>
              Parts & Accessories
            </h1>
            <p className="text-slate-500 dark:text-slate-400 text-base font-normal">Manage and monitor inventory levels for fleet components. Highlighting low-stock items for immediate restocking.</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700">
              <span className="material-symbols-outlined text-[18px]">inventory</span>
              <span className="font-bold text-slate-900 dark:text-white">{accessories.length}</span> Total Parts
            </div>
            <button
              onClick={() => setIsAddAccessoryModalOpen(true)}
              className="flex items-center gap-2 px-4 py-2 bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition-all"
            >
              <span className="material-symbols-outlined">add</span>
              Add Accessory
            </button>
          </div>
        </div>

        {/* Export Button
        <div className="flex justify-end mb-6">
          <button className="flex items-center gap-2 px-4 py-2 bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition-all">
            <span className="material-symbols-outlined">download</span>
            Export CSV
          </button>
        </div> */}

        {/* Stock Alerts */}
        {stockAlerts.length > 0 && (
          <div className="mb-6">
            <h3 className="text-lg font-bold text-[#0d141b] dark:text-white mb-3">Stock Alerts</h3>
            <div className="space-y-3">
              {stockAlerts.map((alert) => (
                <div key={alert.id} className="flex items-center justify-between p-4 bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-lg">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-orange-600">warning</span>
                    <div>\n                      <p className="font-semibold text-[#0d141b] dark:text-white">{alert.accessory_name}</p>\n                      <p className="text-sm text-slate-600 dark:text-slate-400">\n                        Current stock: {alert.current_stock} units\n                      </p>\n                    </div>
                  </div>
                  <button
                    onClick={() => handleResolveAlert(alert.id)}
                    className="px-3 py-1 bg-orange-500 text-white text-sm rounded hover:bg-orange-600 transition-colors"
                  >
                    Resolve
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Accessories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredAccessories.map((item) => {
            const status = getAccessoryStatus(item);
            return (
              <div key={item.id} className="group bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-all overflow-hidden cursor-pointer" onClick={() => { setSelectedAccessory(item); setShowDetailsModal(true); }}>
                {status === 'low' && (
                  <div className="bg-orange-500 text-white text-xs font-bold px-3 py-1 flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm">warning</span>
                    Low Stock
                  </div>
                )}

                <div className="h-40 bg-cover bg-center bg-[#f0f4f8]" style={{backgroundImage: `url('${item.image || '/placeholder-image.jpg'}')`}}></div>

                {status === 'out-of-stock' && (
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <span className="text-white font-bold text-lg">Out of Stock</span>
                  </div>
                )}

                <div className="p-4">
                  <h4 className="font-bold text-[#0d141b] dark:text-white mb-3 text-sm leading-tight">{item.name}</h4>
                  <div className="flex items-center justify-between mb-3">
                    <span className={`text-xs font-bold px-2 py-0.5 rounded ${getStatusColor(status)}`}>
                      {getStatusText(status)}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-xs text-slate-500">inventory</span>
                      <div>
                        <p className="text-xs text-slate-500">Stock Level</p>
                        <p className="text-sm font-bold text-[#0d141b] dark:text-white">{item.stock_level} Units</p>
                      </div>
                    </div>
                    <div className="text-right flex items-center gap-1">
                      <span className="material-symbols-outlined text-xs text-slate-500">attach_money</span>
                      <div>
                        <p className="text-xs text-slate-500">Price</p>
                        <p className="text-sm font-bold text-[#0d141b] dark:text-white">{parseFloat(item.price).toFixed(2)} FCFA</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="px-4 pb-4">
                  <button
                    onClick={() => handleEditAccessory(item)}
                    className="w-full flex items-center justify-center gap-2 h-10 rounded-lg bg-primary text-white text-sm font-semibold hover:bg-primary/90 transition-colors"
                  >
                    <span className="material-symbols-outlined text-[18px]">visibility</span>
                    View Details
                  </button>
                </div>
              </div>
            );
          })}
          {/* Empty cards to fill the grid */}
          {Array.from({ length: (4 - (filteredAccessories.length % 4)) % 4 }, (_, index) => (
            <div key={`empty-${index}`} className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex items-center justify-center p-6">
              <div className="text-center text-slate-400 dark:text-slate-500">
                <span className="material-symbols-outlined text-3xl mb-2 block">inventory_2</span>
                <p className="text-sm">No more parts</p>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="mt-12 flex flex-col items-center gap-4">
          <button className="px-8 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 font-bold hover:bg-slate-50 dark:hover:bg-slate-800 transition-all flex items-center gap-2">
            <span>Load More Parts</span>
            <span className="material-symbols-outlined">expand_more</span>
          </button>
          <p className="text-slate-500 dark:text-slate-400 text-xs">Showing {filteredAccessories.length} of {accessories.length} parts</p>
        </div>

        {/* Stock Update Modal */}
        {showStockModal && selectedAccessory && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[9999]">
            <div className="bg-white dark:bg-slate-900 rounded-xl p-6 w-full max-w-md mx-4">
              <h3 className="text-lg font-bold text-[#0d141b] dark:text-white mb-4">
                Update Stock: {selectedAccessory.name}
              </h3>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Current Stock Level
                  </label>
                  <p className="text-lg font-bold text-[#0d141b] dark:text-white">
                    {selectedAccessory.stock_level} units
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Stock Change
                  </label>
                  <input
                    type="number"
                    value={stockChange}
                    onChange={(e) => setStockChange(parseInt(e.target.value) || 0)}
                    className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-[#0d141b] dark:text-white"
                    placeholder="Enter positive number to add, negative to subtract"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Reason
                  </label>
                  <input
                    type="text"
                    value={stockReason}
                    onChange={(e) => setStockReason(e.target.value)}
                    className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-[#0d141b] dark:text-white"
                    placeholder="e.g., Restock, Usage, etc."
                  />
                </div>
              </div>

              <div className="flex gap-3 mt-6">
                <button
                  onClick={() => setShowStockModal(false)}
                  className="flex-1 px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800"
                >
                  Cancel
                </button>
                <button
                  onClick={() => handleStockUpdate(selectedAccessory.id, stockChange, stockReason)}
                  className="flex-1 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90"
                >
                  Update Stock
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Edit Accessory Modal */}
        {showEditModal && selectedAccessory && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white dark:bg-slate-900 rounded-xl p-6 w-full max-w-md mx-4">
              <h3 className="text-lg font-bold text-[#0d141b] dark:text-white mb-4">
                Edit Accessory: {selectedAccessory.name}
              </h3>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    value={editForm.name}
                    onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-[#0d141b] dark:text-white"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Description
                  </label>
                  <textarea
                    value={editForm.description}
                    onChange={(e) => setEditForm({ ...editForm, description: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-[#0d141b] dark:text-white"
                    rows="3"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Price
                  </label>
                  <input
                    type="number"
                    step="0.01"
                    value={editForm.price}
                    onChange={(e) => setEditForm({ ...editForm, price: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-[#0d141b] dark:text-white"
                  />
                </div>
              </div>

              <div className="flex gap-3 mt-6">
                <button
                  onClick={() => setShowEditModal(false)}
                  className="flex-1 px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSaveEdit}
                  className="flex-1 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90"
                >
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Accessory Details Modal */}
        {showDetailsModal && selectedAccessory && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[9999] p-4">
            <div className="bg-white dark:bg-slate-900 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              {/* Header with image */}
              <div className="relative">
                <img
                  src={selectedAccessory.image || '/placeholder-image.jpg'}
                  alt={selectedAccessory.name}
                  className="w-full h-64 object-cover"
                />
                <button
                  onClick={() => setShowDetailsModal(false)}
                  className="absolute top-4 right-4 bg-white dark:bg-slate-900 rounded-full p-2 shadow-lg hover:bg-slate-100 dark:hover:bg-slate-800"
                >
                  <span className="material-symbols-outlined">close</span>
                </button>
              </div>

              {/* Details */}
              <div className="p-6 space-y-6">
                {isEditMode ? (
                  <>
                    <h2 className="text-2xl font-bold text-[#0d141b] dark:text-white mb-4">
                      Edit Accessory
                    </h2>
                    
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                          Name
                        </label>
                        <input
                          type="text"
                          value={editForm.name}
                          onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
                          className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-[#0d141b] dark:text-white"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                          Description
                        </label>
                        <textarea
                          value={editForm.description}
                          onChange={(e) => setEditForm({ ...editForm, description: e.target.value })}
                          className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-[#0d141b] dark:text-white"
                          rows="3"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                          Price
                        </label>
                        <input
                          type="number"
                          step="0.01"
                          value={editForm.price}
                          onChange={(e) => setEditForm({ ...editForm, price: e.target.value })}
                          className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-[#0d141b] dark:text-white"
                        />
                      </div>
                    </div>

                    {/* Compatible Vehicles */}
                    <div className="mb-4">
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                        Compatible Vehicles
                      </label>
                      <select
                        multiple
                        value={editForm.vehicles}
                        onChange={(e) => setEditForm({ ...editForm, vehicles: Array.from(e.target.selectedOptions, option => parseInt(option.value)) })}
                        className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-[#0d141b] dark:text-white"
                        style={{ height: '120px' }}
                      >
                        {vehicles.map(vehicle => (
                          <option key={vehicle.id} value={vehicle.id}>
                            {vehicle.make} {vehicle.model} ({vehicle.license_plate})
                          </option>
                        ))}
                      </select>
                      <p className="text-xs text-slate-500 mt-1">Hold Ctrl/Cmd to select multiple vehicles</p>
                    </div>

                    {/* Edit Mode Buttons */}
                    <div className="flex gap-3 pt-4 border-t border-slate-200 dark:border-slate-700">
                      <button
                        onClick={() => setIsEditMode(false)}
                        className="flex-1 flex items-center justify-center gap-2 h-10 rounded-lg border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 font-semibold hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                      >
                        <span className="material-symbols-outlined text-[18px]">cancel</span>
                        Cancel
                      </button>
                      <button
                        onClick={handleSaveEdit}
                        className="flex-1 flex items-center justify-center gap-2 h-10 rounded-lg bg-primary text-white font-semibold hover:bg-primary/90 transition-colors"
                      >
                        <span className="material-symbols-outlined text-[18px]">check</span>
                        Update
                      </button>
                    </div>
                  </>
                ) : (
                  <>
                    <div>
                      <h2 className="text-2xl font-bold text-[#0d141b] dark:text-white mb-2">
                        {selectedAccessory.name}
                      </h2>
                      <span className={`text-xs font-bold px-3 py-1 rounded inline-block ${getStatusColor(getAccessoryStatus(selectedAccessory))}`}>
                        {getStatusText(getAccessoryStatus(selectedAccessory))}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Description</h3>
                      <p className="text-slate-600 dark:text-slate-400 min-h-[2rem]">
                        {selectedAccessory.description || 'No description provided'}
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="border-l-4 border-blue-500 pl-4">
                        <p className="text-xs text-slate-500 dark:text-slate-400">Stock Level</p>
                        <p className="text-2xl font-bold text-[#0d141b] dark:text-white">
                          {selectedAccessory.stock_level}
                        </p>
                        <p className="text-xs text-slate-500 dark:text-slate-400">Units</p>
                      </div>

                      <div className="border-l-4 border-green-500 pl-4">
                        <p className="text-xs text-slate-500 dark:text-slate-400">Price</p>
                        <p className="text-2xl font-bold text-[#0d141b] dark:text-white">
                          {parseFloat(selectedAccessory.price).toFixed(2)}
                        </p>
                        <p className="text-xs text-slate-500 dark:text-slate-400">FCFA</p>
                      </div>
                    </div>

                    {selectedAccessory.created_at && (
                      <div className="text-xs text-slate-500 dark:text-slate-400 pt-4 border-t border-slate-200 dark:border-slate-700">
                        <p>Added on: {new Date(selectedAccessory.created_at).toLocaleDateString()}</p>
                        {selectedAccessory.updated_at && (
                          <p>Last updated: {new Date(selectedAccessory.updated_at).toLocaleDateString()}</p>
                        )}
                      </div>
                    )}

                    {/* View Mode Buttons */}
                    <div className="flex gap-3 pt-4 border-t border-slate-200 dark:border-slate-700">
                      <button
                        onClick={() => setIsEditMode(true)}
                        className="flex-1 flex items-center justify-center gap-2 h-10 rounded-lg bg-blue-500 text-white font-semibold hover:bg-blue-600 transition-colors"
                      >
                        <span className="material-symbols-outlined text-[18px]">edit</span>
                        Edit
                      </button>
                      {getAccessoryStatus(selectedAccessory) === 'low' ? (
                        <button
                          onClick={() => {
                            setShowDetailsModal(false);
                            setShowStockModal(true);
                          }}
                          className="flex-1 flex items-center justify-center gap-2 h-10 rounded-lg bg-orange-500 text-white font-semibold hover:bg-orange-600 transition-colors"
                        >
                          <span className="material-symbols-outlined text-[18px]">shopping_cart</span>
                          Restock
                        </button>
                      ) : getAccessoryStatus(selectedAccessory) === 'out-of-stock' ? (
                        <button
                          onClick={() => {
                            setShowDetailsModal(false);
                            setShowStockModal(true);
                          }}
                          className="flex-1 flex items-center justify-center gap-2 h-10 rounded-lg bg-red-500 text-white font-semibold hover:bg-red-600 transition-colors"
                        >
                          <span className="material-symbols-outlined text-[18px]">add_circle</span>
                          Add Stock
                        </button>
                      ) : (
                        <button
                          onClick={() => {
                            setShowDetailsModal(false);
                            setShowStockModal(true);
                          }}
                          className="flex-1 flex items-center justify-center gap-2 h-10 rounded-lg bg-slate-500 text-white font-semibold hover:bg-slate-600 transition-colors"
                        >
                          <span className="material-symbols-outlined text-[18px]">inventory_2</span>
                          Update Stock
                        </button>
                      )}
                      <button
                        onClick={() => setShowDetailsModal(false)}
                        className="flex-1 flex items-center justify-center gap-2 h-10 rounded-lg border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 font-semibold hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                      >
                        <span className="material-symbols-outlined text-[18px]">close</span>
                        Close
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Add Accessory Modal */}
        <AddAccessoryModal
          isOpen={isAddAccessoryModalOpen}
          onClose={() => setIsAddAccessoryModalOpen(false)}
          onAccessoryAdded={handleAccessoryAdded}
        />
      </main>
    </div>
  );
};

export default AccessoriesPage;