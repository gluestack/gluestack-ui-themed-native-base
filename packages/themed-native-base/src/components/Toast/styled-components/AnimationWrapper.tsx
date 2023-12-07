import { styled } from '@gluestack-style/react';
import { AnimatedView } from '@gluestack-style/animation-resolver';
export default styled(
  AnimatedView,
  {
    m: '$3',
    backgroundColor: 'white',
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
  } as const
);
