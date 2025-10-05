import styled from "styled-components";

import ContactForm from "../components/molecules/ContactForm";

const ContactUs = () => {
  return (
    <PageWrapper>
      <Content>
        <img
          src="https://www.dl.dropboxusercontent.com/scl/fi/4d89cin22y9u5ssmrjns6/contantUs.jpg?rlkey=0v9da8jyuarg2wpq2y7jm1j2u&st=gqw1h0qc&dl=0" 
          alt=""
          style={{ width: '100vw' }} />
        <HeroText>CONTACT US</HeroText>
      </Content>

      <ContactForm />
    </PageWrapper>
  );
};

export default ContactUs;

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xl};
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HeroText = styled.div`
  position: absolute;
  top: 50%;
  font-size: ${({ theme }) => theme.fontSize.xxx_xl};
  color: ${({ theme }) => theme.colors.surface};
  font-weight: bold;
`;
