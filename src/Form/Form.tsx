import styled from "styled-components";
import Input from "./Input/Input";
import Card from "../Card/Card";
import Label from "./Label/Label";
import {IMask, IMaskInput} from "react-imask";

const FormStyled = styled.form`
    display: grid;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    grid-template-columns: 1fr;
    justify-items: center;
    z-index: 2;
    width: 46%;
    height: 57%;
    background: #FFFFFF;
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
`

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

`
const FieldInput = styled.div`
    width: 55.5%;
    display: flex;
    flex-direction: column;
    height: 100px;
    justify-content: space-around;
    margin-top: 0.5em;
`



const Form = () => {
    return <FormStyled>
        <Card/>
        <WrapperBlockInputs>
            <FieldInput>
                <Label text={'Номер карты'}/>
                <Input type={"text"} width={'100%'} model={'number card'}/>
            </FieldInput>
            <div style={{display:"flex" ,height:'100px', width:"55%", paddingBottom: '1em', paddingTop: '0.5em'}}>
                <FieldInput>
                    <Label text={'Срок'} />
                    <Input type={"text"} width={'60%'} model={'date'}/>
                </FieldInput>
                <FieldInput>
                    <Label text={'CVC'}/>
                    <Input type={'text'} width={'60%'} model={'cvc'}/>
                </FieldInput>
            </div>
            <FieldInput>
                <Label text={"Владелец карты"} />
                <Input type={"text"} width={'100%'} model={'name'}/>
            </FieldInput>
            <IMaskInput placeholder="Date"
                        mask={"MM/YY"}
                        blocks={{
                            YY: {
                                mask: "00"
                            },
                            MM: {
                                mask: IMask.MaskedRange,
                                from: 1,
                                to: 12
                            }
                        }}
                         />
        </WrapperBlockInputs>
    </FormStyled>
}

export default Form;
