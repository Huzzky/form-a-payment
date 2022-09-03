import styled from "styled-components";
import Card from "../Card/Card";
import React from "react";
import Input from "./Input/Input";

const FormStyled = styled.form`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  grid-template-columns: 1fr;
  justify-items: center;
  z-index: 2;
  width: 46%;
  height: 57%;
  background: #ffffff;
  box-shadow: 0 2px 20px 1px rgba(0, 0, 0, 0.25);
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



const Form = () => {
  return (
    <FormStyled>
      <Card />
      <WrapperBlockInputs>
        <FieldInput>
          <Input width={"100%"} model={"numberCard"} />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Input width={'30%'} model={'date'}/>
            <Input width={'30%'} model={'cvc'}/>
          </div>
          <Input width={'100%'} model={'name'}/>
        </FieldInput>
      </WrapperBlockInputs>
    </FormStyled>
  );
};

export default Form;
