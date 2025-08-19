import React, {PropsWithChildren} from 'react';
import Admonition from '@theme/Admonition';

export default function Tip({children}: PropsWithChildren) {
  return <Admonition type="tip">{children}</Admonition>;
}


