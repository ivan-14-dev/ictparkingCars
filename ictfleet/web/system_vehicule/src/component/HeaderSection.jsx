import styled from 'styled-components';

// Conteneur pour la section d'en-tête
const HeaderContainer = styled.div`
  width: 100%;
  background-color: #f8fafc; /* slate-50 */
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: 1px solid #e2e8f0; /* slate-100 */

  @media (max-width: 640px) {
    padding: 1rem;
  }
`;

// Conteneur du logo avec fond primaire et ombre
const LogoContainer = styled.div`
  width: 3.5rem;
  height: 3.5rem;
  background-color: #138fec; /* primary */
  border-radius: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  margin-bottom: 0.75rem;
  box-shadow: 0 10px 15px -3px rgba(19, 143, 236, 0.2), 0 4px 6px -2px rgba(19, 143, 236, 0.05);

  @media (max-width: 640px) {
    width: 2.5rem;
    height: 2.5rem;
    margin-bottom: 0.5rem;
  }
`;

// Icône pour l'icône du camion
const Icon = styled.span`
  font-size: 2.5rem; /* text-4xl */
  font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;

  @media (max-width: 640px) {
    font-size: 2rem;
  }
`;

// Style du titre
const Title = styled.h2`
  color: #0d141b; /* dark: white */
  font-size: 1.5rem; /* text-[28px] */
  font-weight: bold;
  line-height: 1.25;
  text-align: center;
  letter-spacing: -0.025em;
  margin-bottom: 0.25rem;

  @media (max-width: 640px) {
    font-size: 1.25rem;
  }
`;

// Style du sous-titre
const Subtitle = styled.p`
  color: #64748b; /* slate-500, dark: slate-400 */
  font-size: 0.875rem;
  font-weight: normal;
  line-height: 1.5;
  text-align: center;
  margin-top: 0;

  @media (max-width: 640px) {
    font-size: 0.75rem;
  }
`;

// Composant HeaderSection
const HeaderSection = () => {
  return (
    <HeaderContainer>
      <LogoContainer>
        <Icon className="material-symbols-outlined">local_shipping</Icon>
      </LogoContainer>
      <Title>Welcome Back</Title>
      <Subtitle>Campus Fleet & Asset Management</Subtitle>
    </HeaderContainer>
  );
};

export default HeaderSection;