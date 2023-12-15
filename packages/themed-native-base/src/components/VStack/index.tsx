import { createVStack } from '@gluestack-ui/vstack';
import { Root } from './styled-components';
import { usePropResolution } from '../../hooks/usePropResolution';
import React, { Children, cloneElement, forwardRef } from 'react';
import { GenericComponentType } from '../../types';
import { Text } from '../Text';

const AccessibleVStack = createVStack({
  Root,
});

const VStackTemp = forwardRef(
  ({ children, divider, direction, ...props }: any, ref?: any) => {
    props.flexDirection =
      props.flexDirection ?? props.flexDir ?? direction ?? 'row';
    const resolvedPropForGluestack = usePropResolution(props);
    return (
      <AccessibleVStack {...resolvedPropForGluestack} ref={ref}>
        {Children.map(children, (child, index) => {
          if (index !== 0)
            return (
              <>
                {divider &&
                  cloneElement(divider, {
                    orientation:
                      props?.flexDirection && props?.flexDirection[0] === 'r'
                        ? 'vertical'
                        : 'horizontal',
                  })}
                {typeof child === 'string' ? <Text>{child}</Text> : child}
              </>
            );
          return <>{child}</>;
        })}
      </AccessibleVStack>
    );
  }
);

export type IVStackComponentType<VStack> = GenericComponentType<
  VStack,
  {},
  { direction: React.ComponentProps<typeof AccessibleVStack>['flexDirection'] }
>;

export const VStack = VStackTemp as IVStackComponentType<
  typeof AccessibleVStack
>;
