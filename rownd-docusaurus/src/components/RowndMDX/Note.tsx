import React, {PropsWithChildren} from 'react';
import Admonition from '@theme/Admonition';

export default function Note({children}: PropsWithChildren) {
  return <Admonition type="note">{children}</Admonition>;
}


