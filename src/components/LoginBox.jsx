import React from 'react'
import styled from 'styled-components'
import Input from './Input'
import Button from './Button'
import Checkbox from './Checkbox'

const LoginBox = () => {
  return (
    <MainBox>
        <Heading>Login</Heading>
            <Input type="text" placeholder="Enter Login ID" heading="Login ID"/>
            <Input type="password" placeholder="Enter Password" heading="Password"/>
        <CheckBox>
            <Checkbox msg="Remember me" />
            <Checkbox msg="Agree to Terms&Conditions" />
        </CheckBox>
        <ButtonContainer>
            <Button content="Login" />
        </ButtonContainer>
        <SmallHeading>Don't have an account? <span>Register Here.</span></SmallHeading>
    </MainBox>
  )
}

const MainBox = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-evenly;
    padding: 8%;
    width: 100%;
    background: rgba(123,45,67, 0.12);
    box-shadow: 0 8px 32px 0 rgba(128, 128, 128, 0.7);
    @media (max-width: 500px) {
        grid-row: 1; 
        height: 100vh;
        justify-content: space-between;
    }
`;

const Heading = styled.div`
    margin-bottom: 1rem;
    font-size: 2.5rem;
    font-weight: bolder;
`
const SmallHeading = styled.div`
    font-size: 14px;
    span{
        color: #78164e;
        font-weight: bold;
        text-decoration: underline;
        cursor: pointer;
    }
`

const ButtonContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const CheckBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    font-size: 12px;
`


export default LoginBox
