import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';

const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const UserProfile = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 0.5rem;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
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
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 0.5rem;
    height: 0.5rem;
    background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%236b7280'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'/%3E%3C/svg%3E") no-repeat center;
    background-size: contain;
    opacity: 0.6;
    transition: transform 0.2s ease;
  }

  ${UserProfile}:hover &::after {
    transform: translate(-50%, -50%) rotate(180deg);
  }
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 0.5rem;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  min-width: 200px;
  z-index: 1000;
  opacity: ${props => props.$isOpen ? 1 : 0};
  visibility: ${props => props.$isOpen ? 'visible' : 'hidden'};
  transform: ${props => props.$isOpen ? 'translateY(0)' : 'translateY(-10px)'};
  transition: all 0.2s ease;
`;

const DropdownItem = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1rem;
  background: none;
  border: none;
  text-align: left;
  cursor: pointer;
  font-size: 0.875rem;
  color: #374151;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #f3f4f6;
  }

  &:first-child {
    border-radius: 0.5rem 0.5rem 0 0;
  }

  &:last-child {
    border-radius: 0 0 0.5rem 0.5rem;
    color: #dc2626;

    &:hover {
      background-color: #fef2f2;
      color: #b91c1c;
    }
  }

  &:not(:last-child) {
    border-bottom: 1px solid #f3f4f6;
  }

  i {
    width: 1rem;
    height: 1rem;
    opacity: 0.6;
  }
`;

const UserProfileDropdown = ({ currentUser, onLogout, onViewProfile }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleProfileClick = () => {
    setIsOpen(false);
    if (onViewProfile) {
      onViewProfile();
    }
  };

  const handleLogoutClick = () => {
    setIsOpen(false);
    onLogout();
  };

  return (
    <DropdownContainer ref={dropdownRef}>
      <UserProfile onClick={() => setIsOpen(!isOpen)}>
        <UserInfo>
          <p>{currentUser?.first_name} {currentUser?.last_name}</p>
          <p>{currentUser?.role?.charAt(0).toUpperCase() + currentUser?.role?.slice(1)}</p>
        </UserInfo>
        <UserAvatar
          style={{
            backgroundImage: currentUser?.profile_picture
              ? `url('${currentUser.profile_picture}')`
              : 'none',
            backgroundColor: '#f1f5f9'
          }}
        >
          {!currentUser?.profile_picture && (
            <span style={{
              color: '#64748b',
              fontSize: '1.25rem',
              fontWeight: '600',
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)'
            }}>
              {(currentUser?.first_name || currentUser?.username || 'U').charAt(0).toUpperCase()}
            </span>
          )}
        </UserAvatar>
      </UserProfile>

      <DropdownMenu $isOpen={isOpen}>
        <DropdownItem onClick={handleProfileClick}>
          <i data-feather="user" className="fi-icon"></i>
          <span>View Profile</span>
        </DropdownItem>
        <DropdownItem onClick={handleLogoutClick}>
          <i data-feather="log-out" className="fi-icon"></i>
          <span>Logout</span>
        </DropdownItem>
      </DropdownMenu>
    </DropdownContainer>
  );
};

export default UserProfileDropdown;