import styled from 'styled-components';

// Bouton stylisé pour la connexion
const StyledButton = styled.button`
  display: flex;
  min-width: 5.25rem;
  max-width: 30rem;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-radius: 0.5rem;
  height: 3rem;
  padding-left: 1.25rem;
  padding-right: 1.25rem;
  background-color: #138fec; /* primary */
  color: white;
  font-size: 1rem;
  font-weight: bold;
  line-height: 1.5;
  letter-spacing: 0.015em;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.05), 0 4px 6px -1px rgba(19, 143, 236, 0.1), 0 2px 4px -1px rgba(19, 143, 236, 0.05);

  &:hover {
    background-color: rgba(19, 143, 236, 0.9);
  }

  transition: background-color 0.15s ease-in-out;

  @media (max-width: 640px) {
    height: 2.5rem;
    padding-left: 1rem;
    padding-right: 1rem;
    font-size: 0.875rem;
  }
`;

// Span pour le texte pour gérer la troncature
const ButtonText = styled.span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

// Composant SignInButton
const SignInButton = ({ onClick, children = "Sign In" }) => {
  return (
    <StyledButton onClick={onClick}>
      <ButtonText>{children}</ButtonText>
    </StyledButton>
  );
};

export default SignInButton;