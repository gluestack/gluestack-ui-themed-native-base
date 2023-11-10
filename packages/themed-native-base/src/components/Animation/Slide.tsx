import React, { forwardRef } from 'react';
import { Box } from '../Box';
import { PresenceTransition } from './PresenceTransition';
import { Overlay } from '@gluestack-ui/overlay';

const holderStyle: any = {
  top: {
    top: 0,
    right: 0,
    left: 0,
  },
  right: {
    right: 0,
    top: 0,
    bottom: 0,
  },
  bottom: {
    bottom: 0,
    right: 0,
    left: 0,
  },
  left: {
    left: 0,
    bottom: 0,
    top: 0,
  },
};

export const Slide = forwardRef(
  (
    {
      children,
      in: visible,
      placement = 'top',
      overlay = true,
      duration,
      _overlay = { style: { overflow: 'hidden' }, isOpen: true },
      ...props
    }: any,
    ref: any
  ) => {
    const [containerOpacity, setContainerOpacity] = React.useState(0);
    const [size, setSize] = React.useState(0);
    const provideSize = (layoutSize: any) => {
      if (placement === 'right' || placement === 'left')
        setSize(layoutSize.width);
      else setSize(layoutSize.height);
      setContainerOpacity(1);
    };

    const transition = { duration };

    const animationStyle: any = {
      top: {
        initial: {
          translateY: -size,
        },
        animate: {
          translateY: 0,
          transition,
        },
      },
      bottom: {
        initial: {
          translateY: size,
        },
        animate: {
          translateY: 0,
          transition,
        },
        exit: {
          translateY: size,
          transition,
        },
      },
      left: {
        initial: {
          translateX: -size,
        },
        animate: {
          translateX: 0,
          transition,
        },
      },
      right: {
        initial: {
          translateX: size,
        },
        animate: {
          translateX: 0,
          transition,
        },
      },
    };

    const style = [
      { position: 'absolute' },
      holderStyle[placement],
      { height: '100%' },
    ];

    const slideComponent = (
      <PresenceTransition
        visible={visible}
        {...animationStyle[placement]}
        style={style}
      >
        <Box
          {...props}
          opacity={containerOpacity}
          ref={ref}
          onLayout={(e) => provideSize(e.nativeEvent.layout)}
        >
          {children}
        </Box>
      </PresenceTransition>
    );

    if (overlay) {
      return (
        <>
          <Overlay isKeyboardDismissable={false} {..._overlay}>
            {slideComponent}
          </Overlay>
        </>
      );
    } else {
      return slideComponent;
    }
  }
);

export default Slide;
