import React, { FunctionComponent } from 'react';

interface OwnProps {}

type Props = OwnProps;

const FieldOfNumberOfCard: FunctionComponent<Props> = (props) => {

  return (<div>
      <label>Номер карты</label>
      <input typeof={'text'} />
  </div>);
};

export default FieldOfNumberOfCard;
