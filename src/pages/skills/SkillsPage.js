import React from 'react'
import Grid from '@mui/material/Grid';
import CardSkills from './CardSkills'
import Box from "@material-ui/core/Box";
import styled from 'styled-components';
import StorageIcon from '@mui/icons-material/Storage';
import ConnectedTvOutlinedIcon from '@mui/icons-material/ConnectedTvOutlined';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import ComputerOutlinedIcon from '@mui/icons-material/ComputerOutlined';
const SkillsPage = () => {
    const SkillsHeader=styled.h1`
    color:white;
    margin-top: 200px;
    text-align: center;
    font-weight: bold;
    text-transform: capitalize;
    font-size: 70px;
    
    `
    const SkillsP=styled.h2`
    color:gray;
    margin-top: 10px;
    text-align: center;
    font-weight: bold;
    text-transform: capitalize;
    font-size: 20px;
    
    `

    
  return (
    <div id='skillsPage'>
    <SkillsHeader >Skills</SkillsHeader>
<SkillsP>I enjoy turning complex problems into simple and beautiful code .</SkillsP>
<Grid
     container  
  alignItems="center"
  justifyContent="center"
     >
  <Box 
  alignItems="center"
  justifyContent="center"
  container item  xs={12} md={6} lg={4} >
    <CardSkills
    icon={ConnectedTvOutlinedIcon}
      items={["C#","Node.Js","Express Js"]}
         head="Server Side"
     />
  </Box>
  <Box 
  alignItems="center"
  justifyContent="center"
  container item xs={12} md={6} lg={4}  >
    <CardSkills
    icon={PeopleOutlinedIcon}
    items={["JAVASCRIPT+ES6","WPF","REACT","UWP"]}
     head="Client Side"
     />
  </Box>
  <Box 
  alignItems="center"
  justifyContent="center"
  container item xs={12} md={6} lg={4} >
    <CardSkills
    icon={ComputerOutlinedIcon}
    items={["HTML5","CSS","BOOTSTRAP","MATERIAl UI"]}
     head="Web Design"
     />
  </Box>
  <Box 
  alignItems="center"
  justifyContent="center"
  container item  xs={12} md={6} lg={4} >
    <CardSkills
    icon={StorageIcon}
    items={["Mongo DB","SQL SERVER"]}
     head="DataBases"
     />
  </Box>
  <Box 
  alignItems="center"
  justifyContent="center"
  container item xs={12} md={6} lg={4}  >
    <CardSkills
    icon={PeopleOutlinedIcon}
     head="Personal Skills" 
      items={["Teamwork","Problem Solving","Adaptability"]}
     />
  </Box>
  <Box 
  alignItems="center"
  justifyContent="center"
  container item xs={12} md={6} lg={4} >
    <CardSkills
    icon={PeopleOutlinedIcon}
    items={["MVVM Architecture","Object-oriented programming languages","Git"]}
     head="More"
      />
  </Box>
</Grid>
    </div>
    
  )
}

export default SkillsPage