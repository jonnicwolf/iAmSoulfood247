import styled from "styled-components";

const Button = ({
  name,
  border = false,
  isnavbutton = false,
  color = "white",
  backgroundColor = 'transparent',
  ...props
}) => {
  return (
    <ButtonStyled border={border} isnavbutton={isnavbutton} color={color} backgroundColor={backgroundColor} {...props}>{name}</ButtonStyled>
  );
};

const ButtonStyled = styled.button`
  border: ${({ border }) => border ? '1px solid #000' : 'none'};
  border-radius: ${({ theme }) => theme.radii.md} ;
  background-color:${({ backgroundColor, theme }) => theme.colors[backgroundColor] || backgroundColor};
  color: ${({ color, theme }) => theme.colors[color] || color};
  cursor: pointer;
  font-weight: ${({ isnavbutton }) => isnavbutton ? '600' : '500'};
  font-size: ${({ theme }) => theme.fontSize.sm};
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.lg}`};
  transition: all 0.5s ease;

  &:hover {
    background-color: ${({ isnavbutton, backgroundColor }) => isnavbutton ? '#000' : `${backgroundColor}`};
    color: ${({ isnavbutton }) => isnavbutton ? '#fff' : '#000'};
    letter-spacing: ${({ isnavbutton }) => isnavbutton ? '0' : '0.15rem'};
    padding: ${({ theme, isnavbutton }) => isnavbutton
      ? `${theme.spacing.sm} ${theme.spacing.lg}`
      : `${theme.spacing.sm} ${theme.spacing.xl}`};
  };
`;

export default Button;
