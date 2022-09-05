import styled from "styled-components";
import Card from "../Card/Card";
import React, { useState } from "react";
import Input from "./Input/Input";
import { Button } from "./Button/Button";

const FormStyled = styled.form`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  grid-template-columns: 1fr;
  justify-items: center;
  z-index: 2;
  width: 46%;
  height: 57%;
  background: #ffffff;
  box-shadow: 0 2px 20px 1px rgba(0, 0, 0, 0.2);
  //box-shadow: 0 2px 125px 1px rgba(255, 0, 0, 0.8);
  //box-shadow: 0 2px 125px 1px rgba(0, 175, 0, 0.8);
  border-radius: 25px;

  @media (max-width: 1024px) {
    width: 70%;
  }
  @media (max-width: 700px) {
    height: 65%;
  }
  @media (max-width: 550px) {
    width: 80%;
    height: 70%;
    margin-top: 4em;
  }
`;

const WrapperBlockInputs = styled.div`
  grid-row: 2 / 5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  margin-top: -0.5em;
  padding-right: 0.6em;
`;
const FieldInput = styled.div`
  width: 55.5%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin-top: 2em;
  margin-bottom: 2em;
`;

const Wrapper2Input = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const Form = () => {
  const [formState, setFormState] = useState({
    numberCard: "",
    date: "",
    cvc: "",
    name: "",
  });

  const setFormStateFunc = (value: object) => {
    setFormState({ ...formState, ...value });
  };
  return (
    <FormStyled>
      <Card />
      <WrapperBlockInputs>
        <FieldInput>
          <Input
            width={"100%"}
            model={"numberCard"}
            setValueForm={setFormStateFunc}
          />
          <Wrapper2Input>
            <Input
              width={"30%"}
              model={"date"}
              setValueForm={setFormStateFunc}
            />
            <Input
              width={"30%"}
              model={"cvc"}
              setValueForm={setFormStateFunc}
            />
          </Wrapper2Input>
          <Input
            width={"100%"}
            model={"name"}
            setValueForm={setFormStateFunc}
          />
        </FieldInput>
        <Button />
      </WrapperBlockInputs>
    </FormStyled>
  );
};

export default Form;
