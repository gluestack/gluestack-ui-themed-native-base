import { Text } from 'react-native';
import { styled } from '../../styled';

export default styled(
  Text,
  {
    mx: '$2',
    fontSize: '$md',
    fontFamily: '$body',
    fontWeight: '$normal',
    lineHeight: '$md',
    color: '$textLight700',
    _dark: {
      color: '$textDark200',
    },
  },
  { ancestorStyle: ['_text'] }
);
