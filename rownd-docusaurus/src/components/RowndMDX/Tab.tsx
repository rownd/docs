import React, {PropsWithChildren} from 'react';
import TabItem from '@theme/TabItem';

type Props = PropsWithChildren<{title: string; value?: string}>;

export default function Tab({title, value, children}: Props) {
  const v = value ?? title;
  return (
    <TabItem value={v} label={title}>
      {children}
    </TabItem>
  );
}


