import React from 'react';
import OriginalRoot from '@theme-original/Root';

// Pass-through Root; custom subnav removed per request
export default function Root({children}: {children: React.ReactNode}) {
  return <OriginalRoot>{children}</OriginalRoot>;
}


