import styled from "styled-components";

const FormStyled = styled.form`
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

const Form = () => {
    return <FormStyled>

    </FormStyled>
}

export default Form;
