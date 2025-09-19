import styled from "styled-components";

const Modal = ({ isOpen, onClose, title, children, footer }) => {
  if (!isOpen) return null;

  return (
    <Overlay onClick={onClose}>
      <Dialog onClick={(e) => e.stopPropagation()}>
        {title && <Header>{title}</Header>}
        <Body>{children}</Body>
        {footer && <Footer>{footer}</Footer>}
      </Dialog>
    </Overlay>
  );
};

export default Modal;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
`;

const Dialog = styled.div`
  background: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.radii.lg};
  box-shadow: ${({ theme }) => theme.shadows.lg};
  width: 90%;
  max-width: 500px;
  padding: ${({ theme }) => theme.spacing.lg};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
`;

const Header = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.lg};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
`;

const Body = styled.div`
  font-size: ${({ theme }) => theme.fontSize.md};
  color: ${({ theme }) => theme.colors.textLight};
`;

const Footer = styled.div`
  margin-top: auto;
  display: flex;
  justify-content: flex-end;
  gap: ${({ theme }) => theme.spacing.sm};
`;
