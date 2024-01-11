import { forwardRef } from 'react';
import { Root, Group, Icon, Indicator, Label } from './styled-components';
import { createRadio } from '@gluestack-ui/radio';
import { usePropResolution } from '../../hooks/usePropResolution';
import React from 'react';
import { CircleIcon } from '../Icons';
import { GenericComponentType, IColorSchemes } from '../../types';

const AccessibleRadio = createRadio({
  Root,
  Group,
  Icon,
  Indicator,
  Label,
});

const AccessibleRadioGroup = forwardRef(
  ({ children, ...props }: any, ref?: any) => {
    const resolvedProps = usePropResolution(props);
    return (
      <AccessibleRadio.Group {...resolvedProps} ref={ref}>
        {children}
      </AccessibleRadio.Group>
    );
  }
) as any;

const RadioTemp = forwardRef(
  (
    {
      colorScheme = 'primary',
      icon: IconPassed,
      _stack,
      children,
      ...props
    }: any,
    ref?: any
  ) => {
    const resolvedPropsForIndicator = usePropResolution(props);
    const resolvedPropsForRadio = usePropResolution(_stack);

    return (
      <AccessibleRadio
        colorScheme={colorScheme}
        {...resolvedPropsForRadio}
        ref={ref}
      >
        <AccessibleRadio.Indicator
          {...resolvedPropsForIndicator}
          alignItems="center"
          justifyContent="center"
        >
          <AccessibleRadio.Icon
            as={IconPassed ? () => IconPassed : CircleIcon}
          />
        </AccessibleRadio.Indicator>
        {children && <AccessibleRadio.Label>{children}</AccessibleRadio.Label>}
      </AccessibleRadio>
    );
  }
) as any;

RadioTemp.Group = AccessibleRadioGroup;

export type IRadioComponentType<Radio, Group> = GenericComponentType<
  Radio,
  {},
  { colorScheme: IColorSchemes }
> & {
  Group: GenericComponentType<Group>;
};

export const Radio = RadioTemp as IRadioComponentType<
  typeof AccessibleRadio,
  typeof AccessibleRadio.Group
>;
