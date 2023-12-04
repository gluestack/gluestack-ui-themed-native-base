import React, { Children, forwardRef, useContext } from 'react';

import { Root as AccessibleLinearGradient } from './styled-components';
import { Text } from '../Text';

import { HooksContext } from '../Provider';

export const LinearGradient = forwardRef(
  ({ children, ...props }: any, ref?: any) => {
    const { config } = useContext(HooksContext);

    const GUIChildren = Children.map(children, (child) => {
      if (typeof child === 'string') return <Text>{child}</Text>;
      return child;
    });

    return (
      <AccessibleLinearGradient
        as={config['linear-gradient']}
        {...props}
        ref={ref}
      >
        {GUIChildren}
      </AccessibleLinearGradient>
    );
  }
);
