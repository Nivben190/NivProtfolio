import React from 'react'
import styled from 'styled-components'
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
    width: 80px;
    font-size: 13px;
    float: left;
    font-weight: bold;
  }
  
`;

  return (
    <a href="https://drive.google.com/file/d/1HOifURgBtB73dn4dUuMXNGuq481owSxH/preview"  download="NivBenAvivProtfolio.pdf"> <Button value={props.value} onClick={props.onClick}>{props.txt}</Button>

     </a>

  )
}

export default ButtonComponent