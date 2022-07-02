import React from 'react'
import styled from 'styled-components'

const Message = (props) => {
    const Message=styled.textarea`
    width: 40%;
    height: 150px;
    background: transparent;
    text-align: left;
    margin-top: 30px;
    border: 1px solid gray;
    margin-left: 150px;
    color: white;
    border-radius: 5px;
    font-weight: 200;
    @media screen and (max-width:900px) {
      text-align: left;
      width: 95%;
      margin-left: 0;


    }
    `
  return (
    <Message name={props.name} placeholder={props.message}></Message>
  )
}

export default Message