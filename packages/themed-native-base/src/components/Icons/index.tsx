import { createIcon as createIconUI } from '@gluestack-ui/icon';
import React, { forwardRef, useRef } from 'react';
import { createIcon, Root } from './styled-components';
import { GenericComponentType } from '../../types';
import { usePropResolution } from '../../hooks/usePropResolution';
import { MaterialIcons } from "react-native-vector-icons"

const AccessibleIcon = createIconUI({
  Root: Root,
});

const IconTemp = forwardRef(
  (
    {
      children,
      as,
      viewBox,
      ...props
    }: React.ComponentProps<typeof AccessibleIcon> & { viewBox?: string },
    ref?: any
  ) => {
    const resolvedProps = usePropResolution(props);
    // console.log(resolvedProps)

    function getForwardRefComponent(IconForward: any) {
      return React.forwardRef((props, ref) => (
        <IconForward ref={ref}  {...props} />
      ));
    }

    function isReactElement(component: any) {
      return typeof component === 'object' && component !== null && component.$$typeof === Symbol.for('react.element');
    }
    let IconForward;
    let sizeProp = {};
    if (typeof props.size === 'number') {
      sizeProp = { height: props.size, width: props.size };
    }
    if (as) {
      IconForward = as;
      // console.log(typeof IconForward === 'object' && IconForward !== null)
      // if (isReactElement(as)) {
      //   IconForward = getForwardRefComponent(IconForward)
      //   console.log(IconForward)
      // }

    } else if (typeof viewBox === 'string') {
      const NewIcon = createIcon({
        viewBox: viewBox,
        path: children,
      });
      IconForward = NewIcon;
    } else if (children) {
      IconForward = children;
    }

    return (
      <>
        {/* <MaterialIcons name="person" /> */}
        {/* <IconForward /> */}

        <IconForward {...resolvedProps} {...sizeProp} ref={ref} />
        {/* <AccessibleIcon
        as={IconForward}
        {...resolvedProps}
        {...sizeProp}
        ref={ref}
      />  */}
      </>
    );
  }
);

export * from './Icons';

export type IIconComponentType<Icon> = GenericComponentType<
  Icon,
  { viewBox?: string; as?: any }
>;

export const Icon = IconTemp as IIconComponentType<typeof Root>;

export { createIcon };
