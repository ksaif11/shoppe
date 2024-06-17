import React, { useState } from 'react';
import styled from 'styled-components';
import TextInput from '../components/TextInput';
const Container = styled.div`
  text-align: center;
  padding: 20px;
`;

const Title = styled.h1`
  color: #282c34;
`;

const Description = styled.p`
  font-size: 18px;
  color: #666;
`;

const Form = styled.form`
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 400px;
`;

const FormGroup = styled.div`
  margin-bottom: 10px;
  width: 100%;
`;

const Label = styled.label`
  margin-right: 10px;
  font-weight: bold;
`;


const Textarea = styled.textarea`
  padding: 5px;
  font-size: 16px;
  width: 100%;
  box-sizing: border-box;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: red;
  border: none;
  cursor: pointer;
  margin-top: 10px;

  &:hover {
    background-color: #21a1f1;
  }
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('https://formsubmit.co/3804fc2acb855d2d3e75a4d25e9a155a', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });

    if (response.ok) {
      alert('Form submitted successfully');
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    } else {
      alert('Failed to submit form');
    }
  };

  return (
    <Container>
      <Title>Contact Us</Title>
      <Description>Your feedback matters to us! Whether you have a suggestion to share, a complaint to raise, or simply want to get in touch, we're here for you.
      each out to our customer support team via email. . We value your input and strive to address any concerns promptly to enhance your shopping experience with us.</Description>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="name">Name:</Label>
          <TextInput
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="email">Email:</Label>
          <TextInput
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="message">Message:</Label>
          <Textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
        </FormGroup>
        <Button type="submit">Submit</Button>
      </Form>
    </Container>
  );
};

export default Contact;
