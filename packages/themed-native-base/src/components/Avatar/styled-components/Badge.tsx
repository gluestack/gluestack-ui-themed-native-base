import { View } from 'react-native';
import { styled } from '../../styled';

export default styled(
  View,
  {
    w: '$5',
    h: '$5',
    bg: '$green.500',
    borderRadius: '$full',
    position: 'absolute',
    right: 0,
    bottom: 0,
    borderColor: 'white',
    borderWidth: 2,
    zIndex: 999,
  },
  { ancestorStyle: ['_badge'] }
);
