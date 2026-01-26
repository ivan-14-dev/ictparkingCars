import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from './Modal';
import InputField from './InputField';
import { accessoriesAPI } from '../service/api';

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
  transition: all 0.2s ease;

  &:hover {
    background: #b91c1c;
  }
`;

const AddAccessoryModal = ({ isOpen, onClose, onAccessoryAdded }) => {
  const [formData, setFormData] = useState({
    name: '',
    sku: '',
    category: 'other',
    description: '',
    price: '',
    stock_level: '',
    min_stock_level: '5',
    supplier: '',
    location: '',
    image: null
  });

  const [imagePreview, setImagePreview] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const categoryOptions = [
    { value: 'tires', label: 'Tires' },
    { value: 'battery', label: 'Battery' },
    { value: 'brakes', label: 'Brakes' },
    { value: 'filters', label: 'Filters' },
    { value: 'lights', label: 'Lights' },
    { value: 'tools', label: 'Tools' },
    { value: 'other', label: 'Other' }
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    // Clear error when user starts typing
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
        image: file
      }));
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const removeImage = () => {
    setFormData(prev => ({
      ...prev,
      image: null
    }));
    setImagePreview(null);
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.sku.trim()) {
      newErrors.sku = 'SKU is required';
    }

    if (!formData.price || parseFloat(formData.price) <= 0) {
      newErrors.price = 'Valid price is required';
    }

    if (!formData.stock_level || parseInt(formData.stock_level) < 0) {
      newErrors.stock_level = 'Valid stock level is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    try {
      const accessoryData = {
        ...formData,
        price: parseFloat(formData.price),
        stock_level: parseInt(formData.stock_level),
        min_stock_level: parseInt(formData.min_stock_level)
      };

      await accessoriesAPI.createAccessory(accessoryData);

      // Reset form
      setFormData({
        name: '',
        sku: '',
        category: 'other',
        description: '',
        price: '',
        stock_level: '',
        min_stock_level: '5',
        supplier: '',
        location: '',
        image: null
      });
      setImagePreview(null);
      setErrors({});

      onAccessoryAdded && onAccessoryAdded();
      onClose();
    } catch (error) {
      console.error('Error creating accessory:', error);
      if (error.data) {
        setErrors(error.data);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleClose = () => {
    // Reset form when closing
    setFormData({
      name: '',
      sku: '',
      category: 'other',
      description: '',
      price: '',
      stock_level: '',
      min_stock_level: '5',
      supplier: '',
      location: '',
      image: null
    });
    setImagePreview(null);
    setErrors({});
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={handleClose}
      title="Add New Accessory"
      size="large"
    >
      <form onSubmit={handleSubmit}>
        {/* Image Upload Section */}
        <UploadSection onClick={() => document.getElementById('accessory-image-input').click()}>
          <FileInput
            id="accessory-image-input"
            type="file"
            accept="image/*"
            onChange={handleImageChange}
          />
          <UploadIcon>
            <i data-feather="camera" className="fi-icon"></i>
          </UploadIcon>
          <UploadTitle>Upload Accessory Image</UploadTitle>
          <UploadDescription>
            Choose an image file or drag and drop it here
          </UploadDescription>
          <SelectFileButton type="button">
            Select File
          </SelectFileButton>
        </UploadSection>

        {imagePreview && (
          <ImagePreview>
            <PreviewImage src={imagePreview} alt="Accessory preview" />
            <RemoveImageButton type="button" onClick={removeImage}>
              ×
            </RemoveImageButton>
          </ImagePreview>
        )}

        {/* Basic Information */}
        <SectionHeader>
          <SectionIcon>
            <i data-feather="clipboard" className="fi-icon"></i>
          </SectionIcon>
          <SectionTitle>Basic Information</SectionTitle>
        </SectionHeader>

        <FormGrid>
          <FormField>
            <FieldLabel htmlFor="name">Name *</FieldLabel>
            <InputField
              id="name"
              type="text"
              placeholder="Enter accessory name"
              value={formData.name}
              onChange={(value) => handleInputChange('name', value)}
              error={errors.name}
            />
          </FormField>

          <FormField>
            <FieldLabel htmlFor="sku">SKU *</FieldLabel>
            <InputField
              id="sku"
              type="text"
              placeholder="Enter SKU"
              value={formData.sku}
              onChange={(value) => handleInputChange('sku', value)}
              error={errors.sku}
            />
          </FormField>

          <FormField>
            <FieldLabel htmlFor="category">Category</FieldLabel>
            <select
              id="category"
              value={formData.category}
              onChange={(e) => handleInputChange('category', e.target.value)}
              style={{
                padding: '0.5rem',
                border: '1px solid #d1d5db',
                borderRadius: '0.375rem',
                fontSize: '0.875rem',
                width: '100%'
              }}
            >
              {categoryOptions.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </FormField>

          <FormField>
            <FieldLabel htmlFor="price">Price *</FieldLabel>
            <InputField
              id="price"
              type="number"
              step="0.01"
              placeholder="0.00"
              value={formData.price}
              onChange={(value) => handleInputChange('price', value)}
              error={errors.price}
            />
          </FormField>
        </FormGrid>

        {/* Stock Information */}
        <SectionHeader style={{ marginTop: '2rem' }}>
          <SectionIcon>
            <i data-feather="package" className="fi-icon"></i>
          </SectionIcon>
          <SectionTitle>Stock Information</SectionTitle>
        </SectionHeader>

        <FormGrid>
          <FormField>
            <FieldLabel htmlFor="stock_level">Initial Stock Level *</FieldLabel>
            <InputField
              id="stock_level"
              type="number"
              placeholder="0"
              value={formData.stock_level}
              onChange={(value) => handleInputChange('stock_level', value)}
              error={errors.stock_level}
            />
          </FormField>

          <FormField>
            <FieldLabel htmlFor="min_stock_level">Minimum Stock Level</FieldLabel>
            <InputField
              id="min_stock_level"
              type="number"
              placeholder="5"
              value={formData.min_stock_level}
              onChange={(value) => handleInputChange('min_stock_level', value)}
            />
            <FieldHelp>Alert when stock falls below this level</FieldHelp>
          </FormField>

          <FormField>
            <FieldLabel htmlFor="supplier">Supplier</FieldLabel>
            <InputField
              id="supplier"
              type="text"
              placeholder="Enter supplier name"
              value={formData.supplier}
              onChange={(value) => handleInputChange('supplier', value)}
            />
          </FormField>

          <FormField>
            <FieldLabel htmlFor="location">Warehouse Location</FieldLabel>
            <InputField
              id="location"
              type="text"
              placeholder="Aisle, shelf, etc."
              value={formData.location}
              onChange={(value) => handleInputChange('location', value)}
            />
          </FormField>
        </FormGrid>

        {/* Description */}
        <FormField style={{ marginTop: '2rem' }}>
          <FieldLabel htmlFor="description">Description</FieldLabel>
          <textarea
            id="description"
            placeholder="Enter accessory description"
            value={formData.description}
            onChange={(e) => handleInputChange('description', e.target.value)}
            style={{
              padding: '0.5rem',
              border: '1px solid #d1d5db',
              borderRadius: '0.375rem',
              fontSize: '0.875rem',
              minHeight: '80px',
              resize: 'vertical'
            }}
          />
        </FormField>

        {/* Form Actions */}
        <div style={{
          display: 'flex',
          justifyContent: 'flex-end',
          gap: '1rem',
          marginTop: '2rem',
          paddingTop: '1rem',
          borderTop: '1px solid #e5e7eb'
        }}>
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
            Cancel
          </button>
          <button
            type="submit"
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
            {isLoading ? 'Adding...' : 'Add Accessory'}
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default AddAccessoryModal;