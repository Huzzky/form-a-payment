import styled from "styled-components";
import React from "react";



interface LabelProps {
	text: string

}

const LabelStyled = styled.label`
  font-size: 30px;
  color: #434343;
  font-weight: 400;
  height: 36px;
  padding-bottom: 0.2em;
  
`

const Label:React.FC <LabelProps> = ({text}) => {
	return <LabelStyled>{text}</LabelStyled>
}

export default Label;
