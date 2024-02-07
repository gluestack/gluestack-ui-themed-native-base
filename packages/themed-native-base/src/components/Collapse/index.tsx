import React, { useEffect, useRef, forwardRef } from 'react';
import { LayoutAnimation, UIManager, Platform } from 'react-native';
import { Box } from '../Box';

function usePrevious(value: any) {
  const ref = useRef();
  function updatePrevious(newVal: any) {
    ref.current = newVal;
  }
  useEffect(() => {
    updatePrevious(value);
  }, [value]);
  return { value: ref.current, updatePrevious };
}

export const Collapse = forwardRef(
  (
    {
      endingHeight,
      startingHeight,
      duration,
      // animateOpacity,
      isOpen,
      onAnimationEnd,
      onAnimationStart,
      ...props
    }: any,
    ref?: any
  ) => {
    if (Platform.OS === 'android') {
      UIManager.setLayoutAnimationEnabledExperimental &&
        UIManager.setLayoutAnimationEnabledExperimental(true);
    }
    const CustomLayoutLinear = {
      duration: duration ? duration : 400,
      create: {
        type: LayoutAnimation.Types.easeInEaseOut,
        property: LayoutAnimation.Properties.opacity,
      },
      update: {
        type: LayoutAnimation.Types.easeInEaseOut,
      },
    };
    const defaultStartHeight: any = isOpen
      ? endingHeight
      : startingHeight
      ? startingHeight
      : 1;
    let animatedStyle = { height: defaultStartHeight };
    const animateView = () => {
      if (onAnimationStart) {
        onAnimationStart();
      }
      animatedStyle = {
        height: isOpen ? endingHeight : defaultStartHeight,
      };
      const callback = onAnimationEnd ? onAnimationEnd : () => {};
      LayoutAnimation.configureNext(CustomLayoutLinear, callback());
    };

    const wasOpen = usePrevious(isOpen);
    if (wasOpen?.value && wasOpen.value !== isOpen) {
      animateView();
      wasOpen.updatePrevious(isOpen);
    }
    const [size, setSize] = React.useState(startingHeight ?? 0);
    const provideSize = (layoutSize: any) => {
      setSize(layoutSize.height);
    };
    const _web = {
      transition: `height ${duration ?? '400'}ms`,
      height: isOpen ? endingHeight || size : startingHeight || 0,
    };

    return (
      <Box
        style={{ ...animatedStyle, ...(Platform.OS === 'web' && _web) }}
        overflow="hidden"
        ref={ref}
      >
        <Box
          overflow={Platform.OS === 'web' ? 'auto' : 'scroll'}
          onLayout={(e: any) => provideSize(e.nativeEvent.layout)}
          {...props}
        />
      </Box>
    );
  }
);
