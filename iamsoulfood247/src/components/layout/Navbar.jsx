import { useState } from "react";
import styled from "styled-components";

const Navbar = ({ logo, }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const dropMenuItems = [
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-house-icon lucide-house"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"/><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>,
      description: 'Home',
      title: 'Return to Home Page',
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-utensils-crossed-icon lucide-utensils-crossed"><path d="m16 2-2.3 2.3a3 3 0 0 0 0 4.2l1.8 1.8a3 3 0 0 0 4.2 0L22 8"/><path d="M15 15 3.3 3.3a4.2 4.2 0 0 0 0 6l7.3 7.3c.7.7 2 .7 2.8 0L15 15Zm0 0 7 7"/><path d="m2.1 21.8 6.4-6.3"/><path d="m19 5-7 7"/></svg>,
      description: 'Menu',
      title: 'See our full menu',
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chef-hat-icon lucide-chef-hat"><path d="M17 21a1 1 0 0 0 1-1v-5.35c0-.457.316-.844.727-1.041a4 4 0 0 0-2.134-7.589 5 5 0 0 0-9.186 0 4 4 0 0 0-2.134 7.588c.411.198.727.585.727 1.041V20a1 1 0 0 0 1 1Z"/><path d="M6 17h12"/></svg>,
      description: 'Catering',
      title: 'Plan your catering event with our catering team',
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-calendar-icon lucide-calendar"><path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/></svg>,
      description: 'My Events',
      title: 'Track, view, or manage events in your calendar',
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-package-icon lucide-package"><path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"/><path d="M12 22V12"/><polyline points="3.29 7 12 12 20.71 7"/><path d="m7.5 4.27 9 5.15"/></svg>,
      description: 'My Orders',
      title: 'View order history and status',
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user-icon lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>,
      description: 'Account',
      title: 'Manage your account',
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-log-out-icon lucide-log-out"><path d="m16 17 5-5-5-5"/><path d="M21 12H9"/><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/></svg>,
      description: 'Logout',
      title: 'Securely sign out of your account',
    },
  ];

  return (
    <Nav>
      <NavRow1>
        <LogoContainer>
          <Logo src={logo} />
          <span>
            <LogoTitle>iAmSoulfood247</LogoTitle>
            <p>Order & Eat</p>
          </span>
        </LogoContainer>

        <RightContentWrapper>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shopping-cart-icon lucide-shopping-cart"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
          <BurgerButton
            onClick={() =>setMenuOpen(!menuOpen)}>
            { !menuOpen
              ? <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu-icon lucide-menu"><path d="M4 5h16"/><path d="M4 12h16"/><path d="M4 19h16"/></svg>
              : <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x-icon lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
            }
          </BurgerButton>
        </RightContentWrapper>
      </NavRow1>
      { menuOpen &&
        <NavRow2>
          {dropMenuItems.map(item =>
            <DropMenuItemButton title={item.title}>
              {item.icon}
              {item.description}
            </DropMenuItemButton>
          )}
        </NavRow2>
      }
    </Nav>
  );
};

export default Navbar;

const Nav = styled.nav`
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.colors.background};
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 1000;
  box-shadow: ${({ theme }) => theme.shadows.md};
`;
const NavRow1 = styled.div`
  background: linear-gradient(to right, #ffffff 25%, #2ecc71 70%);
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const NavRow2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba(46,204,113, 0.8);
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing.sm};
`;

const LogoContainer = styled.div`
  display: grid;
  grid-template-columns: 30% 1fr;
  align-items: center;
  justify-items: start;
  gap: 0.5rem;
`;

const LogoTitle = styled.h2``;

const Logo = styled.img`
  height: 5rem;
  cursor: pointer;
`;

const BurgerButton = styled.button`
  padding: 0;
  margin: 0;
`;

const DropMenuItemButton = styled.button`
  width: 100%;
  display: flex;
  gap: 0.5rem;
  text-align: start;
  font-weight: bold;
  color: white;
  border-radius: 10px;
  padding: 1rem;
  &:hover {
    background: rgba(46,204,113, 1);
  }
`;

const RightContentWrapper = styled.div`
  display: flex;
  gap: 1rem;
  justify-items: center;
  padding-right: 1rem;
`;
