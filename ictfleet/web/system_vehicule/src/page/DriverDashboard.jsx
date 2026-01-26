import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import UserProfileDropdown from '../component/UserProfileDropdown';
import UserProfileModal from '../component/UserProfileModal';
import { vehiclesAPI, isDriver } from '../service/api';

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

// Main Content
const MainContent = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow-y: auto;

  @media (max-width: 767px) {
    padding-bottom: 80px;
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
      background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23137fec'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'/%3E%3C/svg%3E") no-repeat center;
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

// Vehicle Card for Driver
const VehicleCard = styled.div`
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 0.75rem;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  cursor: pointer;
  display: flex;
  flex-direction: column;

  &:hover {
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
    transform: translateY(-2px);
  }
`;

const VehicleImage = styled.div`
  width: 100%;
  aspect-ratio: 16/9;
  background-size: cover;
  background-position: center;
  position: relative;
  transition: transform 0.5s ease;

  ${VehicleCard}:hover & {
    transform: scale(1.05);
  }
`;

const VehicleStatus = styled.div`
  position: absolute;
  top: 0.75rem;
  right: 0.75rem;
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;

  ${props => {
    switch (props.status) {
      case 'Active':
        return `
          background: rgba(34, 197, 94, 0.1);
          color: #16a34a;
        `;
      case 'In Repair':
        return `
          background: rgba(245, 158, 11, 0.1);
          color: #d97706;
        `;
      case 'Maintenance':
        return `
          background: rgba(59, 130, 246, 0.1);
          color: #2563eb;
        `;
      default:
        return `
          background: rgba(107, 114, 128, 0.1);
          color: #6b7280;
        `;
    }
  }}
`;

const VehicleContent = styled.div`
  padding: 1rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

const VehicleName = styled.h3`
  font-size: 1.125rem;
  font-weight: 700;
  color: #0d141b;
  margin: 0;
`;

const VehicleDetails = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 0.25rem;
`;

const VehiclePlate = styled.span`
  font-size: 0.875rem;
  font-weight: 500;
  color: #64748b;
`;

const VehicleLocation = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.75rem;
  color: #64748b;

  span:first-child {
    font-size: 0.75rem;
  }
`;

const VehicleFooter = styled.div`
  border-top: 1px solid #e2e8f0;
  padding: 1rem;
  margin-top: auto;
  background: rgba(248, 250, 252, 0.5);
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const FuelIndicator = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  span:first-child {
    color: #137fec;
    font-size: 1rem;
  }

  span:last-child {
    font-size: 0.75rem;
    font-weight: 500;
    color: #0d141b;
  }
`;

const ViewDetails = styled.button`
  font-size: 0.75rem;
  font-weight: 700;
  color: #137fec;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  transition: all 0.2s ease;
  background: none;
  border: none;
  cursor: pointer;

  ${VehicleCard}:hover & {
    text-decoration: underline;
  }

  i {
    width: 0.875rem;
    height: 0.875rem;
  }
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

const DriverDashboard = ({ onLogout, currentUser }) => {
  const [activeSection, setActiveSection] = useState('overview');
  const [assignedVehicle, setAssignedVehicle] = useState(null);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);

  const menuItems = [
    { id: 'overview', label: 'Overview', icon: 'bar-chart-2' },
    { id: 'vehicle', label: 'My Vehicle', icon: 'truck' },
    { id: 'reports', label: 'Reports', icon: 'file-text' },
    { id: 'issues', label: 'Report Issue', icon: 'alert-triangle' },
    { id: 'breakdowns', label: 'Breakdown History', icon: 'wrench' },
  ];

  const driverKpis = [
    {
      title: 'Vehicle Status',
      value: assignedVehicle?.status === 'active' ? 'Operational' : 'Needs Attention',
      trend: assignedVehicle?.status === 'active' ? 'Ready for use' : 'Service required',
      positive: assignedVehicle?.status === 'active',
      icon: 'truck',
      bg: assignedVehicle?.status === 'active' ? '#10b981' : '#f59e0b',
      color: assignedVehicle?.status === 'active' ? '#10b981' : '#f59e0b'
    },
    {
      title: 'Current Mileage',
      value: assignedVehicle?.mileage ? `${assignedVehicle.mileage.toLocaleString()} mi` : 'N/A',
      trend: assignedVehicle?.mileage ? 'Total distance' : 'No data',
      positive: !!assignedVehicle?.mileage,
      icon: 'activity',
      bg: '#3b82f6',
      color: '#3b82f6'
    },
    {
      title: 'Fuel Type',
      value: assignedVehicle?.fuel_type || 'N/A',
      trend: assignedVehicle?.fuel_type ? 'Compatible fuel' : 'Check specs',
      positive: !!assignedVehicle?.fuel_type,
      icon: 'fuel',
      bg: '#f59e0b',
      color: '#f59e0b'
    },
    {
      title: 'Vehicle Issues',
      value: assignedVehicle?.status !== 'active' ? 'Needs Service' : 'None',
      trend: assignedVehicle?.status !== 'active' ? 'Report to maintenance' : 'All clear',
      positive: assignedVehicle?.status === 'active',
      icon: 'alert-circle',
      bg: assignedVehicle?.status === 'active' ? '#10b981' : '#ef4444',
      color: assignedVehicle?.status === 'active' ? '#10b981' : '#ef4444'
    }
  ];

  const driverActions = [
    {
      id: 'report_issue',
      title: 'Report Vehicle Issue',
      description: 'Report breakdowns, maintenance needs, or other problems',
      icon: 'alert-triangle',
      bg: '#ef4444',
      color: '#ef4444'
    },
    {
      id: 'daily_report',
      title: 'Daily Report',
      description: 'Submit your daily driving log and vehicle status',
      icon: 'file-text',
      bg: '#3b82f6',
      color: '#3b82f6'
    },
    {
      id: 'weekly_report',
      title: 'Weekly Report',
      description: 'Submit comprehensive weekly vehicle and activity report',
      icon: 'calendar',
      bg: '#10b981',
      color: '#10b981'
    },
    {
      id: 'maintenance_history',
      title: 'Maintenance History',
      description: 'View past repairs and maintenance records',
      icon: 'history',
      bg: '#f59e0b',
      color: '#f59e0b'
    }
  ];

  useEffect(() => {
    if (!isDriver()) {
      // Redirect or show error
      return;
    }

    fetchAssignedVehicle();

    // Ensure Feather icons are rendered
    if (window.feather) {
      window.feather.replace();
    }
  }, []);

  const fetchAssignedVehicle = async () => {
    try {
      setLoading(true);
      // Get vehicles assigned to current driver
      const vehicles = await vehiclesAPI.getVehicles();
      const driverVehicle = vehicles?.results?.find(v => v.assigned_driver === currentUser.id);
      setAssignedVehicle(driverVehicle || null);
    } catch (error) {
      console.error('Error fetching assigned vehicle:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleActionClick = (actionId) => {
    switch (actionId) {
      case 'report_issue':
        // Open issue reporting modal
        break;
      case 'daily_report':
        // Open daily report modal
        break;
      case 'weekly_report':
        // Open weekly report modal
        break;
      case 'maintenance_history':
        // Show maintenance history
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

  if (!isDriver()) {
    return (
      <div className="bg-background-light dark:bg-background-dark text-[#0d141b] dark:text-slate-200 h-full flex items-center justify-center">
        <div className="text-center">
          <span className="material-symbols-outlined text-6xl text-red-500 mb-4">error</span>
          <h2 className="text-xl font-bold mb-2">Access Denied</h2>
          <p>Driver privileges required to access this dashboard.</p>
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
                <i data-feather="truck" className="fi-icon"></i>
              </LogoIcon>
              <LogoText>
                <h1>Driver Portal</h1>
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
          <div className="text-center">
            <p className="text-sm text-slate-500">Logged in as Driver</p>
          </div>
        </SidebarBottom>
      </Sidebar>

      <MainContent>
        <TopNav>
          <SearchContainer>
            <SearchInput>
              <input
                type="text"
                placeholder="Search reports, issues..."
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
                <h2>Driver Dashboard</h2>
                <p>Monitor your assigned vehicle and manage daily operations.</p>
              </DashboardHeader>

              <KPIGrid>
                {driverKpis.map((kpi, index) => (
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

              {assignedVehicle && (
                <div style={{ marginBottom: '2rem' }}>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: '700', color: '#0d141b', marginBottom: '1rem' }}>
                    My Assigned Vehicle
                  </h3>
                  <div style={{ maxWidth: '400px' }}>
                    <VehicleCard>
                      <VehicleImage style={{
                        backgroundImage: assignedVehicle.image ? `url('http://127.0.0.1:8001${assignedVehicle.image}')` : 'none',
                        backgroundColor: '#f1f5f9'
                      }}>
                        <VehicleStatus status={assignedVehicle.status}>
                          {assignedVehicle.status}
                        </VehicleStatus>
                      </VehicleImage>

                      <VehicleContent>
                        <VehicleName>{assignedVehicle.year} {assignedVehicle.make} {assignedVehicle.model}</VehicleName>
                        <VehicleDetails>
                          <VehiclePlate>{assignedVehicle.license_plate}</VehiclePlate>
                          <VehicleLocation>
                            <span className="material-symbols-outlined">location_on</span>
                            Current Location
                          </VehicleLocation>
                        </VehicleDetails>
                      </VehicleContent>

                      <VehicleFooter>
                        <FuelIndicator>
                          <span className="material-symbols-outlined">speed</span>
                          <span>{assignedVehicle.mileage?.toLocaleString() || 0} mi</span>
                        </FuelIndicator>
                        <ViewDetails>
                          View Details
                          <i data-feather="arrow-right" className="fi-icon"></i>
                        </ViewDetails>
                      </VehicleFooter>
                    </VehicleCard>
                  </div>
                </div>
              )}

              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '700', color: '#0d141b', marginBottom: '1rem' }}>
                  Quick Actions
                </h3>
                <ActionGrid>
                  {driverActions.map((action) => (
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

          {activeSection === 'vehicle' && (
            <SectionContent>
              <h2 style={{ fontSize: '1.875rem', fontWeight: '700', color: '#0d141b', marginBottom: '2rem', textAlign: 'center' }}>
                My Vehicle Details
              </h2>
              <PlaceholderGrid>
                <PlaceholderCard>
                  <i data-feather="truck" className="fi-icon" style={{ fontSize: '2rem', color: '#137fec', marginBottom: '0.5rem' }}></i>
                  <p style={{ fontSize: '0.875rem', color: '#64748b' }}>Vehicle information</p>
                </PlaceholderCard>
                <PlaceholderCard>
                  <i data-feather="speedometer" className="fi-icon" style={{ fontSize: '2rem', color: '#10b981', marginBottom: '0.5rem' }}></i>
                  <p style={{ fontSize: '0.875rem', color: '#64748b' }}>Performance metrics</p>
                </PlaceholderCard>
                <PlaceholderCard>
                  <i data-feather="calendar" className="fi-icon" style={{ fontSize: '2rem', color: '#f59e0b', marginBottom: '0.5rem' }}></i>
                  <p style={{ fontSize: '0.875rem', color: '#64748b' }}>Maintenance schedule</p>
                </PlaceholderCard>
                <PlaceholderCard>
                  <i data-feather="map-pin" className="fi-icon" style={{ fontSize: '2rem', color: '#8b5cf6', marginBottom: '0.5rem' }}></i>
                  <p style={{ fontSize: '0.875rem', color: '#64748b' }}>Location tracking</p>
                </PlaceholderCard>
              </PlaceholderGrid>
            </SectionContent>
          )}

          {activeSection === 'reports' && (
            <SectionContent>
              <h2 style={{ fontSize: '1.875rem', fontWeight: '700', color: '#0d141b', marginBottom: '2rem', textAlign: 'center' }}>
                Reports & Logs
              </h2>
              <PlaceholderGrid>
                <PlaceholderCard>
                  <i data-feather="file-text" className="fi-icon" style={{ fontSize: '2rem', color: '#3b82f6', marginBottom: '0.5rem' }}></i>
                  <p style={{ fontSize: '0.875rem', color: '#64748b' }}>Daily reports</p>
                </PlaceholderCard>
                <PlaceholderCard>
                  <i data-feather="bar-chart-2" className="fi-icon" style={{ fontSize: '2rem', color: '#10b981', marginBottom: '0.5rem' }}></i>
                  <p style={{ fontSize: '0.875rem', color: '#64748b' }}>Usage statistics</p>
                </PlaceholderCard>
                <PlaceholderCard>
                  <i data-feather="clock" className="fi-icon" style={{ fontSize: '2rem', color: '#f59e0b', marginBottom: '0.5rem' }}></i>
                  <p style={{ fontSize: '0.875rem', color: '#64748b' }}>Time logs</p>
                </PlaceholderCard>
                <PlaceholderCard>
                  <i data-feather="check-circle" className="fi-icon" style={{ fontSize: '2rem', color: '#10b981', marginBottom: '0.5rem' }}></i>
                  <p style={{ fontSize: '0.875rem', color: '#64748b' }}>Completion status</p>
                </PlaceholderCard>
              </PlaceholderGrid>
            </SectionContent>
          )}

          {activeSection === 'issues' && (
            <SectionContent>
              <h2 style={{ fontSize: '1.875rem', fontWeight: '700', color: '#0d141b', marginBottom: '2rem', textAlign: 'center' }}>
                Report Issues
              </h2>
              <PlaceholderGrid>
                <PlaceholderCard>
                  <i data-feather="alert-triangle" className="fi-icon" style={{ fontSize: '2rem', color: '#ef4444', marginBottom: '0.5rem' }}></i>
                  <p style={{ fontSize: '0.875rem', color: '#64748b' }}>Issue reporting</p>
                </PlaceholderCard>
                <PlaceholderCard>
                  <i data-feather="message-square" className="fi-icon" style={{ fontSize: '2rem', color: '#3b82f6', marginBottom: '0.5rem' }}></i>
                  <p style={{ fontSize: '0.875rem', color: '#64748b' }}>Communication</p>
                </PlaceholderCard>
                <PlaceholderCard>
                  <i data-feather="tool" className="fi-icon" style={{ fontSize: '2rem', color: '#f59e0b', marginBottom: '0.5rem' }}></i>
                  <p style={{ fontSize: '0.875rem', color: '#64748b' }}>Maintenance requests</p>
                </PlaceholderCard>
                <PlaceholderCard>
                  <i data-feather="bell" className="fi-icon" style={{ fontSize: '2rem', color: '#8b5cf6', marginBottom: '0.5rem' }}></i>
                  <p style={{ fontSize: '0.875rem', color: '#64748b' }}>Notifications</p>
                </PlaceholderCard>
              </PlaceholderGrid>
            </SectionContent>
          )}

          {activeSection === 'breakdowns' && (
            <SectionContent>
              <h2 style={{ fontSize: '1.875rem', fontWeight: '700', color: '#0d141b', marginBottom: '2rem', textAlign: 'center' }}>
                Breakdown History
              </h2>
              <PlaceholderGrid>
                <PlaceholderCard>
                  <i data-feather="wrench" className="fi-icon" style={{ fontSize: '2rem', color: '#f59e0b', marginBottom: '0.5rem' }}></i>
                  <p style={{ fontSize: '0.875rem', color: '#64748b' }}>Repair history</p>
                </PlaceholderCard>
                <PlaceholderCard>
                  <i data-feather="calendar" className="fi-icon" style={{ fontSize: '2rem', color: '#10b981', marginBottom: '0.5rem' }}></i>
                  <p style={{ fontSize: '0.875rem', color: '#64748b' }}>Service dates</p>
                </PlaceholderCard>
                <PlaceholderCard>
                  <i data-feather="dollar-sign" className="fi-icon" style={{ fontSize: '2rem', color: '#ef4444', marginBottom: '0.5rem' }}></i>
                  <p style={{ fontSize: '0.875rem', color: '#64748b' }}>Cost tracking</p>
                </PlaceholderCard>
                <PlaceholderCard>
                  <i data-feather="trending-up" className="fi-icon" style={{ fontSize: '2rem', color: '#3b82f6', marginBottom: '0.5rem' }}></i>
                  <p style={{ fontSize: '0.875rem', color: '#64748b' }}>Reliability metrics</p>
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
            <span>{item.label}</span>
          </MobileNavItem>
        ))}
      </MobileNav>

      <UserProfileModal
        isOpen={isProfileModalOpen}
        onClose={() => setIsProfileModalOpen(false)}
        currentUser={currentUser}
        onProfileUpdate={handleProfileUpdate}
      />
    </Container>
  );
};

export default DriverDashboard;