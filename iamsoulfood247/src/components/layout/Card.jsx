import styled from "styled-components";

const Card = ({ title, size = 'lg', borderRadius='lg', children, footer, center, ...props }) => {
  return (
    <CardWrapper center={center} borderRadius={borderRadius}{...props}>
      {title && <CardHeader size={size}>{title}</CardHeader>}
      <CardBody>{children}</CardBody>
      {footer && <CardFooter center={center}>{footer}</CardFooter>}
    </CardWrapper>
  );
};

export default Card;

const CardWrapper = styled.div`
  background: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme, borderRadius }) => theme.radii[borderRadius]};
  padding: ${({ theme }) => theme.spacing.lg};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
  align-items: ${props => (props.center ? 'center' : 'flex-start')};
  transition: box-shadow 0.2s ease;
  width: 100%;

  &:hover {
    background: ${({theme}) => theme.colors.warning}50;
  }
`;

const CardHeader = styled.h3`
  font-size: ${({ theme, size }) => theme.fontSize[size]};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  text-align: center;

  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.fontSize.xxl};
  }
`;

const CardBody = styled.div`
  font-size: ${({ theme }) => theme.fontSize.md};
  color: ${({ theme }) => theme.colors.textLight};
  flex: 1;
`;

const CardFooter = styled.div`
  font-size: ${({ theme }) => theme.fontSize.sm};
  color: ${({ theme }) => theme.colors.text};
  border-top: 1px solid ${({ theme }) => theme.colors.background};
  text-align: ${({ center }) => center ? 'center' : 'left'}
`;
