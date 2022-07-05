import React from 'react'
import Typical from 'react-typical'
import { SocialIcon } from 'react-social-icons';
import styled from 'styled-components'
import { Grid ,Box} from '@mui/material';
const WhoIam = () => {
  const WhoIamDiv=styled.div`
   margin-left: 0;
  margin-top: auto;
 margin-bottom: auto;
  text-align: left;
  vertical-align: middle;
  @media screen and (max-width:900px) {
     width: 100%;
     text-align: center;
     margin: 0;
  }

  `
  const WELCOME =styled.h4`
  margin-left: 60px;
  color: lightslategray;
   text-align: left;
   letter-spacing: 0.2px;
   @media screen and (max-width:900px) {
     width: 100%;
     margin-left: 90px;
     font-size: 20px;
     text-align: center;
  }
  `
  const FirstH1 =styled.h1`
  margin-left: 60px;
  color: white;
   text-align: left;
   font-size: 50px;
   letter-spacing: 0.2px;
   &:hover{
    transform: scale(1.2);
    transform-origin: 0%;
   }
   @media screen and (max-width:900px) {
     width: 100%;
     margin-left: 90px;
     font-size: 30px;
     text-align: center;
  }
  `
  const SecondtH1 =styled.h1`
  margin-left: 60px;
    color: red;
   text-align: center;
   font-weight: bold;
   letter-spacing: 0.2px;
   @media screen and (max-width:900px) {
     width: 100%;
     margin-left: 90px;
     font-size: 30px;
     text-align: center;
  }
  `
  const AnimatedDesc= styled(Typical)`
  color: white;
  margin-left: 60px;
  font-weight: bold;
  @media screen and (max-width:900px) {
     width: 100%;
     margin-left: 90px;
     font-size: 30px;
     text-align: center;
     
  }

  `
  const Linkedin =styled(SocialIcon)`
    margin-left: 60px;
    margin-top: 200px;
    @media screen and (max-width:900px) {
    
margin-left: 80px;
margin-right: auto;

  }
  @media screen and (max-width:400px) {
  
  visibility: collapse;
}
  `
  const Github =styled(SocialIcon)`
  margin-left: 30px;
  margin-top: 200px;
  @media screen and (max-width:900px) {
  
    margin-left: 30px;
margin-right: auto;
   }
   @media screen and (max-width:400px) {
  
        visibility: collapse;
 }

`
  return (

<WhoIamDiv>
 <WELCOME>WELCOME TO MY WORLD</WELCOME>
  <FirstH1>Hi , I Am Niv Ben Aviv.</FirstH1>
  <SecondtH1>I Am,</SecondtH1>
  <AnimatedDesc 
    steps={['Full Stack Developer 👨‍💻', 1000, '.NET Developer 👨‍💻', 1000, 'React Developer 👨‍💻',1000,'Backend Developer 👨‍💻',1000]}
    loop={Infinity}
    wrapper="h2"
     />
    <Grid
     container  
  alignItems="center"
  justifyContent="center"
     >
     <Box 
  alignItems="center"
  justifyContent="center"
  container item  xs={6} md={6}  >
<Linkedin bgColor="white" url="https://www.linkedin.com/in/niv-ben-aviv-b37b871b4/" />

  </Box>
  <Box 
  alignItems="center"
  justifyContent="center"
  container item  xs={6} md={6} lg={6}  >
<Github bgColor="white" url="https://github.com/Nivben190?tab=repositories" />

  </Box>

     </Grid>

</WhoIamDiv>
  )
}

export default WhoIam