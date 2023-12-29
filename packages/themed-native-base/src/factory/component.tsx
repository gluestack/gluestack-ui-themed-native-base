import React, { forwardRef } from 'react';
import { styled } from '@gluestack-style/react';
import { transformFactoryToStyled } from '../utils/NBsupport';
import { usePropResolution } from '../hooks/usePropResolution';

export default function Factory<P>(
  Component: React.ComponentType<P>,
  componentTheme?: {
    variants?: Object;
    sizes?: Object;
    baseStyle?: Object;
    defaultProps?: Object;
  }
) {
  const NewComponent = styled(
    Component,
    transformFactoryToStyled(componentTheme) as any
  );

  const ComponentWrapper = forwardRef(
    ({ children, ...props }: any, ref?: any) => {
      const resolvedProps = usePropResolution(props);
      return (
        <NewComponent {...resolvedProps} ref={ref}>
          {children}
        </NewComponent>
      );
    }
  );
  return ComponentWrapper;
}
