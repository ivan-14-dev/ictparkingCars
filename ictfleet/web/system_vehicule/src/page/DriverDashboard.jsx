import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import UserProfileDropdown from '../component/UserProfileDropdown';
import UserProfileModal from '../component/UserProfileModal';
import VehicleDetailsModal from '../component/VehicleDetailsModal';
import PrevisionChatWidget from '../component/PrevisionChatWidget';
import { vehiclesAPI, messagesAPI, isDriver, authAPI, repairAPI, fuelAPI } from '../service/api';

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

// Reports Section Styles
const ReportsContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;

const ReportsHeader = styled.div`
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

const ReportsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ReportCard = styled.div`
  background: white;
  border-radius: 0.75rem;
  border: 1px solid #e2e8f0;
  padding: 1.5rem;
  transition: all 0.2s ease;

  &:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
`;

const ReportHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
`;

const ReportTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: 700;
  color: #0d141b;
  margin: 0;
`;

const ReportDate = styled.span`
  font-size: 0.75rem;
  color: #64748b;
  display: flex;
  align-items: center;
  gap: 0.25rem;
`;

const ReportBody = styled.p`
  font-size: 0.875rem;
  color: #475569;
  margin: 0 0 1rem 0;
  line-height: 1.6;
`;

const ReportBadge = styled.span`
  display: inline-block;
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 600;
  background-color: ${props => {
    if (props.$type?.toLowerCase().includes('issue')) return 'rgba(239, 68, 68, 0.1)';
    if (props.$type?.toLowerCase().includes('daily')) return 'rgba(59, 130, 246, 0.1)';
    if (props.$type?.toLowerCase().includes('weekly')) return 'rgba(16, 185, 129, 0.1)';
    return 'rgba(100, 116, 139, 0.1)';
  }};
  color: ${props => {
    if (props.$type?.toLowerCase().includes('issue')) return '#ef4444';
    if (props.$type?.toLowerCase().includes('daily')) return '#3b82f6';
    if (props.$type?.toLowerCase().includes('weekly')) return '#10b981';
    return '#64748b';
  }};
`;

const EmptyReports = styled.div`
  text-align: center;
  padding: 4rem 2rem;
  background: white;
  border-radius: 0.75rem;
  border: 1px solid #e2e8f0;

  span {
    font-size: 4rem;
    color: #cbd5e1;
  }

  h3 {
    font-size: 1.125rem;
    font-weight: 700;
    color: #0d141b;
    margin: 1rem 0 0.5rem 0;
  }

  p {
    color: #64748b;
    font-size: 0.875rem;
    margin: 0;
  }
`;

const LoadingMessage = styled.div`
  text-align: center;
  padding: 3rem;
  color: #64748b;

  span {
    font-size: 2rem;
    color: #137fec;
    animation: spin 1s linear infinite;
  }

  p {
    margin-top: 1rem;
  }
`;

// Report History Styles
const HistoryContainer = styled.div`
  max-width: 100%;
  margin: 0 auto;
  width: calc(100% - 4rem);
  padding: 0 2rem;
