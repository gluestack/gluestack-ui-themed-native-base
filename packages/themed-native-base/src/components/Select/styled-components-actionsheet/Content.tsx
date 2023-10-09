import { Motion } from '@legendapp/motion';
import { styled } from '@gluestack-style/react';
import { AnimationResolver } from '@gluestack-style/animation-plugin';

export default styled(
  Motion.View,
  {
    alignItems: 'center',
    borderTopLeftRadius: '$3xl',
    borderTopRightRadius: '$3xl',
    maxHeight: '70%',
    p: '$2',
    bg: '$backgroundLight0',
    _sectionHeaderBackground: {
      bg: '$backgroundLight0',
    },
    _dark: {
      bg: '$backgroundDark900',
      _sectionHeaderBackground: {
        bg: '$backgroundDark900',
      },
    },
    _web: {
      userSelect: 'none',
    },
    defaultProps: {
      hardShadow: '5',
    },
  },
  {
    componentName: 'SelectActionsheetContent',
    descendantStyle: ['_sectionHeaderBackground'],
  } as const,
  {
    plugins: [new AnimationResolver({})],
  }
);
