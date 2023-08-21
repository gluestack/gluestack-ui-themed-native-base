import { styled } from '../../styled';
import { Pressable } from 'react-native';

export default styled(
  Pressable,
  {
    // h: '100%',
    // w: '100%',
    bg: '$backgroundLight300',
    _dark: {
      bg: '$backgroundDark700',
    },
    borderRadius: '$lg',
    overflow: 'hidden',

    variants: {
      variant: {
        horizontal: {
          width: '100%',
        },
        vertical: {
          height: '100%',
        },
      },
    },
  },
  {
    ancestorStyle: ['_track'],
  }
);
