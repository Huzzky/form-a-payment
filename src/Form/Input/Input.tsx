import styled from "styled-components";
import React from "react";



interface InputProps {
	type: string
	width: string
}

const InputStyled = styled.input`
	width: ${props => props.width};
  	background: #F3F3F3;
  	box-shadow: 0px 2px 7px rgba(0, 0, 0, 0.25);
  	border-radius: 5px;
  	border: none;
  	height: 50px;
`

const Input:React.FC <InputProps> = ({type, width}) => {
	return <InputStyled type={type} width={width}/>
}

export default Input;
