import React, { Children, forwardRef } from 'react';

import { Root as AccessibleCircle } from './styled-components';

import { Text } from '../Text';

import { usePropResolution } from '../../hooks/usePropResolution';
import { GenericComponentType } from '../../types';
import { HooksContext } from '../Provider';
import { LinearGradient } from '../LinearGradient';

const CircleTemp = forwardRef(({ children, ...props }: any, ref?: any) => {
  const GUIChildren = Children.map(children, (child) => {
    if (typeof child === 'string') return <Text>{child}</Text>;
    return child;
  });
  const { config: configDependencies }: any =
    React.useContext<any>(HooksContext);

  const Gradient = configDependencies?.['linear-gradient'];
  const resolvedPropForGluestack = usePropResolution(props);
  if (
    props.bg?.linearGradient ||
    props.background?.linearGradient ||
    props.bgColor?.linearGradient ||
    props.backgroundColor?.linearGradient
  ) {
    const lgrad =
      props.bg?.linearGradient ||
      props.background?.linearGradient ||
      props.bgColor?.linearGradient ||
      props.backgroundColor?.linearGradient;

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
        <LinearGradient
          colors={lgrad.colors}
          start={startObj}
          end={endObj}
          locations={lgrad.locations}
          {...resolvedPropForGluestack}
          ref={ref}
        >
          {GUIChildren}
        </LinearGradient>
      );
    }
  }
  return (
    <AccessibleCircle {...resolvedPropForGluestack} ref={ref}>
      {GUIChildren}
    </AccessibleCircle>
  );
});

const CircleNew = CircleTemp as any;
export type ICircleComponentType<Circle> = GenericComponentType<Circle>;

export const Circle = CircleNew as ICircleComponentType<
  typeof AccessibleCircle
>;
