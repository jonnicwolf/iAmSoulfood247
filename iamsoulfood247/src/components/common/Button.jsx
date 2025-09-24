import styled from "styled-components";

const Button = ({
  name,
  border = false,
  isnavbutton = false,
  color = "white",
  backgroundColor = "transparent",
}) => {
  return (
    <ButtonStyled border={border} isnavbutton={isnavbutton} color={color} backgroundColor={backgroundColor}>{name}</ButtonStyled>
  );
};

const ButtonStyled = styled.button`
  border: ${({ border }) => border ? '1px solid #000' : 'none'};
  border-radius: 1.5rem;
  background:${({ backgroundColor }) => backgroundColor};
  color: ${({ color }) => color};
  cursor: pointer;
  font-weight: ${({ isnavbutton }) => isnavbutton ? '600' : '500'};
  font-size: ${({ theme }) => theme.fontSize.lg};
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.lg}`};
  transition: padding 0.3s ease;

  &:hover {
    background: ${({ isnavbutton }) => isnavbutton ? '#000' : 'transparent'};
    letter-spacing: ${({ isnavbutton }) => isnavbutton ? '0' : '0.15rem'};
    padding: ${({ theme, isnavbutton }) => isnavbutton
      ? `${theme.spacing.sm} ${theme.spacing.lg}`
      : `${theme.spacing.sm} ${theme.spacing.xl}`};
  };
`;

export default Button;
