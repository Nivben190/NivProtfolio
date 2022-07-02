import React from 'react'
import styled from 'styled-components'
import InputComponent from './InputComponent'
import Message from './Message'
import Typical from 'react-typical'
import Btn from './Btn'
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import { Container } from '@mui/system'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
const ContactMePage = () => {
    const WhatsApp=styled(WhatsAppIcon)`   
          &.override{
              margin-left: 20px;   
            font-size: 30px;
        }
        color: green;        
        `
    const FormConatct=styled.form`
    margin-top: 150px;
    @media screen and (max-width:900px) {
      margin-top: 1750px;
      text-align: left;

    }
    `
    const ContactDiv=styled(Container)`
margin-top: 300px;
height: 600px;
    `
    const Header= styled.h1`
    color: white;
    text-align: left;
    margin-left: 150px;
    font-size: 60px;
    @media screen and (max-width:900px) {
      text-align: left;
      margin-left: 0;


    }
    `
    const Desc= styled.p`
    color: white;
    font-weight: bold;
    text-align: left;
    font-size: 18px;
    margin-left: 150px;
    @media screen and (max-width:900px) {
      text-align: left;
      margin-left: 0;


    }
    `
  const form = useRef();

const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm('gmail', 'tamplete', form.current, 'qqSNT_ItlTsDj85RC')
  .then((result) => {
      console.log(result.text);
  }, (error) => {
      console.log(error.text);
  });
  e.target.reset();

  };

  return (
    <ContactDiv>
        <FormConatct id="contact-form" ref={form} onSubmit={sendEmail}>
        <Header>Contact me .</Header>
      <Desc>I'm available to work full-time . Contact me :</Desc>
      <Desc>My Number Is,
      <Typical
        steps={['0548678455', 3000, `Call Me !`, 1000]}
        loop={Infinity}
        wrapper="p"
      />
  </Desc>
      <Desc>Email : nivniv66@gmail.com</Desc>
        <InputComponent name="name" placeholder="Your Name*" ></InputComponent>
        <br></br>
         <InputComponent name="email" placeholder="Your Email*"  ></InputComponent>
         <br></br>
         <InputComponent name="subject" placeholder="Write a Subject*" ></InputComponent>
         <br></br>
        <Message name="message" message= "Write Your Email:"></Message>
        <br/>
         <Btn></Btn>
        </FormConatct>
        
    </ContactDiv>
  )
}

export default ContactMePage