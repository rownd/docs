import React, {PropsWithChildren, useState} from 'react';

type Props = PropsWithChildren<{title: string}>;

export default function Accordion({title, children}: Props) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{border: '1px solid var(--ifm-color-emphasis-300)', borderRadius: 8, margin: '8px 0'}}>
      <button onClick={() => setOpen(!open)} style={{width: '100%', textAlign: 'left', padding: 12, background: 'transparent', border: 0, cursor: 'pointer'}}>
        <strong>{title}</strong>
      </button>
      {open && <div style={{padding: 12}}>{children}</div>}
    </div>
  );
}


