import { Motion } from '@legendapp/motion';
import { styled } from '@gluestack-style/react';
import { AnimationResolver } from '@gluestack-style/animation-plugin';

export default styled(
  Motion.View,
  {
    // @ts-ignore
    'bg': '$muted.50',
    // @ts-ignore
    'rounded': '$md',
    // @ts-ignore
    'borderWidth': 1,
    'borderColor': '$muted.300',
    'overflow': 'hidden',
    //@ts-ignore
    ':initial': {
      opacity: 0,
    },
    ':animate': {
      opacity: 1,
    },
    ':exit': {
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
      borderColor: '$muted.700',
    },

    'defaultProps': {
      shadow: '6',
    },
  },
  {
    componentName: 'PopoverContent',
    ancestorStyle: ['_content'],
  } as const,
  {
    plugins: [new AnimationResolver({})],
  }
);
