import { styled } from '@gluestack-style/react';
import { StyledIcon } from '../../Icons/styled-components';

export default styled(
  StyledIcon,
  {
    width: '$4',
    height: '$4',
    marginRight: '$2',
    _icon: {
      color: '$backgroundLight.500',
      _dark: {
        color: '$backgroundDark.400',
      },
    },
  },
  {
    descendantStyle: ['_icon'],
  }
);
