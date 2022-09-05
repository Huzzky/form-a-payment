import styled from "styled-components";
import React, {ReactElement} from "react";
import { IMask, IMaskMixin } from "react-imask";

interface PropsStyle {
  widthInput: string;
}

const InputStyled = styled.input<PropsStyle>`
  width: ${(props) => props.widthInput};
  height: 50px;
  background: #f3f3f3;
  box-shadow: 0 2px 7px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  border: none;
  font-size: 28px;
  color: #434343;
  padding-left: 0.4em;
  margin-right: -0.4em;
`;

const MaskedInput = IMaskMixin(({ ...props }: any, set: Function) => {
  return (
    <InputStyled
      required
      ref={props.inputRef}
      widthInput={props.width}
      placeholder={props.placeholder}
      onChange={(e)=> set({})}
    />
  );
});

const Input = ({
  width,
  model,
  setValueForm,
}: {
  model: string;
  width: string;
  setValueForm: Function;
}) => {
  console.log(typeof setValueForm)
  const date: any = new Date();
  const dateLast2Number: string = date.getFullYear().toString().substr(2, 4);

  const maskSwitch = (model: string) => {
    switch (model) {
      case "numberCard":
        return "0000 0000 0000 0000";
      case "date":
        return "MM / YY";
      case "cvc":
        return "0000";
      case "name":
        return /^[A-Z .]{1,20}$/;
      default:
        return "";
    }
  };

  const placeholderSwitch = (model: string) => {
    switch (model) {
      case "numberCard":
        return "Card Number";
      case "date":
        return "MM / YY";
      case "cvc":
        return "CVC / CVV";
      case "name":
        return "IVAN IVANOV";
      default:
        return "";
    }
  };
  // @ts-ignore
  // Заглушка нужна для того, чтобы не ругался на Regexp
  return <MaskedInput
      set={setValueForm}
      width={width}
      mask={maskSwitch(model)}
      placeholder={placeholderSwitch(model)}
      prepare={function (str: string) {
        return str.toUpperCase();
      }}
      blocks={{
        YY: {
          mask: IMask.MaskedRange,
          from: +dateLast2Number,
          to: +dateLast2Number + 15,
        },
        MM: {
          mask: IMask.MaskedRange,
          from: 1,
          to: 12,
        },
      }}
    />
};

export default Input;
