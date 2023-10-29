import React from 'react'
import LoginBox from './components/LoginBox'
import LoginImg from './components/LoginImg'
import styled from 'styled-components'

const App = () => {
  return (
    <MasterDiv>
      <ImgContainer>
        <LoginImg />
      </ImgContainer>
        <LoginBox />
    </MasterDiv>
  )
}

const ImgContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`

const MasterDiv = styled.div`
  display: grid;
  grid-template-columns: 0.7fr 1fr;
  height: 100vh;

  @media (max-width: 500px) {
    grid-template-columns: 1fr; 
    grid-template-rows: 1fr 1fr;
  }
`

export default App
