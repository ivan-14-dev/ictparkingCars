import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Modal from './Modal';
import InputField from './InputField';
import { authAPI, isAdmin } from '../service/api';

const UploadSection = styled.div`
  margin-bottom: 2rem;
  padding: 2rem;
  border-radius: 0.75rem;
  border: 2px dashed #e2e8f0;
  background: rgba(248, 250, 252, 0.5);
  text-align: center;
  cursor: ${props => props.$isEditable ? 'pointer' : 'default'};
  transition: all 0.2s ease;
  position: relative;

  ${props => props.$isEditable && `
    &:hover {
      border-color: #137fec;
      background: rgba(19, 127, 236, 0.02);
    }
  `}
`;

const FileInput = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: ${props => props.disabled ? 'default' : 'pointer'};
`;

const ProfileImageContainer = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: center no-repeat;
  background-size: cover;
  border: 4px solid #e2e8f0;
  margin: 0 auto 1rem;
  position: relative;
`;

const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
`;

const ImagePlaceholder = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: #f1f5f9;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  font-weight: 600;
  color: #64748b;
`;

const UploadOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 50%;
  background: rgba(19, 127, 236, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 0.875rem;
  font-weight: 600;
  opacity: 0;
  transition: opacity 0.2s ease;

  ${UploadSection}:hover & {
    opacity: 1;
  }
`;

const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

const SectionIcon = styled.span`
  color: #137fec;
  font-size: 1.25rem;
`;

const SectionTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  color: #0d141b;
  margin: 0;
`;

const FormGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem 2rem;
  }
`;

const FormField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const FieldLabel = styled.label`
  font-size: 0.875rem;
  font-weight: 700;
  color: #374151;
`;

const ReadOnlyField = styled.div`
  padding: 0.5rem;
  border: 1px solid #e2e8f0;
  border-radius: 0.375rem;
  background: #f8fafc;
  font-size: 0.875rem;
  color: #374151;
  min-height: 2.5rem;
  display: flex;
  align-items: center;
`;

const RoleBadge = styled.span`
  display: inline-block;
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;

  ${props => {
    switch (props.$role) {
      case 'admin':
        return `
          background: rgba(19, 127, 236, 0.1);
          color: #137fec;
        `;
      case 'driver':
        return `
          background: rgba(34, 197, 94, 0.1);
          color: #16a34a;
        `;
      case 'mechanic':
        return `
          background: rgba(245, 158, 11, 0.1);
          color: #d97706;
        `;
      default:
        return `
          background: rgba(107, 114, 128, 0.1);
          color: #6b7280;
        `;
    }
  }}
