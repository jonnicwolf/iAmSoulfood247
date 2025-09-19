import styled from "styled-components";

const Checkbox = ({ label, error, ...props }) => {
  return (
    <Wrapper>
      <BoxWrapper>
        <StyledCheckbox type="checkbox" id={props.id} hasError={!!error} {...props} />
        {label && <Label htmlFor={props.id}>{label}</Label>}
      </BoxWrapper>
      {error && <Error>{error}</Error>}
    </Wrapper>
  );
};

export default Checkbox;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xs};
  width: 100%;
`;

const BoxWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
`;

const StyledCheckbox = styled.input`
  width: 1.25rem;
  height: 1.25rem;
  accent-color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
  border: 1px solid
    ${({ theme, hasError }) => (hasError ? "crimson" : theme.colors.primary)};
  border-radius: ${({ theme }) => theme.radii.sm};

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px
      ${({ theme, hasError }) =>
        hasError ? "rgba(220, 20, 60, 0.3)" : "rgba(0, 112, 243, 0.3)"};
  }
`;

const Label = styled.label`
  font-size: ${({ theme }) => theme.fontSize.md};
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;
`;

const Error = styled.span`
  font-size: ${({ theme }) => theme.fontSize.sm};
  color: crimson;
`;
