import { styled } from '@gluestack-style/react';
import { StyledIcon } from '../../Icons/styled-components';

export default styled(
  StyledIcon,
  {
    props: {
      size: 'md',
    },
  },
  {
    componentName: 'BadgeIcon',
    ancestorStyle: ['_icon'],
    descendantStyle: ['_icon'],
  } as const
);
