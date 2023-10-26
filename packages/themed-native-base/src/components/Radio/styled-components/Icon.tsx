import { styled } from '@gluestack-style/react';
import { StyledIcon } from '../../Icons/styled-components';

export default styled(
  StyledIcon,
  {
    height: '$full',
    width: '$full',
    color: "$red.700"
  },
  {
    componentName: 'RadioIcon',
    ancestorStyle: ['_icon'],
    resolveProps: ['color'],
  } as const
);