`;

const HistoryHeader = styled.div`
  background: linear-gradient(135deg, #137fec 0%, #0d6fd8 100%);
  border-radius: 1rem;
  padding: 2.5rem;
  color: white;
  margin-bottom: 2rem;
  box-shadow: 0 4px 6px rgba(19, 127, 236, 0.2);
`;

const HistoryHeaderContent = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 0.75rem;

  span {
    font-size: 2.5rem;
  }

  h2 {
    margin: 0;
    font-size: 2rem;
    font-weight: 700;
  }
`;

const HistoryHeaderSubtitle = styled.p`
  margin: 0;
  opacity: 0.95;
  font-size: 1.1rem;
`;

const HistoryStats = styled.div`
  display: flex;
  gap: 3rem;
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
`;

const StatItem = styled.div`
  text-align: center;
`;

const StatValue = styled.div`
  font-size: 2.5rem;
  font-weight: 700;
`;

const StatLabel = styled.div`
  font-size: 0.95rem;
  opacity: 0.9;
`;

const HistoryList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

const HistoryCard = styled.div`
  background: white;
  border-radius: 1rem;
  border: 1px solid #e2e8f0;
  padding: 2rem;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  gap: 1.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);

  &:hover {
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
    transform: translateY(-2px);
  }
`;

const HistoryCardIcon = styled.div`
  width: 4rem;
  height: 4rem;
  border-radius: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${props => props.$bg || '#137fec'}1a;
  color: ${props => props.$color || '#137fec'};
  flex-shrink: 0;

  span {
    font-size: 2rem;
  }
`;

const HistoryCardContent = styled.div`
  flex: 1;
  min-width: 0;
`;

const HistoryCardTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: #0d141b;
  margin: 0 0 0.75rem 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const HistoryCardMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  font-size: 0.9rem;
  color: #64748b;
`;

const HistoryCardMetaItem = styled.span`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  span {
    font-size: 1.1rem;
  }
`;

const HistoryCardActions = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-shrink: 0;
`;

const StatusBadge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.375rem;
  padding: 0.5rem 1rem;
  border-radius: 9999px;
  font-size: 0.875rem;
  font-weight: 600;
  background-color: rgba(16, 185, 129, 0.1);
  color: #10b981;
`;

const ViewButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: #137fec;
  color: white;
  border: none;
  border-radius: 0.5rem;
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: #0d6fd8;
    transform: translateY(-1px);
  }

  span {
    font-size: 1.1rem;
  }
`;

// Report Detail Modal Styles
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  padding: 2rem;
  animation: fadeIn 0.2s ease;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const ModalContainer = styled.div`
  background: white;
  border-radius: 1rem;
  max-width: 700px;
  width: 100%;
  max-height: 85vh;
  overflow-y: auto;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.25);
  animation: slideUp 0.3s ease;

  @keyframes slideUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const ModalHeader = styled.div`
  background: linear-gradient(135deg, #137fec 0%, #0d6fd8 100%);
  padding: 2rem 2.5rem;
  color: white;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1.5rem;
`;

const ModalHeaderContent = styled.div`
  flex: 1;
`;

const ModalHeaderTitle = styled.h3`
  margin: 0 0 0.75rem 0;
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1.3;
`;

const ModalHeaderMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;
  font-size: 0.95rem;
  opacity: 0.95;
`;

const ModalCloseButton = styled.button`
  background: rgba(255, 255, 255, 0.2);
  border: none;
  color: white;
  width: 3rem;
  height: 3rem;
  border-radius: 0.75rem;
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
  padding: 2.5rem;
`;

const ModalContent = styled.div`
  line-height: 1.8;
  color: #475569;
  white-space: pre-wrap;
  font-size: 1.05rem;
`;

const ModalFooter = styled.div`
  padding: 1.5rem 2.5rem;
  border-top: 1px solid #e2e8f0;
  display: flex;
  justify-content: flex-end;
`;

const CloseButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.875rem 2rem;
  background: #f1f5f9;
  color: #475569;
  border: none;
  border-radius: 0.5rem;
  font-size: 1rem;
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

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const FormLabel = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 600;
  color: #334155;
  font-size: 0.95rem;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid #e2e8f0;
  border-radius: 0.5rem;
  font-size: 1rem;
  color: #1e293b;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;

  &:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  }

  &::placeholder {
    color: #94a3b8;
  }
`;

const FormSelect = styled.select`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid #e2e8f0;
  border-radius: 0.5rem;
  font-size: 1rem;
  color: #1e293b;
  background: white;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;

  &:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 1rem;
  background: #f59e0b;
  color: white;
  border: none;
  border-radius: 0.5rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  &:hover:not(:disabled) {
    background: #d97706;
    transform: translateY(-1px);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const ErrorMessage = styled.div`
  padding: 0.75rem 1rem;
  background: #fef2f2;
  border: 1px solid #fecaca;
  border-radius: 0.5rem;
  color: #dc2626;
  font-size: 0.9rem;
  margin-bottom: 1rem;
`;

const SuccessMessage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  text-align: center;
  gap: 1rem;

  p {
    color: #10b981;
    font-size: 1.1rem;
    font-weight: 600;
  }
`;


const DriverDashboard = ({ onLogout, currentUser, onOpenPrevision, onOpenFuelUsage }) => {
  const [activeSection, setActiveSection] = useState('overview');
  const [assignedVehicles, setAssignedVehicles] = useState([]);
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const [isVehicleModalOpen, setIsVehicleModalOpen] = useState(false);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [subject, setSubject] = useState('');
  const [body, setBody] = useState('');
  const [reportType, setReportType] = useState('daily');
  const [issueSubject, setIssueSubject] = useState('');
  const [issueBody, setIssueBody] = useState('');
  const [driverReports, setDriverReports] = useState([]);
  const [loadingReports, setLoadingReports] = useState(false);
  const [repairRecords, setRepairRecords] = useState([]);
  const [loadingRepairs, setLoadingRepairs] = useState(false);
  const [verificationComment, setVerificationComment] = useState('');
  const [selectedReport, setSelectedReport] = useState(null);
  const [isReportModalOpen, setIsReportModalOpen] = useState(false);
  const [showFuelModal, setShowFuelModal] = useState(false);
  const [fuelFormData, setFuelFormData] = useState({
    vehicle: '',
    date: new Date().toISOString().split('T')[0],
    quantity: '',
    cost: '',
    location: '',
    odometer: ''
  });
  const [fuelLoading, setFuelLoading] = useState(false);
  const [fuelError, setFuelError] = useState('');
  const [fuelSuccess, setFuelSuccess] = useState('');
  const [driverFuelRecords, setDriverFuelRecords] = useState([]);

  const menuItems = [
    { id: 'overview', label: 'Overview', icon: 'bar-chart-2' },
    { id: 'vehicle', label: 'My Vehicle', icon: 'truck' },
    { id: 'report_history', label: 'Report History', icon: 'folder' },
    { id: 'reports', label: 'Submit Report', icon: 'file-text' },
    { id: 'issues', label: 'Report Issue', icon: 'alert-triangle' },
    { id: 'verify_repairs', label: 'Verify Repairs', icon: 'check-circle', isVerify: true },
    { id: 'fuel', label: 'Fuel', icon: 'droplet', isFuel: true },
  ];

  const driverKpis = [
    {
      title: 'Total Vehicles',
      value: assignedVehicles.length,
      trend: 'Assigned to you',
      positive: true,
      icon: 'truck',
      bg: '#3b82f6',
      color: '#3b82f6'
    },
    {
      title: 'Active Vehicles',
      value: assignedVehicles.filter(v => v.status === 'active').length,
      trend: 'Ready for use',
      positive: true,
      icon: 'check-circle',
      bg: '#10b981',
      color: '#10b981'
    },
    {
      title: 'Total Mileage',
      value: assignedVehicles.reduce((sum, v) => sum + (v.mileage || 0), 0).toLocaleString() + ' mi',
      trend: 'Combined mileage',
      positive: true,
      icon: 'activity',
      bg: '#f59e0b',
      color: '#f59e0b'
    },
    {
      title: 'In Maintenance',
      value: assignedVehicles.filter(v => v.status === 'maintenance').length,
      trend: assignedVehicles.filter(v => v.status === 'maintenance').length > 0 ? 'Needs attention' : 'All clear',
      positive: assignedVehicles.filter(v => v.status === 'maintenance').length === 0,
      icon: 'alert-circle',
      bg: assignedVehicles.filter(v => v.status === 'maintenance').length > 0 ? '#ef4444' : '#10b981',
      color: assignedVehicles.filter(v => v.status === 'maintenance').length > 0 ? '#ef4444' : '#10b981'
    }
  ];

  const driverActions = [
    {
      id: 'add_fuel',
      title: 'Ajouter Carburant',
      description: 'Enregistrer un plein de carburant',
      icon: 'droplet',
      bg: '#f59e0b',
      color: '#f59e0b'
    },
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

    fetchAssignedVehicles();

    // Fetch reports when reports section is active
    if (activeSection === 'reports' || activeSection === 'report_history') {
      fetchDriverReports();
    }

    // Fetch repair records when verify_repairs section is active
    if (activeSection === 'verify_repairs') {
      fetchRepairRecords();
    }

    // Fetch fuel records when fuel section is active
    if (activeSection === 'fuel') {
      fetchDriverFuelRecords();
    }

    // Ensure Feather icons are rendered
    if (window.feather) {
      window.feather.replace();
    }
  }, [activeSection]);

  const fetchAssignedVehicles = async () => {
    try {
      setLoading(true);
      // Get all vehicles assigned to current driver
      const vehicles = await vehiclesAPI.getMyVehicles();
      setAssignedVehicles(vehicles);
    } catch (error) {
      console.error('Error fetching assigned vehicles:', error);
      setAssignedVehicles([]);
    } finally {
      setLoading(false);
    }
  };

  const handleVehicleClick = (vehicle) => {
    setSelectedVehicle(vehicle);
    setIsVehicleModalOpen(true);
  };

  const handleCloseVehicleModal = () => {
    setIsVehicleModalOpen(false);
    setSelectedVehicle(null);
  };

  const fetchDriverReports = async () => {
    try {
      setLoadingReports(true);
      const reports = await messagesAPI.getSent();
      setDriverReports(reports);
    } catch (error) {
      console.error('Error fetching driver reports:', error);
      setDriverReports([]);
    } finally {
      setLoadingReports(false);
    }
  };

  const fetchDriverFuelRecords = async () => {
    try {
      setFuelLoading(true);
      const records = await fuelAPI.getFuelUsage();
      setDriverFuelRecords(records || []);
    } catch (error) {
      console.error('Error fetching fuel records:', error);
      setDriverFuelRecords([]);
    } finally {
      setFuelLoading(false);
    }
  };

  const fetchRepairRecords = async () => {
    try {
      setLoadingRepairs(true);
      // Get repairs for vehicles assigned to this driver
      const response = await repairAPI.getRepairRecords({ status: 'completed' });
      setRepairRecords(response.results || []);
    } catch (error) {
      console.error('Error fetching repair records:', error);
      setRepairRecords([]);
    } finally {
      setLoadingRepairs(false);
    }
  };

  const handleVerifyRepair = async (repairId, isVerified, comments) => {
    try {
      await repairAPI.verifyRepairRecord(repairId, {
        driver_verified: isVerified,
        driver_comments: comments || '',
      });
      // Refresh the repair records
      fetchRepairRecords();
    } catch (error) {
      console.error('Error verifying repair:', error);
      alert('Failed to verify repair. Please try again.');
    }
  };

  const handleActionClick = (actionId) => {
    switch (actionId) {
      case 'add_fuel':
        // Pre-select vehicle if assigned
        if (assignedVehicles.length > 0) {
          setFuelFormData(prev => ({ ...prev, vehicle: assignedVehicles[0].id }));
        }
        setShowFuelModal(true);
        break;
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

  const handleSubmitFuel = async (e) => {
    e.preventDefault();
    setFuelError('');
    setFuelSuccess('');
    setFuelLoading(true);

    try {
      // Convert frontend field names to backend field names
      const fuelData = {
        vehicle: fuelFormData.vehicle,
        date: fuelFormData.date,
        liters: fuelFormData.quantity,
        price_per_liter: fuelFormData.cost && fuelFormData.quantity 
          ? (parseFloat(fuelFormData.cost) / parseFloat(fuelFormData.quantity)).toFixed(2)
          : fuelFormData.cost,
        location: fuelFormData.location,
        odometer: fuelFormData.odometer || null,
        notes: fuelFormData.notes || ''
      };
      await fuelAPI.addFuelUsage(fuelData);
      setFuelSuccess('Carburant ajouté avec succès!');
      setFuelFormData({
        vehicle: assignedVehicles.length > 0 ? assignedVehicles[0].id : '',
        date: new Date().toISOString().split('T')[0],
        quantity: '',
        cost: '',
        location: '',
        odometer: ''
      });
      // Refresh fuel records
      fetchDriverFuelRecords();
      setTimeout(() => {
        setShowFuelModal(false);
        setFuelSuccess('');
      }, 2000);
    } catch (err) {
      setFuelError(err.response?.data?.detail || 'Erreur lors de l\'ajout du carburant');
    } finally {
      setFuelLoading(false);
    }
  };

  const handleFuelFormChange = (e) => {
    const { name, value } = e.target;
    setFuelFormData(prev => ({ ...prev, [name]: value }));
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
      await messagesAPI.sendMessage({ recipient: 'admin', subject: fullSubject, body });
      alert('Report submitted successfully');
      setSubject('');
      setBody('');
      setReportType('daily');
      setActiveSection('overview');
    } catch (err) {
      alert('Failed to submit report');
    }
  };

  const handleIssueSubmit = async (e) => {
    e.preventDefault();
    try {
      await messagesAPI.sendMessage({ recipient: 'admin', subject: `Issue: ${issueSubject}`, body: issueBody });
      alert('Issue reported successfully');
      setIssueSubject('');
      setIssueBody('');
      setActiveSection('overview');
    } catch (err) {
      alert('Failed to report issue');
    }
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
                  if (item.isPrevision && onOpenPrevision) {
                    onOpenPrevision();
                  } else if (item.isFuel) {
                    // Open the fuel modal in DriverDashboard
                    if (assignedVehicles.length > 0) {
                      setFuelFormData(prev => ({ ...prev, vehicle: assignedVehicles[0].id }));
                    }
                    setShowFuelModal(true);
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

              {assignedVehicles.length > 0 && (
                <div style={{ marginBottom: '2rem' }}>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: '700', color: '#0d141b', marginBottom: '1rem' }}>
                    My Assigned Vehicles
                  </h3>
                  <div style={{ 
                    display: 'grid', 
                    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
                    gap: '1.5rem'
                  }}>
                    {assignedVehicles.map((vehicle) => (
                      <VehicleCard key={vehicle.id} onClick={() => handleVehicleClick(vehicle)} style={{ cursor: 'pointer' }}>
                        <VehicleImage style={{
                          backgroundImage: vehicle.image ? (vehicle.image.startsWith('http') ? `url('${vehicle.image}')` : `url('http://127.0.0.1:8000${vehicle.image}')`) : 'none',
                          backgroundColor: '#f1f5f9'
                        }}>
                          <VehicleStatus status={vehicle.status}>
                            {vehicle.status}
                          </VehicleStatus>
                        </VehicleImage>

                        <VehicleContent>
                          <VehicleName>{vehicle.year} {vehicle.make} {vehicle.model}</VehicleName>
                          <VehicleDetails>
                            <VehiclePlate>{vehicle.license_plate}</VehiclePlate>
                            <VehicleLocation>
                              <span className="material-symbols-outlined">location_on</span>
                              {vehicle.vehicle_type ? vehicle.vehicle_type.charAt(0).toUpperCase() + vehicle.vehicle_type.slice(1) : 'Vehicle'}
                            </VehicleLocation>
                          </VehicleDetails>
                        </VehicleContent>

                        <VehicleFooter>
                          <FuelIndicator>
                            <span className="material-symbols-outlined">speed</span>
                            <span>{vehicle.mileage?.toLocaleString() || 0} mi</span>
                          </FuelIndicator>
                          <ViewDetails>
                            View Details
                            <i data-feather="arrow-right" className="fi-icon"></i>
                          </ViewDetails>
                        </VehicleFooter>
                      </VehicleCard>
                    ))}
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
              <DashboardHeader>
                <h2>My Vehicle Details</h2>
                <p>Complete information about your assigned vehicle</p>
              </DashboardHeader>

              {loading ? (
                <div style={{ textAlign: 'center', padding: '3rem' }}>
                  <span className="material-symbols-outlined" style={{ fontSize: '2.5rem', color: '#137fec', animation: 'spin 1s linear infinite' }}>refresh</span>
                  <p style={{ marginTop: '1rem', color: '#64748b' }}>Loading vehicle information...</p>
                </div>
              ) : assignedVehicles.length > 0 ? (
                <div style={{ maxWidth: '100%' }}>
                  <div style={{ 
                    display: 'grid', 
                    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
                    gap: '1.5rem'
                  }}>
                    {assignedVehicles.map((vehicle) => (
                      <VehicleCard key={vehicle.id} onClick={() => handleVehicleClick(vehicle)} style={{ cursor: 'pointer' }}>
                        <VehicleImage style={{
                          backgroundImage: vehicle.image ? (vehicle.image.startsWith('http') ? `url('${vehicle.image}')` : `url('http://127.0.0.1:8000${vehicle.image}')`) : 'none',
                          backgroundColor: '#f1f5f9'
                        }}>
                          <VehicleStatus status={vehicle.status}>
                            {vehicle.status}
                          </VehicleStatus>
                        </VehicleImage>

                        <VehicleContent>
                          <VehicleName>{vehicle.year} {vehicle.make} {vehicle.model}</VehicleName>
                          <VehicleDetails>
                            <VehiclePlate>{vehicle.license_plate}</VehiclePlate>
                            <VehicleLocation>
                              <span className="material-symbols-outlined">location_on</span>
                              {vehicle.vehicle_type ? vehicle.vehicle_type.charAt(0).toUpperCase() + vehicle.vehicle_type.slice(1) : 'Vehicle'}
                            </VehicleLocation>
                          </VehicleDetails>
                        </VehicleContent>

                        <VehicleFooter>
                          <FuelIndicator>
                            <span className="material-symbols-outlined">speed</span>
                            <span>{vehicle.mileage?.toLocaleString() || 0} mi</span>
                          </FuelIndicator>
                          <ViewDetails>
                            View Details
                            <i data-feather="arrow-right" className="fi-icon"></i>
                          </ViewDetails>
                        </VehicleFooter>
                      </VehicleCard>
                    ))}
                  </div>
                </div>
              ) : (
                <div style={{ textAlign: 'center', padding: '4rem 2rem', background: 'white', borderRadius: '0.75rem', border: '1px solid #e2e8f0' }}>
                  <span className="material-symbols-outlined" style={{ fontSize: '3rem', color: '#cbd5e1', marginBottom: '1rem' }}>directions_car</span>
                  <h3 style={{ fontSize: '1.125rem', fontWeight: '700', color: '#0d141b', margin: '1rem 0 0.5rem 0' }}>No Vehicles Assigned</h3>
                  <p style={{ color: '#64748b', fontSize: '0.875rem', margin: 0 }}>You don't have any vehicles assigned yet. Contact your fleet manager to get assigned a vehicle.</p>
                </div>
              )}
            </SectionContent>
          )}

          {activeSection === 'report_history' && (
            <SectionContent>
              <HistoryContainer>
                <HistoryHeader>
                  <HistoryHeaderContent>
                    <span className="material-symbols-outlined">folder</span>
                    <h2>Report History</h2>
                  </HistoryHeaderContent>
                  <HistoryHeaderSubtitle>View all your submitted reports and issue reports</HistoryHeaderSubtitle>
                  <HistoryStats>
                    <StatItem>
                      <StatValue>{driverReports.length}</StatValue>
                      <StatLabel>Total Reports</StatLabel>
                    </StatItem>
                    <StatItem>
                      <StatValue>{driverReports.filter(r => r.subject?.toLowerCase().includes('daily')).length}</StatValue>
                      <StatLabel>Daily Reports</StatLabel>
                    </StatItem>
                    <StatItem>
                      <StatValue>{driverReports.filter(r => r.subject?.toLowerCase().includes('weekly')).length}</StatValue>
                      <StatLabel>Weekly Reports</StatLabel>
                    </StatItem>
                    <StatItem>
                      <StatValue>{driverReports.filter(r => r.subject?.toLowerCase().includes('issue')).length}</StatValue>
                      <StatLabel>Issue Reports</StatLabel>
                    </StatItem>
                  </HistoryStats>
                </HistoryHeader>

                {loadingReports ? (
                  <LoadingMessage>
                    <span className="material-symbols-outlined">refresh</span>
                    <p>Loading your reports...</p>
                  </LoadingMessage>
                ) : driverReports.length > 0 ? (
                  <HistoryList>
                    {driverReports.map((report) => (
                      <HistoryCard key={report.id}>
                        <HistoryCardIcon 
                          $bg={report.subject?.toLowerCase().includes('issue') ? '#ef4444' : 
                               report.subject?.toLowerCase().includes('daily') ? '#3b82f6' : 
                               report.subject?.toLowerCase().includes('weekly') ? '#10b981' : '#64748b'}
                          $color={report.subject?.toLowerCase().includes('issue') ? '#ef4444' : 
                                  report.subject?.toLowerCase().includes('daily') ? '#3b82f6' : 
                                  report.subject?.toLowerCase().includes('weekly') ? '#10b981' : '#64748b'}
                        >
                          <span className="material-symbols-outlined">
                            {report.subject?.toLowerCase().includes('issue') ? 'warning' :
                             report.subject?.toLowerCase().includes('daily') ? 'today' :
                             report.subject?.toLowerCase().includes('weekly') ? 'date_range' : 'description'}
                          </span>
                        </HistoryCardIcon>
                        <HistoryCardContent>
                          <HistoryCardTitle>{report.subject}</HistoryCardTitle>
                          <HistoryCardMeta>
                            <HistoryCardMetaItem>
                              <span className="material-symbols-outlined">schedule</span>
                              {new Date(report.created_at).toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'short',
                                day: 'numeric'
                              })}
                            </HistoryCardMetaItem>
                            <HistoryCardMetaItem>
                              <span className="material-symbols-outlined">
                                {report.subject?.toLowerCase().includes('issue') ? 'error' :
                                 report.subject?.toLowerCase().includes('daily') ? 'today' :
                                 report.subject?.toLowerCase().includes('weekly') ? 'date_range' : 'article'}
                              </span>
                              {report.subject?.toLowerCase().includes('issue') ? 'Issue Report' : 
                               report.subject?.toLowerCase().includes('daily') ? 'Daily Report' :
                               report.subject?.toLowerCase().includes('weekly') ? 'Weekly Report' :
                               'General Report'}
                            </HistoryCardMetaItem>
                          </HistoryCardMeta>
                        </HistoryCardContent>
                        <HistoryCardActions>
                          <StatusBadge>
                            <span className="material-symbols-outlined">check_circle</span>
                            Submitted
                          </StatusBadge>
                          <ViewButton onClick={() => {
                            setSelectedReport(report);
                            setIsReportModalOpen(true);
                          }}>
                            <span className="material-symbols-outlined">visibility</span>
                            View
                          </ViewButton>
                        </HistoryCardActions>
                      </HistoryCard>
                    ))}
                  </HistoryList>
                ) : (
                  <EmptyReports>
                    <span className="material-symbols-outlined">description</span>
                    <h3>No Reports Yet</h3>
                    <p>You haven't submitted any reports yet. Submit your first report using the "Submit Report" menu.</p>
                  </EmptyReports>
                )}
              </HistoryContainer>
            </SectionContent>
          )}

          {activeSection === 'verify_repairs' && (
            <SectionContent>
              <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
                <div style={{ 
                  background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)', 
                  borderRadius: '1rem 1rem 0 0', 
                  padding: '2rem',
                  color: 'white'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                    <span className="material-symbols-outlined" style={{ fontSize: '2rem' }}>verified</span>
                    <h2 style={{ margin: 0, fontSize: '1.5rem', fontWeight: '700' }}>Verify Repairs</h2>
                  </div>
                  <p style={{ margin: 0, opacity: 0.9, fontSize: '0.9rem' }}>Review and verify repairs completed on your vehicles</p>
                </div>

                {loadingRepairs ? (
                  <div style={{ padding: '3rem', textAlign: 'center', color: '#64748b' }}>
                    <span className="material-symbols-outlined" style={{ fontSize: '3rem', animation: 'spin 1s linear infinite' }}>refresh</span>
                    <p>Loading repairs...</p>
                  </div>
                ) : repairRecords.length > 0 ? (
                  <div style={{ padding: '1.5rem' }}>
                    {repairRecords.map((repair) => (
                      <div key={repair.id} style={{ 
                        background: 'white', 
                        borderRadius: '0.75rem', 
                        padding: '1.5rem', 
                        marginBottom: '1rem',
                        border: '1px solid #e2e8f0',
                        boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
                      }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                          <div>
                            <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1.125rem', fontWeight: '600', color: '#1e293b' }}>
                              {repair.title}
                            </h3>
                            <p style={{ margin: 0, color: '#64748b', fontSize: '0.875rem' }}>
                              {repair.vehicle_info} • Par {repair.mechanic_name}
                            </p>
                          </div>
                          <span style={{ 
                            padding: '0.25rem 0.75rem', 
                            borderRadius: '9999px', 
                            fontSize: '0.75rem', 
                            fontWeight: '600',
                            background: repair.driver_verified ? 'rgba(16, 185, 129, 0.1)' : 'rgba(245, 158, 11, 0.1)',
                            color: repair.driver_verified ? '#059669' : '#d97706'
                          }}>
                            {repair.driver_verified ? 'Verified' : 'Pending Verification'}
                          </span>
                        </div>
                        
                        <div style={{ marginBottom: '1rem' }}>
                          <p style={{ margin: '0 0 0.5rem 0', fontSize: '0.8125rem', fontWeight: '500', color: '#475569' }}>Description:</p>
                          <p style={{ margin: 0, color: '#64748b', fontSize: '0.875rem' }}>{repair.description}</p>
                        </div>

                        {repair.driver_verified ? (
                          <div style={{ 
                            padding: '1rem', 
                            background: '#f0fdf4', 
                            borderRadius: '0.5rem',
                            border: '1px solid #bbf7d0'
                          }}>
                            <p style={{ margin: 0, color: '#166534', fontSize: '0.875rem' }}>
                              <strong>Your verification:</strong> {repair.driver_comments || 'No comments'}
                            </p>
                          </div>
                        ) : (
                          <div style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid #e2e8f0' }}>
                            <textarea
                              placeholder="Add comments about the repair (optional)"
                              value={verificationComment}
                              onChange={(e) => setVerificationComment(e.target.value)}
                              style={{ 
                                width: '100%', 
                                padding: '0.75rem', 
                                border: '1px solid #d1d5db', 
                                borderRadius: '0.5rem',
                                fontSize: '0.875rem',
                                minHeight: '80px',
                                marginBottom: '1rem',
                                fontFamily: 'inherit'
                              }}
                            />
                            <div style={{ display: 'flex', gap: '0.75rem' }}>
                              <button
                                onClick={() => handleVerifyRepair(repair.id, true, verificationComment)}
                                style={{ 
                                  padding: '0.5rem 1rem', 
                                  background: '#10b981', 
                                  color: 'white', 
                                  border: 'none', 
                                  borderRadius: '0.5rem',
                                  fontSize: '0.875rem',
                                  fontWeight: '500',
                                  cursor: 'pointer'
                                }}
                              >
                                ✓ Verify Repair
                              </button>
                              <button
                                onClick={() => handleVerifyRepair(repair.id, false, verificationComment)}
                                style={{ 
                                  padding: '0.5rem 1rem', 
                                  background: '#ef4444', 
                                  color: 'white', 
                                  border: 'none', 
                                  borderRadius: '0.5rem',
                                  fontSize: '0.875rem',
                                  fontWeight: '500',
                                  cursor: 'pointer'
                                }}
                              >
                                ✗ Report Issue
                              </button>
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                ) : (
                  <div style={{ padding: '4rem 2rem', textAlign: 'center' }}>
                    <span className="material-symbols-outlined" style={{ fontSize: '4rem', color: '#cbd5e1' }}>build</span>
                    <h3 style={{ margin: '1rem 0 0.5rem 0', color: '#475569' }}>No Repairs to Verify</h3>
                    <p style={{ color: '#64748b' }}>There are no completed repairs for your vehicles at this time.</p>
                  </div>
                )}
              </div>
            </SectionContent>
          )}

          {activeSection === 'fuel' && (
            <SectionContent>
              <DashboardHeader>
                <h2>Gestion Carburant</h2>
                <p>Enregistrez et consultez vos consommations de carburant</p>
              </DashboardHeader>

              <div style={{ maxWidth: '100%' }}>
                {/* Add Fuel Button */}
                <div style={{ marginBottom: '1.5rem', display: 'flex', justifyContent: 'flex-end' }}>
                  <button 
                    onClick={() => {
                      if (assignedVehicles.length > 0) {
                        setFuelFormData(prev => ({ ...prev, vehicle: assignedVehicles[0].id }));
                      }
                      setShowFuelModal(true);
                    }}
                    style={{
                      background: '#f59e0b',
                      color: 'white',
                      border: 'none',
                      borderRadius: '0.5rem',
                      padding: '0.625rem 1.25rem',
                      fontWeight: '600',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      fontSize: '0.875rem'
                    }}
                  >
                    <span className="material-symbols-outlined" style={{ fontSize: '1.25rem' }}>add</span>
                    Ajouter Carburant
                  </button>
                </div>

                {/* Fuel Table */}
                <div style={{ 
                  background: 'white', 
                  borderRadius: '0.75rem', 
                  boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)', 
                  padding: '1.5rem',
                  border: '1px solid #e2e8f0'
                }}>
                  <h3 style={{ margin: '0 0 1rem 0', color: '#1e293b', fontSize: '1rem', fontWeight: '600' }}>Historique des carburants</h3>
                  
                  {driverFuelRecords.length === 0 ? (
                    <div style={{ textAlign: 'center', padding: '2rem', color: '#64748b' }}>
                      <span className="material-symbols-outlined" style={{ fontSize: '3rem', color: '#cbd5e1' }}>local_gas_station</span>
                      <p style={{ marginTop: '0.75rem', fontSize: '0.9rem' }}>Aucun enregistrement</p>
                      <p style={{ fontSize: '0.8rem' }}>Cliquez sur "Ajouter Carburant" pour enregistrer</p>
                    </div>
                  ) : (
                    <div style={{ overflowX: 'auto' }}>
                      <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.875rem' }}>
                        <thead>
                          <tr style={{ borderBottom: '2px solid #e2e8f0' }}>
                            <th style={{ textAlign: 'left', padding: '0.75rem', color: '#64748b', fontWeight: '600', fontSize: '0.8rem' }}>Date</th>
                            <th style={{ textAlign: 'left', padding: '0.75rem', color: '#64748b', fontWeight: '600', fontSize: '0.8rem' }}>Véhicule</th>
                            <th style={{ textAlign: 'right', padding: '0.75rem', color: '#64748b', fontWeight: '600', fontSize: '0.8rem' }}>Qté (L)</th>
                            <th style={{ textAlign: 'right', padding: '0.75rem', color: '#64748b', fontWeight: '600', fontSize: '0.8rem' }}>Coût</th>
                            <th style={{ textAlign: 'left', padding: '0.75rem', color: '#64748b', fontWeight: '600', fontSize: '0.8rem' }}>Station</th>
                          </tr>
                        </thead>
                        <tbody>
                          {driverFuelRecords.map((record) => (
                            <tr key={record.id} style={{ borderBottom: '1px solid #f1f5f9' }}>
                              <td style={{ padding: '0.75rem', color: '#1e293b' }}>
                                {new Date(record.date).toLocaleDateString('fr-FR')}
                              </td>
                              <td style={{ padding: '0.75rem', color: '#1e293b' }}>
                                {record.vehicle_name || record.vehicle}
                              </td>
                              <td style={{ padding: '0.75rem', textAlign: 'right', color: '#1e293b' }}>
                                {record.quantity?.toLocaleString() || '-'} L
                              </td>
                              <td style={{ padding: '0.75rem', textAlign: 'right', color: '#059669', fontWeight: '600' }}>
                                {record.cost?.toLocaleString() || '-'} CFA
                              </td>
                              <td style={{ padding: '0.75rem', color: '#64748b', fontSize: '0.8rem' }}>
                                {record.location || '-'}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>
              </div>
            </SectionContent>
          )}

          {activeSection === 'reports' && (
            <SectionContent>
              <div style={{ maxWidth: '900px', margin: '0 auto', width: '100%' }}>
                {/* Form Header */}
                <div style={{ 
                  background: 'linear-gradient(135deg, #137fec 0%, #0d6fd8 100%)', 
                  borderRadius: '1rem 1rem 0 0', 
                  padding: '2rem',
                  color: 'white'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                    <span className="material-symbols-outlined" style={{ fontSize: '2rem' }}>description</span>
                    <h2 style={{ margin: 0, fontSize: '1.5rem', fontWeight: '700' }}>Submit New Report</h2>
                  </div>
                  <p style={{ margin: 0, opacity: 0.9, fontSize: '0.9rem' }}>Share your daily or weekly vehicle reports with management</p>
                </div>

                {/* Form Container */}
                <div style={{ 
                  background: 'white', 
                  borderRadius: '0 0 1rem 1rem', 
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', 
                  padding: '2rem'
                }}>
                  <form onSubmit={handleSubmit}>
                    {/* Report Type Selection */}
                    <div style={{ marginBottom: '1.5rem' }}>
                      <label style={{ 
                        display: 'block', 
                        fontSize: '0.875rem', 
                        fontWeight: '600', 
                        color: '#374151', 
                        marginBottom: '0.75rem'
                      }}>
                        <span className="material-symbols-outlined" style={{ fontSize: '1rem', verticalAlign: 'middle', marginRight: '0.25rem' }}>category</span>
                        Report Type
                      </label>
                      <div style={{ display: 'flex', gap: '1rem' }}>
                        <label style={{ 
                          flex: 1,
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.75rem',
                          padding: '1rem',
                          border: `2px solid ${reportType === 'daily' ? '#137fec' : '#e2e8f0'}`,
                          borderRadius: '0.75rem',
                          cursor: 'pointer',
                          background: reportType === 'daily' ? 'rgba(19, 127, 236, 0.05)' : 'transparent',
                          transition: 'all 0.2s ease'
                        }}>
                          <input
                            type="radio"
                            name="reportType"
                            value="daily"
                            checked={reportType === 'daily'}
                            onChange={(e) => setReportType(e.target.value)}
                            style={{ display: 'none' }}
                          />
                          <div style={{ 
                            width: '1.25rem', 
                            height: '1.25rem', 
                            borderRadius: '50%', 
                            border: `2px solid ${reportType === 'daily' ? '#137fec' : '#d1d5db'}`,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                          }}>
                            {reportType === 'daily' && (
                              <div style={{ width: '0.625rem', height: '0.625rem', borderRadius: '50%', background: '#137fec' }} />
                            )}
                          </div>
                          <div>
                            <span className="material-symbols-outlined" style={{ color: reportType === 'daily' ? '#137fec' : '#64748b' }}>today</span>
                          </div>
                          <div>
                            <div style={{ fontWeight: '600', color: '#0d141b', fontSize: '0.9rem' }}>Daily Report</div>
                            <div style={{ fontSize: '0.75rem', color: '#64748b' }}>End of day summary</div>
                          </div>
                        </label>

                        <label style={{ 
                          flex: 1,
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.75rem',
                          padding: '1rem',
                          border: `2px solid ${reportType === 'weekly' ? '#137fec' : '#e2e8f0'}`,
                          borderRadius: '0.75rem',
                          cursor: 'pointer',
                          background: reportType === 'weekly' ? 'rgba(19, 127, 236, 0.05)' : 'transparent',
                          transition: 'all 0.2s ease'
                        }}>
                          <input
                            type="radio"
                            name="reportType"
                            value="weekly"
                            checked={reportType === 'weekly'}
                            onChange={(e) => setReportType(e.target.value)}
                            style={{ display: 'none' }}
                          />
                          <div style={{ 
                            width: '1.25rem', 
                            height: '1.25rem', 
                            borderRadius: '50%', 
                            border: `2px solid ${reportType === 'weekly' ? '#137fec' : '#d1d5db'}`,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                          }}>
                            {reportType === 'weekly' && (
                              <div style={{ width: '0.625rem', height: '0.625rem', borderRadius: '50%', background: '#137fec' }} />
                            )}
                          </div>
                          <div>
                            <span className="material-symbols-outlined" style={{ color: reportType === 'weekly' ? '#137fec' : '#64748b' }}>date_range</span>
                          </div>
                          <div>
                            <div style={{ fontWeight: '600', color: '#0d141b', fontSize: '0.9rem' }}>Weekly Report</div>
                            <div style={{ fontSize: '0.75rem', color: '#64748b' }}>Weekly comprehensive summary</div>
                          </div>
                        </label>
                      </div>
                    </div>

                    {/* Report Title */}
                    <div style={{ marginBottom: '1.5rem' }}>
                      <label style={{ 
                        display: 'block', 
                        fontSize: '0.875rem', 
                        fontWeight: '600', 
                        color: '#374151', 
                        marginBottom: '0.75rem'
                      }}>
                        <span className="material-symbols-outlined" style={{ fontSize: '1rem', verticalAlign: 'middle', marginRight: '0.25rem' }}>title</span>
                        Report Title
                      </label>
                      <input
                        type="text"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        style={{ 
                          width: '100%', 
                          padding: '0.875rem 1rem', 
                          border: '1px solid #e2e8f0', 
                          borderRadius: '0.5rem', 
                          fontSize: '0.9rem',
                          transition: 'all 0.2s ease',
                          outline: 'none'
                        }}
                        onFocus={(e) => {
                          e.target.style.borderColor = '#137fec';
                          e.target.style.boxShadow = '0 0 0 3px rgba(19, 127, 236, 0.1)';
                        }}
                        onBlur={(e) => {
                          e.target.style.borderColor = '#e2e8f0';
                          e.target.style.boxShadow = 'none';
                        }}
                        placeholder="e.g., Daily Fleet Status Report - January 15, 2024"
                        required
                      />
                    </div>

                    {/* Report Content */}
                    <div style={{ marginBottom: '1.5rem' }}>
                      <label style={{ 
                        display: 'block', 
                        fontSize: '0.875rem', 
                        fontWeight: '600', 
                        color: '#374151', 
                        marginBottom: '0.75rem'
                      }}>
                        <span className="material-symbols-outlined" style={{ fontSize: '1rem', verticalAlign: 'middle', marginRight: '0.25rem' }}>notes</span>
                        Report Content
                      </label>
                      <textarea
                        value={body}
                        onChange={(e) => setBody(e.target.value)}
                        rows="10"
                        style={{ 
                          width: '100%', 
                          padding: '0.875rem 1rem', 
                          border: '1px solid #e2e8f0', 
                          borderRadius: '0.5rem', 
                          fontSize: '0.9rem', 
                          resize: 'vertical',
                          fontFamily: 'inherit',
                          transition: 'all 0.2s ease',
                          outline: 'none'
                        }}
                        onFocus={(e) => {
                          e.target.style.borderColor = '#137fec';
                          e.target.style.boxShadow = '0 0 0 3px rgba(19, 127, 236, 0.1)';
                        }}
                        onBlur={(e) => {
                          e.target.style.borderColor = '#e2e8f0';
                          e.target.style.boxShadow = 'none';
                        }}
                        placeholder={`Write your ${reportType} report here. Include any important details, observations, or recommendations...`}
                        required
                      />
                    </div>

                    {/* Quick Tips */}
                    <div style={{ 
                      background: '#f0f9ff', 
                      borderRadius: '0.5rem', 
                      padding: '1rem', 
                      marginBottom: '1.5rem',
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.75rem'
                    }}>
                      <span className="material-symbols-outlined" style={{ color: '#137fec', fontSize: '1.25rem', flexShrink: 0 }}>lightbulb</span>
                      <div>
                        <div style={{ fontWeight: '600', color: '#0d141b', fontSize: '0.875rem', marginBottom: '0.25rem' }}>Tips for a good report</div>
                        <ul style={{ margin: 0, paddingLeft: '1.25rem', fontSize: '0.8rem', color: '#64748b' }}>
                          <li>Include vehicle mileage and condition</li>
                          <li>Note any issues or abnormalities</li>
                          <li>Mention fuel levels if relevant</li>
                          <li>Add recommendations for maintenance</li>
                        </ul>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div style={{ display: 'flex', gap: '1rem', paddingTop: '0.5rem' }}>
                      <button
                        type="submit"
                        style={{ 
                          flex: 1, 
                          background: '#137fec', 
                          color: 'white', 
                          fontWeight: '600', 
                          padding: '0.875rem 1.5rem', 
                          borderRadius: '0.5rem', 
                          border: 'none', 
                          cursor: 'pointer', 
                          display: 'flex', 
                          alignItems: 'center', 
                          justifyContent: 'center', 
                          gap: '0.5rem',
                          fontSize: '0.9rem',
                          transition: 'all 0.2s ease'
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.background = '#0d6fd8';
                          e.target.style.transform = 'translateY(-1px)';
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.background = '#137fec';
                          e.target.style.transform = 'translateY(0)';
                        }}
                      >
                        <span className="material-symbols-outlined">send</span>
                        Submit Report
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          setSubject('');
                          setBody('');
                          setReportType('daily');
                        }}
                        style={{ 
                          padding: '0.875rem 1.5rem', 
                          background: 'white', 
                          color: '#64748b', 
                          fontWeight: '600', 
                          borderRadius: '0.5rem', 
                          border: '1px solid #e2e8f0', 
                          cursor: 'pointer', 
                          display: 'flex', 
                          alignItems: 'center', 
                          justifyContent: 'center', 
                          gap: '0.5rem',
                          fontSize: '0.9rem',
                          transition: 'all 0.2s ease'
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.background = '#f1f5f9';
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.background = 'white';
                        }}
                      >
                        <span className="material-symbols-outlined">refresh</span>
                        Reset
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </SectionContent>
          )}

          {activeSection === 'issues' && (
            <SectionContent>
              <div className="max-w-4xl mx-auto">
                <div className="bg-gradient-to-r from-red-600 to-red-700 text-white rounded-t-2xl p-8">
                  <h2 className="text-3xl font-bold mb-2">Report Vehicle Issue</h2>
                  <p className="text-red-100">Report breakdowns, maintenance needs, or other problems with your vehicle</p>
                </div>
                <div className="bg-white rounded-b-2xl shadow-lg p-8">
                  <form onSubmit={handleIssueSubmit} className="space-y-8">
                    <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
                      <p className="text-sm text-red-800 dark:text-red-200 flex items-center gap-2">
                        <span className="material-symbols-outlined">info</span>
                        Please provide detailed information about the issue to help our maintenance team
                      </p>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">Issue Title</label>
                      <input
                        type="text"
                        value={issueSubject}
                        onChange={(e) => setIssueSubject(e.target.value)}
                        className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-red-500 transition"
                        placeholder="e.g., Engine overheating, Brake warning light, etc."
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">Issue Description</label>
                      <textarea
                        value={issueBody}
                        onChange={(e) => setIssueBody(e.target.value)}
                        rows="10"
                        className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-red-500 transition resize-none"
                        placeholder="Describe the issue in detail:\n- When did it start?\n- What symptoms are you experiencing?\n- Any error messages or unusual sounds?\n- Vehicle mileage if relevant\n- Any actions already taken?"
                        required
                      />
                    </div>
                    <div className="flex gap-4 pt-4">
                      <button
                        type="submit"
                        className="flex-1 bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition transform hover:scale-105 flex items-center justify-center gap-2"
                      >
                        <span className="material-symbols-outlined">error</span>
                        Submit Issue
                      </button>
                      <button
                        type="button"
                        onClick={() => setActiveSection('overview')}
                        className="flex-1 bg-slate-200 hover:bg-slate-300 dark:bg-slate-700 dark:hover:bg-slate-600 text-slate-700 dark:text-slate-300 font-semibold py-3 px-6 rounded-lg transition flex items-center justify-center gap-2"
                      >
                        <span className="material-symbols-outlined">close</span>
                        Cancel
                      </button>
                    </div>
                  </form>
                </div>
              </div>
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

      <VehicleDetailsModal
        isOpen={isVehicleModalOpen}
        onClose={handleCloseVehicleModal}
        vehicle={selectedVehicle}
      />

      {/* Fuel Quick Add Modal */}
      {showFuelModal && (
        <ModalOverlay onClick={() => setShowFuelModal(false)}>
          <ModalContainer onClick={(e) => e.stopPropagation()} style={{ maxWidth: '500px' }}>
            <ModalHeader>
              <ModalHeaderContent>
                <ModalHeaderTitle>Ajouter Carburant</ModalHeaderTitle>
                <ModalHeaderMeta>
                  <span className="material-symbols-outlined">local_gas_station</span>
                  Enregistrement rapide
                </ModalHeaderMeta>
              </ModalHeaderContent>
              <ModalCloseButton onClick={() => setShowFuelModal(false)}>
                <span className="material-symbols-outlined">close</span>
              </ModalCloseButton>
            </ModalHeader>
            <ModalBody>
              {fuelSuccess ? (
                <SuccessMessage>
                  <span className="material-symbols-outlined" style={{ fontSize: '48px', color: '#10b981' }}>check_circle</span>
                  <p>{fuelSuccess}</p>
                </SuccessMessage>
              ) : (
                <form onSubmit={handleSubmitFuel}>
                  <FormGroup>
                    <FormLabel>Véhicule</FormLabel>
                    <FormSelect
                      name="vehicle"
                      value={fuelFormData.vehicle}
                      onChange={handleFuelFormChange}
                      required
                    >
                      <option value="">Sélectionner un véhicule</option>
                      {assignedVehicles.map(vehicle => (
                        <option key={vehicle.id} value={vehicle.id}>
                          {vehicle.brand} {vehicle.model} - {vehicle.license_plate}
                        </option>
                      ))}
                    </FormSelect>
                  </FormGroup>

                  <FormGroup>
                    <FormLabel>Date</FormLabel>
                    <FormInput
                      type="date"
                      name="date"
                      value={fuelFormData.date}
                      onChange={handleFuelFormChange}
                      required
                    />
                  </FormGroup>

                  <FormGroup>
                    <FormLabel>Quantité (L)</FormLabel>
                    <FormInput
                      type="number"
                      name="quantity"
                      value={fuelFormData.quantity}
                      onChange={handleFuelFormChange}
                      placeholder="Quantité en litres"
                      step="0.01"
                      required
                    />
                  </FormGroup>

                  <FormGroup>
                    <FormLabel>Coût (FCFA)</FormLabel>
                    <FormInput
                      type="number"
                      name="cost"
                      value={fuelFormData.cost}
                      onChange={handleFuelFormChange}
                      placeholder="Coût total"
                      step="1"
                      required
                    />
                  </FormGroup>

                  <FormGroup>
                    <FormLabel>Station</FormLabel>
                    <FormInput
                      type="text"
                      name="location"
                      value={fuelFormData.location}
                      onChange={handleFuelFormChange}
                      placeholder="Nom de la station"
                    />
                  </FormGroup>

                  <FormGroup>
                    <FormLabel>Compteur (km)</FormLabel>
                    <FormInput
                      type="number"
                      name="odometer"
                      value={fuelFormData.odometer}
                      onChange={handleFuelFormChange}
                      placeholder="Kilométrage actuel"
                    />
                  </FormGroup>

                  {fuelError && <ErrorMessage>{fuelError}</ErrorMessage>}

                  <SubmitButton type="submit" disabled={fuelLoading}>
                    {fuelLoading ? 'Enregistrement...' : 'Ajouter Carburant'}
                  </SubmitButton>
                </form>
              )}
            </ModalBody>
          </ModalContainer>
        </ModalOverlay>
      )}

      {isReportModalOpen && selectedReport && (
        <ModalOverlay onClick={() => setIsReportModalOpen(false)}>
          <ModalContainer onClick={(e) => e.stopPropagation()}>
            <ModalHeader>
              <ModalHeaderContent>
                <ModalHeaderTitle>{selectedReport.subject}</ModalHeaderTitle>
                <ModalHeaderMeta>
                  <span className="material-symbols-outlined">schedule</span>
                  {new Date(selectedReport.created_at).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit'
                  })}
                  <span style={{ margin: '0 0.5rem' }}>•</span>
                  <span className="material-symbols-outlined">
                    {selectedReport.subject?.toLowerCase().includes('issue') ? 'warning' :
                     selectedReport.subject?.toLowerCase().includes('daily') ? 'today' :
                     selectedReport.subject?.toLowerCase().includes('weekly') ? 'date_range' : 'article'}
                  </span>
                  {selectedReport.subject?.toLowerCase().includes('issue') ? 'Issue Report' : 
                   selectedReport.subject?.toLowerCase().includes('daily') ? 'Daily Report' :
                   selectedReport.subject?.toLowerCase().includes('weekly') ? 'Weekly Report' :
                   'General Report'}
                </ModalHeaderMeta>
              </ModalHeaderContent>
              <ModalCloseButton onClick={() => setIsReportModalOpen(false)}>
                <span className="material-symbols-outlined">close</span>
              </ModalCloseButton>
            </ModalHeader>
            <ModalBody>
              <ModalContent>{selectedReport.body}</ModalContent>
            </ModalBody>
            <ModalFooter>
              <CloseButton onClick={() => setIsReportModalOpen(false)}>
                <span className="material-symbols-outlined">close</span>
                Close
              </CloseButton>
            </ModalFooter>
          </ModalContainer>
        </ModalOverlay>
      )}

      {/* Prevision AI Chat Widget */}
      <PrevisionChatWidget vehicles={assignedVehicles} />
    </Container>
  );
};

export default DriverDashboard;