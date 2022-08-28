import styled from "styled-components";
import Input from "./Input/Input";
import Card from "../Card/Card";
import Label from "./Label/Label";

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
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;

`
const FieldInput = styled.div`
    width: 55.5%;
    display: flex;
    flex-direction: column;
    height: 100px;
`



const Form = () => {
    return <FormStyled>
        <Card/>
        <WrapperBlockInputs>
            <FieldInput>
                <Label text={'Номер карты'}/>
                <Input type={"text"} width={'100%'}/>
            </FieldInput>
            <div style={{display:"flex", height:'100px', justifyContent:'space-between', width:"55%"}}>
                <FieldInput>
                    <Label text={'Срок'} />
                    <Input type={"text"} width={'60%'}/>
                </FieldInput>
                <FieldInput>
                    <Label text={'CVC'}/>
                    <Input type={'text'} width={'60%'}/>
                </FieldInput>
            </div>
            <FieldInput>
                <Label text={"Владелец карты"} />
                <Input type={"text"} width={'100%'}/>
            </FieldInput>
        </WrapperBlockInputs>
    </FormStyled>
}

export default Form;
