import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import AddAccessoryModal from '../component/AddAccessoryModal';
import BreakdownReportModal from '../component/BreakdownReportModal';
import RepairRecordModal from '../component/RepairRecordModal';
import RepairRecordsReport from '../component/RepairRecordsReport';
import UserProfileDropdown from '../component/UserProfileDropdown';
import UserProfileModal from '../component/UserProfileModal';
import AccessoriesPage from './AccessoriesPage';
import { isMechanic, vehiclesAPI, accessoriesAPI, messagesAPI, authAPI, breakdownsAPI } from '../service/api';

// Main Container
const Container = styled.div`
  height: 100vh;
  width: 80vw;
  background-color: #f8fafc;
  display: flex;
  flex-direction: column;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  overflow: hidden;

  @media (min-width: 768px) {
    flex-direction: row;
    margin-left: 300px;
  }
`;

// Sidebar
const Sidebar = styled.aside`
  width: 300px;
  background: white;
  border-right: 1px solid #e2e8f0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  overflow-y: auto;
  box-shadow: 1px 0 2px rgba(0, 0, 0, 0.05);
  padding-top: 72px;

  @media (max-width: 767px) {
    display: none;
  }
`;

// Mobile Bottom Navigation
const MobileNav = styled.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: white;
  border-top: 1px solid #e2e8f0;
  padding: 0.5rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  z-index: 1000;
  box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.05);

  @media (min-width: 768px) {
    display: none;
  }
`;

const MobileNavItem = styled.button`
  background: none;
  border: none;
  padding: 0.5rem;
  border-radius: 0.5rem;
  color: ${props => props.$active ? '#137fec' : '#64748b'};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.75rem;
  cursor: pointer;
  transition: all 0.2s ease;
  min-width: 60px;

  &:hover {
    background: #f1f5f9;
    color: #137fec;
  }

  i {
    font-size: 1.25rem;
  }
`;

const SidebarTop = styled.div`
  padding: 1.5rem 0;
`;

const LogoSection = styled.div`
  padding: 0 1.5rem 2rem;
  border-bottom: 1px solid #e2e8f0;
  margin-bottom: 1rem;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

const LogoIcon = styled.div`
  background: #137fec;
  padding: 0.5rem;
  border-radius: 0.5rem;
  color: white;
`;

const LogoText = styled.div`
  h1 {
    font-size: 1.125rem;
    font-weight: 700;
    color: #0d141b;
    margin: 0;
  }
  p {
    font-size: 0.75rem;
    color: #64748b;
    font-weight: 500;
    margin: 0;
  }
`;

const NavMenu = styled.nav`
  padding: 0 1rem;
`;

const NavItem = styled.a`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 1.25rem;
  border-radius: 8px;
  text-decoration: none;
  color: #64748b;
  font-size: 1rem;
  font-weight: 600;
  transition: all 0.2s ease;
  margin: 0.5rem 0;

  i {
    color: inherit;
    font-size: 1.5rem;
  }

  &:hover {
    background: #f1f5f9;
    color: #0d141b;
  }

  &.active {
    background: rgba(59, 130, 246, 0.1);
    color: #3b82f6;
    border-radius: 8px;
    font-weight: 700;
  }
`;

const SidebarBottom = styled.div`
  padding: 1.5rem;
  border-top: 1px solid #e2e8f0;
`;

const NewAccessoryButton = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.75rem;
  background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 0.875rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
  }

  &:active {
    transform: translateY(0);
  }
`;

// Main Content
const MainContent = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  overflow-x: hidden;
  
  padding-top: 120px;
  position: relative;

  @media (max-width: 767px) {
    height: calc(100vh - 120px - 80px);
    padding-bottom: 80px; /* Space for mobile nav */
  }
`;

// Top Navigation
const TopNav = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: white;
  border-bottom: 1px solid #e2e8f0;
  padding: 1.75rem 2.5rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  height: 150px;
  min-height: 150px;
  max-height: 150px;
  
  @media (min-width: 768px) {
    left: 300px;
  }
`;

const SearchContainer = styled.div`
  flex: 1;
  max-width: 20rem;
