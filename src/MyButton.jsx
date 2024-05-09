import React from 'react';
import styled from 'styled-components';

// styled-components를 사용하여 버튼을 스타일링
const StyledButton = styled.button`
  background: var(--Main, #85D6D1);
  border: none;
  border-radius: 7px;
  width: 378px;
  height: 52px;
  padding: 17px 0px;
  display: flex;
justify-content: center;
align-items: center;
flex-shrink: 0;
  margin: 15px 0px;
`;

const MyButton = (props) => {
  return (
    <div className="ButtonTab">
    <StyledButton>{props.text}</StyledButton>
    </div>

  );
};

export default MyButton;