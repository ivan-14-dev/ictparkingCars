import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import AddVehicleModal from '../component/AddVehicleModal';
import AddAccessoryModal from '../component/AddAccessoryModal';
import BreakdownsReport from '../component/BreakdownsReport';
import RepairRecordsReport from '../component/RepairRecordsReport';
import UserProfileDropdown from '../component/UserProfileDropdown';
import UserProfileModal from '../component/UserProfileModal';
import VehicleDetailsPage from './VehicleDetailsPage';
import NotificationsPage from './NotificationsPage';
import AccessoriesPage from './AccessoriesPage';
import UserManagementPage from './UserManagementPage';
import ReportsPage from './ReportsPage';
import PrevisionChatWidget from '../component/PrevisionChatWidget';
import FuelUsagePage from './FuelUsagePage';
import { vehiclesAPI, accessoriesAPI, notificationsAPI, messagesAPI, activitiesAPI, isAdmin } from '../service';
import { authAPI } from '../service/api';

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
  border-radius: 8px;
  color: ${props => props.$active ? '#3b82f6' : '#64748b'};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.75rem;
  cursor: pointer;
  transition: all 0.2s ease;
  min-width: 60px;
  font-weight: 500;

  &:hover {
    background: #f1f5f9;
    color: #3b82f6;
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

const NewVehicleButton = styled.button`
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
  overflow-x: hidden;
  
  padding-top: 170px;
  position: relative;

  @media (max-width: 767px) {
    height: calc(100vh - 170px - 80px);
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
  padding: 1.75rem 2.5rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  height: 170px;
  min-height: 170px;
  max-height: 170px;
  
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
      background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23137fec'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z'/%3E%3C/svg%3E") no-repeat center;
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

// Charts and Activity Section
const ChartsSection = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;

  @media (min-width: 1024px) {
    grid-template-columns: 2fr 1fr;
  }
`;

// Chart Container
const ChartContainer = styled.div`
  background: white;
  border-radius: 0.75rem;
  border: 1px solid #e2e8f0;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
`;

const ChartHeader = styled.div`
  padding: 1.5rem;
  border-bottom: 1px solid #f1f5f9;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ChartTitle = styled.div`
  h3 {
    font-size: 1.25rem;
    font-weight: 700;
    color: #0d141b;
    margin: 0 0 0.25rem 0;
    display: flex;
    align-items: center;
    gap: 0.75rem;

    &::before {
      content: '';
      width: 1.5rem;
      height: 1.5rem;
      background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23137fec'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z'/%3E%3C/svg%3E") no-repeat center;
      background-size: contain;
    }
  }

  p {
    font-size: 0.75rem;
    color: #64748b;
    margin: 0;
  }
`;

const ChartControls = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const TrendIndicator = styled.span`
  font-size: 0.75rem;
  font-weight: 700;
  color: #10b981;
`;

const TimeSelector = styled.select`
  font-size: 0.75rem;
  border: none;
  background: #f8fafc;
  border-radius: 0.375rem;
  padding: 0.25rem 0.5rem;
  color: #374151;
  cursor: pointer;
`;

const ChartBody = styled.div`
  padding: 2rem;
  flex: 1;
`;

// Simple Bar Chart
const BarChart = styled.div`
  display: flex;
  align-items: end;
  gap: 0.5rem;
  height: 16rem;
  margin-bottom: 1.5rem;
`;

const Bar = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
`;

const BarFill = styled.div`
  width: 100%;
  background: linear-gradient(135deg, #137fec 0%, #0ea5e9 100%);
  border-radius: 0.25rem 0.25rem 0 0;
  transition: height 0.3s ease;
  position: relative;

  &:hover {
    background: linear-gradient(135deg, #137fec 0%, #2563eb 100%);
  }
`;

const BarLabel = styled.span`
  font-size: 10px;
  font-weight: 700;
  color: #6b7280;
  text-transform: uppercase;
`;

const ChartStats = styled.div`
  display: flex;
  gap: 2rem;
  padding: 1rem;
  background: #f8fafc;
  border-radius: 0.5rem;
  border: 1px solid #f1f5f9;
`;

const StatItem = styled.div`
  flex: 1;

  p:first-child {
    font-size: 0.75rem;
    color: #64748b;
    font-weight: 500;
    margin: 0 0 0.25rem 0;
  }

  p:last-child {
    font-size: 1.125rem;
    font-weight: 700;
    color: #0d141b;
    margin: 0;
  }
`;

// Activity Feed
const ActivityFeed = styled.div`
  background: white;
  border-radius: 0.75rem;
  border: 1px solid #e2e8f0;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
`;

const ActivityHeader = styled.div`
  padding: 1.5rem;
  border-bottom: 1px solid #f1f5f9;

  h3 {
    font-size: 1.25rem;
    font-weight: 700;
    color: #0d141b;
    margin: 0;
  }
`;

const ActivityList = styled.div`
  flex: 1;
  overflow-y: auto;
  max-height: 440px;
`;

const ActivityItem = styled.div`
  padding: 1rem 1.5rem;
  display: flex;
  gap: 1rem;
  border-bottom: 1px solid #f8fafc;
  transition: background 0.2s ease;

  &:hover {
    background: #f8fafc;
  }

  &:last-child {
    border-bottom: none;
  }
`;

const ActivityAvatar = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  background: center no-repeat;
  background-size: cover;
  flex-shrink: 0;
`;

const ActivityContent = styled.div`
  flex: 1;

  p {
    font-size: 0.875rem;
    color: #374151;
    margin: 0 0 0.25rem 0;
    line-height: 1.4;
  }

  span {
    font-weight: 700;
    color: #0d141b;
  }
`;

const ActivityTime = styled.div`
  font-size: 11px;
  font-weight: 500;
  color: #6b7280;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  margin-top: 0.25rem;
`;

const ActivityFooter = styled.div`
  padding: 1rem 1.5rem;
  border-top: 1px solid #f1f5f9;
  text-align: center;
`;

const ViewAllButton = styled.button`
  background: none;
  border: none;
  color: #137fec;
  font-size: 0.875rem;
  font-weight: 700;
  cursor: pointer;
  transition: color 0.2s ease;

  &:hover {
    color: #0ea5e9;
    text-decoration: underline;
  }
`;

// Vehicle Management Components
const VehicleHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;

  @media (min-width: 640px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

const VehicleTitle = styled.div`
  h2 {
    font-size: 1.875rem;
    font-weight: 700;
    color: #0d141b;
    margin: 0 0 0.25rem 0;
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
    font-size: 0.875rem;
    color: #64748b;
    margin: 0;
  }
`;

const FilterContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
`;

const FilterChip = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.375rem 0.75rem;
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: #374151;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    border-color: #137fec;
  }

  span:last-child {
    font-size: 1rem;
  }
`;


const VehicleGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1280px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

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
  background-color: #f1f5f9;
  position: relative;
  transition: transform 0.5s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

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

const AddVehicleCard = styled.div`
  border: 2px dashed #e2e8f0;
  border-radius: 0.75rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
  text-align: center;
  cursor: pointer;
  transition: all 0.2s ease;
  background: white;

  &:hover {
    border-color: #137fec;
    background: rgba(19, 127, 236, 0.02);

    span:first-child {
      color: #137fec;
    }
  }
`;

const AddVehicleIcon = styled.div`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background: #f1f5f9;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  transition: all 0.2s ease;

  span {
    font-size: 1.5rem;
    color: #64748b;
  }
