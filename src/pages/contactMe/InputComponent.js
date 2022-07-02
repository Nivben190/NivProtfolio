import React from 'react'
import styled from 'styled-components'

const InputComponent = (props) => {
    const ConatactInput=styled.input`
    width: 40%;
    background: transparent;
    border: 1px solid gray;
    font-size: 16px;
    font-weight: 400;
    text-align: left;
    color: white;
    border-radius: 5px;
    margin-top: 30px;
    height: 50px;
    margin-left: 150px;
    @media screen and (max-width:900px) {
      text-align: left;
      width: 95%;
      margin-left: 0;


    }
    `
  return (
<ConatactInput name={props.name} placeholder={props.placeholder} value={props.value}

></ConatactInput>
  )
}

export default InputComponent