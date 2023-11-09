import { Root, Text } from './styled-components';
import { createLink } from '@gluestack-ui/link';
import { forwardRef } from 'react';
import React from 'react';
import { usePropResolution } from '../../hooks/usePropResolution';
// import { GenericComponentType } from '../../types';

const AccessibleLink = createLink({
  Root,
  Text,
});

export const Link = forwardRef(
  (
    { children, ...props }: React.ComponentProps<typeof AccessibleLink>,
    ref?: any
  ) => {
    const resolvedProps = usePropResolution(props);
    const isUnderlineText = resolvedProps['isUnderlined'];
    return (
      <AccessibleLink {...resolvedProps} ref={ref}>
        {typeof children === 'string' ? (
          <AccessibleLink.Text
            textDecorationLine={
              isUnderlineText !== undefined && isUnderlineText == false
                ? 'none'
                : 'underline'
            }
          >
            {children}
          </AccessibleLink.Text>
        ) : (
          children
        )}
      </AccessibleLink>
    );
  }
);

// export type ILinkComponentType<Link> = GenericComponentType<Link>;

// export const Link = LinkTemp as ILinkComponentType<typeof AccessibleLink>;