`;

const AddVehicleText = styled.div`
  p:first-child {
    font-size: 0.875rem;
    font-weight: 700;
    color: #0d141b;
    margin: 0 0 0.25rem 0;
  }

  p:last-child {
    font-size: 0.75rem;
    color: #64748b;
    margin: 0;
    padding: 0 1rem;
  }
`;

const LoadMoreButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 300px;
  margin: 2rem auto 0;
  padding: 0.75rem 1.5rem;
  border: 1px solid #137fec;
  background: transparent;
  color: #137fec;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: #137fec;
    color: white;
  }
`;

// Accessories/Parts Management Components
const AccessoriesHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

const AccessoriesTitle = styled.div`
  h2 {
    font-size: 1.875rem;
    font-weight: 700;
    color: #0d141b;
    margin: 0 0 0.25rem 0;
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
    font-size: 0.875rem;
    color: #64748b;
    margin: 0;
  }
`;

const ExportButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  font-weight: 600;
  color: #374151;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: #f9fafb;
    border-color: #137fec;
  }

  span {
    font-size: 1.25rem;
  }
`;

const Toolbar = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1.5rem;
  padding: 1rem;
  background: white;
  border-radius: 0.75rem;
  border: 1px solid #e2e8f0;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);

  @media (min-width: 1024px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

const CategoryFilters = styled.div`
  display: flex;
  gap: 0.5rem;
  overflow-x: auto;
  padding-bottom: 0.5rem;

  @media (min-width: 1024px) {
    padding-bottom: 0;
  }
`;

const CategoryChip = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.375rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  white-space: nowrap;

  ${props => props.active ? `
    background: #137fec;
    color: white;
  ` : `
    background: #f1f5f9;
    color: #64748b;

    &:hover {
      background: #e2e8f0;
      color: #374151;
    }
  `}

  span:last-child {
    font-size: 1rem;
  }
`;

const ViewControls = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const ViewToggle = styled.div`
  display: flex;
  background: #f1f5f9;
  border-radius: 0.5rem;
  padding: 0.25rem;
`;

const ViewToggleButton = styled.button`
  padding: 0.375rem;
  border-radius: 0.375rem;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;

  ${props => props.active ? `
    background: white;
    color: #137fec;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  ` : `
    background: transparent;
    color: #64748b;

    &:hover {
      color: #374151;
    }
  `}

  span {
    font-size: 1.25rem;
  }
`;

const FilterControls = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const FilterButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem;
  background: transparent;
  border: none;
  color: #64748b;
  cursor: pointer;
  transition: color 0.2s ease;

  &:hover {
    color: #137fec;
  }

  span {
    font-size: 1.25rem;
  }
`;

const SortButton = styled(FilterButton)``;

const AccessoriesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const AccessoryCard = styled.div`
  background: white;
  border-radius: 0.75rem;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  position: relative;

  ${props => {
    if (props.status === 'critical') {
      return `
        border: 2px solid #dc2626;
        box-shadow: 0 0 0 1px rgba(220, 38, 38, 0.1), 0 4px 6px rgba(220, 38, 38, 0.1);
      `;
    } else if (props.status === 'low') {
      return `
        border: 1px solid #f59e0b;
        box-shadow: 0 0 0 1px rgba(245, 158, 11, 0.1);
      `;
    } else if (props.status === 'out-of-stock') {
      return `
        filter: grayscale(100%);
        opacity: 0.8;
      `;
    }
    return '';
  }}

  &:hover {
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
    transform: translateY(-2px);
  }
`;

const AccessoryImage = styled.div`
  width: 100%;
  aspect-ratio: 1;
  background-size: cover;
  background-position: center;
  background-color: #f1f5f9;
  position: relative;
  transition: transform 0.5s ease;

  ${AccessoryCard}:hover & {
    transform: scale(1.05);
  }
`;

const AccessoryPrice = styled.div`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  font-size: 0.75rem;
  font-weight: 700;
  background: rgba(255, 255, 255, 0.9);
  color: #374151;

  ${props => props.status === 'critical' && `
    background: #dc2626;
    color: white;
  `}
`;

const CriticalIndicator = styled.div`
  position: absolute;
  top: -0.25rem;
  right: -0.25rem;
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  background: #dc2626;
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    font-size: 0.5rem;
    color: white;
    font-weight: 700;
  }
`;

const OutOfStockOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
  ${AccessoryCard}:hover & {
    opacity: 0;
  }
`;

const OutOfStockText = styled.span`
  color: white;
  font-size: 0.875rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

const AccessoryContent = styled.div`
  padding: 1rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  ${props => props.status === 'critical' && `
    background: rgba(220, 38, 38, 0.05);
  `}
`;

const AccessoryCategory = styled.p`
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 0.25rem;

  ${props => {
    if (props.status === 'critical') {
      return `
        color: #dc2626;

        span:first-child {
          font-size: 0.75rem;
        }
      `;
    }
    return `
      color: #137fec;
    `;
  }}
`;

const AccessoryName = styled.h3`
  font-size: 0.875rem;
  font-weight: 700;
  color: #0d141b;
  margin: 0;
  line-height: 1.25;
`;

const AccessorySKU = styled.p`
  font-size: 0.75rem;
  color: #64748b;
  font-family: 'Monaco', 'Menlo', monospace;
  margin: 0.25rem 0 0 0;
`;

const AccessoryFooter = styled.div`
  margin-top: auto;
  padding-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StockInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const StockLabel = styled.span`
  font-size: 0.75rem;
  color: #64748b;
  font-weight: 500;
`;

const StockValue = styled.span`
  font-size: 0.875rem;
  font-weight: 700;

  ${props => {
    if (props.status === 'critical' || props.status === 'out-of-stock') {
      return 'color: #dc2626;';
    } else if (props.status === 'low') {
      return 'color: #f59e0b;';
    }
    return 'color: #10b981;';
  }}
`;

const ActionButton = styled.button`
  width: 2rem;
  height: 2rem;
  border-radius: 0.5rem;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  ${props => {
    if (props.variant === 'restock') {
      return `
        background: #dc2626;
        color: white;

        &:hover {
          background: #b91c1c;
        }
      `;
    } else if (props.variant === 'order') {
      return `
        background: #137fec;
        color: white;

        &:hover {
          background: #0ea5e9;
        }
      `;
    }
    return `
      background: #f1f5f9;
      color: #64748b;

      &:hover {
        background: #137fec;
        color: white;
      }
    `;
  }}

  span {
    font-size: 1.125rem;
  }
`;

const Pagination = styled.div`
  margin-top: 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  background: white;
  border-radius: 0.75rem;
  border: 1px solid #e2e8f0;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

const PaginationInfo = styled.p`
  font-size: 0.875rem;
  color: #64748b;
  margin: 0;

  span {
    font-weight: 700;
    color: #0d141b;
  }
`;

const PaginationControls = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const PaginationButton = styled.button`
  width: 2.25rem;
  height: 2.25rem;
  border-radius: 0.5rem;
  border: 1px solid #e2e8f0;
  background: white;
  color: #64748b;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover:not(:disabled) {
    background: #f9fafb;
    border-color: #137fec;
    color: #137fec;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  ${props => props.active && `
    background: #137fec;
    color: white;
    border-color: #137fec;
  `}

  span {
    font-size: 1.125rem;
  }
`;

const PaginationDots = styled.span`
  color: #9ca3af;
  padding: 0 0.25rem;
`;

