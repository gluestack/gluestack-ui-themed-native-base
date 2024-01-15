import { createSwitch } from '@gluestack-ui/switch';
import { Root } from './styled-components';
import { usePropResolution } from '../../hooks/usePropResolution';
import React, { forwardRef } from 'react';
import { GenericComponentType } from '../../types';
import { deepMerge } from '../../utils';

const AccessibleSwitch = createSwitch({
  Root,
});

// type ISwitchProps = React.ComponentProps<typeof AccessibleSwitch>;

// type IColorProps = React.ComponentProps<typeof AccessibleSwitch>['bgColor'];

// type IExtraProps = {
//   offTrackColor: IColorProps;
//   onTrackColor: IColorProps;
//   onThumbColor: IColorProps;
//   offThumbColor: IColorProps;
//   colorScheme: IColorSchemes;
// };

const SwitchTemp = forwardRef(
  (
    {
      colorScheme,
      offTrackColor,
      onTrackColor,
      onThumbColor,
      offThumbColor,
      isChecked,
      defaultIsChecked,
      ...props
    }: any,
    // }: ISwitchProps & IExtraProps,
    ref?: any
  ) => {
    // TODO: make a better flow

    const resolvedProps = usePropResolution(props);
    const sx = {
      props: {
        trackColor: {
          false: offTrackColor ? `$${offTrackColor}` : '',
          true: onTrackColor ? `$${onTrackColor}` : '',
        },
        thumbColor: offThumbColor ? `$${offThumbColor}` : '',
        activeThumbColor: onThumbColor ? `$${onThumbColor}` : '',
        ios_backgroundColor: offTrackColor ? `$${offTrackColor}` : '',
      },
    };
    resolvedProps.sx = deepMerge(resolvedProps.sx, sx);
    return (
      <AccessibleSwitch
        componentName="switch"
        value={isChecked}
        defaultValue={defaultIsChecked}
        colorScheme={colorScheme ?? 'primary'}
        {...resolvedProps}
        ref={ref}
      />
    );
  }
);

export type ISwitchComponentType<Switch> = GenericComponentType<Switch>;

export const Switch = SwitchTemp as ISwitchComponentType<typeof SwitchTemp>;
