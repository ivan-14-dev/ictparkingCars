import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { vehiclesAPI } from '../service/api';

const Container = styled.div`
  width: 100%;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;

const Title = styled.h2`
  font-size: 1.875rem;
  font-weight: 700;
  color: #0d141b;
  margin: 0;
`;

const FilterContainer = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  margin-bottom: 2rem;
`;

const FilterSelect = styled.select`
  padding: 0.75rem 1rem;
  border: 1px solid #d1d5db;
  border-radius: 0.5rem;
  background: white;
  font-size: 0.95rem;
  cursor: pointer;
  
  &:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  }
`;

const SearchInput = styled.input`
  padding: 0.75rem 1rem;
  border: 1px solid #d1d5db;
  border-radius: 0.5rem;
  font-size: 0.95rem;
  min-width: 200px;
  
  &:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  }
`;

const TableContainer = styled.div`
  background: white;
  border-radius: 0.75rem;
  border: 1px solid #e2e8f0;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  
  thead {
    background: #f9fafb;
    border-bottom: 2px solid #e2e8f0;
  }
  
  th {
    padding: 1rem;
    text-align: left;
    font-weight: 600;
    color: #374151;
    font-size: 0.875rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }
  
  td {
    padding: 1rem;
    border-bottom: 1px solid #e2e8f0;
    font-size: 0.95rem;
    color: #374151;
  }
  
  tbody tr:hover {
    background: #f9fafb;
  }
  
  tbody tr:last-child td {
    border-bottom: none;
  }
`;

const StatusBadge = styled.span`
  display: inline-block;
  padding: 0.375rem 0.75rem;
  border-radius: 0.375rem;
  font-weight: 600;
  font-size: 0.75rem;
  text-transform: uppercase;
  
  ${props => {
    switch(props.$status) {
      case 'submitted':
        return 'background-color: #dbeafe; color: #1e40af;';
      case 'reviewed':
        return 'background-color: #fef3c7; color: #92400e;';
      case 'approved':
        return 'background-color: #d1fae5; color: #065f46;';
      case 'rejected':
        return 'background-color: #fee2e2; color: #991b1b;';
      default:
        return 'background-color: #e5e7eb; color: #374151;';
    }
  }}
`;

const ImagePreview = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 0.5rem;
  object-fit: cover;
  cursor: pointer;
  
  &:hover {
    opacity: 0.8;
  }
`;

const AccessoriesCell = styled.div`
  font-size: 0.85rem;
  color: #64748b;
`;

const AccessoryTag = styled.span`
  display: inline-block;
  background: #dbeafe;
  color: #1e40af;
  padding: 0.2rem 0.5rem;
  border-radius: 12px;
  margin-right: 0.25rem;
  margin-bottom: 0.25rem;
`;

const ActionButton = styled.button`
  padding: 0.5rem 1rem;
  margin-right: 0.5rem;
  border: none;
  border-radius: 0.375rem;
  font-size: 0.85rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }
`;

const ApproveButton = styled(ActionButton)`
  background: #d1fae5;
  color: #065f46;
  
  &:hover {
    background: #a7f3d0;
  }
`;

const RejectButton = styled(ActionButton)`
  background: #fee2e2;
  color: #991b1b;
  
  &:hover {
    background: #fecaca;
  }
`;

const EmptyState = styled.div`
  padding: 3rem;
  text-align: center;
  color: #64748b;
`;

const LoadingSpinner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3rem;
  color: #64748b;
`;

const ImageModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  
  img {
    max-width: 90%;
    max-height: 90%;
    border-radius: 0.75rem;
  }
`;

// Detail Modal Styles
const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(4px);
  animation: fadeIn 0.2s ease-out;

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
`;

const ModalContainer = styled.div`
  background: white;
  border-radius: 1rem;
  max-width: 600px;
  width: 100%;
  max-height: 85vh;
  overflow-y: auto;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.25);
  animation: slideUp 0.3s ease-out;

  @keyframes slideUp {
    from { opacity: 0; transform: translateY(30px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;

const ModalHeader = styled.div`
  background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
  padding: 1.5rem 2rem;
  color: white;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
`;

const ModalHeaderContent = styled.div`
  flex: 1;
`;

const ModalHeaderTitle = styled.h3`
  margin: 0 0 0.75rem 0;
  font-size: 1.35rem;
  font-weight: 700;
  line-height: 1.3;
`;

const ModalHeaderMeta = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1rem;
  font-size: 0.9rem;
  opacity: 0.95;
`;

const ModalCloseButton = styled.button`
  background: rgba(255, 255, 255, 0.2);
  border: none;
  color: white;
  width: 2.75rem;
  height: 2.75rem;
  border-radius: 0.5rem;
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
  padding: 2rem;
`;

