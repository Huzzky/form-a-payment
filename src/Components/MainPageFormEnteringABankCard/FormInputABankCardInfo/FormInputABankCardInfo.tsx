import React, {FunctionComponent} from 'react';
import FieldOfNumberOfCard from "../FieldsForm/FieldOfNumberOfCard";
import FieldOfDateAndCVCForm from "../FieldsForm/FieldOfDateAndCVCForm";
import FieldOfNameHolderCard from "../FieldsForm/FieldOfNameHolderCard";
import styles from './_FormInputABankCardInfo.module.css'
interface OwnProps {
}

type Props = OwnProps;

const FormInputABankCardInfo: FunctionComponent<Props> = (props) => {
    return (<form className={styles.formCard}>
        <FieldOfNumberOfCard />
        <FieldOfDateAndCVCForm />
        <FieldOfNameHolderCard />


    </form>);
};

export default FormInputABankCardInfo;
