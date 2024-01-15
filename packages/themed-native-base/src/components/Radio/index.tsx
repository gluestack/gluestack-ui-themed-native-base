import { cloneElement, forwardRef, createContext, useContext } from 'react';
import { Root, Group, Icon, Indicator, Label } from './styled-components';
import { createRadio } from '@gluestack-ui/radio';
import { usePropResolution } from '../../hooks/usePropResolution';
import React from 'react';
import { CircleIcon } from '../Icons';
import { GenericComponentType, IColorSchemes } from '../../types';

const AccessibleRadio = createRadio({
  Root,
  Group,
  Icon,
  Indicator,
  Label,
});

const RadioGroupContext = createContext<any>({});

const AccessibleRadioGroup = forwardRef(
  (
    { children, colorScheme, size, _radio = {}, isDisabled, ...props }: any,
    ref?: any
  ) => {
    const resolvedProps = usePropResolution(props);
    return (
      <RadioGroupContext.Provider
        value={{
          colorScheme: colorScheme,
          radioProps: _radio,
          size: size,
          isDisabled: isDisabled,
        }}
      >
        <AccessibleRadio.Group {...resolvedProps} ref={ref}>
          {children}
        </AccessibleRadio.Group>
      </RadioGroupContext.Provider>
    );
  }
) as any;

const RadioTemp = forwardRef(
  (
    {
      colorScheme,
      icon: IconPassed,
      _stack = {},
      children,
      wrapperRef,
      isHovered,
      isPressed,
      isFocused,
      value,
      isDisabled,
      isFocusVisible,
      isInvalid,
      _interactionBox = {},
      ...props
    }: any,
    ref?: any
  ) => {
    const {
      colorScheme: colorSchemeFromGroup,
      radioProps,
      size,
      isDisabled: isDisabledFromGroup,
    } = useContext(RadioGroupContext);
    let RadioSize = {};
    let RadioIndicatorSize = {};
    if (size) {
      if (Number(size)) {
        RadioIndicatorSize = { size: size };
      } else {
        RadioSize = { size: size };
      }
    }
    const {
      _stack: stackProps,
      _interactionBox: interactionBoxProps,
      restProps,
    } = radioProps;

    const resolvedPropsForIndicator = usePropResolution({
      ...RadioIndicatorSize,
      ...restProps,
      ...props,
    });

    const resolvedPropsForRadio = usePropResolution({
      ...RadioSize,
      ...stackProps,
      ...interactionBoxProps,
      ..._stack,
      ..._interactionBox,
    });

    return (
      <AccessibleRadio
        colorScheme={colorSchemeFromGroup ?? colorScheme ?? 'primary'}
        isHovered={isHovered}
        isFocused={isFocused}
        isFocusVisible={isFocusVisible}
        isDisabled={isDisabledFromGroup ?? isDisabled}
        isInvalid={isInvalid}
        isActive={isPressed}
        value={value}
        {...resolvedPropsForRadio}
        ref={ref}
      >
        <AccessibleRadio.Indicator
          {...resolvedPropsForIndicator}
          alignItems="center"
          justifyContent="center"
          ref={wrapperRef}
        >
          <AccessibleRadio.Icon
            as={
              IconPassed
                ? () =>
                    cloneElement(IconPassed, {
                      h: 'full',
                      w: 'full',
                    })
                : CircleIcon
            }
          />
        </AccessibleRadio.Indicator>
        {children && <AccessibleRadio.Label>{children}</AccessibleRadio.Label>}
      </AccessibleRadio>
    );
  }
) as any;

RadioTemp.Group = AccessibleRadioGroup;

export type IRadioComponentType<Radio, Group> = GenericComponentType<
  Radio,
  {},
  { colorScheme: IColorSchemes }
> & {
  Group: GenericComponentType<Group>;
};

export const Radio = RadioTemp as IRadioComponentType<
  typeof AccessibleRadio,
  typeof AccessibleRadio.Group
>;
