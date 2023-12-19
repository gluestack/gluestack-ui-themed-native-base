import React, { Children, forwardRef } from 'react';

import { Root as AccessibleAspectRatio } from './styled-components';
import { Text } from '../Text';

type IRatio = {
  ratio:
    | React.ComponentProps<typeof AccessibleAspectRatio>['aspectRatio']
    | Array<number | string>
    | {};
};

import { usePropResolution } from '../../hooks/usePropResolution';
import { GenericComponentType } from '../../types';
import { useBreakpointValue } from '../../hooks';

const AspectRatioTemp = forwardRef(
  ({ children, ratio, ...props }: any, ref?: any) => {
    const resolvedPropForGluestack = usePropResolution(props);
    const aspectRatio = useBreakpointValue(ratio);

    const GUIChildren = Children.map(children, (child) => {
      if (typeof child === 'string') return <Text>{child}</Text>;
      return child;
    });
    return (
      <AccessibleAspectRatio
        aspectRatio={aspectRatio}
        {...resolvedPropForGluestack}
        ref={ref}
      >
        {GUIChildren}
      </AccessibleAspectRatio>
    );
  }
);

export type IAspectRatioComponentType<AspectRatio> = GenericComponentType<
  AspectRatio,
  {},
  IRatio
>;

export const AspectRatio = AspectRatioTemp as IAspectRatioComponentType<
  typeof AccessibleAspectRatio
>;
