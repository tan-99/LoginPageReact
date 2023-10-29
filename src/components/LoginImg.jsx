import React from 'react'
import image from '../assets/loginSvg.svg'
import styled from 'styled-components'

const LoginImg = () => {
  return (
    <ImgBox />
  )
}

const ImgBox = styled.div`
    background-image: url(${image});
    background-size: contain;
    background-position: center; 
    background-repeat: no-repeat;
    width: 100%;
    height: 70vh;
    padding: 10%;
    transition: height 0.5s ease;
    @media (max-width: 840px) {
      height: 60vh; 
    }
    @media (max-width: 760px) {
      height: 55vh; 
      margin: 0 auto;
    }
    @media (max-width: 500px) {
      display: none;
    }

`

export default LoginImg

