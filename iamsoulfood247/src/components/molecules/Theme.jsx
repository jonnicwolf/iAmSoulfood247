import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import Button from '../common/Button';

const Theme = ({ stepGetter, stepSetter }) => {
  const [theme, setTheme] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setTheme(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    sessionStorage.setItem('theme', theme);
    stepSetter(stepGetter+1);
    navigate('/catering/dateTime');
  };
  const handleBackClick = () => {
    stepSetter(stepGetter-1);
    navigate('/catering/guestCount');
  };

  const isFormComplete = [theme].every(Boolean);

  return (
    <Container onSubmit={handleSubmit}>
      <h4>Choose Your Event Theme</h4>

      <Input
        value={theme}
        onChange={handleChange}
        placeholder={`Help us match the food to the mood. Tell us a bit about the soul, story and the overall energy you're looking for!`}
      />

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
          disabled={!isFormComplete}
        />
      </FooterContentWrap>
    </Container>
  );
};

const Container = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
  margin-top: ${({ theme}) => theme.spacing.md};
  
  @media (min-width: 900px) {
    width: 90vw;
  }
`;
const Input = styled.textarea`
  border-radius: ${({ theme }) => theme.radii.md};
  border: 2px dashed ${({ theme }) => theme.colors.accent};
  height: 200px;
  padding: ${({ theme }) => theme.spacing.sm};
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

export default Theme;
