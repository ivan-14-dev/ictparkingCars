import styled from 'styled-components';

// Conteneur pour les liens du pied de page
const FooterContainer = styled.div`
  margin-top: 1rem;
  display: flex;
  gap: 1.5rem;
  color: #94a3b8; /* slate-400, dark: slate-500 */
  font-size: 0.75rem;
  font-weight: 500;

  @media (max-width: 640px) {
    margin-top: 0.5rem;
    gap: 1rem;
    font-size: 0.625rem;
  }
`;

// Lien stylisé
const FooterLink = styled.a`
  color: inherit;
  text-decoration: none;

  &:hover {
    color: #138fec; /* primary */
  }

  transition: color 0.15s ease-in-out;
`;

// Composant FooterSection
const FooterSection = () => {
  return (
    <FooterContainer>
      <FooterLink href="#">System Status</FooterLink>
      <FooterLink href="#">Privacy Policy</FooterLink>
      <FooterLink href="#">Help Desk</FooterLink>
    </FooterContainer>
  );
};

export default FooterSection;