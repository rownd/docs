import React from 'react';

type Props = { name: string; size?: number };

const Svg = ({children, size = 20}: {children: React.ReactNode; size?: number}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden
    className="icon-color"
  >
    {children}
  </svg>
);

export default function Icon({name, size}: Props) {
  switch (name) {
    case 'mobile-screen-button':
      return <i className="fa-solid fa-mobile-screen-button icon-color" style={{fontSize: size ?? 20}} />;
    case 'browser':
      return <i className="fa-regular fa-window-maximize icon-color" style={{fontSize: size ?? 20}} />;
    case 'server':
      return <i className="fa-solid fa-server icon-color" style={{fontSize: size ?? 20}} />;
    case 'user':
      return <i className="fa-regular fa-user icon-color" style={{fontSize: size ?? 20}} />;
    case 'wallet':
      return <i className="fa-solid fa-wallet icon-color" style={{fontSize: size ?? 20}} />;
    case 'react':
      return <i className="fa-brands fa-react icon-color" style={{fontSize: size ?? 20}} />;
    case 'nextjs':
      return <i className="fa-brands fa-neos icon-color" style={{fontSize: size ?? 20}} />;
    case 'rocket':
      return <i className="fa-solid fa-rocket icon-color" style={{fontSize: size ?? 20}} />;
    case 'lock':
      return <i className="fa-solid fa-lock icon-color" style={{fontSize: size ?? 20}} />;
    case 'lock-open':
      return <i className="fa-solid fa-lock-open icon-color" style={{fontSize: size ?? 20}} />;
    case 'paintbrush':
      return <i className="fa-solid fa-paintbrush icon-color" style={{fontSize: size ?? 20}} />;
    case 'mobile':
      return <i className="fa-solid fa-mobile-screen icon-color" style={{fontSize: size ?? 20}} />;
    case 'mobile-screen':
      return <i className="fa-solid fa-mobile-screen icon-color" style={{fontSize: size ?? 20}} />;
    case 'address-card':
      return <i className="fa-regular fa-address-card icon-color" style={{fontSize: size ?? 20}} />;
    case 'table':
      return <i className="fa-solid fa-table icon-color" style={{fontSize: size ?? 20}} />;
    case 'user-vneck-hair':
      return <i className="fa-regular fa-user icon-color" style={{fontSize: size ?? 20}} />;
    case 'fingerprint':
      return <i className="fa-solid fa-fingerprint icon-color" style={{fontSize: size ?? 20}} />;
    case 'envelope':
      return <i className="fa-regular fa-envelope icon-color" style={{fontSize: size ?? 20}} />;
    case 'google':
      return <i className="fa-brands fa-google icon-color" style={{fontSize: size ?? 20}} />;
    case 'apple':
      return <i className="fa-brands fa-apple icon-color" style={{fontSize: size ?? 20}} />;
    case 'question':
      return <i className="fa-regular fa-circle-question icon-color" style={{fontSize: size ?? 20}} />;
    case 'aws':
      return <i className="fa-brands fa-aws icon-color" style={{fontSize: size ?? 20}} />;
    case 'screwdriver-wrench':
      return <i className="fa-solid fa-screwdriver-wrench icon-color" style={{fontSize: size ?? 20}} />;
    case 'user-secret':
      return <i className="fa-solid fa-user-secret icon-color" style={{fontSize: size ?? 20}} />;
    case 'android':
      return <i className="fa-brands fa-android icon-color" style={{fontSize: size ?? 20}} />;
    case 'wordpress':
      return <i className="fa-brands fa-wordpress icon-color" style={{fontSize: size ?? 20}} />;
    case 'python':
      return <i className="fa-brands fa-python icon-color" style={{fontSize: size ?? 20}} />;
    case 'microsoft':
      return <i className="fa-brands fa-microsoft icon-color" style={{fontSize: size ?? 20}} />;
    case 'node':
      return <i className="fa-brands fa-node icon-color" style={{fontSize: size ?? 20}} />;
    case 'bolt':
      return <i className="fa-solid fa-bolt icon-color" style={{fontSize: size ?? 20}} />;
    case 'code':
      return <i className="fa-solid fa-code icon-color" style={{fontSize: size ?? 20}} />;
    case 'gem':
      return <i className="fa-regular fa-gem icon-color" style={{fontSize: size ?? 20}} />;
    case 'angular':
      return <i className="fa-brands fa-angular icon-color" style={{fontSize: size ?? 20}} />;
    case 'vuejs':
      return <i className="fa-brands fa-vuejs icon-color" style={{fontSize: size ?? 20}} />;
    case 'js':
      return <i className="fa-brands fa-js icon-color" style={{fontSize: size ?? 20}} />;
    default:
      return <span className="icon-color">{name}</span>;
  }
}


