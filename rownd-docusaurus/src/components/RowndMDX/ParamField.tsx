import React from 'react';

type Props = {
  name: string;
  type?: string;
  required?: boolean;
  children?: React.ReactNode;
};

export default function ParamField({name, type, required, children}: Props) {
  return (
    <div style={{borderLeft: '3px solid var(--ifm-color-primary)', paddingLeft: 12, margin: '8px 0'}}>
      <div style={{display: 'flex', gap: 8, alignItems: 'baseline'}}>
        <code>{name}</code>
        {type && <span style={{opacity: 0.7}}>{type}</span>}
        {required && <span style={{color: 'var(--ifm-color-primary)'}}>required</span>}
      </div>
      {children && <div style={{marginTop: 4}}>{children}</div>}
    </div>
  );
}


