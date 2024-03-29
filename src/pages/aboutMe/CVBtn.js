import React from 'react'
import styled from 'styled-components'
import pdf from '../../Niv_Ben Aviv_Resume..pdf'
const ButtonComponent = (props) => {
    const Button = styled.button`
  background-color:#f9004d;
  color: white;
  font-size: 20px;
  height: 50px;
  padding: 5px 20px;
  border: 2px solid #f9004d;
  border-radius: 9px;
  transition: background 1s;
 margin: 20px 15px;
  cursor: pointer;
  &:hover{
    background-color:white;
    color: black;
  }
  @media screen and (max-width:900px)
   {
    width: 130px;
    font-size: 13px;
    float: left;
    font-weight: bold;
  }
  
`;

  return (
    <a href={pdf}  download="NivBenAvivProtfolio.pdf"> <Button value={props.value} onClick={props.onClick}>{props.txt}</Button>

     </a>

  )
}

export default ButtonComponent