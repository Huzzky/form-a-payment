import styled from "styled-components";
import React from "react";
import {IMask, IMaskMixin} from 'react-imask';


interface InputProps {
    type: string
    width: string
    model: string
}

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
  margin-right: -0.4em;
`

const MaskedStyledInput = IMaskMixin(({...props}) => (
    <InputStyled
        width={props.width}
        ref={props.inputRef}
        placeholder={props.placeholder}
        // onChange={(e)=> {console.log(e.currentTarget.value)} }

    />
));

const Input: React.FC<InputProps> = ({type, width, model}) => {
    
    const maskSwitch = (model: string) => {
        switch (model) {
            case 'numberCard':
                return "0000 0000 0000 0000"
            case 'date':
                return "MM / YY"
            case 'cvc':
                return '0000'
            case 'name':
                return /^[A-Z .]{1,20}$/
            default:
                return ''
        }
    }
    
    const placeholderSwitch = (model: string) => {
        switch (model) {
            case 'numberCard':
                return "Card Number"
            case 'date':
                return "MM / YY"
            case 'cvc':
                return 'CVC / CVV'
            case 'name':
                return 'IVAN IVANOV'
            default:
                return ''
        }
    }
    const date: any = new Date()
    const dateLast2Number:string = date.getFullYear().toString().substr(2, 4)
    // @ts-ignore
    return <MaskedStyledInput
        width={width}
        mask={maskSwitch(model)}
        placeholder={placeholderSwitch(model)}
        prepare={
            function (str: string) {
                return str.toUpperCase();
            }
        }
        blocks={{
        	YY: {
                mask: IMask.MaskedRange,
                from: +dateLast2Number,
                to: +dateLast2Number + 15,
        	},
        	MM: {
        		mask: IMask.MaskedRange,
        		from: 1,
        		to: 12
        	}
        }}
    />
}


export default Input;
