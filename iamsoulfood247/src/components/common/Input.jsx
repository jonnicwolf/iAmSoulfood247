import styled from "styled-components";

const Input = ({ label, error, ...props }) => {
  return (
    <Wrapper>
      {label && <Label>{label}</Label>}
      <StyledInput {...props} hasError={!!error} />
      {error && <Error>{error}</Error>}
    </Wrapper>
  );
};

export default Input;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xs};
  width: 100%;
`;

const Label = styled.label`
  font-size: ${({ theme }) => theme.fontSize.md};
  color: ${({ theme }) => theme.colors.text};
`;

const StyledInput = styled.input`
  padding: ${({ theme }) => `${theme.spacing.md} ${theme.spacing.md}`};
  border: 1px solid
    ${({ theme, hasError }) =>
      hasError ? "crimson" : theme.colors.primary};
  border-radius: ${({ theme }) => theme.radii.md};
  font-size: ${({ theme }) => theme.fontSize.md};
  outline: none;

  &:hover {
    border-color: ${({ theme, hasError }) =>
      hasError ? "crimson" : theme.colors.primaryDark};
    background-color: ${({ theme }) => theme.colors.surface};
  }
  &:focus {
    border-color: ${({ theme, hasError }) =>
      hasError ? "crimson" : theme.colors.secondary};
    box-shadow: 0 0 0 2px
      ${({ theme, hasError }) =>
        hasError ? "rgba(220, 20, 60, 0.3)" : "rgba(249, 115, 22, 0.3)"};
  }
`;

const Error = styled.span`
  font-size: ${({ theme }) => theme.fontSize.sm};
  color: crimson;
`;
