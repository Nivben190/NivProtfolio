import React from 'react'
import Container from 'react-bootstrap/Container';
import CVBtn from './CVBtn'
import styled from 'styled-components'
import ButtonComponent from './ButtonComponent'
import { PropaneSharp } from '@mui/icons-material';
const AboutMePage = (props) => {

    const Wrapper=styled(Container)`
       width:40%;
     margin-top: 300px;
     height: fit-content;
     margin-left: auto;
     margin-right: auto;
     @media screen and (max-width:900px){
        width:85%;
     }
    `
const AboutMe=styled.h1`
color: white;
font-size: 70px;
font-weight: bold;
text-align: left;
@media screen and (max-width:900px){
    text-align: center;
    font-size:50px;
     }
`

const AboutMeP=styled.p`
color: gray;
@media screen and (max-width:900px){
    font-size: 15px;
     }
letter-spacing: 0.1rem;
line-break:auto;
text-align: left;
margin-bottom:7px;
font-size: larger;

`

  return (
    <div id='aboutMePage'>
<Wrapper>
        <AboutMe>About Me</AboutMe>
        <AboutMeP>i’m Niv ,a passionate full-stack developer.</AboutMeP>
        <AboutMeP>
        Since I was a little kid  , I’ve always loved computers , and I started programming in high school at robotics trend .
        </AboutMeP>
        <AboutMeP>After high school , I Join the militry to the nahal brigade and served as a soldier for 3.2 years.
         After the militry  I followed my dreams and studied software engineering and development At Sela College .</AboutMeP>
        <AboutMeP>Finally , I could use my logical side to code and my creative side to design .</AboutMeP>
        <AboutMeP>These days my time is spent coding , designing , learning and researching .Out of the office you’ll find me playing Basketball , Playing with my dog , and listening to a lot of music</AboutMeP>

        <CVBtn
            txt="Look At My  Resume"
        />
        <a href="https://wa.link/35vlg3"><ButtonComponent
             txt="  Contact Me"
        /></a>

        
    </Wrapper>
    </div>
    
  )
}

export default AboutMePage