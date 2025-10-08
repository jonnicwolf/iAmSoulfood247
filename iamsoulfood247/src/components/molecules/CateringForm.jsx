import { useState, useRef } from "react";
import styled from "styled-components";

import Text from "../common/Text";
import Input from "../common/Input";
import Checkbox from "../common/Checkbox";
import { sendEmail } from "../../utils/sendEmail";

const CateringForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    contact: '',
    company: '',
    eventDate: '',
    eventNature: '',
    service: '',
    startTime: '',
    endTime: '',
    numberOfGuests: '',
    eventAddress: '',
    additionalInfo: ''
  });
  const form = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const clearForm = () => {
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      contact: '',
      company: '',
      eventDate: '',
      eventNature: '',
      service: '',
      startTime: '',
      endTime: '',
      numberOfGuests: '',
      eventAddress: '',
      additionalInfo: ''
    })
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;

    if (checked) setFormData((prev) => ({ ...prev, contact: name }))
    else setFormData((prev) => ({ ...prev, contact: '' }));
  };

  return (
    <Form ref={form} onSubmit={(e)=>{
        sendEmail(e, form);
        clearForm();
      }}>
      <Text content="CATERING INQUIRY" textSize="xxxl" />
      <Input onChange={handleChange} placeholder="Full Name*" name='fullName' required />
      <Input onChange={handleChange} placeholder="Email*" name='email' required />
      <Input onChange={handleChange} placeholder="Phone*" name='phone' required />

      <CheckboxContainer>
        <Text content="How would you prefer to be contacted?" textSize="lg" />
        <Checkbox
          onChange={handleCheckboxChange}
          checked={formData.contact === 'contact_phone'}
          label="Phone"
          name="contact_phone" />
        <Checkbox
          onChange={handleCheckboxChange}
          checked={formData.contact === 'contact_email'}
          label="Email"
          name="contact_email" />
        <Checkbox
          onChange={handleCheckboxChange}
          checked={formData.contact === 'contact_text'}
          label="Text"
          name="contact_text" />
      </CheckboxContainer>

      <Input onChange={handleChange} placeholder="Company*" type='text' name='company' required />
      <Input onChange={handleChange} label='Event Date*' type='date' name='eventDate' required />
      <Input onChange={handleChange} placeholder="Nature of this event* (Birthday Party, or Business Dinner)" type='text' name='eventNature' required />

      <SelectContainer>
        <Text content="Type of Service*" textSize="md" />
        <Select onChange={handleChange} name="service_type" required>
          <option value="" disabled selected>Select an option</option>
          <option value="Pick Up">Pick Up</option>
          <option value="Drop Off">Drop Off</option>
          <option value="Full Service">Full Service</option>
        </Select>
      </SelectContainer>
      <TimeContainer>
        <Input onChange={handleChange} label='Start Time*' type='time' name='startTime' />
        <Input onChange={handleChange} label='End Time*' type='time' name='endTime' />
      </TimeContainer>

      <Input onChange={handleChange} label='Number of guests*' placeholder="Number of Guests*" type='number' name='numberOfGuests' required />
      <Input onChange={handleChange} placeholder="Event Address*" type='text' name='eventAddress' required />
      <TextArea onChange={handleChange} placeholder="Is there any additional information you would like to add?" name='additionalInfo' />

      <Input type='submit' value="Submit" />
    </Form>
  );
};

export default CateringForm;

const Form = styled.form`
  width: 50vw;
  display: flex;
  flex-direction: column; 
  gap: 3rem;
`;

const TimeContainer = styled.div`
  align-items: flex-start;
  flex-direction: column;
  display: flex;
  gap: 1rem;
  width: 20%
`;

const CheckboxContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  font-weight: 700;
`;

const SelectContainer = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Select = styled.select`
  padding: 0.75rem 1rem;
  font-size: ${({ theme }) => theme.fontSize.md};
  border-radius: ${({ theme }) => theme.radii.md};
  border: 1px solid ${({ theme }) => theme.colors.border};
  background-color: ${({ theme }) => theme.colors.surface};
`;

const TextArea = styled.textarea`
  height: 10rem;
  font-size: ${({ theme }) => theme.fontSize.md};
  padding: 1rem;
`;
