import React from 'react'
import MyImage from './mainDivHome/MyImage'
import WhoIam from './mainDivHome/WhoIam'
import NavbarComponent from '../../components/navbar/NavbarComponent'
import styled from 'styled-components'
const HomePage = () => {

  const MainDiv=styled.div`
  height: 500px;
  `
  const WhoIAmDiv=styled.div`
  height: 490px;
  display: flex;
  align-content: flex-end;
  align-items: flex-end;
  `
  const ImgDiv=styled.div`
  width: 50%;
  height: 490px;
  float: right;
  `
  return (
    <div>
        <NavbarComponent/>
          <MainDiv>
            <ImgDiv>
            <MyImage/> 
            </ImgDiv>
            <WhoIAmDiv>
           <WhoIam/>
            </WhoIAmDiv>
          
          </MainDiv>    
    </div>

  )
}

export default HomePage