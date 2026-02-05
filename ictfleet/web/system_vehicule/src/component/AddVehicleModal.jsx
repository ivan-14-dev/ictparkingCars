import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Modal from './Modal';
import { authAPI, vehiclesAPI } from '../service/api';

const UploadSection = styled.div`
  margin-bottom: 2rem;
  padding: 2rem;
  border-radius: 0.75rem;
  border: 2px dashed #e2e8f0;
  background: rgba(248, 250, 252, 0.5);
  text-align: center;
  cursor: pointer;
  transition: all 0.2s ease;
  position: relative;

  &:hover {
    border-color: #137fec;
    background: rgba(19, 127, 236, 0.02);
  }
`;

const FileInput = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
`;

const UploadIcon = styled.div`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  background: rgba(19, 127, 236, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #137fec;
  margin: 0 auto 1rem;

  span {
    font-size: 1.875rem;
  }
`;

const UploadTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: 700;
  color: #0d141b;
  margin: 0 0 0.25rem 0;
`;

const UploadDescription = styled.p`
  font-size: 0.875rem;
  color: #64748b;
  margin: 0;
`;

const SelectFileButton = styled.button`
  margin-top: 0.5rem;
  background: #f1f5f9;
  color: #0d141b;
  padding: 0.5rem 1.5rem;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  font-weight: 700;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: #e2e8f0;
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

const FieldHelp = styled.p`
  font-size: 0.75rem;
  color: #6b7280;
  margin: 0.25rem 0 0 0;
`;

const ErrorMessage = styled.p`
  font-size: 0.75rem;
  color: #dc2626;
  margin: 0.25rem 0 0 0;
`;

const ImagePreview = styled.div`
  margin-top: 1rem;
  position: relative;
  display: inline-block;
`;

const PreviewImage = styled.img`
  width: 120px;
  height: 80px;
  object-fit: cover;
  border-radius: 0.5rem;
  border: 2px solid #e5e7eb;
`;

const RemoveImageButton = styled.button`
  position: absolute;
  top: -0.5rem;
  right: -0.5rem;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  background: #dc2626;
  color: white;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;

  &:hover {
    background: #b91c1c;
  }
`;

const TextInput = styled.input`
  width: 100%;
  height: 2.75rem;
  padding: 0 1rem;
  border-radius: 0.5rem;
  border: 1px solid #d1d5db;
  background: white;
  color: #0d141b;
  font-size: 0.875rem;
  transition: all 0.2s ease;
  outline: none;

  &:focus {
    border-color: #137fec;
    box-shadow: 0 0 0 1px #137fec;
  }

  &::placeholder {
    color: #9ca3af;
  }
`;

const SelectInput = styled.select`
  width: 100%;
  height: 2.75rem;
  padding: 0 1rem;
  border-radius: 0.5rem;
  border: 1px solid #d1d5db;
  background: white;
  color: #0d141b;
  font-size: 0.875rem;
  cursor: pointer;
  outline: none;
  appearance: none;

  &:focus {
    border-color: #137fec;
    box-shadow: 0 0 0 1px #137fec;
  }
`;

const VehicleTypeField = styled(FormField)`
  @media (min-width: 768px) {
    grid-column: span 2;
  }
`;

const TypeGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.75rem;

  @media (min-width: 640px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(6, 1fr);
  }
`;

const TypeIcon = styled.span`
  font-size: 1.25rem;
  margin-bottom: 0.25rem;
`;

const TypeLabel = styled.span`
  font-size: 0.75rem;
  font-weight: 500;
`;

const TypeOption = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0.625rem;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.2s ease;
  background: white;
  min-height: 80px;

  &:hover {
    background: #f9fafb;
    border-color: #137fec;
    transform: translateY(-1px);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  input:checked + & {
    background: rgba(19, 127, 236, 0.05);
    border-color: #137fec;
    box-shadow: 0 0 0 2px rgba(19, 127, 236, 0.1);

    ${TypeLabel} {
      color: #137fec;
      font-weight: 600;
    }
  }
`;

const DriverField = styled(FormField)`
  position: relative;
`;

const DriverSelect = styled(SelectInput)`
  padding-left: 2.5rem;
`;

const DriverIcon = styled.span`
  position: absolute;
  left: 0.75rem;
  top: 50%;
  transform: translateY(-50%);
  color: #9ca3af;
  font-size: 1.25rem;
  pointer-events: none;
`;

const FormActions = styled.div`
  margin-top: 3rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 1rem;
  padding-top: 2rem;
  border-top: 1px solid #f1f5f9;
`;

const DiscardButton = styled.button`
  padding: 0.625rem 1.5rem;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  font-weight: 700;
  color: #4b5563;
  background: transparent;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: #f3f4f6;
  }
`;

const SaveButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.625rem 2.5rem;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  font-weight: 700;
  color: white;
  background: #137fec;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 0 4px 6px rgba(19, 127, 236, 0.2);

  &:hover:not(:disabled) {
    background: rgba(19, 127, 236, 0.9);
    transform: translateY(-1px);
    box-shadow: 0 6px 8px rgba(19, 127, 236, 0.25);
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
    transform: none;
  }

  span:first-child {
    font-size: 0.875rem;
    ${props => props.disabled && `
      animation: spin 1s linear infinite;
    `}
  }

  span:last-child {
    font-size: 0.875rem;
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

const HelpSection = styled.div`
  margin-top: 2rem;
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1rem;
  border-radius: 0.75rem;
  background: rgba(19, 127, 236, 0.05);
  border: 1px solid rgba(19, 127, 236, 0.1);
`;

const HelpIcon = styled.span`
  color: #137fec;
  font-size: 1.25rem;
  flex-shrink: 0;
`;

const HelpText = styled.p`
  font-size: 0.875rem;
  color: #4b5563;
  margin: 0;

  a {
    color: #137fec;
    font-weight: 700;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const AddVehicleModal = ({ isOpen, onClose, onSave, editingVehicle }) => {
  const [formData, setFormData] = useState({
    brandModel: '',
    year: '',
    licensePlate: '',
    color: '',
    fuelType: 'gasoline',
    vehicleType: '',
    primaryDriver: '',
    image: null,
    imagePreview: null
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [drivers, setDrivers] = useState([]);
  const [loadingDrivers, setLoadingDrivers] = useState(false);

  useEffect(() => {
    const fetchDrivers = async () => {
      if (!isOpen) return;

      setLoadingDrivers(true);
      try {
        const response = await authAPI.getDrivers();
        // Handle both array and paginated responses
        const driverList = Array.isArray(response) ? response : (response.results || []);
        setDrivers(driverList);
        console.log('Fetched drivers:', driverList);
      } catch (error) {
        console.error('Error fetching drivers:', error);
        setDrivers([]);
      } finally {
        setLoadingDrivers(false);
      }
    };

    // Populate form if editing
    if (editingVehicle && isOpen) {
      setFormData({
        brandModel: editingVehicle.make && editingVehicle.model ? `${editingVehicle.make} ${editingVehicle.model}` : '',
        year: editingVehicle.year || '',
        licensePlate: editingVehicle.license_plate || '',
        color: editingVehicle.color || '',
        fuelType: editingVehicle.fuel_type || 'petrol',
        vehicleType: editingVehicle.vehicle_type || '',
        primaryDriver: editingVehicle.assigned_driver || '',
        image: null,
        imagePreview: editingVehicle.image || null
      });
    } else if (!editingVehicle && isOpen) {
      // Reset form if creating new vehicle
      setFormData({
        brandModel: '',
        year: '',
        licensePlate: '',
        color: '',
        fuelType: 'gasoline',
        vehicleType: '',
        primaryDriver: '',
        image: null,
        imagePreview: null
      });
      setErrors({});
    }

    fetchDrivers();
  }, [isOpen, editingVehicle]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Validate file type
      const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png'];
      if (!allowedTypes.includes(file.type)) {
        setErrors(prev => ({
          ...prev,
          image: 'Please select a valid image file (JPG, PNG)'
        }));
        return;
      }

      // Validate file size (5MB max)
      if (file.size > 5 * 1024 * 1024) {
        setErrors(prev => ({
          ...prev,
          image: 'Image size must be less than 5MB'
        }));
        return;
      }

      // Create preview
      const reader = new FileReader();
      reader.onload = (e) => {
        setFormData(prev => ({
          ...prev,
          image: file,
          imagePreview: e.target.result
        }));
      };
      reader.readAsDataURL(file);

      // Clear error
      setErrors(prev => ({
        ...prev,
        image: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.brandModel.trim()) {
      newErrors.brandModel = 'Brand and model are required';
    }

    if (!formData.year) {
      newErrors.year = 'Manufacturing year is required';
    }

    if (!formData.licensePlate.trim()) {
      newErrors.licensePlate = 'License plate is required';
    } else if (formData.licensePlate.length < 3) {
      newErrors.licensePlate = 'License plate must be at least 3 characters';
    } else if (formData.licensePlate.length > 15) {
      newErrors.licensePlate = 'License plate must not exceed 15 characters';
    } else if (!/^[A-Z0-9\-\s]+$/i.test(formData.licensePlate)) {
      newErrors.licensePlate = 'License plate can only contain letters, numbers, hyphens and spaces';
    }

    if (!formData.vehicleType) {
      newErrors.vehicleType = 'Please select a vehicle type';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Parse brandModel into make and model
      const [make, ...modelParts] = formData.brandModel.trim().split(/\s+/);
      const model = modelParts.join(' ') || formData.brandModel;

      // Use FormData for file uploads
      const submitData = new FormData();
      submitData.append('make', make);
      submitData.append('model', model);
      submitData.append('year', parseInt(formData.year));
      submitData.append('license_plate', formData.licensePlate.toUpperCase());
      submitData.append('color', formData.color);
      submitData.append('fuel_type', formData.fuelType);
      submitData.append('vehicle_type', formData.vehicleType);
      if (formData.primaryDriver) {
        submitData.append('assigned_driver', formData.primaryDriver);
      }
      
      // Only append image if it's a new file (File instance)
      if (formData.image && formData.image instanceof File) {
        submitData.append('image', formData.image);
      }
      // For editing, if no new image was selected, don't include image in the FormData
      // This allows the backend to keep the existing image

      // Pass the data to parent component (AdminDashboard) to handle API call
      // This ensures the API call and data refresh are done before closing the modal
      await onSave(submitData, editingVehicle);
      
      if (editingVehicle) {
        alert('Vehicle updated successfully!');
      } else {
        alert('Vehicle added successfully!');
      }
      
      handleClose();
    } catch (error) {
      console.error('Error saving vehicle:', error);
      alert('Failed to save vehicle: ' + (error.message || 'Unknown error'));
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setFormData({
      brandModel: '',
      year: '',
      licensePlate: '',
      color: '',
      fuelType: 'gasoline',
      vehicleType: '',
      primaryDriver: '',
      image: null,
      imagePreview: null
    });
    setErrors({});
    setIsSubmitting(false);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={handleClose} title={editingVehicle ? "Edit Vehicle" : "Add New Vehicle"}>
      <UploadSection>
        <FileInput
          type="file"
          accept="image/jpeg,image/jpg,image/png"
          onChange={handleImageUpload}
        />
        <UploadIcon>
          <span className="material-symbols-outlined">add_a_photo</span>
        </UploadIcon>
        <div>
          <UploadTitle>Upload Vehicle Photo</UploadTitle>
          <UploadDescription>
            Click to browse or drag and drop a high-resolution JPG or PNG (max 5MB).
          </UploadDescription>
        </div>
        <SelectFileButton type="button">Select File</SelectFileButton>

        {formData.imagePreview && (
          <ImagePreview>
            <PreviewImage src={formData.imagePreview} alt="Vehicle preview" />
            <RemoveImageButton
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setFormData(prev => ({
                  ...prev,
                  image: null,
                  imagePreview: null
                }));
              }}
            >
              <span className="material-symbols-outlined">close</span>
            </RemoveImageButton>
          </ImagePreview>
        )}

        {errors.image && <ErrorMessage>{errors.image}</ErrorMessage>}
      </UploadSection>

      <SectionHeader>
        <SectionIcon className="material-symbols-outlined">info</SectionIcon>
        <SectionTitle>Vehicle Details</SectionTitle>
      </SectionHeader>

      <form onSubmit={handleSubmit}>
        <FormGrid>
          <FormField>
            <FieldLabel>Brand & Model</FieldLabel>
            <TextInput
              type="text"
              name="brandModel"
              placeholder="e.g. Toyota Camry Hybrid, Ford F-150, Tesla Model 3"
              value={formData.brandModel}
              onChange={handleInputChange}
            />
            <FieldHelp>Enter the complete vehicle brand and model name</FieldHelp>
            {errors.brandModel && <ErrorMessage>{errors.brandModel}</ErrorMessage>}
          </FormField>

          <FormField>
            <FieldLabel>Manufacturing Year</FieldLabel>
            <TextInput
              type="number"
              name="year"
              placeholder="e.g., 2024"
              value={formData.year}
              onChange={handleInputChange}
              min="1900"
              max={new Date().getFullYear()}
            />
            <FieldHelp>The year the vehicle was manufactured</FieldHelp>
            {errors.year && <ErrorMessage>{errors.year}</ErrorMessage>}
          </FormField>

          <FormField>
            <FieldLabel>License Plate</FieldLabel>
            <TextInput
              type="text"
              name="licensePlate"
              placeholder="ABC-1234 or CAMPUS-01"
              value={formData.licensePlate}
              onChange={handleInputChange}
              style={{ textTransform: 'uppercase' }}
              maxLength="15"
            />
            <FieldHelp>Official license plate (3-15 chars: letters, numbers, hyphens, spaces)</FieldHelp>
            {errors.licensePlate && <ErrorMessage>{errors.licensePlate}</ErrorMessage>}
          </FormField>

          <FormField>
            <FieldLabel>Color</FieldLabel>
            <TextInput
              type="text"
              name="color"
              placeholder="e.g., Black, White, Silver"
              value={formData.color}
              onChange={handleInputChange}
            />
            <FieldHelp>Vehicle color</FieldHelp>
            {errors.color && <ErrorMessage>{errors.color}</ErrorMessage>}
          </FormField>

          <FormField>
            <FieldLabel>Fuel Type</FieldLabel>
            <SelectInput
              name="fuelType"
              value={formData.fuelType}
              onChange={handleInputChange}
            >
              <option value="petrol">Gasoil</option>
              <option value="diesel">Diesel</option>
              <option value="electric">Electric</option>
              <option value="hybrid">Hybrid</option>
            </SelectInput>
            {errors.fuelType && <ErrorMessage>{errors.fuelType}</ErrorMessage>}
          </FormField>

          <FormField>
            <FieldLabel>Vehicle Type</FieldLabel>
            <SelectInput
              name="vehicleType"
              value={formData.vehicleType}
              onChange={handleInputChange}
            >
              <option value="" disabled>Select vehicle type</option>
              <option value="sedan">Sedan - Faculty & admin transport</option>
              <option value="suv">SUV - Field trips & research</option>
              <option value="van">Van - Student group transport</option>
              <option value="pickup">Pickup Truck - Maintenance & utility</option>
              <option value="bus">Bus - Large group transport</option>
              <option value="golf_cart">Golf Cart - Campus navigation</option>
            </SelectInput>
            <FieldHelp>Select the primary category that best describes this vehicle</FieldHelp>
            {errors.vehicleType && <ErrorMessage>{errors.vehicleType}</ErrorMessage>}
          </FormField>

          <DriverField>
            <FieldLabel>Assign Primary Driver</FieldLabel>
            <DriverIcon className="material-symbols-outlined">person_search</DriverIcon>
            <DriverSelect
              name="primaryDriver"
              value={formData.primaryDriver}
              onChange={handleInputChange}
              disabled={loadingDrivers}
            >
              <option value="" disabled>
                {loadingDrivers ? 'Loading drivers...' : 'Choose primary driver (optional)'}
              </option>
              {drivers.map(driver => (
                <option key={driver.id} value={driver.id}>
                  {driver.first_name} {driver.last_name} - {driver.department || 'Driver'}
                </option>
              ))}
              <option value="unassigned">Unassigned - Available for any driver</option>
            </DriverSelect>
            <FieldHelp>The main person responsible for this vehicle (can be changed later)</FieldHelp>
          </DriverField>
        </FormGrid>

        <FormActions>
          <DiscardButton type="button" onClick={handleClose} disabled={isSubmitting}>
            Discard Changes
          </DiscardButton>
          <SaveButton type="submit" disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <span className="material-symbols-outlined">refresh</span>
                <span>Saving...</span>
              </>
            ) : (
              <>
                <span className="material-symbols-outlined">save</span>
                <span>Save Vehicle</span>
              </>
            )}
          </SaveButton>
        </FormActions>
      </form>

      <HelpSection>
        <HelpIcon className="material-symbols-outlined">help</HelpIcon>
        <HelpText>
          Need help registering a specialized vehicle?{' '}
          <a href="#">Contact the asset management team</a> for guidelines on non-standard campus equipment.
        </HelpText>
      </HelpSection>
    </Modal>
  );
};

export default AddVehicleModal;