import Context, { GAMING } from './../../context';
import { useContext, useEffect } from 'react';

export default function SwitchToGaming() {
  const ctx = useContext(Context);
  useEffect(() => {
    ctx.setDisplayPath(GAMING);
  }, []);
  return null;
}
