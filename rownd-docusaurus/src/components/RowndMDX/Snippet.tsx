import React, {PropsWithChildren} from 'react';

export default function Snippet({children}: PropsWithChildren) {
  return <pre><code>{children}</code></pre>;
}


