import React from 'react';

type Props = {
  src: string;
  title?: string;
  height?: number | string;
};

export default function Frame({src, title, height = 400}: Props) {
  return (
    <iframe
      src={src}
      title={title ?? 'Frame'}
      style={{width: '100%', height, border: 0}}
    />
  );
}


