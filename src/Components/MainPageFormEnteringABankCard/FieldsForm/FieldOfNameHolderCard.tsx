import React, { FunctionComponent } from 'react';

interface OwnProps {}

type Props = OwnProps;

const FieldOfNameHolderCard: FunctionComponent<Props> = (props) => {

  return (<div>
      <label>Владелец карты</label>
      <input typeof={'text'} />
  </div>);
};

export default FieldOfNameHolderCard;