const DetailSection = styled.div`
  margin-bottom: 1.5rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

const DetailLabel = styled.p`
  font-size: 0.75rem;
  color: #64748b;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin: 0 0 0.5rem 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  span {
    font-size: 1rem;
  }
`;

const DetailValue = styled.p`
  font-size: 1rem;
  color: #0d141b;
  margin: 0;
  line-height: 1.6;
`;

const RepairImage = styled.img`
  width: 100%;
  max-height: 300px;
  object-fit: cover;
  border-radius: 0.5rem;
  margin-top: 0.5rem;
`;

const ModalFooter = styled.div`
  padding: 1.5rem 2rem;
  border-top: 1px solid #e2e8f0;
  display: flex;
  justify-content: flex-end;
`;

const ViewButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.375rem;
  padding: 0.5rem 1rem;
  background: #e0e7ff;
  color: #3730a3;
  border: none;
  border-radius: 0.375rem;
  font-size: 0.85rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: #c7d2fe;
  }

  span {
    font-size: 1.1rem;
  }
`;

const CloseButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: #f1f5f9;
  color: #475569;
  border: none;
  border-radius: 0.5rem;
  font-size: 0.95rem;
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

const AccessoriesList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 0.5rem;
`;

const AccessoryChip = styled.span`
  background: #dbeafe;
  color: #1e40af;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.85rem;
