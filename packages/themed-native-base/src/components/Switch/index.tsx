import { createSwitch } from '@gluestack-ui/switch';
import { Root } from './styled-components';
import { usePropResolution } from '../../hooks/usePropResolution';
import React, { forwardRef } from 'react';
import { GenericComponentType } from '../../types';
import { deepMerge } from '../../utils';

const AccessibleSwitch = createSwitch({
  Root,
});

type ISwitchProps = React.ComponentProps<typeof AccessibleSwitch>;
// @ts-ignore
type IColorProps = React.ComponentProps<typeof AccessibleSwitch>['bgColor'];

type IExtraProps = {
  offTrackColor: IColorProps;
  onTrackColor: IColorProps;
  onThumbColor: IColorProps;
  offThumbColor: IColorProps;
};

const SwitchTemp = forwardRef(
  (
    {
      offTrackColor,
      onTrackColor,
      onThumbColor,
      offThumbColor,
      ...props
    }: ISwitchProps & IExtraProps,
    ref?: any
  ) => {
    const resolvedProps = usePropResolution(props);
    // console.log(offTrackColor, onTrackColor, onThumbColor, offThumbColor);
    const sx = {
      _web: {
        props: {
          trackColor: { false: offTrackColor, true: onTrackColor },
          thumbColor: offThumbColor,
          activeThumbColor: onThumbColor,
        },
      },
    };

    return <AccessibleSwitch {...deepMerge(resolvedProps, sx)} ref={ref} />;
  }
);

export type ISwitchComponentType<Switch> = GenericComponentType<Switch>;

export const Switch = SwitchTemp as ISwitchComponentType<typeof SwitchTemp>;
