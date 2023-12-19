import { AccessibleText as Text } from '../../Text';
import { styled } from '@gluestack-style/react';

export default styled(
  Text,
  {
    // @ts-ignore
    fontSize: '$xs',
    fontWeight: '$medium',
    lineHeight: '$lg',
  },
  {
    componentName: 'BadgeText',
    ancestorStyle: ['_text'],
  } as const
);
