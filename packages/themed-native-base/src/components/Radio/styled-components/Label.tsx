import { Root as Text } from '../../Text/styled-components';
import { styled } from '@gluestack-style/react';

export default styled(Text, {}, {
  componentName: 'RadioLabel',
  ancestorStyle: ['_text'],
} as const);
