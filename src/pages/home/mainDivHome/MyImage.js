import React from 'react'
import niv from './niv.jpeg'
import styled from 'styled-components'
const MyImage = () => {
    const ImgStyles = styled.img`
    width: 80%;
   height: 500px;
   display: flex;
   margin-left: auto;
   margin-right: 100px;
   border-radius: 50%;
   @media screen  and (max-width:900px)
   {
      visibility: collapse;
      
   }
`
  return (
     <ImgStyles src={niv} />
   )
  
}

export default MyImage