import React, { forwardRef } from 'react';
import { createFab } from '@gluestack-ui/fab';
import { Root, Label, Icon } from './styled-components';
import { usePropResolution } from '../../hooks/usePropResolution';
import { GenericComponentType } from '../../types';

const AccessibleFab = createFab({ Root, Label, Icon });

type IFabProps = { label?: string; icon?: any };

const FabTemp = forwardRef(
  (
    {
      colorScheme = 'primary',
      variant = 'solid',
      placement,
      icon,
      label,
      ...props
    }: any,
    ref?: any
  ) => {
    const resolvedPropForGluestack = usePropResolution(props);
    return (
      <AccessibleFab
        colorScheme={colorScheme}
        variant={variant}
        placement={placement}
        {...resolvedPropForGluestack}
        ref={ref}
      >
        {icon && icon}
        {label && <AccessibleFab.Label>{label}</AccessibleFab.Label>}
      </AccessibleFab>
    );
  }
);

export type IFabComponentType<Fab> = GenericComponentType<Fab, IFabProps>;

export const Fab = FabTemp as IFabComponentType<typeof AccessibleFab>;