// Recent Activity Section
const RecentActivitySection = styled.div`
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 1rem;
  padding: 1.5rem;
  margin-top: 1.5rem;
`;

const RecentActivityHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;

  div h3 {
    font-size: 1.125rem;
    font-weight: 700;
    color: #0d141b;
    margin: 0 0 0.25rem 0;
  }

  div p {
    font-size: 0.875rem;
    color: #64748b;
    margin: 0;
  }
`;

const RefreshButton = styled.button`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  border: 1px solid #e2e8f0;
  background: white;
  color: #64748b;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;

  &:hover {
    background: #f1f5f9;
    color: #0d141b;
  }

  &:active {
    transform: rotate(180deg);
  }
`;

const NoActivityMessage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3rem 1rem;
  text-align: center;

  p:first-of-type {
    font-size: 1rem;
    font-weight: 600;
    color: #64748b;
    margin: 1rem 0 0.25rem 0;
  }

  p:last-of-type {
    font-size: 0.875rem;
    color: #94a3b8;
    margin: 0;
  }
`;

// Footer Info
const FooterInfo = styled.div`
  background: rgba(19, 127, 236, 0.05);
  border: 1px solid rgba(19, 127, 236, 0.1);
  border-radius: 0.75rem;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

const FooterContent = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  div:last-child {
    p:first-child {
      font-weight: 700;
      color: #0d141b;
      margin: 0 0 0.25rem 0;
    }

    p:last-child {
      color: #64748b;
      font-size: 0.875rem;
      margin: 0;
    }
  }
`;

const FooterIcon = styled.div`
  width: 3rem;
  height: 3rem;
  background: #137fec;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
`;

const FooterActions = styled.div`
  display: flex;
  gap: 0.75rem;
`;

const FooterButton = styled.button`
  padding: 0.5rem 1.5rem;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s ease;

  ${props => props.$primary ? `
    background: #137fec;
    color: white;
    border: none;
    box-shadow: 0 4px 6px rgba(19, 127, 236, 0.2);

    &:hover {
      background: #0ea5e9;
      transform: translateY(-1px);
    }
  ` : `
    background: white;
    color: #374151;
    border: 1px solid #e2e8f0;

    &:hover {
      background: #f8fafc;
    }
  `}
`;

