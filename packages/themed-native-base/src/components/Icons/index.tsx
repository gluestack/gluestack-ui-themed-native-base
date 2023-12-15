/* eslint-disable react-hooks/rules-of-hooks */
// @ts-nocheck
import React, {
  cloneElement,
  forwardRef,
  isValidElement,
  Children,
} from 'react';
import { createIcon as createIconUI } from '@gluestack-ui/icon';
import { Root, createIcon } from './styled-components';
import { GenericComponentType } from '../../types';
import { usePropResolution } from '../../hooks/usePropResolution';
import { useToken } from '../../hooks';

const AccessibleIcon = createIconUI({
  Root: Root,
});

const IconTemp = forwardRef(
  (
    {
      children,
      // @ts-ignore
      as,
      viewBox,
      ...props
    }: React.ComponentProps<typeof AccessibleIcon> & { viewBox?: string },
    ref?: any
  ) => {
    const GuiChildren = Children.map(children, (child, index) =>
      cloneElement(child, {
        fill: useToken('colors', child?.props?.fill && `${child?.props?.fill}`),
        stroke: useToken(
          'colors',
          child?.props?.stroke && `${child?.props?.stroke}`
        ),
        key: index,
      })
    );

    const resolvedProps = usePropResolution(props);

    const { size } = resolvedProps;
    const tokenizedFontSize = useToken('space', size);

    let sizeStyle = {};
    let sizeProp = {};

    if (
      size &&
      ((typeof size === 'number' && !isNaN(size)) ||
        (typeof size === 'string' && !isNaN(Number(size))))
    ) {
      sizeStyle = {
        fontSize: tokenizedFontSize,
        lineHeight: tokenizedFontSize,
      };
    } else {
      sizeProp = { size: size };
    }

    let IconForward: any;
    let ClonedIcon: any;
    if (as) {
      IconForward = as;
    } else if (typeof viewBox === 'string') {
      const NewIcon = createIcon(
        {
          viewBox: viewBox,
          // @ts-ignore
          path: GuiChildren,
        },
        true
      );
      IconForward = NewIcon;
    } else if (children) {
      IconForward = children;
    }
    const isJSX = isValidElement(IconForward) ?? false;
    if (isJSX) {
      ClonedIcon = (propsResolved: any) => {
        return cloneElement(IconForward, {
          ...propsResolved,
          ...sizeStyle,
          ...sizeProp,
        });
      };
    }

    return (
      <AccessibleIcon
        as={ClonedIcon ?? IconForward}
        {...resolvedProps}
        {...sizeProp}
        style={sizeStyle}
        ref={ref}
      />
    );
  }
);

export * from './Icons';

export type IIconComponentType<Icon> = GenericComponentType<
  Icon,
  {},
  { viewBox?: string; as?: any }
>;

export const Icon = IconTemp as IIconComponentType<typeof Root>;

export { createIcon };
