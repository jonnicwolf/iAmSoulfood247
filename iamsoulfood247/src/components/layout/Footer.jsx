import styled from "styled-components";

const Footer = ({ links = [], copyright }) => {
  return (
    <Wrapper>
      <Links>
        {links.map((link, i) => (
          <FooterLink key={i} href={link.href}>
            {link.label}
          </FooterLink>
        ))}
      </Links>
      {copyright && <Copyright>© {new Date().getFullYear()} {copyright}</Copyright>}
    </Wrapper>
  );
};

export default Footer;

const Wrapper = styled.footer`
  background: ${({ theme }) => theme.colors.textLight};
  color: ${({ theme }) => theme.colors.background};
  padding: ${({ theme }) => `${theme.spacing.lg} ${theme.spacing.md}`};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  width: 100%;
`;

const Links = styled.nav`
  display: flex;
  gap: ${({ theme }) => theme.spacing.lg};
`;

const FooterLink = styled.a`
  color: ${({ theme }) => theme.colors.background};
  font-size: ${({ theme }) => theme.fontSize.md};
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const Copyright = styled.p`
  font-size: ${({ theme }) => theme.fontSize.sm};
  opacity: 0.8;
`;