`;

const UserProfileModal = ({ isOpen, onClose, currentUser, onProfileUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    first_name: '',
    last_name: '',
    email: '',
    phone_number: '',
    department: '',
    employee_id: '',
    profile_picture: null
  });
  const [imagePreview, setImagePreview] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const canEdit = isAdmin();
  const isEditable = canEdit && isEditing;

  useEffect(() => {
    if (currentUser && isOpen) {
      setFormData({
        username: currentUser.username || '',
        first_name: currentUser.first_name || '',
        last_name: currentUser.last_name || '',
        email: currentUser.email || '',
        phone_number: currentUser.phone_number || '',
        department: currentUser.department || '',
        employee_id: currentUser.employee_id || '',
        profile_picture: null
      });
      setImagePreview(currentUser.profile_picture || null);
      setIsEditing(false);
      setErrors({});
    }
  }, [currentUser, isOpen]);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: null
      }));
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData(prev => ({
        ...prev,
        profile_picture: file
      }));
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.username.trim()) {
      newErrors.username = 'Username is required';
    }

    if (!formData.first_name.trim()) {
      newErrors.first_name = 'First name is required';
    }

    if (!formData.last_name.trim()) {
      newErrors.last_name = 'Last name is required';
    }

    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Valid email is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSave = async () => {
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    try {
      const updateData = {
        username: formData.username,
        first_name: formData.first_name,
        last_name: formData.last_name,
        email: formData.email,
        phone_number: formData.phone_number,
        department: formData.department,
        employee_id: formData.employee_id,
      };

      if (formData.profile_picture) {
        updateData.profile_picture = formData.profile_picture;
      }

      const updatedUser = await authAPI.updateProfile(updateData);

      onProfileUpdate && onProfileUpdate(updatedUser);
      setIsEditing(false);
    } catch (error) {
      console.error('Error updating profile:', error);
      if (error.data) {
        setErrors(error.data);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleCancel = () => {
    // Reset form to original values
    if (currentUser) {
      setFormData({
        username: currentUser.username || '',
        first_name: currentUser.first_name || '',
        last_name: currentUser.last_name || '',
        email: currentUser.email || '',
        phone_number: currentUser.phone_number || '',
        department: currentUser.department || '',
        employee_id: currentUser.employee_id || '',
        profile_picture: null
      });
      setImagePreview(currentUser.profile_picture || null);
    }
    setIsEditing(false);
    setErrors({});
  };

  const handleClose = () => {
    handleCancel();
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={handleClose}
      title="User Profile"
      size="large"
    >
      <div>
        {/* Profile Image Section */}
        <UploadSection
          $isEditable={isEditable}
          onClick={() => isEditable && document.getElementById('profile-image-input').click()}
        >
          <FileInput
            id="profile-image-input"
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            disabled={!isEditable}
          />
          <ProfileImageContainer>
            {imagePreview ? (
              <ProfileImage src={imagePreview} alt="Profile" />
            ) : (
              <ImagePlaceholder>
                {(currentUser?.first_name || currentUser?.username || 'U').charAt(0).toUpperCase()}
              </ImagePlaceholder>
            )}
          </ProfileImageContainer>
          {isEditable && (
            <UploadOverlay>
              Change Photo
            </UploadOverlay>
          )}
        </UploadSection>

        {/* Basic Information */}
        <SectionHeader>
          <SectionIcon>
            <i data-feather="user" className="fi-icon"></i>
          </SectionIcon>
          <SectionTitle>Basic Information</SectionTitle>
        </SectionHeader>

        <FormGrid>
          <FormField>
            <FieldLabel htmlFor="username">Username *</FieldLabel>
            {isEditable ? (
              <InputField
                id="username"
                type="text"
                placeholder="Enter username"
                value={formData.username}
                onChange={(value) => handleInputChange('username', value)}
                error={errors.username}
              />
            ) : (
              <ReadOnlyField>{formData.username}</ReadOnlyField>
            )}
          </FormField>

          <FormField>
            <FieldLabel>Role</FieldLabel>
            <ReadOnlyField>
              <RoleBadge $role={currentUser?.role}>
                {currentUser?.role?.charAt(0).toUpperCase() + currentUser?.role?.slice(1)}
              </RoleBadge>
            </ReadOnlyField>
          </FormField>

          <FormField>
            <FieldLabel htmlFor="first_name">First Name *</FieldLabel>
            {isEditable ? (
              <InputField
                id="first_name"
                type="text"
                placeholder="Enter first name"
                value={formData.first_name}
                onChange={(value) => handleInputChange('first_name', value)}
                error={errors.first_name}
              />
            ) : (
              <ReadOnlyField>{formData.first_name}</ReadOnlyField>
            )}
          </FormField>

          <FormField>
            <FieldLabel htmlFor="last_name">Last Name *</FieldLabel>
            {isEditable ? (
              <InputField
                id="last_name"
                type="text"
                placeholder="Enter last name"
                value={formData.last_name}
                onChange={(value) => handleInputChange('last_name', value)}
                error={errors.last_name}
              />
            ) : (
              <ReadOnlyField>{formData.last_name}</ReadOnlyField>
            )}
          </FormField>

          <FormField>
            <FieldLabel htmlFor="email">Email</FieldLabel>
            {isEditable ? (
              <InputField
                id="email"
                type="email"
                placeholder="Enter email address"
                value={formData.email}
                onChange={(value) => handleInputChange('email', value)}
                error={errors.email}
              />
            ) : (
              <ReadOnlyField>{formData.email || 'Not provided'}</ReadOnlyField>
            )}
          </FormField>

          <FormField>
            <FieldLabel htmlFor="phone_number">Phone Number</FieldLabel>
            {isEditable ? (
              <InputField
                id="phone_number"
                type="tel"
                placeholder="Enter phone number"
                value={formData.phone_number}
                onChange={(value) => handleInputChange('phone_number', value)}
              />
            ) : (
              <ReadOnlyField>{formData.phone_number || 'Not provided'}</ReadOnlyField>
            )}
          </FormField>
        </FormGrid>

        {/* Work Information */}
        <SectionHeader style={{ marginTop: '2rem' }}>
          <SectionIcon>
            <i data-feather="briefcase" className="fi-icon"></i>
          </SectionIcon>
          <SectionTitle>Work Information</SectionTitle>
        </SectionHeader>

        <FormGrid>
          <FormField>
            <FieldLabel htmlFor="employee_id">Employee ID</FieldLabel>
            {isEditable ? (
              <InputField
                id="employee_id"
                type="text"
                placeholder="Enter employee ID"
                value={formData.employee_id}
                onChange={(value) => handleInputChange('employee_id', value)}
              />
            ) : (
              <ReadOnlyField>{formData.employee_id || 'Not assigned'}</ReadOnlyField>
            )}
          </FormField>

          <FormField>
            <FieldLabel htmlFor="department">Department</FieldLabel>
            {isEditable ? (
              <InputField
                id="department"
                type="text"
                placeholder="Enter department"
                value={formData.department}
                onChange={(value) => handleInputChange('department', value)}
              />
            ) : (
              <ReadOnlyField>{formData.department || 'Not assigned'}</ReadOnlyField>
            )}
          </FormField>
        </FormGrid>

        {/* Form Actions */}
        <div style={{
          display: 'flex',
          justifyContent: 'flex-end',
          gap: '1rem',
          marginTop: '2rem',
          paddingTop: '1rem',
          borderTop: '1px solid #e5e7eb'
        }}>
          {canEdit && !isEditing && (
            <button
              type="button"
              onClick={() => setIsEditing(true)}
              style={{
                padding: '0.5rem 1rem',
                background: '#137fec',
                color: 'white',
                border: 'none',
                borderRadius: '0.375rem',
                fontSize: '0.875rem',
                fontWeight: '500',
                cursor: 'pointer'
              }}
            >
              Edit Profile
            </button>
          )}

          {isEditing && (
            <>
              <button
                type="button"
                onClick={handleCancel}
                style={{
                  padding: '0.5rem 1rem',
                  background: '#f3f4f6',
                  color: '#374151',
                  border: '1px solid #d1d5db',
                  borderRadius: '0.375rem',
                  fontSize: '0.875rem',
                  fontWeight: '500',
                  cursor: 'pointer'
                }}
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleSave}
                disabled={isLoading}
                style={{
                  padding: '0.5rem 1rem',
                  background: '#137fec',
                  color: 'white',
                  border: 'none',
                  borderRadius: '0.375rem',
                  fontSize: '0.875rem',
                  fontWeight: '500',
                  cursor: isLoading ? 'not-allowed' : 'pointer',
                  opacity: isLoading ? 0.6 : 1
                }}
              >
                {isLoading ? 'Saving...' : 'Save Changes'}
              </button>
            </>
          )}

          {!isEditing && (
            <button
              type="button"
              onClick={handleClose}
              style={{
                padding: '0.5rem 1rem',
                background: '#f3f4f6',
                color: '#374151',
                border: '1px solid #d1d5db',
                borderRadius: '0.375rem',
                fontSize: '0.875rem',
                fontWeight: '500',
                cursor: 'pointer'
              }}
            >
              Close
            </button>
          )}
        </div>
      </div>
    </Modal>
  );
};

export default UserProfileModal;