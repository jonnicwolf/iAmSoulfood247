import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import Text from '../common/Text';
import Button from '../common/Button';

const GuestCount = ({ stepGetter, stepSetter }) => {
  const [guests, setGuests] = useState(10);
  const [restrictions, setRestrictions] = useState([]);

  const navigate = useNavigate();

  const handleSliderChange = (e) => {
    setGuests(e.target.value);
  };
  const handleExactGuest = (e) => {
    setGuests(e.target.value);
  };
  const handleRestrictions = (e) => {
    const { name, checked } = e.target;
    checked
    ? setRestrictions(prev => [...prev, e.target.value])
    : setRestrictions(prev => prev.filter(item => item !== name));
  };
  const handleBackClick = () => {
    stepSetter(stepGetter-1);
    navigate('/catering/eventType');
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    sessionStorage.setItem('guestCount', guests);
    sessionStorage.setItem('restrictions', restrictions);
    stepSetter(stepGetter+1);
    navigate('/catering/theme');
  };

  return (
    <Container onSubmit={handleSubmit}>
      <GuestSection>
        <Label1 htmlFor="guestNumberRange">Number of Guests *</Label1>
        <GuestIcon>
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#f97316" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-users-icon lucide-users"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><path d="M16 3.128a4 4 0 0 1 0 7.744"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><circle cx="9" cy="7" r="4"/></svg>
          <Text
            content={guests}
            textSize=''
            s_textSize='xxl'
            bold
          />
        </GuestIcon>
        <Input
          name='guestNumberRange'
          id='guestNumberRange'
          type="range"
          min='10' max='500'
          step='10'
          value={guests} onChange={handleSliderChange} />
        <MinMaxWrapper>
          <span>10 Guests</span>
          <span>500 Guests</span>
        </MinMaxWrapper>
      </GuestSection>
      <Label2 htmlFor='guestNumberExact'>
        Or enter exact number
      </Label2>
      <input
        name='guestNumberExact'
        id='guestNumberExact'
        type='number'
        value={guests}
        placeholder='50'
        onChange={handleExactGuest}
      />
      <Text
        content='Select all that apply. this helps us recommend appropriate menu items.'
        textSize='md'
        s_textSize='sm'
      />

      <RestrictionsWrapper>
        <Restriction>
          <input type="checkbox" name="vegetarian" id="vegetarian" onChange={handleRestrictions} />
          <RestrictionText>Vegetarian</RestrictionText>
        </Restriction>
        <Restriction>
          <input type="checkbox" name="vegan" id="vegan" onChange={handleRestrictions} />
          <RestrictionText>Vegan</RestrictionText>
        </Restriction>
        <Restriction>
          <input type="checkbox" name="glutenFree" id="glutenFree" onChange={handleRestrictions} />
          <RestrictionText>Gluten-Free</RestrictionText>
        </Restriction>
        <Restriction>
          <input type="checkbox" name="dairyFree" id="dairyFree" onChange={handleRestrictions} />
          <RestrictionText>Dairy-Free</RestrictionText>
        </Restriction>
        <Restriction>
          <input type="checkbox" name="nutAllergies" id="nutAllergies" onChange={handleRestrictions} />
          <RestrictionText>Nut Allergies</RestrictionText>
        </Restriction>
        <Restriction>
          <input type="checkbox" name="shellfishAllergies" id="shellfishAllergies" onChange={handleRestrictions} />
          <RestrictionText>Shellfish Allergies</RestrictionText>
        </Restriction>
        <Restriction>
          <input type="checkbox" name="halal" id="halal" onChange={handleRestrictions} />
          <RestrictionText>Halal</RestrictionText>
        </Restriction>
        <Restriction>
          <input type="checkbox" name="kosher" id="kosher" onChange={handleRestrictions} />
          <RestrictionText>Kosher</RestrictionText>
        </Restriction>
      </RestrictionsWrapper>

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
`;
const GuestSection = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 100%;
  align-items: center;
`;
const Label = styled.label`
  font-weight: 600;
`;
const Label1 = styled(Label)`
  grid-column: 1;
  grid-row: 1;
`;
const Label2 = styled(Label)`
  grid-column: 1/ -1;
`
const Input = styled.input`
  border-radius: ${({ theme }) => theme.radii.sm};
  border: 1px groove rgba(0,0,0,0.2);
  padding: ${({ theme }) => theme.spacing.sm};
  grid-column: 1/ -1;
  grid-row: 2;
  accent-color: ${({ theme }) => theme.colors.accent};
`;
const GuestIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: ${({ theme }) => theme.spacing.sm};
  justify-self: end;
  grid-column: 2;
  grid-row: 1;
`;
const MinMaxWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  grid-column: 1/ -1;
`;
const RestrictionsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-basis: 50%;
  gap: ${({ theme }) => theme.spacing.md};
  justify-content: space-evenly;
`;
const Restriction = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  border-radius: ${({ theme }) => theme.radii.sm};
  padding: ${({ theme }) => theme.spacing.sm};
  background-color: rgba(0,0,0, 0.04);
  width: 45%;
`;
const RestrictionText = styled.span`
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fontSize.sm};
  line-height: ${({ theme }) => theme.spacing.md};
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

export default GuestCount;
