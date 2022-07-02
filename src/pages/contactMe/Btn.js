import React from 'react'
import styled from 'styled-components'

const Btn = (props) => {
    const Btn=styled.button`
     background-color:#f9004d;
  color: white;
  font-size: 20px;
  height: 60px;
  padding: 5px 20px;
  width: 200px;
  border: 2px solid #f9004d;
  border-radius: 9px;
 margin-left: 150px;
 margin-top: 15px;
  cursor: pointer;
  &:hover{
    background-color:white;
    color: black;
  }
  @media screen and (max-width:900px) {
      text-align: center;
      height: 50px;
      width: 40%;
      margin-left: 0;


    }
    `
  return (
    <Btn type='Submit' onClick={props.onClick}>Submit</Btn>
  )
}

export default Btn