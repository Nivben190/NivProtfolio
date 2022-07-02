import React from 'react'
import { Card } from 'react-bootstrap'
import styled from 'styled-components'
import ButtonComponent from '../aboutMe/ButtonComponent'
const ProjectCard = (props) => {
    const Btn=styled.button`
    background-color:transparent;
  color: white;
  font-size: 20px;
  height: 50px;
  padding: 5px 20px;
  border: 2px solid white;
  border-radius: 9px;
  transition: background 1s;
  margin-left: 100px;
  margin-top: 50px;
   cursor: pointer;
  &:hover{
    background-color:#f9004d;
    color: white;
  }
    `
    const ProjectCard=styled(Card)`
    height: 500px;
    width: 400px;
    background-image: url(${props.src});
    background-size: cover;
    background-position: center;
    margin-left: 35px;
     margin-top: 50px;

   
    `
    const ProjectCardHead=styled.h3`
    color: white;
    margin-top: 200px;
    text-align: center;
    font-weight: 500;
    `
    const ProjectCardDesc=styled.h4`
    color: white;
    margin-top: 50px;
    text-align: center;
    font-weight: bold;
    `
  return (
    <ProjectCard >
        <Card.Body>
           <ProjectCardHead>{props.header}</ProjectCardHead>
           <ProjectCardDesc>{props.desc}</ProjectCardDesc>
           <a href={`${props.href}`} target="_blank" rel="noreferrer">
           <Btn >{"View Project"}</Btn>
        </a>
        </Card.Body>
    </ProjectCard>
   
  )
}

export default ProjectCard