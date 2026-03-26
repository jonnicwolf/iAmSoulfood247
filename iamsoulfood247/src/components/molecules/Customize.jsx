import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import Button from '../common/Button';
import Text from '../common/Text';

const Customize = ({ stepGetter, stepSetter }) => {
  const [customService, setCustomService] = useState('');
  const [specialService, setSpecialService] = useState('');
  const navigate = useNavigate();

  const handleCustomService = (e) => {
    setCustomService(e.target.value);
  };
  const handleSpecialService = (e) => {
    setSpecialService(e.target.value);
  };
  const handleBackClick = () => {
    stepSetter(stepGetter-1);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    sessionStorage.setItem('customService', customService);
    sessionStorage.setItem('specialService', specialService);
    navigate('/catering/quote');
    stepSetter(stepGetter+1);
  };

  return (
    <Container onSubmit={handleSubmit}>
      <h4>Additional Services</h4>
      <Text
        content='Enhance your event with these optional services'
        textSize='md'
        s_textSize='sm'
      />

      <ItemWrapper>
        <Input
          type="checkbox"
          value='professional service staff'
          onClick={handleCustomService}
          />
        <TextWrapper>
          <Text
            content='Professional Service Staff'
            textSize='lg'
            s_textSize='md'
            bold
          />
          <Text
            content='Servers, bartenders, and coordinators'
            textSize='md'
            s_textSize='sm'
          />
        </TextWrapper>
      </ItemWrapper>
      <ItemWrapper>
        <Input
          type="checkbox"
          value='tables, chairs & linens'
          onClick={handleCustomService}
          />
        <TextWrapper>
          <Text
            content='Tables, Chairs & Linens'
            textSize='lg'
            s_textSize='md'
            bold
          />
          <Text
            content='Complete setup rentals'
            textSize='md'
            s_textSize='sm'
          />
        </TextWrapper>
      </ItemWrapper>
      <ItemWrapper>
        <Input
          type="checkbox"
          value='event decorations'
          onClick={handleCustomService}
          />
        <TextWrapper>
          <Text
            content='Event Decorations'
            textSize='lg'
            s_textSize='md'
            bold
          />
          <Text
            content='Centerpeices and table settings'
            textSize='md'
            s_textSize='sm'
          />
        </TextWrapper>
      </ItemWrapper>
      <ItemWrapper>
        <Input
          type="checkbox"
          value='full beverage service'
          onClick={handleCustomService}
          />
        <TextWrapper>
          <Text
            content='Full Beverage Service'
            textSize='lg'
            s_textSize='md'
            bold
          />
          <Text
            content='Non-alcoholic drinks and bar setup'
            textSize='md'
            s_textSize='sm'
          />
        </TextWrapper>
      </ItemWrapper>
      <ItemWrapper>
        <Input
          type="checkbox"
          value='dessert bar'
          onClick={handleCustomService}
          />
        <TextWrapper>
          <Text
            content='Dessert Bar'
            textSize='lg'
            s_textSize='md'
            bold
          />
          <Text
            content='Interactive dessert station'
            textSize='md'
            s_textSize='sm'
          />
        </TextWrapper>
      </ItemWrapper>
      <ItemWrapper>
        <Input
          type="checkbox"
          value='setup & cleanup'
          onClick={handleCustomService}
          />
        <TextWrapper>
          <Text
            content='Setup & Cleanup'
            textSize='lg'
            s_textSize='md'
            bold
          />
          <Text
            content='Full event setup and breakdown'
            textSize='md'
            s_textSize='sm'
          />
        </TextWrapper>
      </ItemWrapper>

      <SpecialReqs>
        <h5>Special Requirements or Requests</h5>
        <p style={{fontSize:'0.75rem'}}>Any specific needs, preferences, or special instructions for your event?</p>
        <TextArea
          onChange={handleSpecialService}
          placeholder='Examples: Need vegan alternatives for main course, prefer spicy options, require separate serving area for kids, have specific timing for meal service, need kosher preparation, etc.'
        />
      </SpecialReqs>

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
const ItemWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.textLight}10;
  border-radius: ${({ theme }) => theme.radii.md};
  display: flex;
  align-items: baseline;
  gap: ${({ theme }) => theme.spacing.sm};
  padding: ${({ theme }) => theme.spacing.sm};
`;
const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const Input = styled.input`
  height: 15px;
  width: 15px;
`;
const SpecialReqs = styled.div`
  line-height: 1rem;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xs}
`;
const TextArea = styled.textarea`
  height: 200px;
  padding: ${({ theme }) => theme.spacing.sm};
  line-height: 1.2rem;
`;
const FooterContentWrap = styled.div`
  display: flex;
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

export default Customize;
