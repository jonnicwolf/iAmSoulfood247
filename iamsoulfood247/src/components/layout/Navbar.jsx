import styled from "styled-components";

import Button from "../common/Button";

const Navbar = ({ logo, links = [], rightContent = [] }) => {
  return (
    <Nav>
      <Logo src={logo} />
      <NavLinks>
        {links.map((link, i) => (
          <NavItem key={i} href={link.href}>
            {link.label}
          </NavItem>
        ))}
      </NavLinks>
      {rightContent &&
        <RightContent>
          {rightContent.map((content, i) => (
            <Button
              name={content.label}
              isnavbutton={true}
              key={i}>{content}</Button>
          ))}
        </RightContent>}
    </Nav>
  );
};

export default Navbar;

const Nav = styled.nav`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.lg};
  background: ${({ theme }) => theme.colors.surface};
  border-bottom: 1px solid ${({ theme }) => theme.colors.background};
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 1000;
  box-shadow: ${({ theme }) => theme.shadows.md};
`;

const Logo = styled.img`
  height: 5rem;
  cursor: pointer;
`;

const NavLinks = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.lg};
`;

const NavItem = styled.a`
  font-size: ${({ theme }) => theme.fontSize.md};
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const RightContent = styled.div`
  display: flex;
  align-items: center;
`;
