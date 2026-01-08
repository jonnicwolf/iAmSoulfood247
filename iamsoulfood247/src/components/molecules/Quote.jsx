import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import Button from '../common/Button';
import Text from '../common/Text';

const Quote = () => {
  const getSessionData = Object.keys(sessionStorage).reduce((obj, key) => {
    obj[key] = sessionStorage.getItem(key);
    return obj;
  }, {});

  const handleBackClick = () => {
    stepSetter(stepGetter-1);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    sessionStorage.setItem('service', service);
    navigate('/catering/customize');
    stepSetter(stepGetter+1);
  };

  const fooSessionStorage = {
    customService: "",
    date: "2026-01-10",
    end: "2026-01-10",
    eventDescription: "A retirement party for our dear husband, father, and coworker",
    eventTitle: "Bob's retirement party",
    eventType: "Other",
    guestCount: "50",
    location: {
      address: '555 Vesey St',
      address2: 'Apt 1',
      city: 'New York',
      state: 'NY',
      zip: '10010',
    },
    restrictions: "",
    service: "buffetStyle",
    setup: "",
    specialService: "",
    start: "3:00PM",
    theme: "Rustic",
  };

  useEffect(() => {
    Object.entries(fooSessionStorage).forEach(([key, value]) => {
      sessionStorage.setItem(
        key,
        typeof value === 'object'
          ? JSON.stringify(value)
          : String(value)
      );
    });
  },[]);

  // console.log('getSessionData: ', getSessionData);

  const date1 = Date.parse(getSessionData.date);
  const dateText = new Date(date1).toDateString();
  const location = JSON.parse(getSessionData.location);

  console.log(dateText)
  return (
    <Container>
      <Div>
        <div style={{display: 'flex', gap: '0.5rem'}}>
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#f97316" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-check-icon lucide-circle-check"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
          <h3>Event Summary</h3>
        </div>
        <EventSummary>
          <EventSummary1>
            <div style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-calendar-icon lucide-calendar"><path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/></svg>
              <span>Event Details</span>
            </div>
            <Text
              content={getSessionData.eventTitle}
              textSize='md'
              s_textSize='sm'
              bold
            />
            <span>{getSessionData.eventType} &#183; {dateText} at {getSessionData.start}</span>
          </EventSummary1>
          <EventSummary2>
            <div style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pin-icon lucide-map-pin"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/></svg>
              <span>Location</span>
            </div>
            <Text
              content={`${location.address}, ${location.city}, ${location.state} ${location.zip}`}
              textSize='md'
              s_textSize='sm'
              bold
            />
          </EventSummary2>
          <EventSummary3>
            <div style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user-icon lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
              <span>Guest Count</span>
            </div>
            <Text
              content={`${getSessionData.guestCount} guests`}
              textSize='md'
              s_textSize='sm'
              bold
            />
          </EventSummary3>
        </EventSummary>
      </Div>

      <Div>
        <div style={{display: 'flex', gap: '0.5rem'}}>
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#f97316" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sparkles-icon lucide-sparkles"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"/><path d="M20 2v4"/><path d="M22 4h-4"/><circle cx="4" cy="20" r="2"/></svg>
          <h3>Your Custom Quote</h3>
        </div>
        <CustomQuote>
          <Item>Food & Catering</Item>
          <Cost>$1300.00</Cost>
          <Item>Service & Staff</Item>
          <Cost>$600.00</Cost>
          <Item>Equipment Rental</Item>
          <Cost>$300.00</Cost>
          <Item>Additional Services</Item>
          <Cost>$200.00</Cost>
          <HR/>
          <Item>Subtotal</Item>
          <Cost>$2400.00</Cost>
          <Item>Tax & Fees</Item>
          <Cost>$192.00</Cost>
          <HR />
          <Item><strong>Total Estimated Cost</strong></Item>
          <Cost>$2592.00</Cost>
          <Item>Per Person</Item>
          <Cost>$26.00</Cost>
        </CustomQuote>

        <Deposit>
          <div style={{display: 'flex', gap: '0.5rem', alignItems: 'center'}}>
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#f97316" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-dollar-sign-icon lucide-dollar-sign"><line x1="12" x2="12" y1="2" y2="22"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
            <h4 style={{color: '#D14545'}}>Deposit Required</h4>
          </div>
          <Text
            content='$648'
            textSize='xxl'
            s_textSize='lg'
            color='error'
            bold
          />
          <Text
            content='To secure your booking'
            textSize='md'
            s_textSize='sm'
            color='error'
          />
        </Deposit>

        <Div style={{padding: '1rem'}}>
          <h3>Contact Information</h3>
          <ContactInfo>
            <div style={{gridColumn: 1}}>
              <div style={{display: 'flex', gap: '0.5rem', alignItems: 'center'}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#f97316" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user-icon lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
              <Label htmlFor=''>Full Name *</Label>
              </div>
              <Input
                type='text'
                placeholder='John Doe'
              />
            </div>
            <div>
              <div style={{display: 'flex', gap: '0.5rem', alignItems: 'center'}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#f97316" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-phone-icon lucide-phone"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"/></svg>
              <Label htmlFor=''>Phone Number *</Label>
              </div>
              <Input
                type='text'
                placeholder='John Doe'
              />
            </div>
            <div>
              <div style={{display: 'flex', gap: '0.5rem', alignItems: 'center'}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#f97316" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail-icon lucide-mail"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"/><rect x="2" y="4" width="20" height="16" rx="2"/></svg>
              <Label htmlFor=''>Email *</Label>
              </div>
              <Input
                type='text'
                placeholder='John Doe'
              />
            </div>
            <div>
              <div style={{display: 'flex', gap: '0.5rem', alignItems: 'center'}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#f97316" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-building2-icon lucide-building-2"><path d="M10 12h4"/><path d="M10 8h4"/><path d="M14 21v-3a2 2 0 0 0-4 0v3"/><path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2"/><path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16"/></svg>
                <Label htmlFor=''>Company/Organization (Optional)</Label>
              </div>
              <Input
                type='text'
                placeholder='John Doe'
              />
            </div>
          </ContactInfo>
        </Div>
      </Div>

      <Submit>
        <div style={{display: 'flex', gap: '0.5rem', alignItems: 'center'}}>
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2ECC71" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-check-icon lucide-circle-check"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
          <h3>Ready to Submit!</h3>
        </div>
        <div style={{marginLeft: '2rem'}}>
          <Text
            content='Our team will review your request and contact you within 24 hours to confirm details and finalize your booking.'
            textSize='md'
            s_textSize='md'
            color='primary'
          />
        </div>
      </Submit>

      <FooterContentWrap>
        <Button
          name={
            <ButtonContentWrap>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#a49090ff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-left-icon lucide-chevron-left"><path d="m15 18-6-6 6-6"/></svg>
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
            <SubmitWrap>
              <span>Submit Request</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check-icon lucide-check"><path d="M20 6 9 17l-5-5"/></svg>
            </SubmitWrap>
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
  gap: ${({ theme }) => theme.spacing.lg};
  justify-content: center;
  margin-top: ${({ theme}) => theme.spacing.md};

  @media (min-width: 900px) {
    width: 90vw;
  }
`;
const Div = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid ${({ theme }) => theme.colors.textLight}40;
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: ${({ theme }) => theme.spacing.lg};
  gap: ${({ theme }) => theme.spacing.sm};
`;
const EventSummary = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: ${({ theme }) => theme.spacing.sm};
  gap: ${({ theme }) => theme.spacing.sm};
`;
const EventSummary1 = styled.div`
  grid-column: 1;
  grid-row: 1;
`;
const EventSummary2 = styled.div`
  grid-column: 1;
  grid-row: 2;
`;
const EventSummary3 = styled.div`
  grid-column: 2;
  grid-row: 1;
`;
const CustomQuote = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: ${({ theme }) => theme.spacing.sm};
  gap: ${({ theme }) => theme.spacing.sm};
`;
const Item = styled.p`
  grid-column: 1;
`;
const Cost = styled.p`
  grid-column: 2;
  justify-self: end;
`;
const HR = styled.div`
  border: 1px solid ${({theme}) => theme.colors.textLight}40;
  grid-column: 1/-1;
`;
const Deposit = styled(Div)`
  background-color: ${({ theme }) => theme.colors.warning}40;
  padding: ${({ theme }) => theme.spacing.md};
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
const ContactInfo = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${({ theme }) => theme.spacing.md};
  padding: ${({ theme }) => theme.spacing.sm}
`;
const Submit = styled(Div)`
  background: ${({ theme }) => theme.colors.primary}30;
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
const SubmitWrap = styled(ButtonContentWrap)`
  gap: ${({ theme }) => theme.spacing.md};
`;

export default Quote;
