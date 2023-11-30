//Only to be used internally, never to be exposed to user

import React, { forwardRef } from 'react';
import { default as Root } from './Root';
import { createIcon } from '@gluestack-ui/icon';

export const createIconNB = (props: any) => {
  const Icon = createIcon({ Root, ...props });

  const CreatedIcon = forwardRef(({ ...propsIcon }: any, ref?: any) => {
    return <Icon {...propsIcon} ref={ref} />;
  });
  return CreatedIcon;
};
