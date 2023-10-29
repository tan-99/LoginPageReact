import React from 'react'
import styled from 'styled-components'
import { FaEye, FaEyeSlash } from 'react-icons/fa'; 

const Input = ({ type, placeholder, heading }) => {
    const [showPassword, setShowPassword] = React.useState(false);
  
    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
  };

  return (
    <StyledContainer>
        <StyledLabel>{heading}</StyledLabel>
        <StyledInputContainer>
          <StyledInput type={showPassword ? 'text' : type} placeholder={placeholder} />
          {type === 'password' && (
              <TogglePasswordVisibilityButton onClick={togglePasswordVisibility}>
              {showPassword ? <FaEyeSlash /> : <FaEye />}
              </TogglePasswordVisibilityButton>
          )}
        </StyledInputContainer>
        {type === 'password' && (
            <ChangePasswordLink href="#">Change Password</ChangePasswordLink>
        )}
    </StyledContainer>
  )
}

const StyledInput = styled.input`
    border-radius: 0.3rem;
    width: 100%;
    height: 2.7rem;
    padding: 1rem;
    border-color: #df5185;
`
const StyledLabel = styled.p`
    font-size: 1rem;
    font-weight: bold;
`
const StyledContainer = styled.div`
    width: 100%;
`

const StyledInputContainer = styled.div`
  position: relative;
`;

const TogglePasswordVisibilityButton = styled.button`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  cursor: pointer;
`;

const ChangePasswordLink = styled.a`
  display: block;
  text-align: right;
  font-weight: bold;
  font-size: 0.7rem;
  text-decoration: none;
  color: #78164e;
  cursor: pointer;
  margin-top: 5px;
`;


export default Input