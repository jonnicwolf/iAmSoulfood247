import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import Button from '../common/Button';

const DateTime = ({ stepGetter, stepSetter }) => {
  const [date, setDate] = useState('');
  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');
  const [setup, setSetup] = useState('');
  const [location, setLocation] = useState({
    address: '',
    address2: '',
    city: '',
    state: '',
  });
  const navigate = useNavigate();

  const handleDate = (e) => {
    setDate(e.target.value);
  };
  const handleStart = (e) => {
    setStart(e.target.value);
  };
  const handleEnd = (e) => {
    setEnd(e.target.value);
  };
  const handleSetup = (e) => {
    setSetup(e.target.value);
  };
  const handleLocation = (e) => {
    const { name, value } = e.target;

    setLocation(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    sessionStorage.setItem('date', date);
    sessionStorage.setItem('start', start);
    sessionStorage.setItem('end', end);
    sessionStorage.setItem('setup', setup);
    sessionStorage.setItem('location', location);

    stepSetter(stepGetter+1);
    navigate('/catering/menu');
  };
  const handleBackClick = () => {
    stepSetter(stepGetter-1);
    navigate('/catering/theme');
  }

  return (
    <Container onSubmit={handleSubmit}>
      <Div>
        <Label htmlFor=''>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#f97316" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-calendar-icon lucide-calendar"><path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/></svg>
          Event Date *
        </Label>
        <Input
          type='date'
          onChange={handleDate}
        />
      </Div>
      <Div>
        <Label htmlFor=''>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#f97316" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-clock-icon lucide-clock"><path d="M12 6v6l4 2"/><circle cx="12" cy="12" r="10"/></svg>
          Event Start Time *
        </Label>
        <Input
          type='time'
          onChange={handleStart}
        />
      </Div>
      <Div>
        <Label htmlFor=''>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#f97316" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-clock-icon lucide-clock"><path d="M12 6v6l4 2"/><circle cx="12" cy="12" r="10"/></svg>
          Event End Time (Optional)
        </Label>
        <Input
          type='time'
          onChange={handleEnd}
        />
      </Div>
      <Div>
        <Label htmlFor=''>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#f97316" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-clock-icon lucide-clock"><path d="M12 6v6l4 2"/><circle cx="12" cy="12" r="10"/></svg>
          Setup Time Needed (Optional)
        </Label>
        <Input
          type='time'
          onChange={handleSetup}
        />
      </Div>
      <Div>
        <Label htmlFor=''>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#f97316" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pin-icon lucide-map-pin"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/></svg>
          Location *
        </Label>
        <Input
          type='text'
          placeholder='Address Line 1'
          onChange={handleLocation}
        />
        <Input
          type='text'
          placeholder='Address Line 2'
          onChange={handleLocation}
        />
        <Input
          type='text'
          placeholder='New York City'
          onChange={handleLocation}
        />
        <Input
          type='number'
          placeholder='Zip Code'
          onChange={handleLocation}
        />
      </Div>

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
  margin-top: ${({ theme}) => theme.spacing.md};

  @media (min-width: 900px) {
    width: 90vw;
  }
`;
const Label = styled.label`
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
`;
const Input = styled.input`
  border-radius: ${({ theme }) => theme.radii.md};
  border: 1px groove rgba(0,0,0,0.2);
  padding: ${({ theme }) => theme.spacing.sm};
  max-width: 100%;
`;
const Div = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
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

export default DateTime;
