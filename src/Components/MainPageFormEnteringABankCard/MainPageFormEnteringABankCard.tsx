import React, { FunctionComponent } from 'react';
import FormInputABankCardInfo from "./FormInputABankCardInfo/FormInputABankCardInfo";
import styles from './MainPageFormEnteringABankCard.module.css'
interface OwnProps {}

type Props = OwnProps;

const MainPageFormEnteringABankCard: FunctionComponent<Props> = (props) => {

  return (<div className={styles.MainPageForm}><FormInputABankCardInfo/></div>);
};

export default MainPageFormEnteringABankCard;
