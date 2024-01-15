import { styled } from '@gluestack-style/react';
import { TextStyleResolver } from '../../../plugins';
import { AccessibleHeading } from '../../Heading';

export default styled(
  AccessibleHeading,
  {
    color: '$textLight500',
    fontSize: '$sm',
    fontFamily: '$body',
    fontWeight: '$bold',
    lineHeight: '$xs',
    textTransform: 'uppercase',
    padding: '$3',
    _dark: {
      color: '$textDark.400',
    },
  },
  {
    componentName: 'ActionsheetSectionHeaderText',
    ancestorStyle: ['_sectionHeaderText'],
  } as const,
  {
    plugins: [new TextStyleResolver()],
  }
);
