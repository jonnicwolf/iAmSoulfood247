import styled from "styled-components";

const Button = ({
  name,
  border = false,
  isnavbutton = false,
}) => {
  return (
    <ButtonStyled border={border} isnavbutton={isnavbutton}>{name}</ButtonStyled>
  );
};

const ButtonStyled = styled.button`
  border: ${({ border }) => border ? '1px solid #000' : 'none'};
  border-radius: 1.5rem;
  background:${({ isnavbutton }) => isnavbutton ? 'none' : '#222'}; ;
  color: ${({ isnavbutton }) => isnavbutton ? '#222' : '#fff'};
  cursor: pointer;
  font-weight: ${({ isnavbutton }) => isnavbutton ? '600' : '500'};
  font-size: ${({ theme }) => theme.fontSize.md};
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.lg}`};
  transition: padding 0.3s ease;

  &:hover {
    color: ${({ isnavbutton }) => isnavbutton ? 'grey' : '#fff'};
    letter-spacing: ${({ isnavbutton }) => isnavbutton ? '0' : '0.15rem'};
    padding: ${({ theme, isnavbutton }) => isnavbutton
      ? `${theme.spacing.sm} ${theme.spacing.lg}`
      : `${theme.spacing.sm} ${theme.spacing.xl}`};
  };
`;

export default Button;
