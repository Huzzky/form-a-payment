import styled from "styled-components";
import Input from "./Input/Input";
import Card from "../Card/Card";

const FormStyled = styled.form`
    display: grid;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    grid-template-columns: 1fr;
    justify-items: center;
    z-index: 2;
    width: 46%;
    height: 57%;
    background: #FFFFFF;
    box-shadow: 0px 2px 20px 1px rgba(0, 0, 0, 0.25);
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
`

const WrapperBlockInputs = styled.div`
    grid-row: 2 / 5;
    display: flex;
    flex-direction: column;
    justify-center: center;
    align-items: center;
`
const FieldInput = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: left;
`

const Form = () => {
    return <FormStyled>
        <Card/>
        <WrapperBlockInputs>
            <FieldInput>
                <label>Номер карты</label>
                <Input/>
            </FieldInput>
            <div style={{display:"flex"}}>
                <FieldInput>
                    <label>Срок</label>
                    <Input/>
                </FieldInput>
                <FieldInput>
                    <label>CVC</label>
                    <Input/>
                </FieldInput>
            </div>
            <FieldInput>
                <label>Владелец карты</label>
                <Input/>
            </FieldInput>
        </WrapperBlockInputs>
    </FormStyled>
}

export default Form;
