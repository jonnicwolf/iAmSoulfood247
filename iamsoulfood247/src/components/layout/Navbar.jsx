import React, { useState } from "react";
import styled from "styled-components";

import Button from "../common/Button";

const Navbar = ({ logo, links = [], rightContent = [] }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Nav>
      <Logo src={logo} />

      <MenuButton onClick={() => setMenuOpen((prev) => !prev)} $menuOpen={menuOpen}>
        <span />
        <span />
        <span />
      </MenuButton>

      {menuOpen && <MobileDropMenu>
        {links.map((link, i) => (
          <NavItem key={i} href={link.href}>
            {link.label}
          </NavItem>
        ))}
      </MobileDropMenu>}

      <NavLinks>
        {links.map((link, i) => (
          <NavItem key={i} href={link.href}>
            {link.label}
          </NavItem>
        ))}
      </NavLinks>

      {rightContent &&
       <RightContentWrapper> 
        <RightContent>
          {rightContent.map((content, i) => (
            <Button
              name={content.label}
              isnavbutton={true}
              key={i}>{content}</Button>
          ))}
        </RightContent>
       </RightContentWrapper>}
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

const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  padding: 0.5rem;

  span {
    display: block;
    width: 25px;
    height: 3px;
    background-color: ${({ theme }) => theme.colors.text};
    border-radius: 2px;
    transition: all 0.3s ease;
  }

  ${({ $menuOpen }) =>
    $menuOpen &&
    `
    span:nth-child(1) {
      transform: rotate(45deg) translate(5px, 5px);
    }
    span:nth-child(2) {
      opacity: 0;
    }
    span:nth-child(3) {
      transform: rotate(-45deg) translate(5px, -5px);
    }
  `}

  @media (max-width: 768px) {
    display: flex;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.xl};
   @media (max-width: 768px) {
    ${({ $menuOpen }) =>
      $menuOpen
        ? `display: flex;`
        : `display: none;`
      }
    }
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

const RightContentWrapper = styled.div`
  background: ${({ theme }) => theme.colors.textLight};
  border-radius: 2rem;
  @media (max-width: 768px) {
    ${({ $menuOpen }) =>
      $menuOpen
        ? `display: flex;`
        : `display: none;`
      }
    }
`;

const RightContent = styled.div`
  display: flex;
  align-items: center;
`;

const MobileDropMenu = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
  align-items: center;
  position: absolute;
  top: 100%;
  width: 100%;
  background: ${({ theme }) => theme.colors.surface};
  left: 0;
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.lg};
  box-shadow: ${({ theme }) => theme.shadows.md};
  z-index: 999;
`;