`;

const RepairRecordsReport = () => {
  const [repairs, setRepairs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [statusFilter, setStatusFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedRepair, setSelectedRepair] = useState(null);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);

  useEffect(() => {
    fetchRepairs();
  }, [statusFilter]);

  const fetchRepairs = async () => {
    try {
      setLoading(true);
      const params = {};
      if (statusFilter !== 'all') {
        params.status = statusFilter;
      }
      const data = await vehiclesAPI.getRepairs(params);
      setRepairs(data.results || data);
    } catch (error) {
      console.error('Error fetching repairs:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleUpdateStatus = async (repairId, newStatus) => {
    try {
      await vehiclesAPI.updateRepair(repairId, { status: newStatus });
      setRepairs(repairs.map(r => 
        r.id === repairId ? { ...r, status: newStatus } : r
      ));
    } catch (error) {
      console.error('Error updating repair:', error);
      alert('Failed to update repair status');
    }
  };

  const filteredRepairs = repairs.filter(repair => {
    const searchLower = searchTerm.toLowerCase();
    return (
      repair.title.toLowerCase().includes(searchLower) ||
      repair.vehicle_info.toLowerCase().includes(searchLower) ||
      repair.mechanic_name.toLowerCase().includes(searchLower)
    );
  });

  return (
    <Container>
      <Header>
        <Title>Repair Records</Title>
      </Header>

      <FilterContainer>
        <FilterSelect
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option value="all">All Status</option>
          <option value="submitted">Submitted</option>
          <option value="reviewed">Reviewed</option>
          <option value="approved">Approved</option>
          <option value="rejected">Rejected</option>
        </FilterSelect>
        <SearchInput
          type="text"
          placeholder="Search by title, vehicle, or mechanic..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </FilterContainer>

      <TableContainer>
        {loading ? (
          <LoadingSpinner>Loading repair records...</LoadingSpinner>
        ) : filteredRepairs.length === 0 ? (
          <EmptyState>
            <p>No repair records found</p>
          </EmptyState>
        ) : (
          <Table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Vehicle</th>
                <th>Repair</th>
                <th>Mechanic</th>
                <th>Accessories</th>
                <th>Photo</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredRepairs.map(repair => (
                <tr key={repair.id}>
                  <td>
                    {new Date(repair.completed_at).toLocaleDateString()}
                  </td>
                  <td>{repair.vehicle_info}</td>
                  <td>
                    <strong>{repair.title}</strong>
                    <div style={{ fontSize: '0.85rem', color: '#64748b', marginTop: '0.25rem' }}>
                      {repair.description.substring(0, 80)}...
                    </div>
                  </td>
                  <td>{repair.mechanic_name || 'Unknown'}</td>
                  <td>
                    <AccessoriesCell>
                      {repair.accessories_names && repair.accessories_names.length > 0 ? (
                        <>
                          {repair.accessories_names.slice(0, 2).map((acc, idx) => (
                            <AccessoryTag key={idx}>{acc.name}</AccessoryTag>
                          ))}
                          {repair.accessories_names.length > 2 && (
                            <AccessoryTag>+{repair.accessories_names.length - 2}</AccessoryTag>
                          )}
                        </>
                      ) : (
                        <span style={{ color: '#9ca3af' }}>None</span>
                      )}
                    </AccessoriesCell>
                  </td>
                  <td>
                    {repair.work_images ? (
                      <ImagePreview
                        src={repair.work_images}
                        alt={repair.title}
                        onClick={() => setSelectedImage(repair.work_images)}
                      />
                    ) : (
                      <span style={{ color: '#9ca3af' }}>No image</span>
                    )}
                  </td>
                  <td>
                    <StatusBadge $status={repair.status}>
                      {repair.status}
                    </StatusBadge>
                  </td>
                  <td>
                    {repair.status === 'reviewed' && (
                      <>
                        <ApproveButton
                          onClick={() => handleUpdateStatus(repair.id, 'approved')}
                        >
                          Approve
                        </ApproveButton>
                        <RejectButton
                          onClick={() => handleUpdateStatus(repair.id, 'rejected')}
                        >
                          Reject
                        </RejectButton>
                      </>
                    )}
                    <ViewButton
                      onClick={() => {
                        setSelectedRepair(repair);
                        setIsDetailModalOpen(true);
                      }}
                      style={{ marginLeft: '0.5rem' }}
                    >
                      <span className="material-symbols-outlined">visibility</span>
                      View
                    </ViewButton>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}
      </TableContainer>

      {selectedImage && (
        <ImageModal onClick={() => setSelectedImage(null)}>
          <img src={selectedImage} alt="Repair" />
        </ImageModal>
      )}

      {isDetailModalOpen && selectedRepair && (
        <ModalOverlay onClick={() => setIsDetailModalOpen(false)}>
          <ModalContainer onClick={(e) => e.stopPropagation()}>
            <ModalHeader>
              <ModalHeaderContent>
                <ModalHeaderTitle>{selectedRepair.title}</ModalHeaderTitle>
                <ModalHeaderMeta>
                  <span className="material-symbols-outlined" style={{ fontSize: '1rem' }}>directions_car</span>
                  {selectedRepair.vehicle_info || 'Vehicle'}
                  <span style={{ margin: '0 0.5rem' }}>•</span>
                  <span className="material-symbols-outlined" style={{ fontSize: '1rem' }}>schedule</span>
                  {new Date(selectedRepair.completed_at).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit'
                  })}
                </ModalHeaderMeta>
              </ModalHeaderContent>
              <ModalCloseButton onClick={() => setIsDetailModalOpen(false)}>
                <span className="material-symbols-outlined">close</span>
              </ModalCloseButton>
            </ModalHeader>
            <ModalBody>
              <DetailSection>
                <StatusBadge $status={selectedRepair.status}>
                  <span className="material-symbols-outlined" style={{ fontSize: '1rem' }}>
                    {selectedRepair.status === 'approved' ? 'check_circle' :
                     selectedRepair.status === 'rejected' ? 'cancel' :
                     'pending'}
                  </span>
                  {selectedRepair.status.charAt(0).toUpperCase() + selectedRepair.status.slice(1)}
                </StatusBadge>
              </DetailSection>

              <DetailSection>
                <DetailLabel>
                  <span className="material-symbols-outlined" style={{ fontSize: '1rem' }}>description</span>
                  Description
                </DetailLabel>
                <DetailValue>{selectedRepair.description}</DetailValue>
              </DetailSection>

              {selectedRepair.work_images && (
                <DetailSection>
                  <DetailLabel>
                    <span className="material-symbols-outlined" style={{ fontSize: '1rem' }}>image</span>
                    Work Image
                  </DetailLabel>
                  <RepairImage 
                    src={selectedRepair.work_images}
                    alt={selectedRepair.title}
                    onClick={() => setSelectedImage(selectedRepair.work_images)}
                    style={{ cursor: 'pointer' }}
                  />
                </DetailSection>
              )}

              {selectedRepair.mechanic_name && (
                <DetailSection>
                  <DetailLabel>
                    <span className="material-symbols-outlined" style={{ fontSize: '1rem' }}>person</span>
                    Submitted By
                  </DetailLabel>
                  <DetailValue>{selectedRepair.mechanic_name}</DetailValue>
                </DetailSection>
              )}

              {selectedRepair.accessories_names && selectedRepair.accessories_names.length > 0 && (
                <DetailSection>
                  <DetailLabel>
                    <span className="material-symbols-outlined" style={{ fontSize: '1rem' }}>settings</span>
                    Accessories Used
                  </DetailLabel>
                  <AccessoriesList>
                    {selectedRepair.accessories_names.map((acc, idx) => (
                      <AccessoryChip key={idx}>{acc.name}</AccessoryChip>
                    ))}
                  </AccessoriesList>
                </DetailSection>
              )}
            </ModalBody>
            <ModalFooter>
              <CloseButton onClick={() => setIsDetailModalOpen(false)}>
                <span className="material-symbols-outlined">close</span>
                Close
              </CloseButton>
            </ModalFooter>
          </ModalContainer>
        </ModalOverlay>
      )}
    </Container>
  );
};

export default RepairRecordsReport;
