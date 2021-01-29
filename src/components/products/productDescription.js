import React from 'react';

import { FormatString } from './stringFormatHelper';

export default function ProductDescription(props) {
  return <p>{FormatString(props.description)}</p>;
}
