import React from 'react';

export const DEFAULT = 'default';
export const GAMING = 'gaming';

export const contextDefaultValues = {
  displayPath: DEFAULT,
  setDisplayPath: () => null
};

const Context = React.createContext(contextDefaultValues);

export default Context;
