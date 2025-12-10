import styled from "styled-components";

import Text from "../common/Text";

const Footer = ({ links = [] }) => {
  return (
    <Container>
      <Wrapper>
        <Div1>
          <Text
            content='iAmSoulfood247'
            textSize="xxl"
            s_textSize="xl"
            bold
            color="surface"
          />
          <Text
            content='Authentic sould food, plant-based options, hibachi, and sushi. Made with love, delivered with care.'
            textSize="md"
            s_textSize="sm"
            color="warning"
          />
        </Div1>

        <div>
          <Text
            content='Quick Links'
            textSize="xxl"
            s_textSize="xl"
            bold
            color="surface"
          />
          <Links>
            {links.map((link, i) => (
              <FooterLink key={i} href={link.href}>
                {link.label}
              </FooterLink>
            ))}
          </Links>
        </div>

        <div>
          <Text
            content='Contact'
            textSize="xxl"
            s_textSize="xl"
            bold
            color="surface"
          />
          <Text
            content='Email: support@iamsoulfood247.com'
            textSize="md"
            s_textSize="sm"
            color="warning"
          />
          <Text
            content='Phone: (555) 247-SOUL'
            textSize="md"
            s_textSize="sm"
            color="warning"
          />
        </div>


      </Wrapper>
      
      <hr />
      <Copyright>© {new Date().getFullYear()} iAmSoulfood247. All rights reserved.</Copyright>
    </Container>
  );
};

export default Footer;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.error};
  color: ${({ theme }) => theme.colors.background};
  margin-top: ${({ theme }) => theme.spacing.xl};
  padding: ${({ theme }) => `${theme.spacing.lg} ${theme.spacing.md}`};
  gap: ${({ theme }) => theme.spacing.lg};
  width: 100%;
`;
const Div1 = styled.div`
  @media (min-width: 900px) {
    width: 20%;
  }
`
const Wrapper = styled.footer`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  flex-direction: column;
  width: 100%;

  @media (min-width: 900px) {
    flex-direction: row;
    justify-content: space-evenly;
  }
`;

const Links = styled.nav`
  display: flex;
  flex-direction: column;

  // gap: ${({ theme }) => theme.spacing.lg};
`;

const FooterLink = styled.a`
  color: ${({ theme }) => theme.colors.warning};
  font-size: ${({ theme }) => theme.fontSize.md};
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const Copyright = styled.p`
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.sm};
  color: ${({ theme }) => theme.colors.warning};
  opacity: 0.8;
`;
