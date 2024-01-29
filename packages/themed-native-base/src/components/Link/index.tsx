import React, { forwardRef } from 'react';
import { Root, Text } from './styled-components';
import { createLink } from '@gluestack-ui/link';
import { usePropResolution } from '../../hooks/usePropResolution';
// import { GenericComponentType } from '../../types';

const AccessibleLink = createLink({
  Root,
  Text,
});

export const Link = forwardRef(
  ({ children, _text, ...props }: any, ref?: any) => {
    const resolvedProps = usePropResolution({
      ...props,
      _linkText: { ..._text },
      _text: { ..._text },
    });

    return (
      <AccessibleLink {...resolvedProps} ref={ref}>
        {typeof children === 'string' ? (
          <AccessibleLink.Text>{children}</AccessibleLink.Text>
        ) : (
          children
        )}
      </AccessibleLink>
    );
  }
);

// export type ILinkComponentType<Link> = GenericComponentType<Link>;

// export const Link = LinkTemp as ILinkComponentType<typeof AccessibleLink>;
