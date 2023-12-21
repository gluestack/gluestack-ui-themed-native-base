import React, { Children, forwardRef } from 'react';

import { Root as AccessibleFlex } from './styled-components';

import { usePropResolution } from '../../hooks/usePropResolution';
import { GenericComponentType } from '../../types';

import { Text } from '../Text';
import { useColorModeValue } from '../../hooks';
import { HooksContext } from '../Provider';

type IFlexProps = {
  direction?: React.ComponentProps<typeof AccessibleFlex>['flexDirection'];
  wrap?: React.ComponentProps<typeof AccessibleFlex>['flexWrap'];
  align?: React.ComponentProps<typeof AccessibleFlex>['alignItems'];
  justify?: React.ComponentProps<typeof AccessibleFlex>['justifyContent'];
};

const FlexTemp = forwardRef(
  ({ children, direction, wrap, align, justify, ...props }: any, ref?: any) => {
    const resolvedPropForGluestack = usePropResolution(props);
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
          <AccessibleFlex
            as={Gradient}
            {...resolvedPropForGluestack}
            colors={lgrad.colors}
            start={startObj}
            end={endObj}
            locations={lgrad.locations}
            ref={ref}
          >
            {GUIChildren}
          </AccessibleFlex>
        );
      }
    }

    return (
      <AccessibleFlex
        flexDirection={direction}
        flexWrap={wrap}
        alignItems={align}
        justifyContent={justify}
        {...resolvedPropForGluestack}
        ref={ref}
      >
        {GUIChildren}
      </AccessibleFlex>
    );
  }
);

export type IFlexComponentType<Flex> = GenericComponentType<
  Flex,
  {},
  IFlexProps
>;

export const Flex = FlexTemp as IFlexComponentType<typeof AccessibleFlex>;

export const Spacer = forwardRef(({ ...props }: any, ref?: any) => (
  <Flex flexGrow={1} {...props} ref={ref} />
));
