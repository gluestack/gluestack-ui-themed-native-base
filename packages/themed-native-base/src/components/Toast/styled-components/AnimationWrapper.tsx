import { styled } from '@gluestack-style/react';
import { MotionAnimationDriver } from '@gluestack-style/legend-motion-animation-driver';
import {
  AnimationResolver,
  AnimatedView,
} from '@gluestack-style/animation-resolver';

export default styled(
  AnimatedView,
  {
    m: '$3',
    padding: '$2',
    backgroundColor: `$muted.700`,
    _dark: {
      backgroundColor: `$muted.600`,
    },

    borderRadius: '$sm',
    flexDirection: 'row',
    _web: {
      pointerEvents: 'auto',
    },
    defaultProps: {
      shadow: '6',
    },
  },
  {
    componentName: 'ToastAnimationWrapper',
  } as const,
  {
    plugins: [new AnimationResolver(MotionAnimationDriver)],
  }
);
