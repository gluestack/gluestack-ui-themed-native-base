import { styled } from '@gluestack-style/react';
import {
  AnimationResolver,
  AnimatedView,
} from '@gluestack-style/animation-resolver';
import { MotionAnimationDriver } from '@gluestack-style/legend-motion-animation-driver';

export default styled(
  AnimatedView,
  {
    alignItems: 'center',
    // @ts-ignore
    borderTopLeftRadius: '$3xl',
    // @ts-ignore
    borderTopRightRadius: '$3xl',
    maxHeight: '70%',
    padding: '$2',
    backgroundColor: '$backgroundLight.0',
    _sectionHeaderBackground: {
      backgroundColor: '$backgroundLight.0',
    },
    _dark: {
      backgroundColor: '$backgroundDark.900',
      _sectionHeaderBackground: {
        backgroundColor: '$backgroundDark.900',
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
    plugins: [new AnimationResolver(MotionAnimationDriver)],
  }
);
