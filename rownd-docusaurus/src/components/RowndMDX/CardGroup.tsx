import React, {PropsWithChildren} from 'react';

export default function CardGroup({children}: PropsWithChildren) {
  return (
    <div
      style={{
        display: 'grid',
        gap: 16,
        gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
        marginBottom: 16,
      }}
    >
      {children}
    </div>
  );
}


