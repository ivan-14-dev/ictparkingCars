import React, { useState, useEffect } from 'react';
import { accessoriesAPI } from '../service/api';

const AccessoriesPage = ({ onBack, showHeader = true }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [accessories, setAccessories] = useState([]);
  const [stockAlerts, setStockAlerts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showStockModal, setShowStockModal] = useState(false);
  const [selectedAccessory, setSelectedAccessory] = useState(null);
  const [stockChange, setStockChange] = useState(0);
  const [stockReason, setStockReason] = useState('');

  useEffect(() => {
    fetchAccessoriesData();
  }, []);

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
      await accessoriesAPI.updateStock(accessoryId, change, reason);
      // Refresh data
      await fetchAccessoriesData();
      setShowStockModal(false);
      setSelectedAccessory(null);
      setStockChange(0);
      setStockReason('');
    } catch (error) {
      console.error('Error updating stock:', error);
      // TODO: Show error message
    }
  };

  const handleResolveAlert = async (alertId) => {
    try {
      await accessoriesAPI.resolveStockAlert(alertId);
      // Refresh alerts
      try {
        const alerts = await accessoriesAPI.getStockAlerts();
        setStockAlerts(alerts?.results || []);
      } catch (alertsError) {
        console.warn('Could not refresh stock alerts:', alertsError);
        // Remove the resolved alert from local state
        setStockAlerts(prev => prev.filter(alert => alert.id !== alertId));
      }
    } catch (error) {
      console.error('Error resolving alert:', error);
    }
  };

  // Filter accessories by category
  const filteredAccessories = selectedCategory === 'all'
    ? accessories
    : accessories.filter(accessory => accessory.category === selectedCategory);

  // Get unique categories
  const categories = ['all', ...new Set(accessories.map(a => a.category))];

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
          <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700">
            <span className="material-symbols-outlined text-[18px]">inventory</span>
            <span className="font-bold text-slate-900 dark:text-white">{accessories.length}</span> Total Parts
          </div>
        </div>

        {/* Export Button */}
        <div className="flex justify-end mb-6">
          <button className="flex items-center gap-2 px-4 py-2 bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition-all">
            <span className="material-symbols-outlined">download</span>
            Export CSV
          </button>
        </div>

        {/* Stock Alerts */}
        {stockAlerts.length > 0 && (
          <div className="mb-6">
            <h3 className="text-lg font-bold text-[#0d141b] dark:text-white mb-3">Stock Alerts</h3>
            <div className="space-y-3">
              {stockAlerts.map((alert) => (
                <div key={alert.id} className="flex items-center justify-between p-4 bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-lg">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-orange-600">warning</span>
                    <div>
                      <p className="font-semibold text-[#0d141b] dark:text-white">{alert.accessory_name}</p>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        Current stock: {alert.current_stock} | Minimum required: {alert.min_stock_level}
                      </p>
                    </div>
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

        {/* Category Filters */}
        <div className="mb-6">
          <div className="flex gap-2 flex-wrap mb-4">
            {categories.map((category) => {
              const getCategoryIcon = (cat) => {
                switch (cat) {
                  case 'All Categories': return 'inventory';
                  case 'Tires': return 'tire_repair';
                  case 'Batteries': return 'battery_full';
                  case 'Fluids': return 'oil_barrel';
                  case 'Brakes': return 'settings';
                  case 'Lighting': return 'lightbulb';
                  case 'Belts': return 'timeline';
                  case 'Filters': return 'filter_alt';
                  case 'Accessories': return 'build';
                  default: return 'category';
                }
              };

              return (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category === 'All Categories' ? 'all' : category.toLowerCase())}
                  className={`flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full px-4 text-sm font-semibold transition-all ${
                    (selectedCategory === 'all' && category === 'All Categories') ||
                    selectedCategory === category.toLowerCase()
                      ? 'bg-primary text-white'
                      : 'bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-700'
                  }`}
                >
                  <span className="material-symbols-outlined text-sm">{getCategoryIcon(category)}</span>
                  {category}
                </button>
              );
            })}
          </div>

          <div className="flex gap-2 justify-end">
            <button className="flex h-9 items-center justify-center gap-x-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700">
              <span className="material-symbols-outlined text-[20px]">filter_list</span>
              <span className="text-sm font-medium">Filters</span>
            </button>
            <button className="flex h-9 items-center justify-center gap-x-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700">
              <span className="material-symbols-outlined text-[20px]">sort</span>
              <span className="text-sm font-medium">Sort</span>
            </button>
          </div>
        </div>

        {/* Accessories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredAccessories.map((item) => {
            const status = getAccessoryStatus(item);
            return (
              <div key={item.id} className="group bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-all overflow-hidden">
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
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex items-center justify-center w-6 h-6 bg-primary/10 rounded">
                      <span className="material-symbols-outlined text-xs text-primary">
                        {item.category === 'Tires' ? 'tire_repair' :
                         item.category === 'Batteries' ? 'battery_full' :
                         item.category === 'Fluids' ? 'oil_barrel' :
                         item.category === 'Brakes' ? 'settings' :
                         item.category === 'Lighting' ? 'lightbulb' :
                         item.category === 'Belts' ? 'timeline' :
                         item.category === 'Filters' ? 'filter_alt' :
                         'build'}
                      </span>
                    </div>
                    <p className="text-xs font-bold text-primary">{item.category.toUpperCase()}</p>
                  </div>
                  <h4 className="font-bold text-[#0d141b] dark:text-white mb-2 text-sm leading-tight">{item.name}</h4>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs text-[#4c739a]">SKU: {item.sku}</span>
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
                        <p className="text-sm font-bold text-[#0d141b] dark:text-white">${parseFloat(item.price).toFixed(2)}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="px-4 pb-4">
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      onClick={() => setSelectedAccessory(item)}
                      className="flex items-center justify-center gap-2 h-9 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-sm font-semibold hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                    >
                      <span className="material-symbols-outlined text-[18px]">edit</span>
                      Edit
                    </button>
                    {status === 'low' ? (
                      <button
                        onClick={() => {
                          setSelectedAccessory(item);
                          setShowStockModal(true);
                        }}
                        className="flex items-center justify-center gap-2 h-9 rounded-lg bg-orange-500 text-white text-sm font-semibold hover:bg-orange-600 transition-colors"
                      >
                        <span className="material-symbols-outlined text-[18px]">shopping_cart</span>
                        Restock
                      </button>
                    ) : status === 'out-of-stock' ? (
                      <button
                        onClick={() => {
                          setSelectedAccessory(item);
                          setShowStockModal(true);
                        }}
                        className="flex items-center justify-center gap-2 h-9 rounded-lg bg-blue-500 text-white text-sm font-semibold hover:bg-blue-600 transition-colors"
                      >
                        <span className="material-symbols-outlined text-[18px]">local_shipping</span>
                        Order
                      </button>
                    ) : (
                      <button
                        onClick={() => {
                          setSelectedAccessory(item);
                          setShowStockModal(true);
                        }}
                        className="flex items-center justify-center gap-2 h-9 rounded-lg bg-primary text-white text-sm font-semibold hover:bg-primary/90 transition-colors"
                      >
                        <span className="material-symbols-outlined text-[18px]">add</span>
                        Add
                      </button>
                    )}
                  </div>
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
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
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
      </main>
    </div>
  );
};

export default AccessoriesPage;