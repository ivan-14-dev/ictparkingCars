import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { fuelAPI, vehiclesAPI, isAdmin, isDriver, authAPI } from '../service/api';

// Animations
const fadeIn = keyframes`
  from { opacity: 0; transform: scale(0.95); }
  to { opacity: 1; transform: scale(1); }
`;

const slideUp = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

// Page Container
const PageContainer = styled.div`
  padding: 1.5rem;
  max-width: 1400px;
  margin: 0 auto;
  animation: ${fadeIn} 0.3s ease-out;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

// Header
const PageHeader = styled.div`
  margin-bottom: 2rem;
`;

const Title = styled.h1`
  font-size: 1.875rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 0.5rem;
`;

const Subtitle = styled.p`
  color: #64748b;
  font-size: 0.9375rem;
`;

// Stats Grid
const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
`;

const StatCard = styled.div`
  background: white;
  border-radius: 1rem;
  padding: 1.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06);
  border: 1px solid #e2e8f0;
  animation: ${slideUp} 0.3s ease-out;
  animation-delay: ${props => props.delay || '0s'};
  animation-fill-mode: both;
`;

const StatLabel = styled.div`
  font-size: 0.875rem;
  color: #64748b;
  margin-bottom: 0.5rem;
  font-weight: 500;
`;

const StatValue = styled.div`
  font-size: 1.75rem;
  font-weight: 700;
  color: ${props => props.color || '#1e293b'};
`;

const StatSubtext = styled.div`
  font-size: 0.8125rem;
  color: #94a3b8;
  margin-top: 0.25rem;
`;

// Filter Section
const FilterSection = styled.div`
  background: white;
  border-radius: 1rem;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  border: 1px solid #e2e8f0;
`;

const FilterRow = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  align-items: flex-end;
`;

const FilterGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
`;

const FilterLabel = styled.label`
  font-size: 0.8125rem;
  font-weight: 500;
  color: #475569;
`;

const FilterSelect = styled.select`
  padding: 0.5rem 0.75rem;
  border: 1px solid #cbd5e1;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  background: white;
  min-width: 150px;
  cursor: pointer;

  &:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  }
`;

const FilterInput = styled.input`
  padding: 0.5rem 0.75rem;
  border: 1px solid #cbd5e1;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  min-width: 150px;

  &:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  }
`;

