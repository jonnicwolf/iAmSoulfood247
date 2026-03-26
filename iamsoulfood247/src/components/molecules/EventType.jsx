import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import Button from '../common/Button';

const EventType = ({ stepSetter, stepGetter }) => {
  const [eventType, setEventType] = useState('');
  const [eventTitle, setEventTitle] = useState('');
  const [eventDescription, setEventDescription] = useState('');

  const navigate = useNavigate();

  const handleEventTitle = (e) => {
    const { value } = e.currentTarget;
    setEventTitle(value);
  };
  const handleEventDescription = (e) => {
    const { value } = e.currentTarget;
    setEventDescription(value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!eventTitle || !eventDescription) {
      alert('Missi')
    }
    sessionStorage.setItem('eventType', eventType);
    sessionStorage.setItem('eventTitle', eventTitle);
    sessionStorage.setItem('eventDescription', eventDescription);
    stepSetter(stepGetter+1);
    navigate('/catering/guestcount');
  };

  const isFormComplete = [eventType, eventTitle, eventDescription].every(Boolean);

  return (
    <Container onSubmit={handleSubmit}>
      <h4 style={{alignSelf: 'start'}}>What type of event are you planning? *</h4>
      <ButtonGroup>
        <EventButton
          type='button'
          onClick={() => setEventType('wedding')}
          active={eventType === 'wedding'}>
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-heart-icon lucide-heart"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"/></svg>
          <span>Wedding</span>
        </EventButton>
        <EventButton
          type='button'
          onClick={() => setEventType('corporate')}
          active={eventType === 'corporate'}>
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-briefcase-icon lucide-briefcase"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/><rect width="20" height="14" x="2" y="6" rx="2"/></svg>
          <span>Corporate</span>
        </EventButton>
        <EventButton
          type='button'
          onClick={() => setEventType('birthday')}
          active={eventType === 'birthday'}>
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-cake-icon lucide-cake"><path d="M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8"/><path d="M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2.5 2 4 2 2-1 2-1"/><path d="M2 21h20"/><path d="M7 8v3"/><path d="M12 8v3"/><path d="M17 8v3"/><path d="M7 4h.01"/><path d="M12 4h.01"/><path d="M17 4h.01"/></svg>
          <span>Birthday</span>
        </EventButton>
        <EventButton
          type='button'
          onClick={() => setEventType('graduation')}
          active={eventType === 'graduation'}>
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-graduation-cap-icon lucide-graduation-cap"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"/><path d="M22 10v6"/><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"/></svg>
          <span>Graduation</span>
        </EventButton>
        <EventButton
          type='button'
          onClick={() => setEventType('holiday')}
          active={eventType === 'holiday'}>
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-gift-icon lucide-gift"><rect x="3" y="8" width="18" height="4" rx="1"/><path d="M12 8v13"/><path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"/><path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5"/></svg>
          <span>Holiday</span>
        </EventButton>
        <EventButton
          type='button'
          onClick={() => setEventType('fundraiser')}
          active={eventType === 'fundraiser'}>
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-heart-handshake-icon lucide-heart-handshake"><path d="M19.414 14.414C21 12.828 22 11.5 22 9.5a5.5 5.5 0 0 0-9.591-3.676.6.6 0 0 1-.818.001A5.5 5.5 0 0 0 2 9.5c0 2.3 1.5 4 3 5.5l5.535 5.362a2 2 0 0 0 2.879.052 2.12 2.12 0 0 0-.004-3 2.124 2.124 0 1 0 3-3 2.124 2.124 0 0 0 3.004 0 2 2 0 0 0 0-2.828l-1.881-1.882a2.41 2.41 0 0 0-3.409 0l-1.71 1.71a2 2 0 0 1-2.828 0 2 2 0 0 1 0-2.828l2.823-2.762"/></svg>
          <span>Fundraiser</span>
        </EventButton>
        <EventButton
          type='button'
          onClick={() => setEventType('other')}
          active={eventType === 'other'}>
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sparkles-icon lucide-sparkles"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"/><path d="M20 2v4"/><path d="M22 4h-4"/><circle cx="4" cy="20" r="2"/></svg>
          <span>Other</span>
        </EventButton>
      </ButtonGroup>

      <InputFieldWrap>
        <Label htmlFor="eventTitle">Event Title *</Label>
        <Input
          name='eventTitle'
          type="text"
          placeholder={`e.g., John's retirement party`}
          value={eventTitle}
          onChange={handleEventTitle}
          />
      </InputFieldWrap>
      <InputFieldWrap>
        <Label htmlFor="eventDescription">Event Description (Optional) *</Label>
        <Input2
          name='eventDescription'
          placeholder={`Tell us more about your event to help us provide better recommendations...`}
          value={eventDescription}
          onChange={handleEventDescription}
          />
      </InputFieldWrap>

      <FooterContentWrap>
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
  justify-content: center;
  align-items: center;
  margin-top: ${({ theme}) => theme.spacing.md};

  @media (min-width: 900px) {
    max-width: 900px;
    width: 90vw;
  }
`;
const EventButton = styled.button`
  border: 3px solid
    ${({ active, theme }) => (active ? theme.colors.accent : 'rgba(0,0,0,0.2)')};
  border-radius: ${({ theme }) => theme.radii.md};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  box-shadow: 0 0 7px 
    ${({ active, theme }) => (active ? theme.colors.accent : 'rgba(0,0,0,0.4)')};
  flex-basis: calc(50% - ${({ theme }) => theme.spacing.md});
  aspect-ratio: 1/1;

  &:hover {
    border: 3px groove ${({ theme }) => theme.colors.primary}70;
    box-shadow: 0 0 4px ${({ theme }) => theme.colors.primary} ;
    scale: 1.02;

  }
`;
const ButtonGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.lg};
  justify-content: center;
`;
const InputFieldWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-self: start;
  color: black;
  width: 100%;
  gap: ${({ theme }) => theme.spacing.sm};
`;
const Label = styled.label`
  font-weight: 600;
`;
const Input = styled.input`
  border-radius: ${({ theme }) => theme.radii.sm};
  border: 1px groove rgba(0,0,0,0.2);
  padding: ${({ theme }) => theme.spacing.sm};
  max-width: 100%;
`;
const Input2 = styled.textarea`
  border-radius: ${({ theme }) => theme.radii.sm};
  border: 1px groove rgba(0,0,0,0.2);
  padding: ${({ theme }) => theme.spacing.sm};
  padding-bottom: ${({ theme }) => theme.spacing.xxl};
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

export default EventType;
