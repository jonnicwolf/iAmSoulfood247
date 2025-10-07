import { useState, useRef } from 'react';
import styled from "styled-components";

import Text from '../common/Text';
import Input from '../common/Input';

import { sendEmail } from '../../utils/sendEmail';
import { send } from 'emailjs-com';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: ''
  });
  const form = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    console.log(formData);
  };

  return (
    <Form ref={form} onSubmit={(e) => sendEmail(e,form)}>
      <Text content="CATERING INQUIRY" textSize="xxxl" center />
      <Input onChange={handleChange} placeholder="Full Name*" name='fullName' required />
      <Input onChange={handleChange} placeholder="Email*" name='email' required />
      <Input onChange={handleChange} placeholder="Phone*" name='phone' required />

      <TextArea onChange={handleChange} placeholder="Message" name='message' />

      <Input type='submit' value="Submit" />
    </Form>
  );
};

export default ContactForm;

const Form = styled.form`
  width: 50vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
`;

const TextArea = styled.textarea`
  height: 10rem;
  font-size: ${({ theme }) => theme.fontSize.md};
  padding: 1rem;
  width: 100%;
`;