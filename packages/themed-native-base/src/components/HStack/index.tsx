import { createHStack } from '@gluestack-ui/hstack';
import { Root } from './styled-components';
import { usePropResolution } from '../../hooks/usePropResolution';
import React, { Children, cloneElement, forwardRef } from 'react';
import { Text } from '../Text';
import { GenericComponentType } from '../../types';

const AccessibleHStack = createHStack({
  Root,
});

const HStackTemp = forwardRef(
  ({ children, divider, direction, ...props }: any, ref?: any) => {
    props.flexDirection =
      props.flexDirection ?? props.flexDir ?? direction ?? 'row';
    const resolvedPropForGluestack = usePropResolution(props);
    return (
      <AccessibleHStack {...resolvedPropForGluestack} ref={ref}>
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
      </AccessibleHStack>
    );
  }
);

export type IHStackComponentType<HStack> = GenericComponentType<
  HStack,
  {},
  { direction: React.ComponentProps<typeof AccessibleHStack>['flexDirection'] }
>;

export const HStack = HStackTemp as IHStackComponentType<
  typeof AccessibleHStack
>;
