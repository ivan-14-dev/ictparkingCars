import React from 'react';
import styled from 'styled-components';

const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

const ModalContent = styled.div`
  background: white;
  border-radius: 0.75rem;
  max-width: 700px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 20px 25px rgba(0, 0, 0, 0.15);

  @media (max-width: 768px) {
    margin: 1rem;
  }
`;

const CloseButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 1rem;
  border-bottom: 1px solid #e2e8f0;
  position: sticky;
  top: 0;
  background: white;
  z-index: 10;
`;

const CloseButton = styled.button`
  padding: 0.5rem;
  border-radius: 0.5rem;
  border: none;
  background: none;
  cursor: pointer;
  color: #64748b;
  transition: all 0.2s ease;

  &:hover {
    background: #f1f5f9;
  }

  span {
    font-size: 1.5rem;
  }
`;

const Content = styled.div`
  padding: 2rem;
`;

const VehicleImage = styled.div`
  width: 100%;
  height: 300px;
  border-radius: 0.75rem;
  background-size: cover;
  background-position: center;
  background-color: #f1f5f9;
  margin-bottom: 2rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

const VehicleTitle = styled.h1`
  font-size: 1.875rem;
  font-weight: 700;
  color: #0d141b;
  margin: 0 0 0.5rem 0;
`;

const VehicleLicensePlate = styled.p`
  font-size: 1rem;
  color: #64748b;
  margin: 0 0 2rem 0;
  font-weight: 500;
`;

const DetailsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
`;

const DetailCard = styled.div`
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 0.75rem;
  padding: 1.5rem;
`;

const DetailLabel = styled.label`
  font-size: 0.75rem;
  font-weight: 700;
  color: #64748b;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 0.5rem;
  display: block;
`;

const DetailValue = styled.p`
  font-size: 1.125rem;
  font-weight: 600;
  color: #0d141b;
  margin: 0;
  word-break: break-word;
`;

const SectionTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 700;
  color: #0d141b;
  margin: 2rem 0 1rem 0;
  display: flex;
  align-items: center;
  gap: 0.75rem;

  span {
    font-size: 1.5rem;
    color: #137fec;
  }
`;

const DriverCard = styled.div`
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 0.75rem;
  padding: 2rem;
  text-align: center;

  &.assigned {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    text-align: left;
  }
`;

