import React from 'react';

import { FormatString } from './stringFormatHelper';

export default function ProductIntro(props) {
  return (
    <p>
      <i>{FormatString(props.intro)}</i>
    </p>
  );
}
