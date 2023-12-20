import React, { Children, forwardRef } from 'react';

import { Root as AccessibleBox } from './styled-components';

import { Text } from '../Text';

import { usePropResolution } from '../../hooks/usePropResolution';
import { GenericComponentType } from '../../types';
import { HooksContext } from '../Provider';

const BoxTemp = forwardRef(({ children, ...props }: any, ref?: any) => {
  const GUIChildren = Children.map(children, (child) => {
    if (typeof child === 'string') return <Text>{child}</Text>;
    return child;
  });
  const resolvedPropForGluestack = usePropResolution(props);

  const { config }: any = React.useContext<any>(HooksContext);
  const Gradient = config?.['linear-gradient'];
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
        <AccessibleBox
          as={Gradient}
          {...resolvedPropForGluestack}
          colors={lgrad.colors}
          start={startObj}
          end={endObj}
          locations={lgrad.locations}
          ref={ref}
        >
          {GUIChildren}
        </AccessibleBox>
      );
    }
  }
  return (
    <AccessibleBox {...resolvedPropForGluestack} ref={ref}>
      {GUIChildren}
    </AccessibleBox>
  );
});

const BoxNew = BoxTemp as any;
export type IBoxComponentType<Box> = GenericComponentType<Box>;

export const Box = BoxNew as IBoxComponentType<typeof AccessibleBox>;
