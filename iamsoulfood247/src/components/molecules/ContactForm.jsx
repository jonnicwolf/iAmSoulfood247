import { useState, useRef } from 'react';
import styled from "styled-components";

import Text from '../common/Text';
import Input from '../common/Input';

import { sendEmail } from '../../utils/sendEmail';

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

  const clearForm = () => {
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      message: ''
    })
  };

  return (
    <Form ref={form} onSubmit={(e) => {
        sendEmail(e,form, 'template_2dbzpp9');
        clearForm();
      }}>
      <Text content="CONTACT US" textSize="xxxl" center />
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
  height: auto;

  @media (max-width: 768px) {
    gap: 1rem;
    width: 90vw;
  }
`;

const TextArea = styled.textarea`
  height: 10rem;
  font-size: ${({ theme }) => theme.fontSize.md};
  padding: 1rem;
  width: 100%;
`;