// Admin Dashboard Component
const AdminDashboard = ({ onLogout, currentUser, onOpenPrevision, onOpenFuelUsage, showFuelUsage, onCloseFuelUsage }) => {
  const [activeSection, setActiveSection] = useState('overview');
  const [isAddVehicleModalOpen, setIsAddVehicleModalOpen] = useState(false);
  const [editingVehicle, setEditingVehicle] = useState(null);
  const [isAddAccessoryModalOpen, setIsAddAccessoryModalOpen] = useState(false);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showAccessories, setShowAccessories] = useState(false);

  // API Data State
  const [vehicles, setVehicles] = useState([]);
  const [accessories, setAccessories] = useState([]);
  const [users, setUsers] = useState([]);
  const [notifications, setNotifications] = useState([]);
  const [messages, setMessages] = useState([]);
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [recentActivities, setRecentActivities] = useState([]);
  const [selectedReport, setSelectedReport] = useState(null);
  const [isReportModalOpen, setIsReportModalOpen] = useState(false);
  const [editingUser, setEditingUser] = useState(null);
  const [isEditUserModalOpen, setIsEditUserModalOpen] = useState(false);
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  useEffect(() => {
    // Initialize Feather Icons
    if (window.feather) {
      window.feather.replace();
    }

    // Fetch initial data
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      setLoading(true);
      setError(null);

      // Fetch data in parallel
      const [vehiclesRes, accessoriesRes, notificationsRes, messagesRes, recentActivitiesRes] = await Promise.allSettled([
        vehiclesAPI.getVehicles(),
        accessoriesAPI.getAccessories(),
        notificationsAPI.getUnread(),
        messagesAPI.getInbox(),
        activitiesAPI.getRecentActivities() // Get recent activities for activity feed
      ]);

      // Handle vehicles
      if (vehiclesRes.status === 'fulfilled') {
        setVehicles(vehiclesRes.value?.results || []);
      }

      // Handle accessories
      if (accessoriesRes.status === 'fulfilled') {
        setAccessories(accessoriesRes.value?.results || []);
      }

      // Handle notifications
      if (notificationsRes.status === 'fulfilled') {
        setNotifications(notificationsRes.value);
      }

      // Handle messages
      if (messagesRes.status === 'fulfilled') {
        setMessages(messagesRes.value);
      }

      // Handle recent activities for activity feed
      if (recentActivitiesRes.status === 'fulfilled') {
        const activities = recentActivitiesRes.value;
        // Handle both paginated and non-paginated responses
        const activitiesArray = Array.isArray(activities) 
          ? activities 
          : (activities?.results || []);
        setRecentActivities(activitiesArray);
      }

    } catch (err) {
      console.error('Error fetching dashboard data:', err);
      setError('Failed to load dashboard data');
    } finally {
      setLoading(false);
    }
  };

  const handleViewDetails = async (vehicle) => {
    try {
      // Fetch full vehicle details with all fields (mileage, fuel_type, color, etc.)
      const fullVehicleData = await vehiclesAPI.getVehicle(vehicle.id);
      setSelectedVehicle(fullVehicleData);
      setActiveSection('vehicles'); // Ensure we're on vehicles section
    } catch (error) {
      console.error('Error fetching vehicle details:', error);
      // Fallback to the vehicle from the list if fetch fails
      setSelectedVehicle(vehicle);
      setActiveSection('vehicles');
    }
  };

  const handleBackToDashboard = () => {
    setSelectedVehicle(null);
  };

  const handleEditVehicle = async (vehicle) => {
    setEditingVehicle(vehicle);
    setIsAddVehicleModalOpen(true);
  };

  const handleDeleteVehicle = async (vehicleId) => {
    try {
      await vehiclesAPI.deleteVehicle(vehicleId);
      // Refresh vehicles list
      const updatedVehicles = await vehiclesAPI.getVehicles();
      setVehicles(updatedVehicles?.results || []);
    } catch (error) {
      console.error('Error deleting vehicle:', error);
      // TODO: Show error message to user
    }
  };

  const handleVehicleStatusChange = (vehicleId, newStatus) => {
    // Update the vehicle in the local state
    setVehicles(prev => prev.map(v => 
      v.id === vehicleId ? { ...v, status: newStatus } : v
    ));
    // Also update selectedVehicle if it's the one being changed
    if (selectedVehicle && selectedVehicle.id === vehicleId) {
      setSelectedVehicle(prev => ({ ...prev, status: newStatus }));
    }
  };

  const handleSaveVehicle = async (vehicleData, editingVehicle) => {
    try {
      if (editingVehicle) {
        // Update existing vehicle
        await vehiclesAPI.updateVehicle(editingVehicle.id, vehicleData);
      } else {
        // Create new vehicle
        await vehiclesAPI.createVehicle(vehicleData);
      }
      
      // Refresh vehicles list after successful API call
      const updatedVehicles = await vehiclesAPI.getVehicles();
      // Handle both response formats: {results: []} and direct array
      const vehiclesList = Array.isArray(updatedVehicles) 
        ? updatedVehicles 
        : (updatedVehicles?.results || []);
      setVehicles(vehiclesList);
      
      setIsAddVehicleModalOpen(false);
      setEditingVehicle(null);
      setSelectedVehicle(null); // Clear selected vehicle to show list view
    } catch (error) {
      console.error('Error saving vehicle:', error);
      throw error; // Re-throw so the modal can catch and display error
    }
  };


  const menuItems = [
    { id: 'overview', label: 'Overview', icon: 'bar-chart-2' },
    { id: 'vehicles', label: 'Vehicles', icon: 'truck' },
    { id: 'accounts', label: 'Accounts', icon: 'users' },
    { id: 'accessories', label: 'Accessories', icon: 'package' },
    { id: 'repairs', label: 'Repairs', icon: 'tool' },
    { id: 'breakdowns', label: 'Breakdowns', icon: 'alert-circle' },
    { id: 'messages', label: 'Messages', icon: 'message-circle' },
    { id: 'reports', label: 'Reports', icon: 'bar-chart' },
    { id: 'fuel', label: 'Fuel', icon: 'droplet', isFuel: true },
  ];

  // Calculate KPI data from API data
  const activeVehicles = vehicles.filter(v => v.status === 'active').length;
  const maintenanceVehicles = vehicles.filter(v => v.status === 'maintenance').length;
  const lowStockItems = accessories.filter(a => a.stock_level <= a.min_stock_level).length;

  const kpiData = [
    {
      title: 'Total Vehicles',
      value: vehicles.length.toString(),
      trend: vehicles.length > 0 ? `${activeVehicles} active` : 'No data',
      positive: vehicles.length > 0,
      icon: 'truck',
      bg: '#137fec',
      color: '#137fec'
    },
    {
      title: 'Vehicles in Maintenance',
      value: maintenanceVehicles.toString(),
      trend: maintenanceVehicles > 0 ? `${maintenanceVehicles} need service` : 'All operational',
      positive: maintenanceVehicles === 0,
      icon: 'settings',
      bg: '#f59e0b',
      color: '#d97706'
    },
    {
      title: 'Total Accessories',
      value: accessories.length.toString(),
      trend: accessories.length > 0 ? `${lowStockItems} low stock` : 'No data',
      positive: lowStockItems === 0,
      icon: 'package',
      bg: '#10b981',
      color: '#059669'
    },
    {
      title: 'Low Stock Alerts',
      value: lowStockItems.toString(),
      trend: lowStockItems > 0 ? 'Restock needed' : 'All stocked',
      positive: lowStockItems === 0,
      icon: 'alert-triangle',
      bg: '#ef4444',
      color: '#dc2626'
    }
  ];

  // Transform activities into activity data
  const activityData = recentActivities.map(activity => ({
    id: activity.id,
    user: activity.user_name && activity.user_last_name 
      ? `${activity.user_name} ${activity.user_last_name}` 
      : (activity.user_name || 'System'),
    action: activity.description,
    time: new Date(activity.created_at).toLocaleString(),
    avatar: activity.user_avatar,
    isSystem: !activity.user,
    icon: activity.icon
  }));

  // Transform accessories data from API
  const accessoriesData = accessories.slice(0, 10).map(accessory => ({
    id: accessory.id,
    name: accessory.name,
    sku: accessory.sku,
    category: accessory.category,
    price: parseFloat(accessory.price),
    stockLevel: accessory.stock_level,
    status: accessory.stock_level === 0 ? 'out-of-stock' :
            accessory.stock_level <= accessory.min_stock_level ? 'low' :
            accessory.stock_level <= accessory.min_stock_level * 2 ? 'critical' : 'normal',
    image: accessory.image || 'https://via.placeholder.com/200x150?text=No+Image'
  }));

  // Vehicle Management Data
  const vehicleData = [
    {
      id: 1,
      name: 'Ford F-150',
      plate: 'CAMPUS-01',
      status: 'Active',
      statusColor: 'green',
      location: 'Main Lot',
      fuelLevel: 75,
      fuelType: 'gas',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAInBQhkfjUtmtJzaEy1i7z5vgrg8OI27IbDR7IrTJZzf-K5kvkxNdWtwXyjyXoNH95dLJN1N3hVudMI8F8um3PHgr5TVq-bI1o1RmUpcxNu8h0Zwx2wpLtt5lCovAESW9kMRPTGaR1-b3_EBbJPo8FsF4nPaGGnCvYOwBIJjI0v6AvgKm8S08JSecBXEOmC_Ka21zw_u6Y3u0zYSUhwsFTR97d0gd1nTAwmg0T0b1LTVp9_SJOwlcnGbCKFcdBAH7dSI9-bGFEsyU',
      brandModel: 'Ford F-150',
      year: '2023',
      licensePlate: 'ABC-1234',
      vin: '1FTEW1CP6PKFXXXXX',
      odometer: '12450',
      fuelEfficiency: '19.2',
      fuelCapacity: '23 gal',
      primaryDriver: 'John Smith',
      driverContact: '+1 (555) 123-4567',
      driverLicense: 'DL123456789',
      repairHistory: [
        { date: 'Oct 12, 2023', description: 'Routine Oil Change & Filter', cost: '84.50', parts: 'Full Synthetic 5W-30, Oil Filter 22A' },
        { date: 'Sep 05, 2023', description: 'Brake Pad Replacement (Front)', cost: '242.00', parts: 'Heavy Duty Brake Pads (Set of 2)' },
        { date: 'Jun 18, 2023', description: 'Tire Rotation & Alignment', cost: '115.00', parts: 'None' }
      ]
    },
    {
      id: 2,
      name: 'Toyota Prius',
      plate: 'CAMPUS-05',
      status: 'In Repair',
      statusColor: 'amber',
      location: 'Shop A',
      fuelLevel: 0,
      fuelType: 'hybrid',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDPy6rv3zvP1AzP9iJNK-g1tRLh_8_wTjqdl1axPeZN9IDtyhodfTBye73wC4qAxTylvXFbAo_sVq-hLFpqgkH5vsTfpCwvbc8fEQGNDkRe7yKfjXTl-7jQQycPcjfTako_S8TQWeoFs1fSqVrMvK0LXSivMivTjmlKAMq2eVVfnnWYKOlvnXN0iUp8jURwkQ_fkfofMw1hNj4FZFxQxeiR6KnMQIlUypZLAB1OMVAUe0dc0bKHSP6KUxTm9RJrzvlPXKtv3SRgb2U',
      brandModel: 'Toyota Prius',
      year: '2022',
      licensePlate: 'XYZ-5678',
      vin: 'JTDKAMFU2N316XXXX',
      odometer: '45600',
      fuelEfficiency: '58',
      fuelCapacity: '11.3 gal',
      primaryDriver: 'Jane Doe',
      driverContact: '+1 (555) 987-6543',
      driverLicense: 'DL987654321',
      repairHistory: [
        { date: 'Nov 15, 2023', description: 'Hybrid Battery Check', cost: '150.00', parts: 'Battery Diagnostic' }
      ]
    },
    {
      id: 3,
      name: 'Chevy Silverado',
      plate: 'CAMPUS-09',
      status: 'Active',
      statusColor: 'green',
      location: 'East Yard',
      fuelLevel: 42,
      fuelType: 'gas',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAgcR7SwDplAjaXRJdL7ToU2EsJ7r9pK0ni9jgskJzyPkMWWdt-SdHwpnt5VIJa94uKcYcH2fXEHOoESVWjwTj-0nKC4TabfSWSD29WGIBJ028ufHh6jhF5ve5FrPvW_LL5Sw4U5lgGDjN2CCptAraj98PVn4dKRPN51U3kPzu-hZn9znwKp7aol53aT-Xj7y5LdFqzWKSLI4YiWc0JjfREEtSJjtMOUQrAHMXcIiSaRnPCNaMxp8ygemLlBjmiLiZrt5F-c29N5iw',
      brandModel: 'Chevy Silverado',
      year: '2021',
      licensePlate: 'DEF-9012',
      vin: '1GCUYDED1MZXXXXXX',
      odometer: '78200',
      fuelEfficiency: '16.8',
      fuelCapacity: '24 gal',
      primaryDriver: 'Bob Johnson',
      driverContact: '+1 (555) 456-7890',
      driverLicense: 'DL456789012',
      repairHistory: []
    },
    {
      id: 4,
      name: 'Honda Civic',
      plate: 'CAMPUS-12',
      status: 'Maintenance',
      statusColor: 'blue',
      location: 'Garage 2',
      fuelLevel: 90,
      fuelType: 'gas',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDBNvGiURG1CONATY6-PZomFDaQxr22MedkllI88dvT7odwG9ABR5QrQMmutAQtXF1IZsc-4CzQe42-1y1hqA04j4ld8JqRQTCklCYSlkJkuAoYklzBxDRJUGOPWP8FWfSKIfjDWa400LA-KDAsPnI1eYXUhGPYmOD3Ome4UE-hSBP3INLnwtlta-QmcLN6nTnF89OAgh6C_RiZ9bQWY4r14UycjXvmkgc1NH_dg5SqHpqirmtxiimGpW3NQfJFn0wBhlBMqmWH_o',
      brandModel: 'Honda Civic',
      year: '2020',
      licensePlate: 'GHI-3456',
      vin: '2HGFC2F59LHXXXXXX',
      odometer: '32100',
      fuelEfficiency: '32',
      fuelCapacity: '12.4 gal',
      primaryDriver: 'Alice Brown',
      driverContact: '+1 (555) 234-5678',
      driverLicense: 'DL234567890',
      repairHistory: [
        { date: 'Aug 20, 2023', description: 'Air Filter Replacement', cost: '45.00', parts: 'Cabin Air Filter' }
      ]
    },
    {
      id: 5,
      name: 'Ford Transit',
      plate: 'CAMPUS-03',
      status: 'Active',
      statusColor: 'green',
      location: 'Logistics Hub',
      fuelLevel: 12,
      fuelType: 'gas',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCd_C27XXxpcGe1p0ctdahwRwOnbFb6zrKGXdUUzEYSYiXM3-HeujtOWuUGy5V8UFaBCNEnaJ2h-6lj1U74M3q2a5Cg1xzp0yp-JmpBSyQl-rSI3rdA7vpDq0E4I6S9PNGOyfEkIXCRK4q1KZwOIj9aUriwkY7y5fOEc7q7jb_9pakyN_j9Y5EmojoxV2DMCB2HLtybOnfO2Nmq8w84j_w15cLgb3k_TKlYyu20pz9jFsg_DtbuYF1h4xAkX7BeaYrF3oTFwuJt2LE',
      brandModel: 'Ford Transit',
      year: '2022',
      licensePlate: 'JKL-7890',
      vin: '1FTYE1ZM8JKAXXXXX',
      odometer: '45200',
      fuelEfficiency: '14.5',
      fuelCapacity: '25 gal',
      primaryDriver: 'Mike Wilson',
      driverContact: '+1 (555) 321-0987',
      driverLicense: 'DL321098765',
      repairHistory: [
        { date: 'Jul 10, 2023', description: 'Transmission Service', cost: '180.00', parts: 'Transmission Fluid' }
      ]
    },
    {
      id: 6,
      name: 'Tesla Model 3',
      plate: 'CAMPUS-07',
      status: 'Active',
      statusColor: 'green',
      location: 'EV Charging',
      fuelLevel: 88,
      fuelType: 'electric',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDoR_R-RkJm9jvbyuo3QPcO5kHLohsQO2GwlI9GfHnvpwJXnAlLoQ7-_sJO1SwpLPKVX003LOZmImkActY-cm9iOTEYq_MRJ9vsLoyt-BaKOUOp7tZ_BNPF8EQbn8eEml1tj7I4B6JKJ5MP9wu-yXynd-bTILb0Hfo1HRhWrSj9nsYVAEA2up_KJpFsfccGrzoovuvwirYVI7LOgg_ykD-oETcN5ybq5YWrCfgOpK0oLjGkoKyjNe2qV7bpv4hvaK3x6nP73J8QiMk',
      brandModel: 'Tesla Model 3',
      year: '2023',
      licensePlate: 'MNO-1234',
      vin: '5YJ3E1EA5JFXXXXXX',
      odometer: '15800',
      fuelEfficiency: '132',
      fuelCapacity: 'N/A',
      primaryDriver: 'Sarah Davis',
      driverContact: '+1 (555) 654-3210',
      driverLicense: 'DL654321098',
      repairHistory: []
    }
  ];

  // User Management Data
  const userData = [
    {
      id: 1,
      name: 'Alex Rivera',
      employeeId: '#8829',
      department: 'Operations',
      role: 'Admin',
      email: 'alex.r@campus.edu',
      phone: '(555) 123-4567',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBj2bWb0068v_SF3WtInIZ4uLNTe9iwxgdnj1COn3eSxWecy6qzebDyx3phykCcuYw3KvMdBIqoYIXuNp6PNYfhgfPxa1MNHx_A-oZmtlpWi_gomG8hhlUsKN7BONJrt_r5xdSI8Cki491dmTfbrtdY07sCe_5ItAVriuCvy7m15cSLioX2ylm5QMt9bQMFOP9ZflNEG9OD1Rgubn8-o9BFRqTjdmHF9DO6fXCcqkYzAkelPyamseMnBZl7e8EaQyBDH4OOcTbqKZw',
      status: 'online'
    },
    {
      id: 2,
      name: 'Sam Chen',
      employeeId: '#4412',
      department: 'Transportation',
      role: 'Driver',
      email: 's.chen@campus.edu',
      phone: '(555) 987-6543',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDaf_WsnG7nYnQ-nhA3LO20PbZ22nQ8ePanwUAQCWr0SNj3c3aYAgI55HUmwD4Lx0H4Q9z5474O8vkKFEfLwaUWJ1A7LQqOcdYmDOGlNtM-5UMPhCLaE7qRqrutISw75LvHu6VTrOpy7qtQ716CtJSs6g7hUR67I78ue0L0ZMuz69ShBbmfeftKWhJb4FcaoE-fLeSfCjHWPSnCx0QopmGFMuD77Z8oGPVKH6XDv0HhVP9eeWx814t-bFtejWJFY3fSmZDmsUXg9xI',
      status: 'offline'
    },
    {
      id: 3,
      name: 'Jordan Smith',
      employeeId: '#9021',
      department: 'Maintenance',
      role: 'Technician',
      email: 'j.smith@campus.edu',
      phone: '(555) 234-5678',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB50GxcIk9BVDH4twTsUs7rv5unJhhteRUaS8s8cGUlsX-fNyarzxqgkV2Yv6iVs0eq1VdQPDwNhNxMRNUyPGfmh9s4mHbsiEPseR1y-0AWoBuJiIP9p2b2nseE5qGk2gao84E2bKDcRo7CRNELWwmSRhJqTDbsJuR_dEB4A0idBxtx-LprBA9zg8RiMkUQakY_uqw4RNvRoziOiaU2_VjcKN4wBNWYvKmmbupbJBO7RfybAixDAj5tAqobe6YTLgo2wzdyMbcy4M4',
      status: 'online'
    },
    {
      id: 4,
      name: 'Taylor Reed',
      employeeId: '#5521',
      department: 'Transportation',
      role: 'Driver',
      email: 't.reed@campus.edu',
      phone: '(555) 777-8899',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA-5mHE42WP8aBgOUE019KF-LjByVHnOS0UX3rwDSsLYMTfgo5DhDe_8QIYdFTln6bvuqQ6JzU-AhoR5fgpV3aJ6zKK6tZ34Lki86iQXeqO12iKe2LWnhwQ6SQXJYr8iONrPnrlOTmVfp6b2jKIGNmShyrARMO0Io44XQNM0SmYuBfIhX79MdQKW5-OLQrLZg4WorEs4zMbmQ0d29WaJSUY205t84Z24ribiLUEkT6NK8ssGnGcLXqXYD1uoRwcXOwzmmiD9t--MeI',
      status: 'away'
    },
    {
      id: 5,
      name: 'Riley Page',
      employeeId: '#1022',
      department: 'Maintenance',
      role: 'Technician',
      email: 'r.page@campus.edu',
      phone: '(555) 345-6789',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCiC9R7lqxjgPcgmMiNpRMnDqKrffcMFKBQP7pSyZWaIlpI-rZhPxKfo9eCPTZjKJ5eEICnuBMn6vu4BkyLlOqsj39Xf0dsreWBHN1XYVhuEmJeG6NQHRa-ZEEZibYYzYxxdCjMAWM21IdMVgRPwJST2-zdXSQ0D5ozZt_s2hl6KlHmM-po_kA9UdngwR8HRYTmAWL15Q_RiK6DRfuPGvr0p_7lJ6gbNZtd24dCCNvH0Nr8xCf1SZf47ENt4xyFbUYA62zs0s0pciA',
      status: 'online'
    },
    {
      id: 6,
      name: 'Casey Wright',
      employeeId: '#7734',
      department: 'IT Systems',
      role: 'Admin',
      email: 'c.wright@campus.edu',
      phone: '(555) 111-2222',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAkNOE-y5KxtT1LlPtBUqakyzR5FL1LBH_9SkjExJiv1mK7ognRdRb8ZhwV-LJqV5fkVlEVXbB3o2QN_9tg2Y3JQiz5YVZxhJWAg22QAIZ7e6NOj63dW904XfWKUq5XCweIeQScJ7EEp9uJPUBujk7Uk7eIqemUpe6SLP4F98CwBuUKlhmFBhhEucDUUvkUxAJEzxnyGGjCdD4jw18HOoBMBmB3corwkU_9zzIT7_5dznaL0ntMESlglScpwpTCYrPrZcnsoka8I_A',
      status: 'online'
    },
    {
      id: 7,
      name: 'Jamie Lowe',
      employeeId: '#3341',
      department: 'Logistics',
      role: 'Driver',
      email: 'j.lowe@campus.edu',
      phone: '(555) 444-5566',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCC6JScDQz_fGcL4xaSJK3DRDeMK6jLdJ6rHXvNfN8P9t0nAqmU1egOZLLAflggkkeyJ7p6hqRIuns2RRWDYecOxi0uztjpi02zJieexVuHFjODlsom50gXeeC1Za1wc-G3o2k0MqJNaIYjoaG20udrnqzQUh5bFiV2c-TgodDGUt88ZDNui1jDTDcPF0tEyGBZUu_aIZvi_J5loR84NvgDpKIvffu5VA0xI6Rgmel6N3y0xW-rB_LvaKdMZXspZoVGvCldwJ8b2p0',
      status: 'offline'
    },
    {
      id: 8,
      name: 'Morgan Vance',
      employeeId: '#6629',
      department: 'Fleet Services',
      role: 'Technician',
      email: 'm.vance@campus.edu',
      phone: '(555) 999-0000',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC-vb3YOS-kqzJdmFMq9YqpvBHm11sQcqyouYf3idhDrUaZRdV-zZzTfc2ya9IS4zwDbN5eTDzkjy1pWtxG2njp74pPofq2ezjsFT4gS2BWvmmw270f1CoyoKWKwqM5XHdHiFmz-_75-uhZP4iLLFWA9UPgK_HjaykjiiyzyutkRGidza7prQ6LjNqOfV03QmPEzsEuIXCIWh4eTolkBf_iS4msB9CacwpLingX_RNm0TSNjtBKXs_kkn8FIlw6lR7rSUDzG3-320s',
      status: 'online'
    }
  ];

  const handleAddVehicle = () => {
    setIsAddVehicleModalOpen(true);
  };

  const handleCloseAddVehicleModal = () => {
    setIsAddVehicleModalOpen(false);
    setEditingVehicle(null);
  };

  const handleCloseAddAccessoryModal = () => {
    setIsAddAccessoryModalOpen(false);
  };

  const handleAccessoryAdded = () => {
    // Refresh accessories list
    fetchAccessories();
  };

  const handleViewProfile = () => {
    setIsProfileModalOpen(true);
  };

  const handleProfileUpdate = async () => {
    // Refresh current user data from localStorage
    const userData = localStorage.getItem('user');
    if (userData) {
      const parsedUser = JSON.parse(userData);
      setCurrentUser(parsedUser);
    }
  };

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
                <h1>Fleet Manager</h1>
                <p>Campus Operations</p>
              </LogoText>
            </LogoContainer>
          </LogoSection>

          <NavMenu>
            {menuItems.map((item) => (
              <NavItem
                key={item.id}
                href="#"
                className={activeSection === item.id ? 'active' : ''}
                style={item.isPrevision ? { background: 'linear-gradient(135deg, rgba(16, 163, 127, 0.15), rgba(5, 150, 105, 0.15))', borderLeft: '3px solid #10a37f' } : item.isFuel ? { background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.15), rgba(217, 119, 6, 0.15))', borderLeft: '3px solid #f59e0b' } : {}}
                onClick={(e) => {
                  e.preventDefault();
                  if (item.isPrevision && onOpenPrevision) {
                    onOpenPrevision();
                  } else if (item.isFuel) {
                    setActiveSection('fuel');
                  } else {
                    setActiveSection(item.id);
                  }
                }}
              >
                <i data-feather={item.icon} className="fi-icon"></i>
                <span>{item.label}</span>
              </NavItem>
            ))}
          </NavMenu>
        </SidebarTop>

        <SidebarBottom>
          {activeSection === 'accounts' ? (
            <NewVehicleButton onClick={() => console.log('Add User')}>
              <i data-feather="person_add" className="fi-icon" style={{ width: '14px', height: '14px' }}></i>
              <span>Add User</span>
            </NewVehicleButton>
          ) : activeSection === 'messages' ? (
            <NewVehicleButton onClick={() => console.log('New Message')}>
              <i data-feather="message-circle" className="fi-icon" style={{ width: '14px', height: '14px' }}></i>
              <span>New Message</span>
            </NewVehicleButton>
          ) : activeSection === 'accessories' ? (
            <NewVehicleButton onClick={() => setIsAddAccessoryModalOpen(true)}>
              <i data-feather="package" className="fi-icon" style={{ width: '14px', height: '14px' }}></i>
              <span>Add Accessory</span>
            </NewVehicleButton>
          ) : (
            <NewVehicleButton onClick={handleAddVehicle}>
              <i data-feather="plus" className="fi-icon" style={{ width: '14px', height: '14px' }}></i>
              <span>New Vehicle</span>
            </NewVehicleButton>
          )}
        </SidebarBottom>
      </Sidebar>

      <TopNav>
        <SearchContainer>
          <SearchInput>
            <input
              type="text"
              placeholder="Search vehicles, drivers, or reports..."
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

      <MainContent>
      <DashboardContent>
          {activeSection === 'overview' && (
            <>
              <DashboardHeader>
                <h2>Operational Overview</h2>
                <p>Real-time performance metrics for today, Oct 24th.</p>
              </DashboardHeader>

          <KPIGrid>
            {kpiData.map((kpi, index) => (
              <KPICard key={kpi.title}>
                <KPICardHeader>
                  <KPIIcon $bg={kpi.bg} $color={kpi.color}>
                    <i data-feather={kpi.icon} className="fi-icon"></i>
                  </KPIIcon>
                  <KPITrend $positive={kpi.positive}>
                    <i data-feather="trending-up" className="fi-icon" style={{ width: '12px', height: '12px' }}></i>
                    {kpi.trend}
                  </KPITrend>
                </KPICardHeader>
                <KPIValue>{kpi.value}</KPIValue>
                <KPILabel>{kpi.title}</KPILabel>
              </KPICard>
            ))}
          </KPIGrid>

          <RecentActivitySection>
              <RecentActivityHeader>
                <div>
                  <h3>Recent Activity</h3>
                  <p>Real-time updates from your fleet operations</p>
                </div>
                <RefreshButton onClick={() => fetchNotifications()}>
                  <span className="material-symbols-outlined">refresh</span>
                </RefreshButton>
              </RecentActivityHeader>

              <ActivityList>
                {activityData.length > 0 ? (
                  activityData.map((activity) => (
                    <ActivityItem key={activity.id}>
                      {activity.avatar ? (
                        <ActivityAvatar
                          style={{ backgroundImage: `url('${activity.avatar}')` }}
                        />
                      ) : (
                        <div style={{
                          width: '40px',
                          height: '40px',
                          background: activity.isSystem ? 'rgba(107, 114, 128, 0.1)' : 'rgba(19, 127, 236, 0.1)',
                          borderRadius: '50%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: activity.isSystem ? '#6b7280' : '#137fec'
                        }}>
                          <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>
                            {activity.isSystem ? 'settings' : 'notifications'}
                          </span>
                        </div>
                      )}
                      <ActivityContent>
                        <p>
                          <span>{activity.user}</span> {activity.action}
                        </p>
                        <ActivityTime>
                          <span className="material-symbols-outlined" style={{ fontSize: '12px' }}>schedule</span>
                          {activity.time}
                        </ActivityTime>
                      </ActivityContent>
                    </ActivityItem>
                  ))
                ) : (
                  <NoActivityMessage>
                    <span className="material-symbols-outlined" style={{ fontSize: '48px', opacity: 0.5 }}>inbox</span>
                    <p>No recent activity</p>
                    <p>Activities will appear here as they happen</p>
                  </NoActivityMessage>
                )}
              </ActivityList>

              <ActivityFooter>
                <ViewAllButton onClick={() => setActiveSection('notifications')}>
                  View All Notifications
                </ViewAllButton>
              </ActivityFooter>
            </RecentActivitySection>

            <FooterInfo>
              <FooterContent>
                <FooterIcon>
                  <span className="material-symbols-outlined">help_center</span>
                </FooterIcon>
                <div>
                  <p>Need support with fleet operations?</p>
                  <p>Our technical team is available 24/7 for campus emergencies.</p>
                </div>
              </FooterContent>
              <FooterActions>
                <FooterButton>Contact Support</FooterButton>
                <FooterButton $primary>Emergency Portal</FooterButton>
              </FooterActions>
            </FooterInfo>
            </>
          )}

          {activeSection === 'accessories' && (
            <AccessoriesPage
              onBack={() => setActiveSection('overview')}
              showHeader={false}
            />
          )}

          {activeSection === 'fuel' && (
            <FuelUsagePage
              onBack={() => setActiveSection('overview')}
              embedded={true}
            />
          )}

          {activeSection === 'accounts' && (
            <UserManagementPage
              onBack={() => setActiveSection('overview')}
              showHeader={false}
            />
          )}

          {activeSection === 'accounts_old' && (
            <>
              <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-8">
                <div className="flex flex-col gap-1">
                  <h1 className="text-slate-900 dark:text-white text-4xl font-black leading-tight tracking-[-0.033em] flex items-center gap-3">
                    <span className="material-symbols-outlined text-5xl text-primary">groups</span>
                    User Directory
                  </h1>
                  <p className="text-slate-500 dark:text-slate-400 text-base font-normal">Manage and oversee all campus staff, drivers, and technicians.</p>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700">
                  <span className="material-symbols-outlined text-[18px]">groups</span>
                  <span className="font-bold text-slate-900 dark:text-white">124</span> Total Staff
                </div>
              </div>

              <div className="mb-6">
                <div className="flex gap-2 flex-wrap">
                  <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-primary text-white px-4 text-sm font-semibold transition-all">
                    All Roles
                  </button>
                  <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 px-4 text-sm font-medium hover:bg-slate-300 dark:hover:bg-slate-700 transition-all">
                    Admins
                    <span className="bg-slate-300 dark:bg-slate-700 text-[10px] px-1.5 rounded-full">12</span>
                  </button>
                  <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 px-4 text-sm font-medium hover:bg-slate-300 dark:hover:bg-slate-700 transition-all">
                    Drivers
                    <span className="bg-slate-300 dark:bg-slate-700 text-[10px] px-1.5 rounded-full">84</span>
                  </button>
                  <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 px-4 text-sm font-medium hover:bg-slate-300 dark:hover:bg-slate-700 transition-all">
                    Technicians
                    <span className="bg-slate-300 dark:bg-slate-700 text-[10px] px-1.5 rounded-full">28</span>
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
                <div className="flex gap-2 flex-wrap">
                  <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-primary text-white px-4 text-sm font-semibold transition-all">
                    All Roles
                  </button>
                  <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 px-4 text-sm font-medium hover:bg-slate-300 dark:hover:bg-slate-700 transition-all">
                    Admins
                    <span className="bg-slate-300 dark:bg-slate-700 text-[10px] px-1.5 rounded-full">12</span>
                  </button>
                  <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 px-4 text-sm font-medium hover:bg-slate-300 dark:hover:bg-slate-700 transition-all">
                    Drivers
                    <span className="bg-slate-300 dark:bg-slate-700 text-[10px] px-1.5 rounded-full">84</span>
                  </button>
                  <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 px-4 text-sm font-medium hover:bg-slate-300 dark:hover:bg-slate-700 transition-all">
                    Technicians
                    <span className="bg-slate-300 dark:bg-slate-700 text-[10px] px-1.5 rounded-full">28</span>
                  </button>
                </div>
                <div className="flex gap-2">
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

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {userData.map((user) => (
                  <div key={user.id} className="group bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-all flex flex-col p-5">
                    <div className="flex justify-between items-start mb-4">
                      <div className="relative">
                        <div className="w-16 h-16 rounded-full bg-center bg-cover border-2 border-white dark:border-slate-800 shadow-sm" style={{backgroundImage: `url("${user.avatar}")`}}></div>
                        <div className={`absolute bottom-0 right-0 w-4 h-4 border-2 border-white dark:border-slate-900 rounded-full ${
                          user.status === 'online' ? 'bg-green-500' :
                          user.status === 'away' ? 'bg-orange-400' : 'bg-slate-300 dark:bg-slate-600'
                        }`}></div>
                      </div>
                      <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                        user.role === 'Admin' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300' :
                        user.role === 'Driver' ? 'bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300' :
                        'bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300'
                      }`}>
                        {user.role}
                      </span>
                    </div>
                    <div className="mb-4">
                      <h3 className="text-slate-900 dark:text-white font-bold text-lg leading-tight">{user.name}</h3>
                      <p className="text-slate-500 dark:text-slate-400 text-sm">{user.employeeId} • {user.department}</p>
                    </div>
                    <div className="space-y-2 mb-6">
                      <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                        <span className="material-symbols-outlined text-[18px]">mail</span>
                        <span className="text-xs truncate">{user.email}</span>
                      </div>
                      <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                        <span className="material-symbols-outlined text-[18px]">call</span>
                        <span className="text-xs">{user.phone}</span>
                      </div>
                    </div>
                    <div className="mt-auto grid grid-cols-2 gap-3">
                      <button className="flex items-center justify-center gap-2 h-9 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-sm font-semibold hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
                        <span className="material-symbols-outlined text-[18px]">edit</span>
                        Edit
                      </button>
                      <button className="flex items-center justify-center gap-2 h-9 rounded-lg bg-primary text-white text-sm font-semibold hover:bg-primary/90 transition-colors shadow-sm shadow-primary/20">
                        <span className="material-symbols-outlined text-[18px]">chat</span>
                        Message
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 flex flex-col items-center gap-4">
                <button className="px-8 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 font-bold hover:bg-slate-50 dark:hover:bg-slate-800 transition-all flex items-center gap-2">
                  <span>Load More Users</span>
                  <span className="material-symbols-outlined">expand_more</span>
                </button>
                <p className="text-slate-500 dark:text-slate-400 text-xs">Showing 8 of 124 staff members</p>
              </div>
            </>
          )}

          {activeSection === 'messages' && (
            <NotificationsPage
              onBack={() => setActiveSection('overview')}
              showHeader={false}
            />
          )}

          {activeSection === 'repairs' && (
            <RepairRecordsReport
              onBack={() => setActiveSection('overview')}
            />
          )}

          {activeSection === 'breakdowns' && (
            <BreakdownsReport
              onBack={() => setActiveSection('overview')}
            />
          )}

          {activeSection === 'reports' && (
            <ReportsPage
              onBack={() => setActiveSection('overview')}
            />
          )}

          {activeSection === 'vehicles' && selectedVehicle ? (
            <VehicleDetailsPage
              vehicle={selectedVehicle}
              onBack={handleBackToDashboard}
              onEdit={handleEditVehicle}
              onStatusChange={handleVehicleStatusChange}
              showHeader={false}
            />
          ) : activeSection === 'vehicles' && (
            <>
              <VehicleHeader>
                <VehicleTitle>
                  <h2>Vehicle Inventory</h2>
                  <p>Manage and track {vehicleData.length} vehicles across campus</p>
                </VehicleTitle>

                <FilterContainer>
                  <FilterChip>
                    <span>Status: All</span>
                    <span className="material-symbols-outlined">expand_more</span>
                  </FilterChip>
                  <FilterChip>
                    <span>Type: All</span>
                    <span className="material-symbols-outlined">expand_more</span>
                  </FilterChip>
                  <FilterButton>
                    <span className="material-symbols-outlined">filter_list</span>
                  </FilterButton>
                </FilterContainer>
              </VehicleHeader>

              <VehicleGrid>
                {loading ? (
                  <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '2rem' }}>
                    Loading vehicles...
                  </div>
                ) : error ? (
                  <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '2rem', color: 'red' }}>
                    Error loading vehicles: {error}
                  </div>
                ) : vehicles.length === 0 ? (
                  <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '2rem' }}>
                    No vehicles found. Add your first vehicle!
                  </div>
                ) : (
                  vehicles.map((vehicle) => (
                    <VehicleCard key={vehicle.id}>
                      <VehicleImage style={{ position: 'relative', overflow: 'hidden' }}>
                        {vehicle.image && vehicle.image.trim() ? (
                          <img 
                            src={vehicle.image.startsWith('http') ? vehicle.image : `http://127.0.0.1:8001${vehicle.image}`}
                            alt={`${vehicle.year} ${vehicle.make} ${vehicle.model}`}
                            style={{
                              width: '100%',
                              height: '100%',
                              objectFit: 'cover',
                              objectPosition: 'center',
                              position: 'absolute',
                              top: 0,
                              left: 0
                            }}
                            onError={(e) => {
                              e.target.style.display = 'none';
                            }}
                          />
                        ) : (
                          <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '100%',
                            height: '100%',
                            backgroundColor: '#f1f5f9'
                          }}>
                            <div style={{
                              fontSize: '3rem',
                              color: '#cbd5e1'
                            }}>
                              🚗
                            </div>
                          </div>
                        )}
                        <VehicleStatus status={vehicle.status} style={{ position: 'relative', zIndex: 20 }}>
                          {vehicle.status}
                        </VehicleStatus>
                      </VehicleImage>

                      <VehicleContent>
                        <VehicleName>{vehicle.year} {vehicle.make} {vehicle.model}</VehicleName>
                        <VehicleDetails>
                          <VehiclePlate>{vehicle.license_plate}</VehiclePlate>
                          <VehicleLocation>
                            <span className="material-symbols-outlined">
                              {vehicle.status === 'maintenance' ? 'engineering' : 'location_on'}
                            </span>
                            {vehicle.assigned_driver_name || 'Unassigned'}
                          </VehicleLocation>
                        </VehicleDetails>
                      </VehicleContent>

                      <VehicleFooter>
                        <FuelIndicator>
                          <span className="material-symbols-outlined">speed</span>
                          <span>{vehicle.mileage?.toLocaleString() || 0} mi</span>
                        </FuelIndicator>
                        <ViewDetails onClick={() => handleViewDetails(vehicle)}>
                          View Details
                          <i data-feather="arrow-right" className="fi-icon"></i>
                        </ViewDetails>
                      </VehicleFooter>
                    </VehicleCard>
                  ))
                )}

                <AddVehicleCard onClick={handleAddVehicle}>
                  <AddVehicleIcon>
                    <span className="material-symbols-outlined">add</span>
                  </AddVehicleIcon>
                  <AddVehicleText>
                    <p>Add New Vehicle</p>
                    <p>Register a new asset to the fleet inventory</p>
                  </AddVehicleText>
                </AddVehicleCard>
              </VehicleGrid>

              <LoadMoreButton>
                Load More Vehicles
              </LoadMoreButton>
            </>
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

      <AddVehicleModal
        isOpen={isAddVehicleModalOpen}
        onClose={handleCloseAddVehicleModal}
        onSave={handleSaveVehicle}
        editingVehicle={editingVehicle}
      />

      <AddAccessoryModal
        isOpen={isAddAccessoryModalOpen}
        onClose={handleCloseAddAccessoryModal}
        onAccessoryAdded={handleAccessoryAdded}
      />

      <UserProfileModal
        isOpen={isProfileModalOpen}
        onClose={() => setIsProfileModalOpen(false)}
        currentUser={currentUser}
        onProfileUpdate={handleProfileUpdate}
      />

      {/* Prevision AI Chat Widget - Always visible */}
      <PrevisionChatWidget vehicles={vehicles} />

    </Container>
  );
};

export default AdminDashboard;