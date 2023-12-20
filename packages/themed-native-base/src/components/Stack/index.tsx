// @ts-nocheck
import React, { Children, cloneElement, forwardRef } from 'react';
import { Root as AccessibleStack } from './styled-components';
import { usePropResolution } from '../../hooks/usePropResolution';
import { GenericComponentType } from '../../types';
import { Text } from '../Text';
import { HooksContext } from '../Provider';
import { useColorModeValue } from '../../hooks';

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
    props.flexDirection = props.flexDirection ?? props.flexDir ?? direction;
    const resolvedPropForGluestack = usePropResolution(props);
    const Divider =
      divider &&
      cloneElement(divider, {
        orientation:
          props?.flexDirection && props?.flexDirection[0] === 'r'
            ? 'vertical'
            : 'horizontal',
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
          <AccessibleStack
            as={Gradient}
            {...resolvedPropForGluestack}
            colors={lgrad.colors}
            start={startObj}
            end={endObj}
            locations={lgrad.locations}
            ref={ref}
          >
            {Children.map(children, (child, index) => {
              if (index !== 0)
                return (
                  <>
                    {Divider && Divider}
                    {typeof child === 'string' ? <Text>{child}</Text> : child}
                  </>
                );
              return child;
            })}
          </AccessibleStack>
        );
      }
    }

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
                {Divider && Divider}
                {typeof child === 'string' ? <Text>{child}</Text> : child}
              </>
            );
          return child;
        })}
      </AccessibleStack>
    );
  }
);

export type IStackComponentType<Stack> = GenericComponentType<Stack>;

export const Stack = StackTemp as IStackComponentType<typeof StackTemp>;
