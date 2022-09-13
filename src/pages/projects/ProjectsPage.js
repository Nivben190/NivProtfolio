import React from 'react'
import {Grid,Box} from '@mui/material'
import ProjectCard from './ProjectCard'
import styled from 'styled-components'
const ProjectsPage = () => {
    const PageHeader=styled.h1`
    color: white;
    padding-top: 80px;
    font-weight:bold;
    font-size: 60px;
    text-align: center;
    margin-bottom: 20px;
    margin-top: 80px;
    `
     const PageP=styled.p`
     color: gray;
     font-weight:bold;
     text-align: center;
     margin-bottom: 20px;
     margin-top: 20px;
     `
  return (
    <div id='Projects' style={{"background":"#191919","marginTop":"200px","height":"600px"}}>
    <PageHeader>My Latest Projects</PageHeader>
    <PageP>See full projects cases on GitHub<br></br>

Any interests on collaborathing ?<br></br>

Just drop me a line !</PageP>
<Grid
     container  
  alignItems="center"
  justifyContent="center"
     >
 <Box 
  alignItems="center"
  justifyContent="center"
  container item  xs={6} md={6} lg={4} >
    <ProjectCard
       href="https://github.com/InbalBu/EcommerceApp"
         src="https://static.doofinder.com/main-files/uploads/2020/05/gestion-tienda-fisica-y-online.jpg"
         header="EcommerceApp"
         desc="EcommerceApp With React, Mongo , Node.js And Sanity CMS"
     />
  </Box>
  <Box 
  alignItems="center"
  justifyContent="center"
  container item xs={6} md={6} lg={4}  >
    <ProjectCard
           href="https://github.com/Nivben190/Reacipes-Website-"
    src="https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2018/12/Shakshuka-19.jpg"
         header="Recipe Website"
         desc="My Own Recipe Website, with designed home page, Api - spoonacular, Frontend: React"
     />
  </Box>
  <Box 
  alignItems="center"
  justifyContent="center"
  container item xs={6} md={6} lg={4} >
    <ProjectCard
           href="https://github.com/Nivben190/MemoriesApp"
     src="https://t4.ftcdn.net/jpg/02/85/56/59/360_F_285565962_BBU1kR0YcSvhfq52rfs2aIi4dqG26zc7.jpg"
         header="Memories App"
         desc="Front to Back With MERN Stack-Memories App"
     />
  </Box>
     </Grid>
    </div>
    
  )
}

export default ProjectsPage
