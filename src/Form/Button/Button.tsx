import React from "react";
import styled from "styled-components";

const ButtonStyle = styled.button`
  cursor: pointer;
  z-index: 3;
  grid-row: 4;
  position: relative;
  width: 20%;
  height: 15%;
  margin-top: -6%;
  margin-bottom: 2%;
  border-radius: 10px;
  border: none;
  color: white;
  font-size: 24px;
  transition: all 0.5s ease;
  background: #242424;
  opacity: 1;

  &:hover {
    background: red;
  }
`;

export const Button: React.FC<{}> = () => {
    return (
        <ButtonStyle value={'Send'}>
            Send
        </ButtonStyle>
    );
};
