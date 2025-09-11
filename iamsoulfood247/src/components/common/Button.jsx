import styled from "styled-components";

const Button = ({
  name,
  border = true,
}) => {
  return (
    <ButtonStyled border={border}>{name}</ButtonStyled>
  );
};

const ButtonStyled = styled.button`
  border: ${({ border }) => border ? '1px solid #000' : 'none'};
  border-radius: 1.5rem;
  background: #222;
  color: #fff;
  cursor: pointer;
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.lg}`};
  font-size: ${({ theme }) => theme.fontSize.md};
  transition: padding 0.3s ease;

  &:hover {
    padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.xl}`};
    letter-spacing: 0.15rem;
  };
`;

export default Button;
