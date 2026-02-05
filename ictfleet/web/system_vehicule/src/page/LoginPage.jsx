import React, { useState } from 'react';
import styled, { keyframes, createGlobalStyle } from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { authAPI } from '../service/api';

const LoginPage = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [showWelcome, setShowWelcome] = useState(true);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const response = await authAPI.login(username, password);

      // Store user role for role-based access
      localStorage.setItem('user_role', response.user.role);

      setIsLoading(false);

      // Handle successful login
      if (onLogin) {
        onLogin(response.user);
      }
    } catch (error) {
      setIsLoading(false);
      setError(error.message || 'Login failed. Please check your credentials.');
      console.error('Login error:', error);
    }
  };

  const handleForgotPassword = () => {
    // Implement forgot password logic
    console.log('Forgot password clicked');
  };

  return (
    <>
      <GlobalStyles />
      <Container>
        <BackgroundGradient />
        <AnimatedBackground />

        <LoginContainer
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Header>
            <LogoContainer>
              <LogoIcon>
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <path d="M16 2L4 10V22L16 30L28 22V10L16 2Z" fill="url(#gradient)" stroke="currentColor" strokeWidth="2"/>
                  <path d="M16 10L10 14V20L16 24L22 20V14L16 10Z" fill="currentColor" fillOpacity="0.2"/>
                  <circle cx="16" cy="17" r="3" fill="currentColor"/>
                  <defs>
                    <linearGradient id="gradient" x1="16" y1="2" x2="16" y2="30" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#3B82F6"/>
                      <stop offset="1" stopColor="#1D4ED8"/>
                    </linearGradient>
                  </defs>
                </svg>
              </LogoIcon>
              <LogoText>
                <span>ICT.Fleet</span>Pro
              </LogoText>
            </LogoContainer>

            <WelcomeMessage
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h1>Welcome Back</h1>
              <p>Sign in to your fleet management dashboard</p>
            </WelcomeMessage>
          </Header>

          <Form onSubmit={handleSubmit}>
            {error && (
              <ErrorMessage>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <line x1="15" y1="9" x2="9" y2="15"/>
                  <line x1="9" y1="9" x2="15" y2="15"/>
                </svg>
                {error}
              </ErrorMessage>
            )}

            <InputGroup>
              <InputLabel>Username</InputLabel>
              <InputContainer>
                <InputIcon>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                    <circle cx="12" cy="7" r="4"/>
                  </svg>
                </InputIcon>
                <Input
                  type="text"
                  placeholder="Enter your username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </InputContainer>
            </InputGroup>

            <InputGroup>
              <InputLabel>Password</InputLabel>
              <InputContainer>
                <InputIcon>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                  </svg>
                </InputIcon>
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <PasswordToggle onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                      <circle cx="12" cy="12" r="3"/>
                    </svg>
                  ) : (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/>
                      <line x1="1" y1="1" x2="23" y2="23"/>
                    </svg>
                  )}
                </PasswordToggle>
              </InputContainer>
            </InputGroup>

            <OptionsRow>
              <CheckboxContainer>
                <Checkbox
                  type="checkbox"
                  id="remember"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                <CheckboxLabel htmlFor="remember">Remember me</CheckboxLabel>
              </CheckboxContainer>
              <ForgotPassword onClick={handleForgotPassword}>
                Forgot password?
              </ForgotPassword>
            </OptionsRow>

            <SubmitButton type="submit" disabled={isLoading}>
              {isLoading ? (
                <LoadingSpinner>
                  <div></div><div></div><div></div><div></div>
                </LoadingSpinner>
              ) : (
                <ArrowIcon>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="5" y1="12" x2="19" y2="12"/>
                    <polyline points="12 5 19 12 12 19"/>
                  </svg>
                </ArrowIcon>
              )}
            </SubmitButton>

            <Footer>
              <p>
                Don't have an account?{' '}
                <ContactLink href="#">
                  Contact Administrator
                </ContactLink>
              </p>
              <Copyright>
                © 2026 ICT.FleetPro. All rights reserved.
              </Copyright>
            </Footer>
          </Form>
        </LoginContainer>

      </Container>
    </>
  );
};

// Animations
const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
`;

const gradientShift = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const pulse = keyframes`
  0% { opacity: 1; }
  50% { opacity: 0.5; }
  100% { opacity: 1; }
`;

// Global Styles
const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
    background: linear-gradient(135deg, #f8fafc 0%, #eef2f5 100%);
    color: #0d141b;
    overflow-x: hidden;
  }

  @supports (font-variation-settings: normal) {
    body {
      font-family: 'Inter var', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
    }
  }
`;

