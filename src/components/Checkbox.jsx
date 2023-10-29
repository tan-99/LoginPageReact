import React, { useState } from 'react';
import styled from 'styled-components';

const CheckboxContainer = styled.label`
  display: flex;
  align-items: center;
`;

const CheckboxLabel = styled.span`
  margin-left: 8px;
`;

const CheckboxInput = styled.input`
  margin: 0;
`;

const Checkbox = ({ msg }) => {
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  return (
    <CheckboxContainer>
      <CheckboxInput
        type="checkbox"
        checked={isChecked}
        onChange={toggleCheckbox}
      />
      <CheckboxLabel>{msg}</CheckboxLabel>
    </CheckboxContainer>
  );
};

export default Checkbox;
