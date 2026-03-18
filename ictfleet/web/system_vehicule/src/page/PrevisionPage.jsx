import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { vehiclesAPI } from '../service/api';

// Prevision API URL - now using Django backend
const PREVISION_API_URL = import.meta.env.VITE_PREVISION_API || 'http://localhost:8000/api/prevision';

// ============= Styled Components =============

const PageContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #0f0f1a 0%, #1a1a2e 100%);
  display: flex;
  flex-direction: column;
`;

const Header = styled.header`
  padding: 20px 40px;
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgba(16, 163, 127, 0.2);
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  h1 {
    font-size: 28px;
    font-weight: 700;
    background: linear-gradient(135deg, #10a37f, #00d4aa);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin: 0;
  }

  span {
    color: #8e8ea0;
    font-size: 14px;
  }
`;

const BackButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
  background: transparent;
  border: 1px solid #10a37f;
  border-radius: 8px;
  color: #10a37f;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: #10a37f;
    color: white;
  }

  svg {
    width: 18px;
    height: 18px;
  }
`;

const MainContent = styled.main`
  flex: 1;
  display: flex;
  max-width: 1400px;
  margin: 0 auto;
  width: 100%;
  padding: 20px;
  gap: 20px;

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

const Sidebar = styled.aside`
  width: 300px;
  background: rgba(42, 43, 61, 0.5);
  border-radius: 16px;
  padding: 20px;
  border: 1px solid rgba(86, 88, 105, 0.3);

  @media (max-width: 1024px) {
    width: 100%;
  }
`;

const SidebarTitle = styled.h3`
  color: #8e8ea0;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 16px;
`;

const VehicleList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const VehicleItem = styled.button`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px;
  background: ${props => props.$selected ? 'rgba(16, 163, 127, 0.2)' : 'transparent'};
  border: 1px solid ${props => props.$selected ? '#10a37f' : 'transparent'};
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.2s;
  text-align: left;

  &:hover {
    background: rgba(16, 163, 127, 0.1);
  }

  .icon {
    width: 40px;
    height: 40px;
    border-radius: 10px;
    background: linear-gradient(135deg, #10a37f, #059669);
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      width: 20px;
      height: 20px;
      color: white;
    }
  }

  .info {
    flex: 1;

    .plate {
      color: white;
      font-weight: 600;
      font-size: 14px;
    }

    .details {
      color: #8e8ea0;
      font-size: 12px;
    }
  }

  .status {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: ${props => props.$status === 'active' ? '#10a37f' : '#ef4444'};
  }
`;

const ChatArea = styled.div`
  flex: 1;
  background: rgba(42, 43, 61, 0.5);
  border-radius: 16px;
  border: 1px solid rgba(86, 88, 105, 0.3);
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const ChatHeader = styled.div`
  padding: 20px;
  border-bottom: 1px solid rgba(86, 88, 105, 0.3);
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const SelectedVehicle = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  h3 {
    color: white;
    font-size: 16px;
    margin: 0;
  }

  span {
    color: #8e8ea0;
    font-size: 12px;
  }
`;

const ChatMessages = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const MessageBubble = styled.div`
  max-width: 80%;
  padding: 16px 20px;
  border-radius: 16px;
  font-size: 15px;
  line-height: 1.6;
  white-space: pre-wrap;

  ${props => props.$isUser ? `
    background: linear-gradient(135deg, #5436da, #7c3aed);
    color: white;
    align-self: flex-end;
    border-bottom-right-radius: 4px;
  ` : `
    background: #2a2b3d;
    color: #e2e8f0;
    align-self: flex-start;
    border-bottom-left-radius: 4px;
  `}
`;

const QuickActions = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  padding: 0 20px 16px;
`;

const QuickActionButton = styled.button`
  padding: 8px 16px;
  background: rgba(16, 163, 127, 0.1);
  border: 1px solid #10a37f;
  border-radius: 20px;
  color: #10a37f;
  font-size: 13px;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: #10a37f;
    color: white;
  }
`;

const ChatInputArea = styled.div`
  padding: 20px;
  background: rgba(26, 26, 46, 0.8);
  border-top: 1px solid rgba(86, 88, 105, 0.3);
`;

const ChatInputWrapper = styled.div`
  display: flex;
  gap: 12px;
  align-items: flex-end;
`;

const ChatInput = styled.input`
  flex: 1;
  padding: 14px 20px;
  border: 1px solid #3a3b4d;
  border-radius: 24px;
  background: #2a2b3d;
  color: white;
  font-size: 15px;
  outline: none;

  &:focus {
    border-color: #10a37f;
  }

  &::placeholder {
    color: #6b7280;
  }
`;

const SendButton = styled.button`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: linear-gradient(135deg, #10a37f, #059669);
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;

  &:hover {
    transform: scale(1.05);
  }

  &:disabled {
    background: #4b5563;
    cursor: not-allowed;
  }

  svg {
    width: 20px;
    height: 20px;
    color: white;
  }
`;

const LoadingIndicator = styled.div`
  display: flex;
  gap: 4px;
  padding: 16px;

  span {
    width: 8px;
    height: 8px;
    background: #10a37f;
    border-radius: 50%;
    animation: bounce 1.4s infinite ease-in-out both;

    &:nth-child(1) { animation-delay: -0.32s; }
    &:nth-child(2) { animation-delay: -0.16s; }
  }

  @keyframes bounce {
    0%, 80%, 100% { transform: scale(0); }
    40% { transform: scale(1); }
  }
`;

const WelcomeMessage = styled.div`
  text-align: center;
  padding: 40px;

  h2 {
    color: #10a37f;
    font-size: 24px;
    margin-bottom: 12px;
  }

  p {
    color: #8e8ea0;
    font-size: 14px;
    max-width: 400px;
    margin: 0 auto;
  }
`;

// ============= Main Component =============

function PrevisionPage({ onBack }) {
  const [vehicles, setVehicles] = useState([]);
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const [messages, setMessages] = useState([
    { role: 'assistant', content: '👋 Hello! I\'m Prevision, your AI vehicle assistant.\n\nI can help you with:\n• Vehicle analysis and predictions\n• Maintenance recommendations\n• Breakdown troubleshooting\n• Cost analysis\n\nSelect a vehicle from the sidebar or ask me a question!' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    fetchVehicles();
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const fetchVehicles = async () => {
    try {
      const data = await vehiclesAPI.getVehicles();
      setVehicles(data.results || data);
    } catch (error) {
      console.error('Failed to fetch vehicles:', error);
    }
  };

  const sendMessage = async (messageText = input) => {
    if (!messageText.trim() || isLoading) return;

    const userMessage = { role: 'user', content: messageText };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const userRole = localStorage.getItem('user_role') || 'user';
      const response = await fetch(`${PREVISION_API_URL}/chat/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: messageText,
          vehicle_id: selectedVehicle,
          context: selectedVehicle ? 'analysis' : 'general',
          user_role: userRole
        })
      });

      const data = await response.json();
      
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: data.response || 'I\'m sorry, I couldn\'t get a response. Please try again.'
      }]);
    } catch (error) {
      console.error('Chat error:', error);
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: 'I apologize, but I encountered an error. Please make sure the Prevision backend is running on port 8001.' 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };

  const quickActions = [
    'Show fleet status',
    'What maintenance is due?',
    'Recent breakdowns',
    'Cost analysis',
    'Predict potential issues'
  ];

  const selectedVehicleInfo = vehicles.find(v => v.id === selectedVehicle);

  return (
    <PageContainer>
      <Header>
        <Logo>
          <h1>Prevision</h1>
          <span>AI Vehicle Assistant</span>
        </Logo>
        <BackButton onClick={onBack}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          Back to Dashboard
        </BackButton>
      </Header>

      <MainContent>
        <Sidebar>
          <SidebarTitle>Fleet Vehicles</SidebarTitle>
          <VehicleList>
            <VehicleItem 
              $selected={selectedVehicle === null}
              onClick={() => setSelectedVehicle(null)}
            >
              <div className="icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                </svg>
              </div>
              <div className="info">
                <div className="plate">General Assistant</div>
                <div className="details">Ask anything</div>
              </div>
            </VehicleItem>
            {vehicles.map(vehicle => (
              <VehicleItem 
                key={vehicle.id}
                $selected={selectedVehicle === vehicle.id}
                $status={vehicle.status}
                onClick={() => setSelectedVehicle(vehicle.id)}
              >
                <div className="icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 17h14v-5H5v5zM7 12V7h10v5" />
                  </svg>
                </div>
                <div className="info">
                  <div className="plate">{vehicle.license_plate}</div>
                  <div className="details">{vehicle.make} {vehicle.model} • {vehicle.mileage?.toLocaleString()} km</div>
                </div>
                <div className="status" />
              </VehicleItem>
            ))}
          </VehicleList>
        </Sidebar>

        <ChatArea>
          {selectedVehicleInfo && (
            <ChatHeader>
              <SelectedVehicle>
                <div style={{
                  width: 40,
                  height: 40,
                  borderRadius: 10,
                  background: 'linear-gradient(135deg, #10a37f, #059669)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                    <path d="M5 17h14v-5H5v5zM7 12V7h10v5" />
                  </svg>
                </div>
                <div>
                  <h3>{selectedVehicleInfo.license_plate}</h3>
                  <span>{selectedVehicleInfo.make} {selectedVehicleInfo.model} ({selectedVehicleInfo.year})</span>
                </div>
              </SelectedVehicle>
            </ChatHeader>
          )}

          <ChatMessages>
            {messages.map((msg, index) => (
              <MessageBubble key={index} $isUser={msg.role === 'user'}>
                {msg.content}
              </MessageBubble>
            ))}
            
            {isLoading && (
              <LoadingIndicator>
                <span></span>
                <span></span>
                <span></span>
              </LoadingIndicator>
            )}
            
            <div ref={messagesEndRef} />
          </ChatMessages>

          {messages.length <= 1 && (
            <QuickActions>
              {quickActions.map((action, index) => (
                <QuickActionButton key={index} onClick={() => sendMessage(action)}>
                  {action}
                </QuickActionButton>
              ))}
            </QuickActions>
          )}

          <ChatInputArea>
            <ChatInputWrapper>
              <ChatInput
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask about your vehicles..."
                disabled={isLoading}
              />
              <SendButton onClick={() => sendMessage()} disabled={!input.trim() || isLoading}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
                </svg>
              </SendButton>
            </ChatInputWrapper>
          </ChatInputArea>
        </ChatArea>
      </MainContent>
    </PageContainer>
  );
}

export default PrevisionPage;
