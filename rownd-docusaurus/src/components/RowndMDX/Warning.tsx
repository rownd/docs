import React, {PropsWithChildren} from 'react';
import Admonition from '@theme/Admonition';

export default function Warning({children}: PropsWithChildren) {
  return <Admonition type="warning">{children}</Admonition>;
}


