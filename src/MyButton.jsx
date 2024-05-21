import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  background: #85D6D1;
  border: none;
  border-radius: 7px;
  width: 378px;
  height: 52px;
  padding: 17px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0px 10px 0px 550px;
`;

const MyButton = (props) => {
  return (
    <div className="buttontab">
    <StyledButton>{props.text}</StyledButton>
    </div>
  );
};

export default MyButton;