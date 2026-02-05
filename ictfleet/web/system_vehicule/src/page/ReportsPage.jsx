import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { messagesAPI, isAdmin } from '../service/api';

// Animations
const fadeIn = keyframes`
  from { opacity: 0; transform: scale(0.95); }
  to { opacity: 1; transform: scale(1); }
`;

const slideUp = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

// Modal Overlay
const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(4px);
  animation: ${fadeIn} 0.2s ease-out;
`;

// Modal Content
const ModalContent = styled.div`
  background: white;
  border-radius: 1rem;
  max-width: 600px;
  width: 100%;
  max-height: 85vh;
  overflow-y: auto;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.25);
  animation: ${slideUp} 0.3s ease-out;

  @media (max-width: 640px) {
    margin: 1rem;
    max-height: 90vh;
  }
`;

// Modal Header
const ModalHeader = styled.div`
  padding: 1.5rem;
  border-bottom: 1px solid #e2e8f0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
  border-radius: 1rem 1rem 0 0;
`;

// Badge for report type
const ReportBadge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.375rem;
  padding: 0.375rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  background: ${props => {
    if (props.type?.includes('Issue')) return 'rgba(239, 68, 68, 0.1)';
    if (props.type?.includes('Daily')) return 'rgba(34, 197, 94, 0.1)';
    if (props.type?.includes('Weekly')) return 'rgba(59, 130, 246, 0.1)';
    return 'rgba(19, 127, 236, 0.1)';
  }};
  color: ${props => {
    if (props.type?.includes('Issue')) return '#dc2626';
    if (props.type?.includes('Daily')) return '#16a34a';
    if (props.type?.includes('Weekly')) return '#2563eb';
    return '#137fec';
  }};
`;

const ModalTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 700;
  color: #0d141b;
  margin: 0;
  flex: 1;
  margin-right: 1rem;
`;

// Close Button
const CloseButton = styled.button`
  padding: 0.5rem;
  border-radius: 0.5rem;
  border: none;
  background: rgba(0, 0, 0, 0.05);
  cursor: pointer;
  color: #64748b;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: rgba(0, 0, 0, 0.1);
    color: #0d141b;
  }

  span {
    font-size: 1.5rem;
  }
`;

// Modal Body
const ModalBody = styled.div`
  padding: 1.5rem;
`;

// Sender Info Card
const SenderCard = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: #f8fafc;
  border-radius: 0.75rem;
  margin-bottom: 1.5rem;
  border: 1px solid #e2e8f0;
`;

const SenderAvatar = styled.div`
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
  background: linear-gradient(135deg, #137fec 0%, #0d6cd4 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.25rem;
  font-weight: 700;
  flex-shrink: 0;
`;

const SenderInfo = styled.div`
  flex: 1;
`;

const SenderName = styled.p`
  font-size: 1rem;
  font-weight: 600;
  color: #0d141b;
  margin: 0 0 0.25rem 0;
`;

const SenderRole = styled.p`
  font-size: 0.875rem;
  color: #64748b;
  margin: 0;
`;

// Meta Info
const MetaGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

const MetaItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem;
  background: #f8fafc;
  border-radius: 0.5rem;
  border: 1px solid #e2e8f0;
`;

const MetaIcon = styled.span`
  color: #137fec;
  font-size: 1.25rem;
`;

const MetaContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const MetaLabel = styled.span`
  font-size: 0.75rem;
  color: #64748b;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

const MetaValue = styled.span`
  font-size: 0.875rem;
  color: #0d141b;
  font-weight: 600;
`;

// Content Section
const ContentSection = styled.div`
  background: #f8fafc;
  border-radius: 0.75rem;
  padding: 1.25rem;
  border: 1px solid #e2e8f0;
`;

const ContentLabel = styled.p`
  font-size: 0.75rem;
  color: #64748b;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin: 0 0 0.75rem 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  span {
    font-size: 1rem;
  }
`;

const ContentText = styled.div`
  font-size: 0.9375rem;
  color: #334155;
  line-height: 1.7;
  white-space: pre-wrap;
`;

// Modal Footer
const ModalFooter = styled.div`
  padding: 1rem 1.5rem;
  border-top: 1px solid #e2e8f0;
  display: flex;
  justify-content: flex-end;
  gap: 0.75rem;
  background: #f8fafc;
  border-radius: 0 0 1rem 1rem;
`;

const Button = styled.button`
  padding: 0.625rem 1.5rem;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  ${props => props.$primary ? `
    background: #137fec;
    color: white;
    border: none;
    
    &:hover:not(:disabled) {
      background: rgba(19, 127, 236, 0.9);
      transform: translateY(-1px);
    }
  ` : `
    background: white;
    color: #374151;
    border: 1px solid #d1d5db;
    
    &:hover {
      background: #f9fafb;
      border-color: #9ca3af;
    }
  `}

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  span {
    font-size: 1.125rem;
  }
`;

