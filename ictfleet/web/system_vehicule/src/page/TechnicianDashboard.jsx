import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import AddAccessoryModal from '../component/AddAccessoryModal';
import UserProfileDropdown from '../component/UserProfileDropdown';
import UserProfileModal from '../component/UserProfileModal';
import { isMechanic, vehiclesAPI, accessoriesAPI } from '../service/api';

// Main Container
const Container = styled.div`
  height: 100vh;
  background-color: #f6f7f8;
  display: flex;
  flex-direction: column;
  font-family: 'Manrope', sans-serif;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

// Sidebar
const Sidebar = styled.aside`
  width: 256px;
  background: white;
  border-right: 1px solid #e2e8f0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;

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
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);

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
  gap: 0.75rem;
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  text-decoration: none;
  color: #64748b;
  font-size: 0.875rem;
  font-weight: 600;
  transition: all 0.2s ease;

  i {
    color: inherit;
  }

  &:hover {
    background: #f1f5f9;
    color: #1e293b;
  }

  &.active {
    background: rgba(19, 127, 236, 0.1);
    color: #137fec;
    border-left: 4px solid #137fec;
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
  padding: 0.625rem;
  background: #137fec;
  color: white;
  border: none;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  font-weight: 700;
  cursor: pointer;
  transition: background 0.2s ease;

  &:hover {
    background: #137fec / 0.9;
  }
`;

// Main Content
const MainContent = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow-y: auto;

  @media (max-width: 767px) {
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
  padding: 1rem 2rem;
  position: sticky;
  top: 0;
  z-index: 10;
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
  gap: 0.75rem;
`;

const UserInfo = styled.div`
  text-align: right;
  display: none;

  @media (min-width: 640px) {
    display: block;
  }

  p:first-child {
    font-size: 0.875rem;
    font-weight: 700;
    color: #0d141b;
    margin: 0;
  }

  p:last-child {
    font-size: 0.75rem;
    color: #64748b;
    margin: 0;
  }
`;

const UserAvatar = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  background: center no-repeat;
  background-size: cover;
  border: 1px solid #e2e8f0;
`;

// Dashboard Content
const DashboardContent = styled.div`
  padding: 2rem;
  max-width: 1400px;
  margin: 0 auto;
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
  border-radius: 0.75rem;
  padding: 1.5rem;
  border: 1px solid #e2e8f0;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  opacity: 0.6;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  min-height: 120px;
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

const TechnicianDashboard = ({ onLogout, currentUser }) => {
  const [activeSection, setActiveSection] = useState('overview');
  const [isAddAccessoryModalOpen, setIsAddAccessoryModalOpen] = useState(false);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const [vehicles, setVehicles] = useState([]);
  const [accessories, setAccessories] = useState([]);
  const [maintenanceRecords, setMaintenanceRecords] = useState([]);
  const [loading, setLoading] = useState(true);

  const menuItems = [
    { id: 'overview', label: 'Overview', icon: 'bar-chart-2' },
    { id: 'breakdowns', label: 'Breakdowns', icon: 'wrench' },
    { id: 'repairs', label: 'Repairs', icon: 'settings' },
    { id: 'stock', label: 'Stock Management', icon: 'package' },
  ];

  // Calculate KPIs from real data
  const currentWeek = new Date();
  currentWeek.setDate(currentWeek.getDate() - 7);
  const repairsThisWeek = maintenanceRecords.filter(record => new Date(record.service_date) >= currentWeek).length;

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
      const [vehiclesRes, accessoriesRes, maintenanceRes] = await Promise.allSettled([
        vehiclesAPI.getVehicles(),
        accessoriesAPI.getAccessories(),
        vehiclesAPI.getAllMaintenance()
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
    } catch (error) {
      console.error('Error fetching technician data:', error);
    } finally {
      setLoading(false);
    }
  };

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

  const handleProfileUpdate = (updatedUser) => {
    // Update current user data if needed
    console.log('Profile updated:', updatedUser);
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
              <h2 style={{ fontSize: '1.875rem', fontWeight: '700', color: '#0d141b', marginBottom: '2rem', textAlign: 'center' }}>
                Breakdowns to Handle
              </h2>
              <PlaceholderGrid>
                <PlaceholderCard>
                  <i data-feather="alert-triangle" className="fi-icon" style={{ fontSize: '2rem', color: '#ef4444', marginBottom: '0.5rem' }}></i>
                  <p style={{ fontSize: '0.875rem', color: '#64748b' }}>No breakdowns reported</p>
                </PlaceholderCard>
                <PlaceholderCard>
                  <i data-feather="check-circle" className="fi-icon" style={{ fontSize: '2rem', color: '#10b981', marginBottom: '0.5rem' }}></i>
                  <p style={{ fontSize: '0.875rem', color: '#64748b' }}>All systems operational</p>
                </PlaceholderCard>
                <PlaceholderCard>
                  <i data-feather="clock" className="fi-icon" style={{ fontSize: '2rem', color: '#f59e0b', marginBottom: '0.5rem' }}></i>
                  <p style={{ fontSize: '0.875rem', color: '#64748b' }}>Monitoring active</p>
                </PlaceholderCard>
                <PlaceholderCard>
                  <i data-feather="tool" className="fi-icon" style={{ fontSize: '2rem', color: '#8b5cf6', marginBottom: '0.5rem' }}></i>
                  <p style={{ fontSize: '0.875rem', color: '#64748b' }}>Maintenance ready</p>
                </PlaceholderCard>
              </PlaceholderGrid>
            </SectionContent>
          )}

          {activeSection === 'repairs' && (
            <SectionContent>
              <h2 style={{ fontSize: '1.875rem', fontWeight: '700', color: '#0d141b', marginBottom: '2rem', textAlign: 'center' }}>
                Record Repairs
              </h2>
              <PlaceholderGrid>
                <PlaceholderCard>
                  <i data-feather="settings" className="fi-icon" style={{ fontSize: '2rem', color: '#10b981', marginBottom: '0.5rem' }}></i>
                  <p style={{ fontSize: '0.875rem', color: '#64748b' }}>No repairs in progress</p>
                </PlaceholderCard>
                <PlaceholderCard>
                  <i data-feather="check-circle" className="fi-icon" style={{ fontSize: '2rem', color: '#10b981', marginBottom: '0.5rem' }}></i>
                  <p style={{ fontSize: '0.875rem', color: '#64748b' }}>All repairs completed</p>
                </PlaceholderCard>
                <PlaceholderCard>
                  <i data-feather="file-text" className="fi-icon" style={{ fontSize: '2rem', color: '#3b82f6', marginBottom: '0.5rem' }}></i>
                  <p style={{ fontSize: '0.875rem', color: '#64748b' }}>Records up to date</p>
                </PlaceholderCard>
                <PlaceholderCard>
                  <i data-feather="trending-up" className="fi-icon" style={{ fontSize: '2rem', color: '#10b981', marginBottom: '0.5rem' }}></i>
                  <p style={{ fontSize: '0.875rem', color: '#64748b' }}>Performance optimal</p>
                </PlaceholderCard>
              </PlaceholderGrid>
            </SectionContent>
          )}

          {activeSection === 'stock' && (
            <SectionContent>
              <h2 style={{ fontSize: '1.875rem', fontWeight: '700', color: '#0d141b', marginBottom: '2rem', textAlign: 'center' }}>
                Stock Management
              </h2>
              <PlaceholderGrid>
                <PlaceholderCard>
                  <i data-feather="package" className="fi-icon" style={{ fontSize: '2rem', color: '#f59e0b', marginBottom: '0.5rem' }}></i>
                  <p style={{ fontSize: '0.875rem', color: '#64748b' }}>Inventory levels normal</p>
                </PlaceholderCard>
                <PlaceholderCard>
                  <i data-feather="shopping-cart" className="fi-icon" style={{ fontSize: '2rem', color: '#10b981', marginBottom: '0.5rem' }}></i>
                  <p style={{ fontSize: '0.875rem', color: '#64748b' }}>No restocking needed</p>
                </PlaceholderCard>
                <PlaceholderCard>
                  <i data-feather="bar-chart-3" className="fi-icon" style={{ fontSize: '2rem', color: '#3b82f6', marginBottom: '0.5rem' }}></i>
                  <p style={{ fontSize: '0.875rem', color: '#64748b' }}>Analytics available</p>
                </PlaceholderCard>
                <PlaceholderCard>
                  <i data-feather="bell" className="fi-icon" style={{ fontSize: '2rem', color: '#8b5cf6', marginBottom: '0.5rem' }}></i>
                  <p style={{ fontSize: '0.875rem', color: '#64748b' }}>Alerts configured</p>
                </PlaceholderCard>
              </PlaceholderGrid>
            </SectionContent>
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

      <UserProfileModal
        isOpen={isProfileModalOpen}
        onClose={() => setIsProfileModalOpen(false)}
        currentUser={currentUser}
        onProfileUpdate={handleProfileUpdate}
      />
    </Container>
  );
};

export default TechnicianDashboard;