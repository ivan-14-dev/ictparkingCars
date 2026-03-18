import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { vehiclesAPI } from '../service/api';

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
  max-width: 600px;
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
  font-weight: 500;
  color: #374151;
  margin-bottom: 0.5rem;
  font-size: 0.95rem;
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
  min-height: 120px;
  resize: vertical;
  
  &:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
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

const ImagePreviewsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 0.5rem;
`;

const ImagePreviewItem = styled.div`
  position: relative;
  width: 80px;
  height: 80px;
  border-radius: 4px;
  overflow: hidden;
  border: 2px solid #e5e7eb;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const RemoveImageButton = styled.button`
  position: absolute;
  top: -6px;
  right: -6px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #ef4444;
  color: white;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: bold;
  
  &:hover {
    background-color: #dc2626;
  }
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
  background-color: #10b981;
  color: white;
  
  &:hover {
    background-color: #059669;
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
  border-top-color: #10b981;
  animation: spin 0.8s linear infinite;
  
  @keyframes spin {
    to { transform: rotate(360deg); }
  }
`;

const BreakdownReportModal = ({ isOpen, onClose, onSuccess }) => {
  const [formData, setFormData] = useState({
    vehicle: '',
    title: '',
    description: '',
    images: [],
  });
  
  const [vehicles, setVehicles] = useState([]);
  const [imagePreviews, setImagePreviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (isOpen) {
      fetchVehicles();
    }
  }, [isOpen]);

  const fetchVehicles = async () => {
    try {
      const data = await vehiclesAPI.getVehicles();
      setVehicles(data.results || data);
    } catch (error) {
      console.error('Error fetching vehicles:', error);
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
    const files = Array.from(e.target.files);
    if (files.length > 0) {
      const newImages = [...formData.images, ...files];
      setFormData(prev => ({ ...prev, images: newImages }));
      
      // Create previews for new images
      files.forEach(file => {
        const reader = new FileReader();
        reader.onloadend = () => {
          setImagePreviews(prev => [...prev, reader.result]);
        };
        reader.readAsDataURL(file);
      });
    }
  };
  
  const removeImage = (index) => {
    setFormData(prev => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index)
    }));
    setImagePreviews(prev => prev.filter((_, i) => i !== index));
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.vehicle.trim()) {
      newErrors.vehicle = 'Vehicle is required';
    }
    if (!formData.title.trim()) {
      newErrors.title = 'Title is required';
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
      // Append multiple images
      formData.images.forEach(img => {
        data.append('images', img);
      });

      const response = await vehiclesAPI.reportBreakdown(data);
      
      setSuccess(true);
      setTimeout(() => {
        handleClose();
        onSuccess && onSuccess(response);
      }, 1500);
    } catch (error) {
      console.error('Error submitting breakdown report:', error);
      setErrors({ submit: error.data?.detail || 'Failed to submit breakdown report' });
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    setFormData({
      vehicle: '',
      title: '',
      description: '',
      images: [],
    });
    setImagePreviews([]);
    setErrors({});
    setSuccess(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <ModalOverlay onClick={handleClose}>
      <ModalContent onClick={e => e.stopPropagation()}>
        <ModalHeader>
          <ModalTitle>Report Breakdown</ModalTitle>
          <CloseButton onClick={handleClose}>×</CloseButton>
        </ModalHeader>

        {success && (
          <SuccessMessage>
            ✓ Breakdown report submitted successfully!
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
            <Label>Breakdown Title *</Label>
            <Input
              type="text"
              name="title"
              placeholder="e.g., Engine Overheating"
              value={formData.title}
              onChange={handleInputChange}
              disabled={loading}
            />
            {errors.title && <ErrorMessage>{errors.title}</ErrorMessage>}
          </FormGroup>

          <FormGroup>
            <Label>Description *</Label>
            <TextArea
              name="description"
              placeholder="Describe the breakdown in detail..."
              value={formData.description}
              onChange={handleInputChange}
              disabled={loading}
            />
            {errors.description && <ErrorMessage>{errors.description}</ErrorMessage>}
          </FormGroup>

          <FormGroup>
            <Label>Breakdown Images (Multiple)</Label>
            <FileInputWrapper>
              <FileInput
                type="file"
                id="images"
                accept="image/*"
                multiple
                onChange={handleImageChange}
                disabled={loading}
              />
              <FileInputButton
                type="button"
                onClick={() => document.getElementById('images').click()}
                disabled={loading}
              >
                📷 Click to upload images
              </FileInputButton>
            </FileInputWrapper>
            {imagePreviews.length > 0 && (
              <ImagePreviewsContainer>
                {imagePreviews.map((preview, index) => (
                  <ImagePreviewItem key={index}>
                    <img src={preview} alt={`Preview ${index + 1}`} />
                    <RemoveImageButton type="button" onClick={() => removeImage(index)}>×</RemoveImageButton>
                  </ImagePreviewItem>
                ))}
              </ImagePreviewsContainer>
            )}
            {formData.images.length > 0 && (
              <FilePreview>
                ✓ {formData.images.length} image(s) selected
              </FilePreview>
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
                'Submit Report'
              )}
            </SubmitButton>
          </ButtonGroup>
        </form>
      </ModalContent>
    </ModalOverlay>
  );
};

export default BreakdownReportModal;
