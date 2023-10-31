// import { AnimationResolver } from '@gluestack-style/animation-plugin';
import { styled } from '@gluestack-style/react';
import { Motion } from '@legendapp/motion';
import {
  AnimationResolver,
  AnimatedView,
} from '@gluestack-style/animation-resolver';
import { MotionAnimationDriver } from '@gluestack-style/legend-motion-animation-driver';

export default styled(
  AnimatedView,
  {
    // @ts-ignore
    'bg': '$muted.50',
    // @ts-ignore
    'rounded': '$lg',
    'overflow': 'hidden',
    //@ts-ignore
    ':initial': {
      scale: 0.9,
      opacity: 0,
    },
    ':animate': {
      scale: 1,
      opacity: 1,
    },
    ':exit': {
      scale: 0.9,
      opacity: 0,
    },
    ':transition': {
      type: 'spring',
      damping: 18,
      stiffness: 250,
      opacity: {
        type: 'timing',
        duration: 250,
      },
    },

    '_dark': {
      backgroundColor: '$muted.800',
    },
    'defaultProps': {
      shadow: '1',
    },
  },
  {
    componentName: 'AlertDialogContent',
    ancestorStyle: ['_content'],
  } as const,
  {
    plugins: [new AnimationResolver(MotionAnimationDriver)],
  }
);
