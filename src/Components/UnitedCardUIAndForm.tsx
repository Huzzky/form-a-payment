import React, { FunctionComponent } from 'react';
import CardUIComponents from "./Card UI/CardUIComponents";
import MainPageFormEnteringABankCard from "./MainPageFormEnteringABankCard/MainPageFormEnteringABankCard";
import styles from './_UnitedCardUIAndForm.module.css'
interface OwnProps {}

type Props = OwnProps;

const UnitedCardUIAndForm: FunctionComponent<Props> = (props) => {

  return (
      <div className={styles.unitedBlock}>
          <CardUIComponents/>
          <MainPageFormEnteringABankCard/>
      </div>
  );
};

export default UnitedCardUIAndForm;
