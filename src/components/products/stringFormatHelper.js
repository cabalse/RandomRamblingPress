import React from 'react';

export const FormatString = (input) => {
  var output = [];
  var res = input.split('/n');
  res.forEach((element) => {
    output.push(element);
    output.push(<br />);
  });
  return output;
};
