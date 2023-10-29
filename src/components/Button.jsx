import React from 'react'
import styled from 'styled-components'

const Button = ({content}) => {
  return (
    <StyledButton>
        {content}
    </StyledButton>
  )
}

const StyledButton = styled.button`
    background-color: #df5185;
    font-size: 1rem;
    color: white;
    padding: 10px;
    width: 70%;
    margin-top: 20px;
    border-color: #df5185;
    border-radius: 0.3rem;
    cursor: pointer;
`

export default Button