// Main Page Styles
const PageContainer = styled.div`
  background: #f6f7f8;
  min-height: 100vh;
`;

const PageHeader = styled.header`
  background: white;
  border-bottom: 1px solid #e2e8f0;
  padding: 1rem 2rem;
  position: sticky;
  top: 0;
  z-index: 10;
`;

const HeaderContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const BackButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  border: none;
  background: none;
  color: #4c739a;
  font-size: 0.875rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: #f1f5f9;
    color: #137fec;
  }

  span {
    font-size: 1.25rem;
  }
`;

const PageTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  span {
    font-size: 1.75rem;
    color: #137fec;
  }

  h2 {
    font-size: 1.25rem;
    font-weight: 700;
    color: #0d141b;
    margin: 0;
  }
`;

const MainContent = styled.main`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const SectionCard = styled.div`
  background: white;
  border-radius: 0.75rem;
  border: 1px solid #e2e8f0;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

const SectionHeader = styled.div`
  padding: 1.25rem 1.5rem;
  border-bottom: 1px solid #e2e8f0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  h3 {
    font-size: 1.125rem;
    font-weight: 700;
    color: #0d141b;
    margin: 0;
  }
`;

const ReportCount = styled.span`
  background: #f1f5f9;
  color: #64748b;
  padding: 0.375rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.875rem;
  font-weight: 600;
`;

const SectionBody = styled.div`
  padding: 1.5rem;
`;

const ReportsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 1rem;
`;

const ReportCard = styled.div`
  background: ${props => props.$unread ? 'linear-gradient(135deg, #eff6ff 0%, #f0fdf4 100%)' : '#f8fafc'};
  border: 1px solid ${props => props.$unread ? '#bfdbfe' : '#e2e8f0'};
  border-radius: 0.75rem;
  padding: 1.25rem;
  cursor: pointer;
  transition: all 0.2s ease;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 100%;
    background: ${props => props.$unread ? '#137fec' : 'transparent'};
    transition: all 0.2s ease;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
    border-color: #137fec;

    &::before {
      background: #0d6cd4;
    }
  }
`;

const ReportCardHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 0.75rem;
  margin-bottom: 0.75rem;
`;

const ReportTitle = styled.h4`
  font-size: 0.9375rem;
  font-weight: 600;
  color: #0d141b;
  margin: 0;
  line-height: 1.4;
  flex: 1;
`;

const UnreadDot = styled.span`
  width: 8px;
  height: 8px;
  background: #137fec;
  border-radius: 50%;
  flex-shrink: 0;
  margin-top: 0.375rem;
`;

const ReportMeta = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
`;

const MetaText = styled.p`
  font-size: 0.8125rem;
  color: #64748b;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  span {
    font-size: 1rem;
  }
`;

const EmptyState = styled.div`
  text-align: center;
  padding: 3rem 2rem;
  color: #64748b;

  span {
    font-size: 4rem;
    display: block;
    margin-bottom: 1rem;
    opacity: 0.5;
  }

  h4 {
    font-size: 1.125rem;
    font-weight: 600;
    color: #0d141b;
    margin: 0 0 0.5rem 0;
  }

  p {
    font-size: 0.875rem;
    margin: 0;
  }
`;

const LoadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
`;

const LoadingSpinner = styled.div`
  width: 3rem;
  height: 3rem;
  border: 3px solid #e2e8f0;
  border-top-color: #137fec;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;

  @keyframes spin {
    to { transform: rotate(360deg); }
  }
`;

const ErrorContainer = styled.div`
  background: #fef2f2;
  border: 1px solid #fecaca;
  border-radius: 0.75rem;
  padding: 1.25rem;
  display: flex;
  align-items: center;
  gap: 1rem;

  span {
    font-size: 1.5rem;
    color: #dc2626;
  }

  p {
    color: #991b1b;
    font-weight: 500;
    margin: 0;
  }
`;