`;

const SearchInput = styled.div`
  position: relative;
  width: 100%;

  input {
    width: 100%;
    padding: 0.5rem 0.5rem 0.5rem 2.5rem;
    border: 1px solid #e2e8f0;
    border-radius: 0.5rem;
    background: #f8fafc;
    font-size: 0.875rem;
    color: #374151;

    &:focus {
      outline: none;
      border-color: #137fec / 0.2;
      box-shadow: 0 0 0 3px rgba(19, 127, 236, 0.1);
    }

    &::placeholder {
      color: #9ca3af;
    }
  }

  &::before {
    content: '';
    position: absolute;
    left: 0.75rem;
    top: 50%;
    transform: translateY(-50%);
    width: 1rem;
    height: 1rem;
    background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%236b7280'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'/%3E%3C/svg%3E") no-repeat center;
    background-size: contain;
  }
`;

const TopNavRight = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

const NotificationButton = styled.button`
  position: relative;
  padding: 0.5rem;
  background: none;
  border: none;
  color: #64748b;
  cursor: pointer;
  border-radius: 0.375rem;
  transition: background 0.2s ease;

  &:hover {
    background: #f1f5f9;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    width: 0.5rem;
    height: 0.5rem;
    background: #ef4444;
    border: 2px solid white;
    border-radius: 50%;
  }
`;

const SettingsButton = styled.button`
  padding: 0.5rem;
  background: none;
  border: none;
  color: #64748b;
  cursor: pointer;
  border-radius: 0.375rem;
  transition: background 0.2s ease;

  &:hover {
    background: #f1f5f9;
  }
`;

const Divider = styled.div`
  width: 1px;
  height: 2rem;
  background: #e2e8f0;
`;

const UserProfile = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  cursor: pointer;
  padding: 0.75rem 1rem;
  border-radius: 0.75rem;
  transition: all 0.2s ease;
  background: transparent;

  &:hover {
    background-color: rgba(59, 130, 246, 0.1);
    box-shadow: 0 2px 8px rgba(59, 130, 246, 0.1);
  }
`;

const UserInfo = styled.div`
  text-align: right;
  display: none;

  @media (min-width: 640px) {
    display: block;
  }

  p:first-child {
    font-size: 1rem;
    font-weight: 700;
    color: #0d141b;
    margin: 0;
    letter-spacing: -0.3px;
  }

  p:last-child {
    font-size: 0.8rem;
    color: #64748b;
    margin: 0.25rem 0 0 0;
    font-weight: 500;
  }
`;

const UserAvatar = styled.div`
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
  background: center no-repeat;
  background-size: cover;
  border: 2px solid #e2e8f0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.12);
  flex-shrink: 0;
`;

// Dashboard Content
const DashboardContent = styled.div`
  padding: 2.5rem;
  max-width: 100%;
  margin: 0;
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

// Section Content Wrapper
const SectionContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  min-height: 300px;
  padding: 5rem 5rem 0 5rem;
`;

