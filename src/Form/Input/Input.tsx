import styled from "styled-components";
import React, {useState} from "react";



interface InputProps {
	type: string
	width: string
	model: string
}

const date = new Date()



const InputStyled = styled.input`
	width: ${props => props.width};
  	background: #F3F3F3;
  	box-shadow: 0px 2px 7px rgba(0, 0, 0, 0.25);
  	border-radius: 5px;
  	border: none;
  	height: 50px;
  	font-size: 28px;
  	color: #434343;
	padding-left: 0.4em;
`

const Input:React.FC <InputProps> = ({type, width, model}) => {
	const [InputValue, setInput] = useState({
		numberCard: '',
		date: '',
		cvc: '',
		nameOfCard: '',
	})
	
	const changeState = (value:any) => {
		// @ts-ignore
		setInput({...InputValue, value})
	}
	
	return <InputStyled onChange={e => changeState({numberCard: e.currentTarget.value})} value={InputValue.numberCard} type={type} width={width}/>
}

export default Input;
