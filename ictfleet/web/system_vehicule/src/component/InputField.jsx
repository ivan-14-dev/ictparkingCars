import styled from 'styled-components';

// Conteneur pour l'ensemble du champ d'entrée incluant le label
const FieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`;

// Style du label
const Label = styled.p`
  color: #0d141b; /* dark: slate-200 */
  font-size: 0.875rem;
  font-weight: 600;
  line-height: 1.5;
  padding-bottom: 0.5rem;

  @media (max-width: 640px) {
    font-size: 0.75rem;
    padding-bottom: 0.25rem;
  }
`;

// Conteneur pour l'entrée et l'icône
const InputContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: stretch;
  border-radius: 0.5rem;
`;

// Style de l'entrée
const StyledInput = styled.input`
  flex: 1 1 0%;
  min-width: 0;
  resize: none;
  overflow: hidden;
  border-radius: 0.5rem;
  color: #0d141b; /* dark: white */
  border: 1px solid #cbd5e1; /* #cfdbe7, dark: slate-700 */
  background-color: white; /* dark: slate-800 */
  height: 3.5rem;
  padding: 0.9375rem;
  border-right: 0;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  font-size: 1rem;
  font-weight: normal;
  line-height: 1.5;

  &::placeholder {
    color: #4c739a;
  }

  &:focus {
    outline: 0;
    box-shadow: 0 0 0 2px rgba(19, 143, 236, 0.5);
  }

  @media (max-width: 640px) {
    height: 3rem;
    padding: 0.75rem;
    font-size: 0.875rem;
  }
`;

// Conteneur de l'icône à droite
const IconContainer = styled.div`
  color: #4c739a;
  display: flex;
  border: 1px solid #cbd5e1; /* #cfdbe7, dark: slate-700 */
  background-color: white; /* dark: slate-800 */
  align-items: center;
  justify-content: center;
  padding-right: 0.9375rem;
  border-left: 0;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-radius: 0 0.5rem 0.5rem 0;

  @media (max-width: 640px) {
    padding-right: 0.75rem;
  }
`;

// Style de l'icône
const Icon = styled.span`
  font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;

  @media (max-width: 640px) {
    font-size: 0.875rem;
  }
`;

// Composant InputField
const InputField = ({ label, placeholder, type, icon, value, onChange }) => {
  return (
    <FieldContainer>
      <Label>{label}</Label>
      <InputContainer>
        <StyledInput
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
        <IconContainer>
          <Icon className="material-symbols-outlined">{icon}</Icon>
        </IconContainer>
      </InputContainer>
    </FieldContainer>
  );
};

export default InputField;