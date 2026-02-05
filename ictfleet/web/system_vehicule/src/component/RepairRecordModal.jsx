import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { vehiclesAPI, accessoriesAPI } from '../service/api';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  animation: fadeIn 0.2s ease;

  @keyframes fadeIn {
    from { background-color: rgba(0, 0, 0, 0); }
    to { background-color: rgba(0, 0, 0, 0.4); }
  }
`;

const ModalContent = styled.div`
  background: white;
  border-radius: 12px;
  padding: 2rem;
  max-width: 700px;
  width: 90%;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
  animation: slideUp 0.3s ease;

  @keyframes slideUp {
    from {
      transform: translateY(20px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @media (max-width: 640px) {
    padding: 1.5rem;
    width: 95%;
  }
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  border-bottom: 1px solid #e2e8f0;
  padding-bottom: 1rem;
`;

const ModalTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  color: #0d141b;
  margin: 0;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #94a3b8;
  padding: 0;
  transition: color 0.2s ease;
  
  &:hover {
    color: #0d141b;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  font-weight: 600;
  color: #0d141b;
  margin-bottom: 0.5rem;
  font-size: 0.95rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #d1d5db;
  border-radius: 4px;
  font-size: 0.95rem;
  
  &:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  }
`;

const Select = styled.select`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #d1d5db;
  border-radius: 4px;
  font-size: 0.95rem;
  
  &:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #d1d5db;
  border-radius: 4px;
  font-size: 0.95rem;
  font-family: inherit;
  min-height: 100px;
  resize: vertical;
  
  &:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  }
`;

const AccessoriesContainer = styled.div`
  border: 1px solid #d1d5db;
  border-radius: 4px;
  padding: 0.75rem;
  max-height: 200px;
  overflow-y: auto;
  background: #f9fafb;
`;

const AccessoryCheckbox = styled.label`
  display: flex;
  align-items: center;
  padding: 0.5rem 0;
  cursor: pointer;
  
  input {
    margin-right: 0.5rem;
    cursor: pointer;
  }
  
  &:hover {
    background: #e5e7eb;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    border-radius: 4px;
  }
`;

const FileInputWrapper = styled.div`
  position: relative;
`;

const FileInput = styled.input`
  display: none;
`;

const FileInputButton = styled.button`
  width: 100%;
  padding: 0.75rem;
  border: 2px dashed #d1d5db;
  border-radius: 4px;
  background-color: #f9fafb;
  color: #6b7280;
  cursor: pointer;
  font-size: 0.95rem;
  transition: all 0.3s ease;
  
  &:hover {
    border-color: #3b82f6;
    background-color: #eff6ff;
    color: #3b82f6;
  }
`;

const FilePreview = styled.div`
  margin-top: 0.5rem;
  font-size: 0.85rem;
  color: #10b981;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
`;

const Button = styled.button`
  flex: 1;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 4px;
  font-weight: 500;
  cursor: pointer;
  font-size: 0.95rem;
  transition: all 0.3s ease;
`;

const SubmitButton = styled(Button)`
  background-color: #3b82f6;
  color: white;
  
  &:hover {
    background-color: #2563eb;
  }
  
  &:disabled {
    background-color: #d1d5db;
    cursor: not-allowed;
  }
`;

const CancelButton = styled(Button)`
  background-color: #e5e7eb;
  color: #374151;
  
  &:hover {
    background-color: #d1d5db;
  }
`;

const ErrorMessage = styled.div`
  color: #ef4444;
  font-size: 0.85rem;
  margin-top: 0.25rem;
`;

const SuccessMessage = styled.div`
  padding: 1rem;
  background-color: #d1fae5;
  color: #065f46;
  border-radius: 4px;
  margin-bottom: 1rem;
`;

const LoadingSpinner = styled.div`
  display: inline-block;
  width: 1rem;
  height: 1rem;
  border: 2px solid #d1d5db;
  border-radius: 50%;
  border-top-color: #3b82f6;
  animation: spin 0.8s linear infinite;
  
  @keyframes spin {
    to { transform: rotate(360deg); }
  }
`;

const SelectedAccessoriesList = styled.div`
  margin-top: 0.5rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const AccessoryTag = styled.span`
  background: #dbeafe;
  color: #1e40af;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.85rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  button {
    background: none;
    border: none;
    color: #1e40af;
    cursor: pointer;
    font-weight: bold;
    padding: 0;
    margin-left: 0.25rem;
    
    &:hover {
      color: #1e3a8a;
    }
  }
`;

const RepairRecordModal = ({ isOpen, onClose, onSuccess }) => {
  const [formData, setFormData] = useState({
    vehicle: '',
    title: '',
    description: '',
    work_images: null,
    accessories_used: [],
  });
  
  const [vehicles, setVehicles] = useState([]);
  const [accessories, setAccessories] = useState([]);
  const [imagePreview, setImagePreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (isOpen) {
      fetchData();
    }
  }, [isOpen]);

  const fetchData = async () => {
    try {
      const [vehiclesData, accessoriesData] = await Promise.all([
        vehiclesAPI.getVehicles(),
        accessoriesAPI.getAccessories()
      ]);
      setVehicles(vehiclesData.results || vehiclesData);
      setAccessories(accessoriesData.results || accessoriesData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData(prev => ({ ...prev, work_images: file }));
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAccessoryToggle = (accessoryId) => {
    setFormData(prev => {
      const current = prev.accessories_used;
      const index = current.indexOf(accessoryId);
      if (index > -1) {
        return { ...prev, accessories_used: current.filter((_, i) => i !== index) };
      } else {
        return { ...prev, accessories_used: [...current, accessoryId] };
      }
    });
  };

  const removeAccessory = (accessoryId) => {
    handleAccessoryToggle(accessoryId);
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.vehicle.trim()) {
      newErrors.vehicle = 'Vehicle is required';
    }
    if (!formData.title.trim()) {
      newErrors.title = 'Repair title is required';
    }
    if (!formData.description.trim()) {
      newErrors.description = 'Description is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setLoading(true);
    try {
      const data = new FormData();
      data.append('vehicle', formData.vehicle);
      data.append('title', formData.title);
      data.append('description', formData.description);
      if (formData.work_images) {
        data.append('work_images', formData.work_images);
      }
      
      // Add accessories
      formData.accessories_used.forEach(accessoryId => {
        data.append('accessories_used', accessoryId);
      });

      const response = await vehiclesAPI.recordRepair(data);
      
      setSuccess(true);
      setTimeout(() => {
        handleClose();
        onSuccess && onSuccess(response);
      }, 1500);
    } catch (error) {
      console.error('Error submitting repair record:', error);
      setErrors({ submit: error.data?.detail || 'Failed to submit repair record' });
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    setFormData({
      vehicle: '',
      title: '',
      description: '',
      work_images: null,
      accessories_used: [],
    });
    setImagePreview(null);
    setErrors({});
    setSuccess(false);
    onClose();
  };

  if (!isOpen) return null;

  const selectedAccessories = accessories.filter(a => 
    formData.accessories_used.includes(a.id)
  );

  return (
    <ModalOverlay onClick={handleClose}>
      <ModalContent onClick={e => e.stopPropagation()}>
        <ModalHeader>
          <ModalTitle>Record Repair</ModalTitle>
          <CloseButton onClick={handleClose}>×</CloseButton>
        </ModalHeader>

        {success && (
          <SuccessMessage>
            ✓ Repair record submitted successfully!
          </SuccessMessage>
        )}

        {errors.submit && (
          <ErrorMessage style={{ marginBottom: '1rem', color: '#ef4444' }}>
            {errors.submit}
          </ErrorMessage>
        )}

        <form onSubmit={handleSubmit}>
          <FormGroup>
            <Label>Vehicle *</Label>
            <Select
              name="vehicle"
              value={formData.vehicle}
              onChange={handleInputChange}
              disabled={loading}
            >
              <option value="">Select a vehicle</option>
              {vehicles.map(vehicle => (
                <option key={vehicle.id} value={vehicle.id}>
                  {vehicle.year} {vehicle.make} {vehicle.model} ({vehicle.license_plate})
                </option>
              ))}
            </Select>
            {errors.vehicle && <ErrorMessage>{errors.vehicle}</ErrorMessage>}
          </FormGroup>

          <FormGroup>
            <Label>Repair Title *</Label>
            <Input
              type="text"
              name="title"
              placeholder="e.g., Engine Oil Change and Filter Replacement"
              value={formData.title}
              onChange={handleInputChange}
              disabled={loading}
            />
            {errors.title && <ErrorMessage>{errors.title}</ErrorMessage>}
          </FormGroup>

          <FormGroup>
            <Label>Repair Description *</Label>
            <TextArea
              name="description"
              placeholder="Describe the repair work performed..."
              value={formData.description}
              onChange={handleInputChange}
              disabled={loading}
            />
            {errors.description && <ErrorMessage>{errors.description}</ErrorMessage>}
          </FormGroup>

          <FormGroup>
            <Label>Work Photos</Label>
            <FileInputWrapper>
              <FileInput
                type="file"
                id="work_images"
                accept="image/*"
                onChange={handleImageChange}
                disabled={loading}
              />
              <FileInputButton
                type="button"
                onClick={() => document.getElementById('work_images').click()}
                disabled={loading}
              >
                📷 Click to upload work photos
              </FileInputButton>
            </FileInputWrapper>
            {imagePreview && (
              <FilePreview>
                ✓ Image selected: {formData.work_images?.name}
              </FilePreview>
            )}
          </FormGroup>

          <FormGroup>
            <Label>Accessories Used</Label>
            {accessories.length > 0 ? (
              <>
                <AccessoriesContainer>
                  {accessories.map(accessory => (
                    <AccessoryCheckbox key={accessory.id}>
                      <input
                        type="checkbox"
                        checked={formData.accessories_used.includes(accessory.id)}
                        onChange={() => handleAccessoryToggle(accessory.id)}
                        disabled={loading}
                      />
                      <span>{accessory.name} (Stock: {accessory.stock_level})</span>
                    </AccessoryCheckbox>
                  ))}
                </AccessoriesContainer>
                {selectedAccessories.length > 0 && (
                  <SelectedAccessoriesList>
                    {selectedAccessories.map(accessory => (
                      <AccessoryTag key={accessory.id}>
                        {accessory.name}
                        <button
                          type="button"
                          onClick={() => removeAccessory(accessory.id)}
                          disabled={loading}
                        >
                          ×
                        </button>
                      </AccessoryTag>
                    ))}
                  </SelectedAccessoriesList>
                )}
              </>
            ) : (
              <div style={{ color: '#9ca3af', fontSize: '0.9rem' }}>
                No accessories available
              </div>
            )}
          </FormGroup>

          <ButtonGroup>
            <CancelButton type="button" onClick={handleClose} disabled={loading}>
              Cancel
            </CancelButton>
            <SubmitButton type="submit" disabled={loading}>
              {loading ? (
                <>
                  <LoadingSpinner /> Submitting...
                </>
              ) : (
                'Submit Repair Record'
              )}
            </SubmitButton>
          </ButtonGroup>
        </form>
      </ModalContent>
    </ModalOverlay>
  );
};

export default RepairRecordModal;