const DriverAvatar = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: rgba(19, 127, 236, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #137fec;
  font-size: 1.75rem;
  flex-shrink: 0;
`;

const DriverInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

const DriverName = styled.p`
  font-size: 1.125rem;
  font-weight: 700;
  color: #0d141b;
  margin: 0;
`;

const DriverRole = styled.p`
  font-size: 0.875rem;
  color: #64748b;
  margin: 0;
`;

const EmptyMessage = styled.p`
  font-size: 1rem;
  color: #64748b;
  margin: 0;
`;

const VehicleDetailsModal = ({ isOpen, onClose, vehicle }) => {
  if (!isOpen || !vehicle) return null;

  // Build image URL - check different possible ports
  const getImageUrl = (imagePath) => {
    if (!imagePath) return null;
    if (imagePath.startsWith('http')) return imagePath;
    // Try common Django ports
    return `http://127.0.0.1:8000${imagePath}`;
  };

  const vehicleImageUrl = getImageUrl(vehicle.image);

  return (
    <ModalOverlay>
      <ModalContent>
        <CloseButtonContainer>
          <CloseButton onClick={onClose}>
            <span className="material-symbols-outlined">close</span>
          </CloseButton>
        </CloseButtonContainer>

        <Content>
          {/* Vehicle Image */}
          <VehicleImage style={{
            backgroundImage: vehicleImageUrl ? undefined : 'none',
            backgroundColor: '#f1f5f9',
            backgroundImage: vehicleImageUrl ? `url('${vehicleImageUrl}')` : undefined,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            {!vehicleImageUrl && (
              <span className="material-symbols-outlined" style={{ fontSize: '4rem', color: '#cbd5e1' }}>
                directions_car
              </span>
            )}
            {vehicleImageUrl && (
              <img 
                src={vehicleImageUrl}
                alt={`${vehicle.year} ${vehicle.make} ${vehicle.model}`}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center',
                  borderRadius: '0.75rem'
                }}
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentElement.innerHTML = '<span class="material-symbols-outlined" style="font-size: 4rem; color: #cbd5e1;">directions_car</span>';
                }}
              />
            )}
          </VehicleImage>

          {/* Vehicle Title */}
          <VehicleTitle>
            {vehicle.year} {vehicle.make} {vehicle.model}
          </VehicleTitle>
          <VehicleLicensePlate>License Plate: {vehicle.license_plate}</VehicleLicensePlate>

          {/* Vehicle Details Grid */}
          <DetailsGrid>
            <DetailCard>
              <DetailLabel>Manufacturing Year</DetailLabel>
              <DetailValue>{vehicle.year}</DetailValue>
            </DetailCard>

            <DetailCard>
              <DetailLabel>Color</DetailLabel>
              <DetailValue>{vehicle.color || 'Not specified'}</DetailValue>
            </DetailCard>

            <DetailCard>
              <DetailLabel>Fuel Type</DetailLabel>
              <DetailValue>
                {vehicle.fuel_type ? vehicle.fuel_type.charAt(0).toUpperCase() + vehicle.fuel_type.slice(1) : 'Not specified'}
              </DetailValue>
            </DetailCard>

            <DetailCard>
              <DetailLabel>Vehicle Type</DetailLabel>
              <DetailValue>{vehicle.vehicle_type || 'Not specified'}</DetailValue>
            </DetailCard>

            <DetailCard>
              <DetailLabel>License Plate</DetailLabel>
              <DetailValue>{vehicle.license_plate}</DetailValue>
            </DetailCard>

            <DetailCard>
              <DetailLabel>Current Mileage</DetailLabel>
              <DetailValue>{vehicle.mileage ? vehicle.mileage.toLocaleString() : 'N/A'} miles</DetailValue>
            </DetailCard>

            <DetailCard>
              <DetailLabel>Status</DetailLabel>
              <DetailValue>
                <span
                  style={{
                    display: 'inline-block',
                    padding: '0.5rem 0.75rem',
                    borderRadius: '0.375rem',
                    fontSize: '0.875rem',
                    fontWeight: '600',
                    textTransform: 'capitalize',
                    backgroundColor:
                      vehicle.status === 'active'
                        ? 'rgba(34, 197, 94, 0.1)'
                        : vehicle.status === 'maintenance'
                        ? 'rgba(245, 158, 11, 0.1)'
                        : 'rgba(239, 68, 68, 0.1)',
                    color:
                      vehicle.status === 'active'
                        ? '#16a34a'
                        : vehicle.status === 'maintenance'
                        ? '#d97706'
                        : '#dc2626',
                  }}
                >
                  {vehicle.status ? vehicle.status.charAt(0).toUpperCase() + vehicle.status.slice(1) : 'Unknown'}
                </span>
              </DetailValue>
            </DetailCard>
          </DetailsGrid>

          {/* Assigned Driver Section */}
          <SectionTitle>
            <span className="material-symbols-outlined">person</span>
            Assigned Driver
          </SectionTitle>

          {vehicle.assigned_driver_name ? (
            <DriverCard className="assigned">
              <DriverAvatar>
                <span className="material-symbols-outlined">person</span>
              </DriverAvatar>
              <DriverInfo>
                <DriverName>{vehicle.assigned_driver_name}</DriverName>
                <DriverRole>Primary Driver</DriverRole>
              </DriverInfo>
            </DriverCard>
          ) : (
            <DriverCard>
              <span className="material-symbols-outlined" style={{ fontSize: '3rem', color: '#cbd5e1', marginBottom: '0.5rem' }}>
                person_outline
              </span>
              <EmptyMessage>No driver assigned</EmptyMessage>
              <EmptyMessage style={{ fontSize: '0.875rem', marginTop: '0.5rem' }}>
                This vehicle is available for any qualified driver
              </EmptyMessage>
            </DriverCard>
          )}
        </Content>
      </ModalContent>
    </ModalOverlay>
  );
};

export default VehicleDetailsModal;