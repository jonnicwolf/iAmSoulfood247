import { useState } from 'react';
import styled from 'styled-components';

import Text from '../common/Text';
import Button from '../common/Button';
import { useNavigate } from 'react-router-dom';

const Menu = ({ stepGetter, stepSetter }) => {
  const [service, setService] = useState('');
  const navigate = useNavigate();

  const handleServiceChange = (e) => {
    setService(e.target.value);
  };
  const handleBackClick = () => {
    stepSetter(stepGetter-1);
  }
  const handleSubmit = (e) => {
    e.preventDefault();

    sessionStorage.setItem('service', service);
    navigate('/catering/customize');
    stepSetter(stepGetter+1);
  }
  return (
    <Container onSubmit={handleSubmit}>
      <h4>Service Style *</h4>
      <ServiceButton value='buffetStyle' onClick={handleServiceChange}>
        <Text
          content='Buffet Style'
          textSize='md'
          s_textSize='sm'
          bold
        />
        <Text
          content='Guests serve themselves from a spread'
          textSize='md'
          s_textSize='sm'
        />
      </ServiceButton>
      <ServiceButton value='buffetStyle' onClick={handleServiceChange}>
        <Text
          content='Plated Service'
          textSize='md'
          s_textSize='sm'
          bold
        />
        <Text
          content='Individually plated meals served to guests'
          textSize='md'
          s_textSize='sm'
        />
      </ServiceButton>
      <ServiceButton value='buffetStyle' onClick={handleServiceChange}>
        <Text
          content='Family Style'
          textSize='md'
          s_textSize='sm'
          bold
        />
        <Text
          content='Large platters passed around tables'
          textSize='md'
          s_textSize='sm'
        />
      </ServiceButton>
      <ServiceButton value='buffetStyle' onClick={handleServiceChange}>
        <Text
          content={`Cocktail/Heavy Hors d'oeuvers`}
          textSize='md'
          s_textSize='sm'
          bold
        />
        <Text
          content='Standing reception with passed appetizers'
          textSize='md'
          s_textSize='sm'
        />
      </ServiceButton>
      <ServiceButton value='buffetStyle' onClick={handleServiceChange}>
        <Text
          content='Drop Off'
          textSize='md'
          s_textSize='sm'
          bold
        />
        <Text
          content='Food delivered, no service staff'
          textSize='md'
          s_textSize='sm'
        />
      </ServiceButton>

      <FooterContentWrap>
        <Button
          name={
            <ButtonContentWrap>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-left-icon lucide-chevron-left"><path d="m15 18-6-6 6-6"/></svg>
            <span>Back</span>
            </ButtonContentWrap>
          }
          border
          color='text'
          backgroundColor='surface'
          onClick={handleBackClick}
        />
        <Button
          name={
            <ButtonContentWrap>
              <span>Next</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right-icon lucide-chevron-right"><path d="m9 18 6-6-6-6"/></svg>
            </ButtonContentWrap>
          }
          border
          color='text'
          backgroundColor='primary'
          type='submit'
        />
      </FooterContentWrap>
    </Container>
  );
};

const Container = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
  justify-content: center;
  margin-top: ${({ theme}) => theme.spacing.md};

  @media (min-width: 900px) {
    width: 90vw;
  }
`;
const ServiceButton = styled.button`
  display: flex;
  flex-direction: column;
  border: 2px ridge ${({ theme }) => theme.colors.accent}40;
  border-radius: ${({ theme }) => theme.radii.md};
  padding: ${({ theme }) => theme.spacing.md};
  box-shadow: 0 0 5px ${({ theme }) => theme.colors.accent};

  &:hover {
    border: 2px ridge ${({ theme }) => theme.colors.accent}80;
  }
`;
const FooterContentWrap = styled.div`
  display: flex;
  justify-content: space-evenly;
  justify-content: space-between;
  margin-top: ${({ theme }) => theme.spacing.md};
  width: 100%;
`;
const ButtonContentWrap = styled.div`
  display: flex;
  align-items: center;
  color: black;
  width: 100%;
`;

export default Menu;