// Styled Components
const Container = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  position: relative;
  overflow: hidden;
  background: linear-gradient(135deg, #f8fafc 0%, #eef2f5 100%);

  @media (max-width: 1024px) {
    padding: 1rem;
  }
`;

const BackgroundGradient = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #f8fafc 0%, #eef2f5 50%, #e8f0f7 100%);
  z-index: -2;
`;

const AnimatedBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  opacity: 0.05;

  &::before {
    content: '';
    position: absolute;
    width: 400px;
    height: 400px;
    border-radius: 50%;
    background: linear-gradient(45deg, #3b82f6, #1d4ed8);
    top: 20%;
    left: 10%;
    animation: ${float} 20s ease-in-out infinite;
  }

  &::after {
    content: '';
    position: absolute;
    width: 300px;
    height: 300px;
    border-radius: 50%;
    background: linear-gradient(45deg, #10b981, #0ea5e9);
    bottom: 20%;
    right: 10%;
    animation: ${float} 25s ease-in-out infinite reverse;
  }
`;

const LoginContainer = styled(motion.div)`
  background: white;
  border-radius: 16px;
  padding: 2.5rem;
  width: 100%;
  max-width: 420px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.07), 0 10px 20px rgba(0, 0, 0, 0.05);
  z-index: 1;
  border: 1px solid rgba(0, 0, 0, 0.05);

  @media (max-width: 768px) {
    padding: 2rem;
    max-width: 100%;
  }
`;

const Header = styled.div`
  margin-bottom: 2rem;
  text-align: center;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
`;

const LogoIcon = styled.div`
  color: #3b82f6;
  background: rgba(59, 130, 246, 0.1);
  padding: 0.75rem;
  border-radius: 10px;
  border: 1px solid rgba(59, 130, 246, 0.2);
`;

const LogoText = styled.div`
  font-size: 1.5rem;
  font-weight: 800;
  letter-spacing: -0.025em;
  background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  span {
    color: #0d141b;
    -webkit-text-fill-color: #0d141b;
  }
`;

const WelcomeMessage = styled(motion.div)`
  h1 {
    font-size: 1.75rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
    color: #0d141b;
  }

  p {
    color: #64748b;
    font-size: 0.95rem;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const ErrorMessage = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
  background: #fee2e2;
  border: 1px solid #fca5a5;
  border-radius: 0.5rem;
  color: #dc2626;
  font-size: 0.875rem;
  font-weight: 500;

  svg {
    flex-shrink: 0;
  }
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const InputLabel = styled.label`
  font-size: 0.875rem;
  font-weight: 600;
  color: #0d141b;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

const InputContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const InputIcon = styled.div`
  position: absolute;
  left: 1rem;
  color: #94a3b8;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.875rem 1rem 0.875rem 3rem;
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  color: #0d141b;
  font-size: 0.95rem;
  transition: all 0.2s ease;

  &:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
    background: white;
  }

  &::placeholder {
    color: #94a3b8;
  }
`;

const PasswordToggle = styled.button`
  position: absolute;
  right: 1rem;
  background: none;
  border: none;
  color: #94a3b8;
  cursor: pointer;
  padding: 0.25rem;
  transition: color 0.2s ease;

  &:hover {
    color: #0d141b;
  }
`;

const OptionsRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 0.5rem;
`;

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const Checkbox = styled.input`
  width: 1rem;
  height: 1rem;
  border-radius: 4px;
  border: 1px solid #cbd5e1;
  background: white;
  cursor: pointer;

  &:checked {
    background-color: #3b82f6;
    border-color: #3b82f6;
  }
`;

const CheckboxLabel = styled.label`
  font-size: 0.875rem;
  color: #64748b;
  cursor: pointer;
`;

const ForgotPassword = styled.button`
  background: none;
  border: none;
  color: #3b82f6;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: color 0.2s ease;

  &:hover {
    color: #1d4ed8;
    text-decoration: underline;
  }
`;

const SubmitButton = styled.button`
  position: relative;
  padding: 0.875rem 2rem;
  background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
  border: none;
  border-radius: 8px;
  color: white;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  margin-top: 1.5rem;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 16px rgba(59, 130, 246, 0.3);
  }

  &:active {
    transform: translateY(0);
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
    transform: none;
  }
`;

const ArrowIcon = styled.span`
  transition: transform 0.2s ease;

  ${SubmitButton}:hover & {
    transform: translateX(4px);
  }
`;

const LoadingSpinner = styled.div`
  display: inline-block;
  position: relative;
  width: 24px;
  height: 24px;

  div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 20px;
    height: 20px;
    margin: 2px;
    border: 2px solid #fff;
    border-radius: 50%;
    animation: ${pulse} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: #fff transparent transparent transparent;
  }

  div:nth-child(1) { animation-delay: -0.45s; }
  div:nth-child(2) { animation-delay: -0.3s; }
  div:nth-child(3) { animation-delay: -0.15s; }
`;

const Divider = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  margin: 1.5rem 0;

  &::before,
  &::after {
    content: '';
    flex: 1;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }

  span {
    padding: 0 1rem;
    color: #94a3b8;
    font-size: 0.875rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }
`;

const SocialButtons = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
`;

const SocialButton = styled.button`
  padding: 0.875rem;
  background: rgba(30, 41, 59, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  color: #f8fafc;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;

  &:hover {
    background: rgba(30, 41, 59, 0.8);
    border-color: rgba(255, 255, 255, 0.2);
    transform: translateY(-1px);
  }

  ${props => props.variant === 'google' && `
    &:hover {
      background: #4285f4;
      border-color: #4285f4;
    }
  `}

  ${props => props.variant === 'microsoft' && `
    &:hover {
      background: #0078d4;
      border-color: #0078d4;
    }
  `}
`;

const Footer = styled.div`
  margin-top: 2rem;
  text-align: center;

  p {
    color: #64748b;
    font-size: 0.875rem;
    margin-bottom: 0.5rem;
  }
`;

const ContactLink = styled.a`
  color: #3b82f6;
  text-decoration: none;
  font-weight: 600;
  transition: color 0.2s ease;

  &:hover {
    color: #1d4ed8;
    text-decoration: underline;
  }
`;

const Copyright = styled.p`
  color: #94a3b8 !important;
  font-size: 0.75rem !important;
`;

export default LoginPage;