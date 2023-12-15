import React, { forwardRef } from 'react';
import { Root, Text } from './styled-components';
import { createLink } from '@gluestack-ui/link';
import { Text as AccessibleText } from '../Text';
import { usePropResolution } from '../../hooks/usePropResolution';
// import { GenericComponentType } from '../../types';

const AccessibleLink = createLink({
  Root,
  Text,
});

export const Link = forwardRef(
  ({ children, _text, ...props }: any, ref?: any) => {
    const resolvedProps = usePropResolution(props);

    return (
      <AccessibleLink {...resolvedProps} ref={ref} justi>
        {typeof children === 'string' ? (
          <AccessibleText {..._text}>{children}</AccessibleText>
        ) : (
          children
        )}
      </AccessibleLink>
    );
  }
);

// export type ILinkComponentType<Link> = GenericComponentType<Link>;

// export const Link = LinkTemp as ILinkComponentType<typeof AccessibleLink>;
