import React, {PropsWithChildren} from 'react';
import Link from '@docusaurus/Link';
import Icon from './Icon';

type Props = PropsWithChildren<{
  title: string;
  icon?: React.ReactNode | string;
  href?: string;
  ['icon-type']?: string;
}>;

export default function Card({title, icon, href, children}: Props) {
  const content = (
    <div
      style={{
        border: '1px solid var(--ifm-color-emphasis-200)',
        borderRadius: 12,
        padding: 20,
        height: '100%',
        background: 'var(--ifm-background-surface-color)',
        boxShadow: '0 1px 3px rgba(0,0,0,0.06)',
        transition: 'transform 120ms ease, box-shadow 120ms ease',
      }}
      className="rownd-card"
    >
      <div style={{display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12}}>
        <div style={{display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 28, height: 28}}>
          {typeof icon === 'string' ? <Icon name={icon} /> : icon}
        </div>
        <h3 style={{margin: 0, fontSize: 18, lineHeight: 1.2}}>{title}</h3>
      </div>
      {children && <div style={{opacity: 0.85, lineHeight: 1.5}}>{children}</div>}
    </div>
  );
  return href ? (
    <Link to={href} style={{textDecoration: 'none'}}>
      {content}
    </Link>
  ) : (
    content
  );
}


