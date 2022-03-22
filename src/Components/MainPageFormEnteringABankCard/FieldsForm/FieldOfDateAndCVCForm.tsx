import React, { FunctionComponent } from 'react';

interface OwnProps {}

type Props = OwnProps;

const FieldOfDateAndCVCForm: FunctionComponent<Props> = (props) => {

  return (
      <div>
          <div>
              <label>Срок</label>
              <input typeof={'text'} />
          </div>
          <div>
              <label>CVC</label>
              <input typeof={'text'} />
          </div>
      </div>
  );
};

export default FieldOfDateAndCVCForm;
