import styled from "styled-components";
import Form from "./Form/Form";
import Card from "./Card/Card";

const BlockFormStyle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 0;
    height: 100%;
    width: 100%;
`

const DivWrapperForm = styled.div`
    z-index: 1;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

function App() {
  return (
      <BlockFormStyle>
          <DivWrapperForm>
              <Form/>
          </DivWrapperForm>
      </BlockFormStyle>
  );
}

export default App;