// Placeholder Grid for sections without data
const PlaceholderGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;

  @media (min-width: 1280px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const PlaceholderCard = styled.div`
  background: white;
  border-radius: 10px;
  padding: 1.5rem;
  border: 1px solid #e2e8f0;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  opacity: 0.6;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  min-height: 120px;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
    opacity: 0.8;
  }
`;

const DashboardHeader = styled.div`
  margin-bottom: 2rem;

  h2 {
    font-size: 1.875rem;
    font-weight: 700;
    color: #0d141b;
    margin: 0 0 0.5rem 0;
    display: flex;
    align-items: center;
    gap: 0.75rem;

    &::before {
      content: '';
      width: 2rem;
      height: 2rem;
      background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23137fec'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z'/%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'/%3E%3C/svg%3E") no-repeat center;
      background-size: contain;
    }
  }

  p {
    color: #64748b;
    font-size: 0.875rem;
  }
`;

// KPI Grid
const KPIGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;

  @media (min-width: 1280px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const KPICard = styled.div`
  background: white;
  border-radius: 0.75rem;
  padding: 1.5rem;
  border: 1px solid #e2e8f0;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

const KPICardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
`;

const KPIIcon = styled.div`
  width: 3rem;
  height: 3rem;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${props => props.$bg || '#137fec'}1a;
  color: ${props => props.$color || '#137fec'};
`;

const KPITrend = styled.span`
  font-size: 0.75rem;
  font-weight: 700;
  color: ${props => props.$positive ? '#10b981' : '#ef4444'};
  display: flex;
  align-items: center;
  gap: 0.25rem;
`;

const KPIValue = styled.div`
  font-size: 2.25rem;
  font-weight: 800;
  color: #0d141b;
  margin-bottom: 0.25rem;
`;

const KPILabel = styled.div`
  font-size: 0.875rem;
  color: #64748b;
  font-weight: 500;
`;

// Action Buttons
const ActionGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;

  @media (min-width: 1280px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const ActionCard = styled.div`
  background: white;
  border-radius: 0.75rem;
  padding: 1.5rem;
  border: 1px solid #e2e8f0;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    transform: translateY(-1px);
  }
`;

const ActionIcon = styled.div`
  width: 3rem;
  height: 3rem;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${props => props.$bg || '#137fec'}1a;
  color: ${props => props.$color || '#137fec'};
  margin-bottom: 1rem;
`;

const ActionTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: 700;
  color: #0d141b;
  margin: 0 0 0.5rem 0;
`;

const ActionDescription = styled.p`
  font-size: 0.875rem;
  color: #64748b;
  margin: 0;
`;

// Breakdown Detail Modal Styles
const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(4px);
  animation: fadeIn 0.2s ease-out;

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
`;

const ModalContainer = styled.div`
  background: white;
  border-radius: 1rem;
  max-width: 600px;
  width: 100%;
  max-height: 85vh;
  overflow-y: auto;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.25);
  animation: slideUp 0.3s ease-out;

  @keyframes slideUp {
    from { opacity: 0; transform: translateY(30px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;

const ModalHeader = styled.div`
  background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
  padding: 1.5rem 2rem;
  color: white;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
`;

const ModalHeaderContent = styled.div`
  flex: 1;
`;

const ModalHeaderTitle = styled.h3`
  margin: 0 0 0.75rem 0;
  font-size: 1.35rem;
  font-weight: 700;
  line-height: 1.3;
`;

const ModalHeaderMeta = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1rem;
  font-size: 0.9rem;
  opacity: 0.95;
`;

const ModalCloseButton = styled.button`
  background: rgba(255, 255, 255, 0.2);
  border: none;
  color: white;
  width: 2.75rem;
  height: 2.75rem;
  border-radius: 0.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  flex-shrink: 0;

  &:hover {
    background: rgba(255, 255, 255, 0.3);
    transform: scale(1.05);
  }

  span {
    font-size: 1.5rem;
  }
`;

const ModalBody = styled.div`
  padding: 2rem;
`;

const DetailSection = styled.div`
  margin-bottom: 1.5rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

const DetailLabel = styled.p`
  font-size: 0.75rem;
  color: #64748b;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin: 0 0 0.5rem 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  span {
    font-size: 1rem;
  }
`;

const DetailValue = styled.p`
  font-size: 1rem;
  color: #0d141b;
  margin: 0;
  line-height: 1.6;
`;

const StatusBadge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.375rem;
  padding: 0.5rem 1rem;
  border-radius: 9999px;
  font-size: 0.875rem;
  font-weight: 600;
  background-color: ${props => {
    if (props.$status === 'resolved') return 'rgba(16, 185, 129, 0.1)';
    if (props.$status === 'acknowledged') return 'rgba(59, 130, 246, 0.1)';
    return 'rgba(245, 158, 11, 0.1)';
  }};
  color: ${props => {
    if (props.$status === 'resolved') return '#10b981';
    if (props.$status === 'acknowledged') return '#3b82f6';
    return '#f59e0b';
  }};
`;

const BreakdownImage = styled.img`
  width: 100%;
  max-height: 300px;
  object-fit: cover;
  border-radius: 0.5rem;
  margin-top: 0.5rem;
`;

const ModalFooter = styled.div`
  padding: 1.5rem 2rem;
  border-top: 1px solid #e2e8f0;
  display: flex;
  justify-content: flex-end;
`;

const CloseButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: #f1f5f9;
  color: #475569;
  border: none;
  border-radius: 0.5rem;
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: #e2e8f0;
  }

  span {
    font-size: 1.1rem;
  }
`;

const TechnicianDashboard = ({ onLogout, currentUser }) => {
  const [activeSection, setActiveSection] = useState('overview');
  const [isAddAccessoryModalOpen, setIsAddAccessoryModalOpen] = useState(false);
  const [isBreakdownModalOpen, setIsBreakdownModalOpen] = useState(false);
  const [isRepairModalOpen, setIsRepairModalOpen] = useState(false);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const [subject, setSubject] = useState('');
  const [body, setBody] = useState('');
  const [reportType, setReportType] = useState('daily');
  const [vehicles, setVehicles] = useState([]);
  const [accessories, setAccessories] = useState([]);
  const [maintenanceRecords, setMaintenanceRecords] = useState([]);
  const [repairs, setRepairs] = useState([]);
  const [breakdowns, setBreakdowns] = useState([]);
  const [loadingBreakdowns, setLoadingBreakdowns] = useState(false);
  const [selectedBreakdown, setSelectedBreakdown] = useState(null);
  const [isBreakdownDetailModalOpen, setIsBreakdownDetailModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  const menuItems = [
    { id: 'overview', label: 'Overview', icon: 'bar-chart-2' },
    { id: 'breakdowns', label: 'Breakdowns', icon: 'alert-triangle' },
    { id: 'repairs', label: 'Repairs', icon: 'settings' },
    { id: 'stock', label: 'Stock Management', icon: 'package' },
  ];

  // Calculate KPIs from real data
  const currentWeek = new Date();
  currentWeek.setDate(currentWeek.getDate() - 7);
  const repairsThisWeek = repairs.filter(record => new Date(record.completed_at) >= currentWeek).length;

  const activeBreakdowns = vehicles.filter(v => v.status === 'maintenance').length;
  const stockAlerts = accessories.filter(a => a.stock_level <= a.min_stock_level).length;

  const technicianKpis = [
    {
      title: 'Active Breakdowns',
      value: activeBreakdowns.toString(),
      trend: activeBreakdowns > 0 ? `${activeBreakdowns} vehicles down` : 'All operational',
      positive: activeBreakdowns === 0,
      icon: 'alert-triangle',
      bg: activeBreakdowns > 0 ? '#ef4444' : '#10b981',
      color: activeBreakdowns > 0 ? '#ef4444' : '#10b981'
    },
    {
      title: 'Repairs This Week',
      value: repairsThisWeek.toString(),
      trend: repairsThisWeek > 0 ? `${repairsThisWeek} completed` : 'No recent repairs',
      positive: repairsThisWeek > 0,
      icon: 'check-circle',
      bg: '#10b981',
      color: '#10b981'
    },
    {
      title: 'Total Parts',
      value: accessories.length.toString(),
      trend: `${stockAlerts} low stock items`,
      positive: stockAlerts === 0,
      icon: 'package',
      bg: '#f59e0b',
      color: '#f59e0b'
    },
    {
      title: 'Stock Alerts',
      value: stockAlerts.toString(),
      trend: stockAlerts > 0 ? 'Restock required' : 'Inventory healthy',
      positive: stockAlerts === 0,
      icon: 'bell',
      bg: stockAlerts > 0 ? '#ef4444' : '#10b981',
      color: stockAlerts > 0 ? '#ef4444' : '#10b981'
    }
  ];

  const technicianActions = [
    {
      id: 'view_breakdowns',
      title: 'View Breakdowns',
      description: 'Check list of vehicles needing repair',
      icon: 'wrench',
      bg: '#ef4444',
      color: '#ef4444'
    },
    {
      id: 'record_repair',
      title: 'Record Repair',
      description: 'Log completed repairs and update vehicle status',
      icon: 'settings',
      bg: '#10b981',
      color: '#10b981'
    },
    {
      id: 'manage_stock',
      title: 'Manage Stock',
      description: 'Add new parts and monitor inventory levels',
      icon: 'package',
      bg: '#f59e0b',
      color: '#f59e0b'
    },
    {
      id: 'add_invoice',
      title: 'Add Invoice',
      description: 'Record repair costs and generate invoices',
      icon: 'file-text',
      bg: '#3b82f6',
      color: '#3b82f6'
    }
  ];

  useEffect(() => {
    if (!isMechanic()) {
      return;
    }

    fetchTechnicianData();

    // Ensure Feather icons are rendered
    if (window.feather) {
      window.feather.replace();
    }
  }, []);

  const fetchTechnicianData = async () => {
    try {
      setLoading(true);
      const [vehiclesRes, accessoriesRes, maintenanceRes, repairsRes] = await Promise.allSettled([
        vehiclesAPI.getVehicles(),
        accessoriesAPI.getAccessories(),
        vehiclesAPI.getAllMaintenance(),
        vehiclesAPI.getRepairs()
      ]);

      if (vehiclesRes.status === 'fulfilled') {
        setVehicles(vehiclesRes.value?.results || []);
      }

      if (accessoriesRes.status === 'fulfilled') {
        setAccessories(accessoriesRes.value?.results || []);
      }

      if (maintenanceRes.status === 'fulfilled') {
        setMaintenanceRecords(maintenanceRes.value?.results || []);
      }

      if (repairsRes.status === 'fulfilled') {
        setRepairs(repairsRes.value?.results || []);
      }
    } catch (error) {
      console.error('Error fetching technician data:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchBreakdowns = async () => {
    try {
      setLoadingBreakdowns(true);
      const data = await breakdownsAPI.getBreakdowns();
      setBreakdowns(data.results || data);
    } catch (error) {
      console.error('Error fetching breakdowns:', error);
      setBreakdowns([]);
    } finally {
      setLoadingBreakdowns(false);
    }
  };

  useEffect(() => {
    if (activeSection === 'breakdowns') {
      fetchBreakdowns();
    }
  }, [activeSection]);

  const handleActionClick = (actionId) => {
    switch (actionId) {
      case 'view_breakdowns':
        setActiveSection('breakdowns');
        break;
      case 'record_repair':
        setActiveSection('repairs');
        break;
      case 'manage_stock':
        setActiveSection('stock');
        break;
      case 'add_invoice':
        // Handle add invoice
        break;
      default:
        break;
    }
  };

  const handleViewProfile = () => {
    setIsProfileModalOpen(true);
  };

  const handleProfileUpdate = async () => {
    // Fetch updated user data from API
    try {
      const updatedUser = await authAPI.getProfile();
      // Update localStorage with new user data
      localStorage.setItem('user', JSON.stringify(updatedUser));
      // Update component state
      setCurrentUser(updatedUser);
    } catch (error) {
      console.error('Error fetching updated user profile:', error);
      // Fallback to localStorage if API fails
      const userData = localStorage.getItem('user');
      if (userData) {
        const parsedUser = JSON.parse(userData);
        setCurrentUser(parsedUser);
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const fullSubject = `${reportType.charAt(0).toUpperCase() + reportType.slice(1)} Report: ${subject}`;
      await messagesAPI.sendMessage({ recipient: 1, subject: fullSubject, body });
      alert('Report submitted successfully');
      setSubject('');
      setBody('');
      setReportType('daily');
      setActiveSection('overview');
    } catch (err) {
      alert('Failed to submit report');
    }
  };

  if (!isMechanic()) {
    return (
      <div className="bg-background-light dark:bg-background-dark text-[#0d141b] dark:text-slate-200 h-full flex items-center justify-center">
        <div className="text-center">
          <span className="material-symbols-outlined text-6xl text-red-500 mb-4">error</span>
          <h2 className="text-xl font-bold mb-2">Access Denied</h2>
          <p>Mechanic privileges required to access this dashboard.</p>
        </div>
      </div>
    );
  }

  return (
    <Container>
      <Sidebar>
        <SidebarTop>
          <LogoSection>
            <LogoContainer>
              <LogoIcon>
                <i data-feather="settings" className="fi-icon"></i>
              </LogoIcon>
              <LogoText>
                <h1>Technician Portal</h1>
                <p>Campus Fleet</p>
              </LogoText>
            </LogoContainer>
          </LogoSection>

          <NavMenu>
            {menuItems.map((item) => (
              <NavItem
                key={item.id}
                href="#"
                className={activeSection === item.id ? 'active' : ''}
                onClick={(e) => {
                  e.preventDefault();
                  setActiveSection(item.id);
                }}
              >
                <i data-feather={item.icon} className="fi-icon"></i>
                <span>{item.label}</span>
              </NavItem>
            ))}
          </NavMenu>
        </SidebarTop>

        <SidebarBottom>
          <NewAccessoryButton onClick={() => setIsAddAccessoryModalOpen(true)}>
            <i data-feather="plus" className="fi-icon" style={{ width: '14px', height: '14px' }}></i>
            <span>Add Accessory</span>
          </NewAccessoryButton>
          <div className="text-center" style={{ marginTop: '1rem' }}>
            <p className="text-sm text-slate-500">Logged in as Technician</p>
          </div>
        </SidebarBottom>
      </Sidebar>

      <MainContent>
        <TopNav>
          <SearchContainer>
            <SearchInput>
              <input
                type="text"
                placeholder="Search repairs, parts..."
              />
            </SearchInput>
          </SearchContainer>

          <TopNavRight>
            <NotificationButton>
              <i data-feather="bell" className="fi-icon"></i>
            </NotificationButton>
            <SettingsButton>
              <i data-feather="settings" className="fi-icon"></i>
            </SettingsButton>
            <Divider />
            <UserProfileDropdown
              currentUser={currentUser}
              onLogout={onLogout}
              onViewProfile={handleViewProfile}
            />
          </TopNavRight>
        </TopNav>

        <DashboardContent>
          {activeSection === 'overview' && (
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
              <DashboardHeader>
                <h2>Technician Dashboard</h2>
                <p>Manage repairs, monitor stock, and handle vehicle maintenance.</p>
              </DashboardHeader>

              <KPIGrid>
                {technicianKpis.map((kpi, index) => (
                  <KPICard key={kpi.title}>
                    <KPICardHeader>
                      <KPIIcon $bg={kpi.bg} $color={kpi.color}>
                        <i data-feather={kpi.icon} className="fi-icon"></i>
                      </KPIIcon>
                      {kpi.trend && (
                        <KPITrend $positive={kpi.positive}>
                          {kpi.trend}
                        </KPITrend>
                      )}
                    </KPICardHeader>
                    <KPIValue>{kpi.value}</KPIValue>
                    <KPILabel>{kpi.title}</KPILabel>
                  </KPICard>
                ))}
              </KPIGrid>

              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '700', color: '#0d141b', marginBottom: '1rem' }}>
                  Quick Actions
                </h3>
                <ActionGrid>
                  {technicianActions.map((action) => (
                    <ActionCard key={action.id} onClick={() => handleActionClick(action.id)}>
                      <ActionIcon $bg={action.bg} $color={action.color}>
                        <i data-feather={action.icon} className="fi-icon"></i>
                      </ActionIcon>
                      <ActionTitle>{action.title}</ActionTitle>
                      <ActionDescription>{action.description}</ActionDescription>
                    </ActionCard>
                  ))}
                </ActionGrid>
              </div>
            </div>
          )}

          {activeSection === 'breakdowns' && (
            <SectionContent>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                <h2 style={{ fontSize: '1.875rem', fontWeight: '700', color: '#0d141b', margin: 0, display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <span className="material-symbols-outlined" style={{ fontSize: '2rem', color: '#ef4444' }}>warning</span>
                  My Reported Breakdowns
                </h2>
                <button
                  onClick={() => setIsBreakdownModalOpen(true)}
                  style={{
                    background: '#10b981',
                    color: 'white',
                    border: 'none',
                    padding: '0.75rem 1.5rem',
                    borderRadius: '0.5rem',
                    fontWeight: '600',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    fontSize: '0.95rem',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => e.target.style.background = '#059669'}
                  onMouseLeave={(e) => e.target.style.background = '#10b981'}
                >
                  <span className="material-symbols-outlined">add</span>
                  Report Breakdown
                </button>
              </div>

              {loadingBreakdowns ? (
                <div style={{ textAlign: 'center', padding: '3rem' }}>
                  <span className="material-symbols-outlined" style={{ fontSize: '2.5rem', color: '#137fec', animation: 'spin 1s linear infinite' }}>refresh</span>
                  <p style={{ marginTop: '1rem', color: '#64748b' }}>Loading breakdowns...</p>
                </div>
              ) : breakdowns.length > 0 ? (
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '1.5rem' }}>
                  {breakdowns.map((breakdown) => (
                    <div
                      key={breakdown.id}
                      onClick={() => {
                        setSelectedBreakdown(breakdown);
                        setIsBreakdownDetailModalOpen(true);
                      }}
                      style={{
                        background: 'white',
                        borderRadius: '0.75rem',
                        border: '1px solid #e2e8f0',
                        padding: '1.5rem',
                        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
                        e.currentTarget.style.transform = 'translateY(-2px)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.1)';
                        e.currentTarget.style.transform = 'translateY(0)';
                      }}
                    >
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                        <div>
                          <h3 style={{ margin: 0, fontSize: '1.1rem', fontWeight: '600', color: '#0d141b' }}>{breakdown.title}</h3>
                          <p style={{ margin: '0.5rem 0 0', fontSize: '0.85rem', color: '#64748b' }}>
                            <span className="material-symbols-outlined" style={{ fontSize: '1rem', verticalAlign: 'middle' }}>directions_car</span>
                            {breakdown.vehicle_info || 'Vehicle'}
                          </p>
                        </div>
                        <span style={{
                          padding: '0.25rem 0.75rem',
                          borderRadius: '9999px',
                          fontSize: '0.75rem',
                          fontWeight: '600',
                          background: breakdown.status === 'resolved' ? 'rgba(16, 185, 129, 0.1)' : 
                                     breakdown.status === 'acknowledged' ? 'rgba(59, 130, 246, 0.1)' : 
                                     'rgba(245, 158, 11, 0.1)',
                          color: breakdown.status === 'resolved' ? '#10b981' : 
                                 breakdown.status === 'acknowledged' ? '#3b82f6' : 
                                 '#f59e0b'
                        }}>
                          {breakdown.status}
                        </span>
                      </div>
                      <p style={{ fontSize: '0.9rem', color: '#475569', margin: '0 0 1rem', lineHeight: '1.5' }}>
                        {breakdown.description.length > 100 ? breakdown.description.substring(0, 100) + '...' : breakdown.description}
                      </p>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.8rem', color: '#64748b' }}>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                          <span className="material-symbols-outlined" style={{ fontSize: '1rem' }}>schedule</span>
                          {new Date(breakdown.reported_at).toLocaleDateString()}
                        </span>
                        {breakdown.image && (
                          <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', color: '#3b82f6', cursor: 'pointer' }}>
                            <span className="material-symbols-outlined" style={{ fontSize: '1rem' }}>image</span>
                            Has image
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <PlaceholderGrid>
                  <PlaceholderCard>
                    <span className="material-symbols-outlined" style={{ fontSize: '3rem', color: '#cbd5e1', marginBottom: '1rem' }}>check_circle</span>
                    <h3 style={{ margin: '0 0 0.5rem', fontSize: '1rem', fontWeight: '600', color: '#0d141b' }}>No Breakdowns Yet</h3>
                    <p style={{ margin: 0, fontSize: '0.875rem', color: '#64748b' }}>You haven't reported any breakdowns yet. Click the button above to report one.</p>
                  </PlaceholderCard>
                </PlaceholderGrid>
              )}
            </SectionContent>
          )}

          {activeSection === 'repairs' && (
            <SectionContent>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                <h2 style={{ fontSize: '1.875rem', fontWeight: '700', color: '#0d141b', margin: 0, display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <span className="material-symbols-outlined" style={{ fontSize: '2rem', color: '#3b82f6' }}>settings</span>
                  My Repair Records
                </h2>
                <button
                  onClick={() => setIsRepairModalOpen(true)}
                  style={{
                    background: '#3b82f6',
                    color: 'white',
                    border: 'none',
                    padding: '0.75rem 1.5rem',
                    borderRadius: '0.5rem',
                    fontWeight: '600',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    fontSize: '0.95rem',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => e.target.style.background = '#2563eb'}
                  onMouseLeave={(e) => e.target.style.background = '#3b82f6'}
                >
                  <span className="material-symbols-outlined">add</span>
                  Record Repair
                </button>
              </div>
              
              <RepairRecordsReport />
            </SectionContent>
          )}

          {activeSection === 'stock' && (
            <AccessoriesPage
              onBack={() => setActiveSection('overview')}
              showHeader={false}
            />
          )}
        </DashboardContent>
      </MainContent>

      <MobileNav>
        {menuItems.map((item) => (
          <MobileNavItem
            key={item.id}
            $active={activeSection === item.id}
            onClick={() => setActiveSection(item.id)}
          >
            <i data-feather={item.icon} className="fi-icon"></i>
          </MobileNavItem>
        ))}
      </MobileNav>

      <AddAccessoryModal
        isOpen={isAddAccessoryModalOpen}
        onClose={() => setIsAddAccessoryModalOpen(false)}
        onAccessoryAdded={() => {
          // Could refresh accessories list if needed
          setIsAddAccessoryModalOpen(false);
        }}
      />

      <BreakdownReportModal
        isOpen={isBreakdownModalOpen}
        onClose={() => setIsBreakdownModalOpen(false)}
        onSuccess={() => {
          // Refresh breakdowns list
          fetchBreakdowns();
          setIsBreakdownModalOpen(false);
        }}
      />

      <RepairRecordModal
        isOpen={isRepairModalOpen}
        onClose={() => setIsRepairModalOpen(false)}
        onSuccess={() => {
          // Refresh repair records if needed
          fetchTechnicianData();
        }}
      />

      <UserProfileModal
        isOpen={isProfileModalOpen}
        onClose={() => setIsProfileModalOpen(false)}
        currentUser={currentUser}
        onProfileUpdate={handleProfileUpdate}
      />

      {isBreakdownDetailModalOpen && selectedBreakdown && (
        <ModalOverlay onClick={() => setIsBreakdownDetailModalOpen(false)}>
          <ModalContainer onClick={(e) => e.stopPropagation()}>
            <ModalHeader>
              <ModalHeaderContent>
                <ModalHeaderTitle>{selectedBreakdown.title}</ModalHeaderTitle>
                <ModalHeaderMeta>
                  <span className="material-symbols-outlined">directions_car</span>
                  {selectedBreakdown.vehicle_info || 'Vehicle'}
                  <span style={{ margin: '0 0.5rem' }}>•</span>
                  <span className="material-symbols-outlined">schedule</span>
                  {new Date(selectedBreakdown.reported_at).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit'
                  })}
                </ModalHeaderMeta>
              </ModalHeaderContent>
              <ModalCloseButton onClick={() => setIsBreakdownDetailModalOpen(false)}>
                <span className="material-symbols-outlined">close</span>
              </ModalCloseButton>
            </ModalHeader>
            <ModalBody>
              <DetailSection>
                <StatusBadge $status={selectedBreakdown.status}>
                  <span className="material-symbols-outlined">
                    {selectedBreakdown.status === 'resolved' ? 'check_circle' :
                     selectedBreakdown.status === 'acknowledged' ? 'visibility' :
                     'pending'}
                  </span>
                  {selectedBreakdown.status.charAt(0).toUpperCase() + selectedBreakdown.status.slice(1)}
                </StatusBadge>
              </DetailSection>

              <DetailSection>
                <DetailLabel>
                  <span className="material-symbols-outlined">description</span>
                  Description
                </DetailLabel>
                <DetailValue>{selectedBreakdown.description}</DetailValue>
              </DetailSection>

              {selectedBreakdown.image && (
                <DetailSection>
                  <DetailLabel>
                    <span className="material-symbols-outlined">image</span>
                    Attached Image
                  </DetailLabel>
                  <BreakdownImage 
                    src={selectedBreakdown.image.startsWith('http') ? selectedBreakdown.image : `http://127.0.0.1:8000${selectedBreakdown.image}`}
                    alt={selectedBreakdown.title}
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                </DetailSection>
              )}

              {selectedBreakdown.mechanic_name && (
                <DetailSection>
                  <DetailLabel>
                    <span className="material-symbols-outlined">person</span>
                    Reported By
                  </DetailLabel>
                  <DetailValue>{selectedBreakdown.mechanic_name}</DetailValue>
                </DetailSection>
              )}
            </ModalBody>
            <ModalFooter>
              <CloseButton onClick={() => setIsBreakdownDetailModalOpen(false)}>
                <span className="material-symbols-outlined">close</span>
                Close
              </CloseButton>
            </ModalFooter>
          </ModalContainer>
        </ModalOverlay>
      )}
    </Container>
  );
};

export default TechnicianDashboard;