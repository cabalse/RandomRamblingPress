import React from 'react';
import { Row, ColA } from './../../components/bootstrap/Bootstrap';
import Select from 'react-select';

export default function ProductFilter(props) {
  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ];

  return (
    <Row className="m-1 pt-3 pb-3">
      <ColA className="pr-1 align-middle">Filter:</ColA>
      <ColA className="col-sm-11 align-middle">
        <Select options={options} isMulti={true} />
      </ColA>
    </Row>
  );
}
