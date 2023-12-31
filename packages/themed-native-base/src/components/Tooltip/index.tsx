import React, { cloneElement, forwardRef } from 'react';
import { Root, Content, Text } from './styled-components';
import { createTooltip } from '@gluestack-ui/tooltip';
import { GenericComponentType } from '../../types';
import { AnimatePresence } from '@gluestack-style/animation-resolver';

const AccessibleTooltip = createTooltip({
  Root,
  Content,
  Text,
  AnimatePresence: AnimatePresence,
});

const TooltipTemp = forwardRef(
  ({ children, label, ...props }: any, ref?: any) => {
    return (
      <AccessibleTooltip
        {...props}
        ref={ref}
        trigger={(triggerProps: any) => {
          return cloneElement(children, { ...triggerProps });
        }}
      >
        <AccessibleTooltip.Content>
          <AccessibleTooltip.Text>{label}</AccessibleTooltip.Text>
        </AccessibleTooltip.Content>
      </AccessibleTooltip>
    );
  }
);
// @ts-ignore
export type ITooltipComponentType<Tooltip> = GenericComponentType<
  Tooltip,
  { label: string },
  {
    trigger: any;
  }
>;

export const Tooltip = TooltipTemp as ITooltipComponentType<
  typeof AccessibleTooltip
>;
