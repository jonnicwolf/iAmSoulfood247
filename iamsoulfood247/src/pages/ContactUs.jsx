import styled from "styled-components";

import ContactForm from "../components/molecules/ContactForm";

const ContactUs = () => {
  return (
    <PageWrapper>
      <Content>
        <img
          src="https://res.cloudinary.com/dmxfzfj3z/image/upload/v1760664789/contantUs_ili1jn.jpg" 
          alt=""
          style={{ width: '100vw' }} />
        <HeroText>CONTACT</HeroText>
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

  @media (max-width: 768px) {
    top: 20%;
    font-size: ${({ theme }) => theme.fontSize.xxxl};
  }
`;
