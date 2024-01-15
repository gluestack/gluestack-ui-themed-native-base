import { styled } from '@gluestack-style/react';
import { StyledIcon } from '../../Icons/styled-components';

export default styled(
  StyledIcon,
  {
    justifyContent: 'center',
    alignItems: 'center',
    mr: '$3',
    variants: {
      size: {
        xs: {
          height: 12,
          width: 12,
        },
        sm: {
          height: 16,
          width: 16,
        },
        md: {
          height: 18,
          width: 18,
        },
        lg: {
          height: 20,
          width: 20,
        },
        xl: {
          height: 24,
          width: 24,
        },
      },
    },
    defaultProps: {
      size: 'md',
    },
  },
  {
    ancestorStyle: ['_icon'],
  },
  {
    propertyTokenMap: {
      stroke: 'colors',
    },
  }
);