// Button
const Button = styled.button`
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  border: none;

  ${props => props.primary ? `
    background: #3b82f6;
    color: white;
    &:hover { background: #2563eb; }
  ` : props.secondary ? `
    background: #f1f5f9;
    color: #475569;
    border: 1px solid #e2e8f0;
    &:hover { background: #e2e8f0; }
  ` : `
    background: transparent;
    color: #64748b;
    &:hover { color: #475569; }
  `}
`;

// Table
const TableContainer = styled.div`
  background: white;
  border-radius: 1rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  border: 1px solid #e2e8f0;
  overflow: hidden;
  animation: ${slideUp} 0.3s ease-out;
  animation-delay: 0.2s;
  animation-fill-mode: both;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableHead = styled.thead`
  background: #f8fafc;
  border-bottom: 1px solid #e2e8f0;
`;

const TableRow = styled.tr`
  &:hover { background: #f8fafc; }
  border-bottom: 1px solid #f1f5f9;
`;

const TableHeader = styled.th`
  padding: 1rem;
  text-align: left;
  font-size: 0.8125rem;
  font-weight: 600;
  color: #475569;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

const TableCell = styled.td`
  padding: 1rem;
  font-size: 0.875rem;
  color: #334155;
`;

// Status Badge
const Badge = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 0.25rem 0.625rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 600;
  background: ${props => {
    if (props.type === 'pending') return 'rgba(245, 158, 11, 0.1)';
    if (props.type === 'verified') return 'rgba(34, 197, 94, 0.1)';
    return 'rgba(59, 130, 246, 0.1)';
  }};
  color: ${props => {
    if (props.type === 'pending') return '#d97706';
    if (props.type === 'verified') return '#16a34a';
    return '#2563eb';
  }};
`;

// Modal
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

const ModalContent = styled.div`
  background: white;
  border-radius: 1rem;
  max-width: 500px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.25);
  animation: ${slideUp} 0.3s ease-out;
  margin: 1rem;
`;

const ModalHeader = styled.div`
  padding: 1.5rem;
  border-bottom: 1px solid #e2e8f0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ModalTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
  color: #1e293b;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  color: #94a3b8;
  cursor: pointer;
  padding: 0;
  line-height: 1;
  &:hover { color: #64748b; }
`;

const ModalBody = styled.div`
  padding: 1.5rem;
`;

const FormGroup = styled.div`
  margin-bottom: 1rem;
`;

const FormLabel = styled.label`
  display: block;
  font-size: 0.875rem;
  font-weight: 500;
  color: #374151;
  margin-bottom: 0.375rem;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 0.625rem 0.875rem;
  border: 1px solid #d1d5db;
  border-radius: 0.5rem;
  font-size: 0.9375rem;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  }
`;

const FormSelect = styled.select`
  width: 100%;
  padding: 0.625rem 0.875rem;
  border: 1px solid #d1d5db;
  border-radius: 0.5rem;
  font-size: 0.9375rem;
  background: white;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  }
`;

const ModalFooter = styled.div`
  padding: 1.5rem;
  border-top: 1px solid #e2e8f0;
  display: flex;
  justify-content: flex-end;
  gap: 0.75rem;
`;

// Empty State
const EmptyState = styled.div`
  text-align: center;
  padding: 4rem 2rem;
  color: #64748b;
`;

const EmptyIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;
  opacity: 0.5;
`;

// Loading
const Loading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3rem;
  color: #64748b;
`;

const Spinner = styled.div`
  width: 2rem;
  height: 2rem;
  border: 3px solid #e2e8f0;
  border-top-color: #3b82f6;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;

  @keyframes spin {
    to { transform: rotate(360deg); }
  }
`;

const FuelUsagePage = () => {
  const [loading, setLoading] = useState(true);
  const [fuelData, setFuelData] = useState([]);
  const [report, setReport] = useState(null);
  const [vehicles, setVehicles] = useState([]);
  const [drivers, setDrivers] = useState([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [reportType, setReportType] = useState('monthly');
  const [selectedVehicle, setSelectedVehicle] = useState('');
  const [selectedDriver, setSelectedDriver] = useState('');
  const [exporting, setExporting] = useState(false);
  
  // Filter state
  const [dateFrom, setDateFrom] = useState('');
  const [dateTo, setDateTo] = useState('');

  // Form state
  const [formData, setFormData] = useState({
    vehicle: '',
    date: new Date().toISOString().split('T')[0],
    liters: '',
    price_per_liter: '',
    odometer: '',
  });

  const user = JSON.parse(localStorage.getItem('user') || '{}');
  const isUserAdmin = isAdmin();
  const isUserDriver = isDriver();

  useEffect(() => {
    fetchVehicles();
    fetchFuelUsage();
    fetchReport();
    if (isAdmin()) {
      fetchDrivers();
    }
  }, []);

  useEffect(() => {
    fetchFuelUsage();
    fetchReport();
  }, [reportType, selectedVehicle, selectedDriver, dateFrom, dateTo]);

  const fetchVehicles = async () => {
    try {
      let response;
      if (isDriver()) {
        // Drivers can only see and add fuel for their assigned vehicles
        response = await vehiclesAPI.getMyVehicles();
        setVehicles(response || []);
      } else {
        // Admins and managers see all vehicles
        response = await vehiclesAPI.getVehicles();
        setVehicles(response.results || []);
      }
    } catch (error) {
      console.error('Error fetching vehicles:', error);
    }
  };

  const fetchDrivers = async () => {
    try {
      const response = await fuelAPI.getDrivers();
      setDrivers(response || []);
    } catch (error) {
      console.error('Error fetching drivers:', error);
    }
  };

  const fetchFuelUsage = async () => {
    try {
      setLoading(true);
      const params = {};
      if (selectedVehicle) params.vehicle = selectedVehicle;
      if (selectedDriver && isAdmin()) params.driver_id = selectedDriver;
      if (dateFrom) params.date_from = dateFrom;
      if (dateTo) params.date_to = dateTo;
      
      const response = await fuelAPI.getFuelUsage(params);
      setFuelData(response.results || []);
    } catch (error) {
      console.error('Error fetching fuel usage:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchReport = async () => {
    try {
      const params = { type: reportType };
      if (selectedVehicle) params.vehicle = selectedVehicle;
      if (selectedDriver && isAdmin()) params.driver_id = selectedDriver;
      if (dateFrom) params.date_from = dateFrom;
      if (dateTo) params.date_to = dateTo;
      
      const response = await fuelAPI.getFuelReport(params);
      setReport(response);
    } catch (error) {
      console.error('Error fetching fuel report:', error);
    }
  };

  const handleExport = async () => {
    try {
      setExporting(true);
      const params = {};
      if (selectedVehicle) params.vehicle_id = selectedVehicle;
      if (selectedDriver && isAdmin()) params.driver_id = selectedDriver;
      if (dateFrom) params.start_date = dateFrom;
      if (dateTo) params.end_date = dateTo;
      
      await fuelAPI.exportFuelUsage(params);
    } catch (error) {
      console.error('Error exporting fuel data:', error);
      alert('Failed to export data. Please try again.');
    } finally {
      setExporting(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = {
        ...formData,
        liters: parseFloat(formData.liters),
        price_per_liter: parseFloat(formData.price_per_liter),
        odometer: parseInt(formData.odometer),
        total_cost: parseFloat(formData.liters) * parseFloat(formData.price_per_liter),
      };
      
      await fuelAPI.addFuelUsage(data);
      setShowAddModal(false);
      setFormData({
        vehicle: '',
        date: new Date().toISOString().split('T')[0],
        liters: '',
        price_per_liter: '',
        odometer: '',
      });
      fetchFuelUsage();
      fetchReport();
    } catch (error) {
      console.error('Error adding fuel usage:', error);
      alert('Failed to add fuel usage. Please try again.');
    }
  };

  const formatNumber = (num) => {
    if (num === null || num === undefined) return '0';
    return new Intl.NumberFormat('fr-FR', { maximumFractionDigits: 2 }).format(num);
  };

  const formatCurrency = (num) => {
    if (num === null || num === undefined) return '0 XAF';
    return new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'XAF' }).format(num);
  };

  const formatDate = (dateString) => {
    if (!dateString) return '-';
    return new Date(dateString).toLocaleDateString('fr-FR');
  };

  return (
    <PageContainer>
      <PageHeader>
        <Title>Gestion du Carburant</Title>
        <Subtitle>Suivez la consommation de carburant et les coûts par véhicule</Subtitle>
      </PageHeader>

      <StatsGrid>
        <StatCard delay="0s">
          <StatLabel>Total Litres</StatLabel>
          <StatValue color="#3b82f6">{formatNumber(report?.total_liters || 0)} L</StatValue>
          <StatSubtext>{(reportType === 'daily' ? "Aujourd'hui" : "Ce mois-ci")}</StatSubtext>
        </StatCard>
        
        <StatCard delay="0.1s">
          <StatLabel>Coût Total</StatLabel>
          <StatValue color="#10b981">{formatCurrency(report?.total_cost || 0)}</StatValue>
          <StatSubtext>Dépenses en carburant</StatSubtext>
        </StatCard>
        
        <StatCard delay="0.2s">
          <StatLabel>Prix Moyen/Litre</StatLabel>
          <StatValue color="#f59e0b">{formatCurrency(report?.average_price || 0)}</StatValue>
          <StatSubtext>Prix moyen du carburant</StatSubtext>
        </StatCard>
        
        <StatCard delay="0.3s">
          <StatLabel>Total</StatLabel>
          <StatValue color="#8b5cf6">{report?.total_entries || 0}</StatValue>
          <StatSubtext>Total des entrées</StatSubtext>
        </StatCard>
      </StatsGrid>

      <FilterSection>
        <FilterRow>
          <FilterGroup>
            <FilterLabel>Période</FilterLabel>
            <FilterSelect value={reportType} onChange={(e) => setReportType(e.target.value)}>
              <option value="daily">Aujourd'hui</option>
              <option value="weekly">Cette Semaine</option>
              <option value="monthly">Ce Mois</option>
              <option value="yearly">Cette Année</option>
            </FilterSelect>
          </FilterGroup>
          
          <FilterGroup>
            <FilterLabel>Véhicule</FilterLabel>
            <FilterSelect value={selectedVehicle} onChange={(e) => setSelectedVehicle(e.target.value)}>
              <option value="">Tous les véhicules</option>
              {vehicles.map(vehicle => (
                <option key={vehicle.id} value={vehicle.id}>
                  {vehicle.brand} {vehicle.model} ({vehicle.license_plate})
                </option>
              ))}
            </FilterSelect>
          </FilterGroup>
          
          {isAdmin() && (
            <FilterGroup>
              <FilterLabel>Chauffeur</FilterLabel>
              <FilterSelect value={selectedDriver} onChange={(e) => setSelectedDriver(e.target.value)}>
                <option value="">Tous les chauffeurs</option>
                {drivers.map(driver => (
                  <option key={driver.id} value={driver.id}>
                    {driver.first_name} {driver.last_name}
                  </option>
                ))}
              </FilterSelect>
            </FilterGroup>
          )}
          
          <FilterGroup>
            <FilterLabel>Du</FilterLabel>
            <FilterInput 
              type="date" 
              value={dateFrom} 
              onChange={(e) => setDateFrom(e.target.value)} 
            />
          </FilterGroup>
          
          <FilterGroup>
            <FilterLabel>Au</FilterLabel>
            <FilterInput 
              type="date" 
              value={dateTo} 
              onChange={(e) => setDateTo(e.target.value)} 
            />
          </FilterGroup>
          
          {isAdmin() && (
            <Button 
              primary 
              onClick={handleExport}
              disabled={exporting}
              style={{ marginLeft: 'auto' }}
            >
              {exporting ? 'Export en cours...' : 'Exporter Excel'}
            </Button>
          )}
          
          {(isAdmin() || user.role === 'manager' || isDriver()) && vehicles.length > 0 && (
            <Button primary onClick={() => setShowAddModal(true)}>
              + Ajouter
            </Button>
          )}
        </FilterRow>
      </FilterSection>

      {loading ? (
        <Loading>
          <Spinner />
        </Loading>
      ) : isDriver() && vehicles.length === 0 ? (
        <EmptyState>
          <EmptyIcon>🚗</EmptyIcon>
          <h3>Aucun véhicule attribué</h3>
          <p>Contactez votre administrateur pour qu'un véhicule vous soit attribué.</p>
        </EmptyState>
      ) : fuelData.length === 0 ? (
        <EmptyState>
          <EmptyIcon>⛽</EmptyIcon>
          <h3>Aucune donnée de carburant trouvée</h3>
          <p>Commencez par ajouter un plein de carburant</p>
        </EmptyState>
      ) : (
        <TableContainer>
          <Table>
            <TableHead>
              <tr>
                <TableHeader>Date</TableHeader>
                <TableHeader>Véhicule</TableHeader>
                <TableHeader>Litres</TableHeader>
                <TableHeader>Prix/Litre</TableHeader>
                <TableHeader>Coût Total</TableHeader>
                <TableHeader>Odomètre</TableHeader>
              </tr>
            </TableHead>
            <tbody>
              {fuelData.map((entry, index) => (
                <TableRow key={entry.id}>
                  <TableCell>{formatDate(entry.date)}</TableCell>
                  <TableCell>
                    {entry.vehicle_info || `Véhicule #${entry.vehicle}`}
                  </TableCell>
                  <TableCell>{formatNumber(entry.liters)} L</TableCell>
                  <TableCell>{formatCurrency(entry.price_per_liter)}</TableCell>
                  <TableCell>
                    <strong>{formatCurrency(entry.total_cost)}</strong>
                  </TableCell>
                  <TableCell>{entry.odometer?.toLocaleString() || '-'} km</TableCell>
                </TableRow>
              ))}
            </tbody>
          </Table>
        </TableContainer>
      )}

      {showAddModal && (
        <ModalOverlay onClick={() => setShowAddModal(false)}>
          <ModalContent onClick={e => e.stopPropagation()}>
            <ModalHeader>
              <ModalTitle>Ajouter un Plein</ModalTitle>
              <CloseButton onClick={() => setShowAddModal(false)}>&times;</CloseButton>
            </ModalHeader>
            <form onSubmit={handleSubmit}>
              <ModalBody>
                <FormGroup>
                  <FormLabel>Véhicule</FormLabel>
                  <FormSelect 
                    name="vehicle" 
                    value={formData.vehicle} 
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Sélectionner un véhicule</option>
                    {vehicles.map(vehicle => (
                      <option key={vehicle.id} value={vehicle.id}>
                        {vehicle.brand} {vehicle.model} ({vehicle.license_plate})
                      </option>
                    ))}
                  </FormSelect>
                </FormGroup>
                
                <FormGroup>
                  <FormLabel>Date</FormLabel>
                  <FormInput 
                    type="date" 
                    name="date" 
                    value={formData.date} 
                    onChange={handleInputChange}
                    required 
                  />
                </FormGroup>
                
                <FormGroup>
                  <FormLabel>Litres</FormLabel>
                  <FormInput 
                    type="number" 
                    name="liters" 
                    value={formData.liters} 
                    onChange={handleInputChange}
                    step="0.01"
                    min="0"
                    placeholder="0.00"
                    required 
                  />
                </FormGroup>
                
                <FormGroup>
                  <FormLabel>Prix par Litre (XAF)</FormLabel>
                  <FormInput 
                    type="number" 
                    name="price_per_liter" 
                    value={formData.price_per_liter} 
                    onChange={handleInputChange}
                    step="1"
                    min="0"
                    placeholder="750"
                    required 
                  />
                </FormGroup>
                
                <FormGroup>
                  <FormLabel>Odomètre (km)</FormLabel>
                  <FormInput 
                    type="number" 
                    name="odometer" 
                    value={formData.odometer} 
                    onChange={handleInputChange}
                    min="0"
                    placeholder="0"
                    required 
                  />
                </FormGroup>
              </ModalBody>
              <ModalFooter>
                <Button type="button" onClick={() => setShowAddModal(false)}>
                  Annuler
                </Button>
                <Button type="submit" primary>
                  Enregistrer
                </Button>
              </ModalFooter>
            </form>
          </ModalContent>
        </ModalOverlay>
      )}
    </PageContainer>
  );
};

export default FuelUsagePage;
