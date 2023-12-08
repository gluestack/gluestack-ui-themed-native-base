import React, { Children, forwardRef } from 'react';
import { Root as AccessibleStack } from './styled-components';
import { usePropResolution } from '../../hooks/usePropResolution';
import { GenericComponentType } from '../../types';
import { Text } from '../Text';

type IProps = Omit<React.ComponentProps<typeof AccessibleStack>, 'direction'>;

type StackProps = {
  divider?: any;
  direction?: React.ComponentProps<typeof AccessibleStack>['flexDirection'];
  space?: React.ComponentProps<typeof AccessibleStack>['gap'];
};

const StackTemp = forwardRef(
  (
    { children, divider, direction, ...props }: IProps & StackProps,
    ref?: any
  ) => {
    props.flexDirection = props.flexDirection ?? direction;
    const resolvedPropForGluestack = usePropResolution(props);
    return (
      <AccessibleStack
        gap={resolvedPropForGluestack.space}
        {...resolvedPropForGluestack}
        ref={ref}
      >
        {Children.map(children, (child, index) => {
          if (index !== 0)
            return (
              <>
                {divider && divider}
                {typeof child === 'string' ? <Text>{child}</Text> : child}
              </>
            );
          return <>{child}</>;
        })}
      </AccessibleStack>
    );
  }
);

export type IStackComponentType<Stack> = GenericComponentType<Stack>;

export const Stack = StackTemp as IStackComponentType<typeof StackTemp>;