const ReportsPage = ({ onBack }) => {
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedReport, setSelectedReport] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (!isAdmin()) {
      setError('Access denied. Admin privileges required.');
      setLoading(false);
      return;
    }
    fetchReports();
  }, []);

  const fetchReports = async () => {
    try {
      setLoading(true);
      const reportsData = await messagesAPI.getInbox();
      setReports(reportsData);
    } catch (err) {
      console.error('Error fetching reports:', err);
      setError('Failed to load reports. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const openReportModal = (report) => {
    setSelectedReport(report);
    setShowModal(true);
  };

  const closeModal = () => {
    setSelectedReport(null);
    setShowModal(false);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      weekday: 'short',
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const formatTime = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getInitials = (name) => {
    if (!name) return '?';
    return name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
  };

  const getReportType = (subject) => {
    if (subject?.toLowerCase().includes('issue')) return 'Issue';
    if (subject?.toLowerCase().includes('daily')) return 'Daily Report';
    if (subject?.toLowerCase().includes('weekly')) return 'Weekly Report';
    return 'Report';
  };

  return (
    <PageContainer>
      <PageHeader>
        <HeaderContent>
          <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
            <BackButton onClick={onBack}>
              <span className="material-symbols-outlined">arrow_back</span>
              Back to Dashboard
            </BackButton>
            <PageTitle>
              <span className="material-symbols-outlined">description</span>
              <h2>Driver Reports</h2>
            </PageTitle>
          </div>
        </HeaderContent>
      </PageHeader>

      <MainContent>
        {error && (
          <ErrorContainer>
            <span className="material-symbols-outlined">error</span>
            <p>{error}</p>
          </ErrorContainer>
        )}

        {loading ? (
          <LoadingContainer>
            <LoadingSpinner />
          </LoadingContainer>
        ) : (
          <SectionCard>
            <SectionHeader>
              <h3>All Reports</h3>
              <ReportCount>{reports.length} reports</ReportCount>
            </SectionHeader>
            <SectionBody>
              {reports.length === 0 ? (
                <EmptyState>
                  <span className="material-symbols-outlined">inbox</span>
                  <h4>No reports yet</h4>
                  <p>Driver reports will appear here when submitted</p>
                </EmptyState>
              ) : (
                <ReportsGrid>
                  {reports.map((report) => (
                    <ReportCard 
                      key={report.id} 
                      $unread={!report.is_read}
                      onClick={() => openReportModal(report)}
                    >
                      <ReportCardHeader>
                        <ReportTitle>{report.subject}</ReportTitle>
                        {!report.is_read && <UnreadDot />}
                      </ReportCardHeader>
                      <ReportMeta>
                        <MetaText>
                          <span className="material-symbols-outlined">person</span>
                          {report.sender_name || report.sender || 'Unknown'}
                        </MetaText>
                        <MetaText>
                          <span className="material-symbols-outlined">calendar_today</span>
                          {formatDate(report.created_at)}
                        </MetaText>
                      </ReportMeta>
                    </ReportCard>
                  ))}
                </ReportsGrid>
              )}
            </SectionBody>
          </SectionCard>
        )}
      </MainContent>

      {showModal && selectedReport && (
        <ModalOverlay onClick={closeModal}>
          <ModalContent onClick={e => e.stopPropagation()}>
            <ModalHeader>
              <ModalTitle>{selectedReport.subject}</ModalTitle>
              <CloseButton onClick={closeModal}>
                <span className="material-symbols-outlined">close</span>
              </CloseButton>
            </ModalHeader>
            
            <ModalBody>
              <SenderCard>
                <SenderAvatar>
                  {getInitials(selectedReport.sender_name || selectedReport.sender)}
                </SenderAvatar>
                <SenderInfo>
                  <SenderName>{selectedReport.sender_name || selectedReport.sender || 'Unknown Driver'}</SenderName>
                  <SenderRole>Driver</SenderRole>
                </SenderInfo>
                <ReportBadge type={getReportType(selectedReport.subject)}>
                  {getReportType(selectedReport.subject)}
                </ReportBadge>
              </SenderCard>

              <MetaGrid>
                <MetaItem>
                  <MetaIcon className="material-symbols-outlined">calendar_today</MetaIcon>
                  <MetaContent>
                    <MetaLabel>Date</MetaLabel>
                    <MetaValue>{formatDate(selectedReport.created_at)}</MetaValue>
                  </MetaContent>
                </MetaItem>
                <MetaItem>
                  <MetaIcon className="material-symbols-outlined">schedule</MetaIcon>
                  <MetaContent>
                    <MetaLabel>Time</MetaLabel>
                    <MetaValue>{formatTime(selectedReport.created_at)}</MetaValue>
                  </MetaContent>
                </MetaItem>
              </MetaGrid>

              <ContentSection>
                <ContentLabel>
                  <span className="material-symbols-outlined">description</span>
                  Report Content
                </ContentLabel>
                <ContentText>{selectedReport.body || 'No content provided'}</ContentText>
              </ContentSection>
            </ModalBody>

            <ModalFooter>
              <Button onClick={closeModal}>
                <span className="material-symbols-outlined">close</span>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </ModalOverlay>
      )}
    </PageContainer>
  );
};

export default ReportsPage;
