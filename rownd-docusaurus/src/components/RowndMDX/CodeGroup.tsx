import React, {PropsWithChildren} from 'react';

export default function CodeGroup({children}: PropsWithChildren) {
  return <div style={{display: 'grid', gap: 12}}>{children}</div>;
}


