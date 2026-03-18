import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';

// Prevision API URL - now using Django backend
const PREVISION_API_URL = import.meta.env.VITE_PREVISION_API || 'http://localhost:8000/api/prevision';

// ============= Styled Components =============

const ChatWidgetButton = styled.button`
  position: fixed;
  bottom: 24px;
  right: 24px;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: linear-gradient(135deg, #10a37f, #059669);
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px rgba(16, 163, 127, 0.4);
  transition: all 0.3s ease;
  z-index: 9999;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 6px 20px rgba(16, 163, 127, 0.5);
  }

  svg {
    width: 28px;
    height: 28px;
    color: white;
  }

  /* Mobile: move button higher to avoid sidebar */
  @media (max-width: 768px) {
    bottom: 100px;
    right: 16px;
    width: 50px;
    height: 50px;
  }
`;

const ChatWidgetContainer = styled.div`
  position: fixed;
  bottom: 100px;
  right: 24px;
  width: 380px;
  height: 500px;
  background: #1a1a2e;
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  z-index: 9999;
  overflow: hidden;
  animation: slideUp 0.3s ease;

  @keyframes slideUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 480px) {
    width: calc(100vw - 48px);
    right: 24px;
    left: 24px;
  }

  @media (max-width: 768px) {
    bottom: 180px;
    right: 16px;
    width: calc(100vw - 32px);
    height: 60vh;
  }
`;

const ChatHeader = styled.div`
  padding: 16px;
  background: linear-gradient(135deg, #10a37f, #059669);
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ChatTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  h3 {
    color: white;
    font-size: 16px;
    font-weight: 600;
    margin: 0;
  }

  span {
    color: rgba(255, 255, 255, 0.8);
    font-size: 12px;
  }
`;

const ChatAvatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 24px;
    height: 24px;
    color: white;
  }
`;

const CloseButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 4px;
  border-radius: 4px;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }

  svg {
    width: 20px;
    height: 20px;
    color: white;
  }
`;

const ChatMessages = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const MessageBubble = styled.div`
  max-width: 85%;
  padding: 12px 16px;
  border-radius: 16px;
  font-size: 14px;
  line-height: 1.5;
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

const ChatInputArea = styled.div`
  padding: 16px;
  background: #1a1a2e;
  border-top: 1px solid #2a2b3d;
`;

const ChatInputWrapper = styled.div`
  display: flex;
  gap: 8px;
  align-items: flex-end;
`;

const ChatInput = styled.input`
  flex: 1;
  padding: 12px 16px;
  border: 1px solid #2a2b3d;
  border-radius: 24px;
  background: #2a2b3d;
  color: white;
  font-size: 14px;
  outline: none;

  &:focus {
    border-color: #10a37f;
  }

  &::placeholder {
    color: #6b7280;
  }
`;

const SendButton = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #10a37f;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;

  &:hover {
    background: #059669;
  }

  &:disabled {
    background: #4b5563;
    cursor: not-allowed;
  }

  svg {
    width: 18px;
    height: 18px;
    color: white;
  }
`;

const QuickActions = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin-top: 8px;
`;

const QuickActionButton = styled.button`
  padding: 6px 12px;
  background: #2a2b3d;
  border: 1px solid #10a37f;
  border-radius: 16px;
  color: #10a37f;
  font-size: 12px;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: #10a37f;
    color: white;
  }
`;

const LoadingIndicator = styled.div`
  display: flex;
  gap: 4px;
  padding: 12px;

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

const VehicleSelector = styled.div`
  padding: 8px 16px;
  background: #2a2b3d;
  border-bottom: 1px solid #3a3b4d;
`;

const VehicleSelect = styled.select`
  width: 100%;
  padding: 8px 12px;
  background: #1a1a2e;
  border: 1px solid #3a3b4d;
  border-radius: 8px;
  color: white;
  font-size: 14px;
  outline: none;
  cursor: pointer;

  &:focus {
    border-color: #10a37f;
  }
`;

// ============= Component =============

function PrevisionChatWidget({ vehicles = [] }) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Hello! I\'m Prevision, your AI vehicle assistant. How can I help you today?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

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
        content: 'I apologize, but I encountered an error. Please make sure the Django backend is running on port 8000.' 
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
    'Cost analysis'
  ];

  if (!isOpen) {
    return (
      <ChatWidgetButton onClick={() => setIsOpen(true)} title="Chat with Prevision - AI Assistant">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          <path d="M8 9h8M8 13h6" />
        </svg>
      </ChatWidgetButton>
    );
  }

  return (
    <ChatWidgetContainer>
      <ChatHeader>
        <ChatTitle>
          <ChatAvatar>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2z" />
              <path d="M12 6v6l4 2" />
            </svg>
          </ChatAvatar>
          <div>
            <h3>Prevision</h3>
            <span>AI Vehicle Assistant</span>
          </div>
        </ChatTitle>
        <CloseButton onClick={() => setIsOpen(false)}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </CloseButton>
      </ChatHeader>

      {vehicles.length > 0 && (
        <VehicleSelector>
          <VehicleSelect 
            value={selectedVehicle || ''} 
            onChange={(e) => setSelectedVehicle(e.target.value ? parseInt(e.target.value) : null)}
          >
            <option value="">Select a vehicle...</option>
            {vehicles.map(v => (
              <option key={v.id} value={v.id}>{v.license_plate} - {v.make} {v.model}</option>
            ))}
          </VehicleSelect>
        </VehicleSelector>
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
        
        {messages.length <= 1 && (
          <QuickActions>
            {quickActions.map((action, index) => (
              <QuickActionButton key={index} onClick={() => sendMessage(action)}>
                {action}
              </QuickActionButton>
            ))}
          </QuickActions>
        )}
      </ChatInputArea>
    </ChatWidgetContainer>
  );
}

export default PrevisionChatWidget;
