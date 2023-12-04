import React, { Children, forwardRef, useContext } from 'react';

// import { Root as AccessibleLinearGradient } from './styled-components';

import { Text } from '../Text';

import { GenericComponentType } from '../../types';
import { Root as AccessibleLinearGradient } from './styled-components';
import { HooksContext } from '../Provider';

const LinearGradientTemp = forwardRef(
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

const LinearGradientNew = LinearGradientTemp as any;

export type ILinearGradientComponentType<LinearGradient> =
  GenericComponentType<LinearGradient>;

export const LinearGradient = LinearGradientNew as ILinearGradientComponentType<
  typeof AccessibleLinearGradient
>;
