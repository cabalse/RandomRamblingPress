import React from 'react';

export function Elem({ children, className }) {
  return <Div className={className}>{children}</Div>;
}

export function FluidContainer({ children, className }) {
  const classes = 'fluid-container ' + className;
  return <Div className={classes}>{children}</Div>;
}

export function Container({ children, className }) {
  const classes = 'container ' + className;
  return <Div className={classes}>{children}</Div>;
}

export function Row({ children, className }) {
  let classes = 'row';
  if (className !== undefined) classes += ' ' + className;
  return <Div className={classes}>{children}</Div>;
}

export function Col({ children, className }) {
  const classes = 'col ' + className;
  return <Div className={classes}>{children}</Div>;
}

export function ColA({ children, className }) {
  const classes = 'col-auto ' + className;
  return <Div className={classes}>{children}</Div>;
}

export function Image({ children, className, src }) {
  return <img className={className} src={src} />;
}

function Div({ children, className }) {
  return <div className={className}>{children}</div>;
}
