import styled from "styled-components";

const Button = ({
  name,
  border = false,
  isNavButton = false,
}) => {
  return (
    <ButtonStyled border={border} isNavButton={isNavButton}>{name}</ButtonStyled>
  );
};

const ButtonStyled = styled.button`
  border: ${({ border }) => border ? '1px solid #000' : 'none'};
  border-radius: 1.5rem;
  background:${({ isNavButton }) => isNavButton ? 'none' : '#222'}; ;
  color: ${({ isNavButton }) => isNavButton ? '#222' : '#fff'};
  cursor: pointer;
  font-weight: ${({ isNavButton }) => isNavButton ? '600' : '500'};
  font-size: ${({ theme }) => theme.fontSize.md};
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.lg}`};
  transition: padding 0.3s ease;

  &:hover {
    color: ${({ isNavButton }) => isNavButton ? 'grey' : '#fff'};
    letter-spacing: ${({ isNavButton }) => isNavButton ? '0' : '0.15rem'};
    padding: ${({ theme, isNavButton }) => isNavButton
      ? `${theme.spacing.sm} ${theme.spacing.lg}`
      : `${theme.spacing.sm} ${theme.spacing.xl}`};
  };
`;

export default Button;
