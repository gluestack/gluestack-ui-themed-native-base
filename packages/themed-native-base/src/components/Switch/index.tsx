import { createSwitch } from '@gluestack-ui/switch';
import { Root } from './styled-components';
import { usePropResolution } from '../../hooks/usePropResolution';
import React, { forwardRef } from 'react';
import { GenericComponentType, IColorSchemes } from '../../types';

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
  colorScheme: IColorSchemes;
};

const SwitchTemp = forwardRef(
  (
    {
      colorScheme = 'primary',
      // offTrackColor,
      // onTrackColor,
      // onThumbColor,
      // offThumbColor,
      ...props
    }: ISwitchProps & IExtraProps,
    ref?: any
  ) => {
    const resolvedProps = usePropResolution(props);
    // const sx = {
    //   _web: {
    //     props: {
    //       trackColor: { false: offTrackColor, true: onTrackColor },
    //       thumbColor: offThumbColor,
    //       activeThumbColor: onThumbColor,
    //     },
    //   },
    // };
    return (
      <AccessibleSwitch
        colorScheme={colorScheme}
        {...resolvedProps}
        ref={ref}
      />
    );
  }
);

export type ISwitchComponentType<Switch> = GenericComponentType<Switch>;

export const Switch = SwitchTemp as ISwitchComponentType<typeof SwitchTemp>;
