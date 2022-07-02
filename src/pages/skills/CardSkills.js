import React from 'react'
import { Card } from 'react-bootstrap'
import { propTypes } from 'react-bootstrap/esm/Image'
import styled from 'styled-components'

const CardSkills = (props) => {
     const SkillCard=styled(Card)`
            width: 350px;
            height: 350px;
            border-radius: 10px;
            transition:background 0.2s ease-in;
            background-color: #191919;
              margin-left: 35px;
              margin-top: 50px;
            &:hover{
                background-color: rgba(196, 77, 86, 0.67);
            }
     `
     const CardHead=styled.h4`
     color: white;
     text-align: left;
     margin-left: 20px;
     margin-top: 20px;
     font-weight: bold;
     `
        const CardSkill=styled.h6`
        color: whitesmoke;
        text-align: left;
        margin-left: 20px;
        margin-top: 20px;
        font-weight: bolder;
        `
        const Icon=styled(props.icon)`
         
          &.override{
              margin-left: 30px;   
              margin-top : 30px;
            font-size: 60px;
        }
        color: white;        
        `
       
       
  return (
   <SkillCard>
    <Card.Body>
    <Icon className={'override'} ></Icon>
        <CardHead>{props.head}</CardHead>
        {Array.from(props.items).map((item,index)=>
        { 
          return<CardSkill key={index}
          >{item}</CardSkill>
           
        })}
       

          </Card.Body>
   </SkillCard>
  )
}

export default CardSkills