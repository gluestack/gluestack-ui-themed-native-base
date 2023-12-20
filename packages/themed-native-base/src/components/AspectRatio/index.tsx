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
import { useBreakpointValue, useColorModeValue } from '../../hooks';
import { HooksContext } from '../Provider';

const AspectRatioTemp = forwardRef(
  ({ children, ratio, ...props }: any, ref?: any) => {
    const resolvedPropForGluestack = usePropResolution(props);
    const aspectRatio = useBreakpointValue(ratio);

    const GUIChildren = Children.map(children, (child) => {
      if (typeof child === 'string') return <Text>{child}</Text>;
      return child;
    });

    const { config }: any = React.useContext<any>(HooksContext);
    const Gradient = config?.['linear-gradient'];

    const lightModeGradient =
      props?._light?.bg?.linearGradient ||
      props?._light?.background?.linearGradient ||
      props?._light?.bgColor?.linearGradient ||
      props?._light?.backgroundColor?.linearGradient;

    const darkModeGradient =
      props?._dark?.bg?.linearGradient ||
      props?._dark?.background?.linearGradient ||
      props?._dark?.bgColor?.linearGradient ||
      props?._dark?.backgroundColor?.linearGradient;

    const neutralGradient =
      props?.bg?.linearGradient ||
      props?.background?.linearGradient ||
      props?.bgColor?.linearGradient ||
      props?.backgroundColor?.linearGradient;

    const colorModeGradient = useColorModeValue(
      lightModeGradient || neutralGradient,
      darkModeGradient || neutralGradient
    );

    if (colorModeGradient) {
      const lgrad = colorModeGradient;

      delete resolvedPropForGluestack.sx['@linearGradient'];

      if (Gradient) {
        let startObj = { x: 0, y: 0 };
        let endObj = { x: 0, y: 1 };
        if (lgrad.start && lgrad.start.length === 2) {
          startObj = {
            x: lgrad.start[0],
            y: lgrad.start[1],
          };
        }
        if (lgrad.end && lgrad.end.length === 2) {
          endObj = {
            x: lgrad.end[0],
            y: lgrad.end[1],
          };
        }

        return (
          <AccessibleAspectRatio
            as={Gradient}
            aspectRatio={aspectRatio}
            {...resolvedPropForGluestack}
            colors={lgrad.colors}
            start={startObj}
            end={endObj}
            locations={lgrad.locations}
            ref={ref}
          >
            {GUIChildren}
          </AccessibleAspectRatio>
        );
      }
    }

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
