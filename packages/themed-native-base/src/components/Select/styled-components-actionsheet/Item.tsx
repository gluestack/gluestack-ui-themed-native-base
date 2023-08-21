import { styled } from '../../styled';
import { Pressable } from 'react-native';

export default styled(
  Pressable,
  {
    'p': '$3',
    'flexDirection': 'row',
    'alignItems': 'center',
    'rounded': '$sm',
    'w': '100%',

    ':disabled': {
      opacity: 0.4,
      _web: {
        // @ts-ignore
        pointerEvents: 'all !important',
        cursor: 'not-allowed',
      },
    },

    ':hover': {
      bg: '$backgroundLight100',
    },

    ':active': {
      bg: '$backgroundLight200',
    },

    ':focus': {
      bg: '$backgroundLight100',
    },

    '_dark': {
      ':hover': {
        bg: '$backgroundDark800',
      },

      ':active': {
        bg: '$backgroundDark700',
      },

      ':focus': {
        bg: '$backgroundDark800',
      },
    },

    '_web': {
      ':focusVisible': {
        bg: '$backgroundLight100',
        _dark: {
          bg: '$backgroundDark700',
        },
      },
    },
  },
  {
    descendantStyle: ['_text'],
    DEBUG: 'ACTIONSHEET_ITEM',
  }
);
