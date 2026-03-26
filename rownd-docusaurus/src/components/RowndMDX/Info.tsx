import React, {PropsWithChildren} from 'react';
import Admonition from '@theme/Admonition';

export default function Info({children}: PropsWithChildren) {
  return <Admonition type="info">{children}</Admonition>;
}


