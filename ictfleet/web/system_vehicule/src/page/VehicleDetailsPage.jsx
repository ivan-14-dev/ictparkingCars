import React from 'react';

const VehicleDetailsPage = ({ vehicle, onBack, showHeader = true }) => {
  if (!vehicle) return null;

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
          <div className="absolute top-6 left-6">
            <span className="px-4 py-1.5 bg-green-500 text-white text-sm font-bold rounded-full flex items-center gap-2 shadow-lg">
              <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
              {vehicle.status || 'In Service'}
            </span>
          </div>
          <div className="absolute bottom-6 left-8 text-white">
            <h1 className="text-4xl font-extrabold tracking-tight mb-1">{vehicle.year} {vehicle.brandModel}</h1>
            <p className="text-lg text-slate-200 font-medium">{vehicle.licensePlate} • VIN: {vehicle.vin}</p>
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
              <p className="text-2xl font-bold text-[#0d141b] dark:text-white">{vehicle.licensePlate}</p>
            </div>
          </div>
          <div className="flex gap-3 w-full md:w-auto">
            <button className="flex-1 md:flex-none flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg border-2 border-[#e7edf3] dark:border-slate-700 bg-white dark:bg-slate-800 text-[#0d141b] dark:text-white font-bold hover:bg-slate-50 dark:hover:bg-slate-700 transition-all">
              <span className="material-symbols-outlined text-xl">edit</span>
              Edit Vehicle
            </button>
            <button className="flex-1 md:flex-none flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg bg-primary text-white font-bold hover:opacity-90 shadow-md transition-all">
              <span className="material-symbols-outlined text-xl">ios_share</span>
              Export History
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
              <h3 className="font-bold text-lg">Powertrain</h3>
            </div>
            <div className="space-y-4">
              <div className="flex flex-col gap-1 border-b border-slate-100 dark:border-slate-800 pb-3">
                <p className="text-[#4c739a] text-xs font-bold uppercase tracking-widest">Engine</p>
                <p className="text-[#0d141b] dark:text-slate-200 font-medium">{vehicle.fuelType || 'Gasoline'}</p>
              </div>
              <div className="flex flex-col gap-1 border-b border-slate-100 dark:border-slate-800 pb-3">
                <p className="text-[#4c739a] text-xs font-bold uppercase tracking-widest">Transmission</p>
                <p className="text-[#0d141b] dark:text-slate-200 font-medium">Automatic</p>
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-[#4c739a] text-xs font-bold uppercase tracking-widest">Fuel Type</p>
                <p className="text-[#0d141b] dark:text-slate-200 font-medium">{vehicle.fuelType || 'Gasoline'}</p>
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
                <p className="text-[#4c739a] text-xs font-bold uppercase tracking-widest">Current Odometer</p>
                <p className="text-[#0d141b] dark:text-slate-200 font-medium text-xl">{vehicle.odometer || 'N/A'} miles</p>
              </div>
              <div className="flex flex-col gap-1 border-b border-slate-100 dark:border-slate-800 pb-3">
                <p className="text-[#4c739a] text-xs font-bold uppercase tracking-widest">Avg MPG</p>
                <p className="text-[#0d141b] dark:text-slate-200 font-medium">{vehicle.fuelEfficiency || 'N/A'}</p>
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-[#4c739a] text-xs font-bold uppercase tracking-widest">Last Movement</p>
                <p className="text-[#0d141b] dark:text-slate-200 font-medium">Today, 09:14 AM</p>
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-[#e7edf3] dark:border-slate-800 shadow-sm">
            <div className="flex items-center gap-3 mb-4 text-primary">
              <span className="material-symbols-outlined">verified</span>
              <h3 className="font-bold text-lg">Compliance</h3>
            </div>
            <div className="space-y-4">
              <div className="flex flex-col gap-1 border-b border-slate-100 dark:border-slate-800 pb-3">
                <p className="text-[#4c739a] text-xs font-bold uppercase tracking-widest">Next Inspection</p>
                <p className="text-orange-600 font-bold">Jan 12, 2024 (Due in 32 days)</p>
              </div>
              <div className="flex flex-col gap-1 border-b border-slate-100 dark:border-slate-800 pb-3">
                <p className="text-[#4c739a] text-xs font-bold uppercase tracking-widest">Registration Expiry</p>
                <p className="text-[#0d141b] dark:text-slate-200 font-medium">May 30, 2024</p>
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-[#4c739a] text-xs font-bold uppercase tracking-widest">Insurance Policy</p>
                <p className="text-[#0d141b] dark:text-slate-200 font-medium">StateFarm-FLT-99812</p>
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
        {/* Linked Accessories Grid */}
        <div className="mt-12 mb-6">
          <h2 className="text-2xl font-bold text-[#0d141b] dark:text-white flex items-center gap-3">
            <span className="material-symbols-outlined text-3xl text-primary">extension</span>
            Compatible Stock Parts
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pb-12">
          {/* Accessory Card 1 */}
          <div className="group bg-white dark:bg-slate-900 rounded-xl border border-[#e7edf3] dark:border-slate-800 overflow-hidden shadow-sm hover:shadow-md transition-all">
            <div className="h-40 bg-cover bg-center bg-[#f0f4f8]" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAmAq0er0PWDSVyJS_oMq1NuQkfZYR1B2WKW1fV-C0uXbTl6X0S5gh1qXhRco6eaXgG67TCWNklpwU40gYJ1AVNFGz5Iej8Vi3DnaYc51txzdzsPJURj3rXX80KiT5em1u3rLnMTzw_G2SQnDbvJOdc2apfgGuFmLSMkNswNRf8YAynetj14cHMKE3kI2B4b3ukNJ5NOsm0c0kD0WWjqWsV-MZq5jtoNPHj3lezpV5mG_CLRFB-E1fX7ThE_RXXnGAMIMKM1hIViRo")'}}></div>
            <div className="p-4">
              <p className="text-xs font-bold text-primary mb-1">ACCESSORY</p>
              <h4 className="font-bold text-[#0d141b] dark:text-white mb-2">All-Weather Floor Mats</h4>
              <div className="flex items-center justify-between">
                <span className="text-xs text-[#4c739a]">SKU: FLM-4421</span>
                <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded">8 in Stock</span>
              </div>
            </div>
          </div>
          {/* Accessory Card 2 */}
          <div className="group bg-white dark:bg-slate-900 rounded-xl border border-[#e7edf3] dark:border-slate-800 overflow-hidden shadow-sm hover:shadow-md transition-all">
            <div className="h-40 bg-cover bg-center bg-[#f0f4f8]" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBZzvBPNspvqMrK929gTgd0tIF2KNx3qsrHJjDDrss3SFACeJF74lq2hWuz3nuxzrdVbSe0iExPsOXvY93u2f3qLDkKb2uw35N2ksU4FOZJuh15bn6-Q0qU6NmvUOKnZIP0xanXNVRh0ArQ76MVM947V1PbQxkwG2Jv5sKanG56u4rLtRBF5fTRHFYh0qINJuJ4CLcranhlKGPf-F6Um-TEU0wUlqC9eBCDxHqiXrXZLgFs9CZTdGJskTkry2xGmsx91LMs_lIcFHk")'}}></div>
            <div className="p-4">
              <p className="text-xs font-bold text-primary mb-1">CARGO</p>
              <h4 className="font-bold text-[#0d141b] dark:text-white mb-2">Truck Bed Tool Box</h4>
              <div className="flex items-center justify-between">
                <span className="text-xs text-[#4c739a]">SKU: TBT-0091</span>
                <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded">2 in Stock</span>
              </div>
            </div>
          </div>
          {/* Accessory Card 3 */}
          <div className="group bg-white dark:bg-slate-900 rounded-xl border border-[#e7edf3] dark:border-slate-800 overflow-hidden shadow-sm hover:shadow-md transition-all">
            <div className="h-40 bg-cover bg-center bg-[#f0f4f8]" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCD3WIRiN8hHEpVEf5xIDfWe88NadgeIeNtnr2XIQtDU8bKSVvSLeMayflPZwlgcmg0TWTUHhHRAZ06q3RpVtNXwD3lGWFPFmCd3JC8QO7fXhbSS2W4hej8lVDrkdu5Bx3PtOST0uE7bqV-hot5dwwKtxCnAGCQNIcL0tl9LiwEb_6Dc0PYC-aEjTmi3f1JtE2neJoevaXfEkTcWUy2Kr1OnWcazL2R9DvmZ6k2d99uCgHVU7OjN0p7BCOthV6Bwsxn8u8hx-MIG6Y")'}}></div>
            <div className="p-4">
              <p className="text-xs font-bold text-primary mb-1">LIGHTING</p>
              <h4 className="font-bold text-[#0d141b] dark:text-white mb-2">LED Fog Light Kit</h4>
              <div className="flex items-center justify-between">
                <span className="text-xs text-[#4c739a]">SKU: LED-FOG-F1</span>
                <span className="text-xs font-bold text-orange-600 bg-orange-50 px-2 py-0.5 rounded">Low Stock</span>
              </div>
            </div>
          </div>
          {/* Accessory Card 4 */}
          <div className="group bg-white dark:bg-slate-900 rounded-xl border border-[#e7edf3] dark:border-slate-800 overflow-hidden shadow-sm hover:shadow-md transition-all">
            <div className="h-40 bg-cover bg-center bg-[#f0f4f8]" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDcGSG75AB8vfcttW7mYl3hTiuapMBqWyxVLVHE8VxmwjbljmdFdCJ4zjd2l73c1ID5abLo5fWN-yn4oNJYvu19w-QEmFXYLHlF2E6TCedylv7wdstPV1V09NZirKgdbTFC3fAK29eGMVKsTnrL69G3GXo9eM2z457eOIST2jOhUpSxkPOe5q3XpoRMKtgP5hgGhGP9owaxA214kgHfVmPoRKszMArMqL7eaAaoda0rbv9i52FSvJca9kn1uvbiERQOIYiHfYzA4ME")'}}></div>
            <div className="p-4">
              <p className="text-xs font-bold text-primary mb-1">CARGO</p>
              <h4 className="font-bold text-[#0d141b] dark:text-white mb-2">Tri-Fold Bed Cover</h4>
              <div className="flex items-center justify-between">
                <span className="text-xs text-[#4c739a]">SKU: TFC-9922</span>
                <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded">5 in Stock</span>
              </div>
            </div>
          </div>
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