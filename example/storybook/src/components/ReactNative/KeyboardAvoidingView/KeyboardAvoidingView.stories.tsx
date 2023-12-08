import type { ComponentMeta } from '@storybook/react-native';
import React from 'react';
import { Example } from './KeyboardAvoidingView';
export const KeyboardAvoidingView = () => {
  return <Example />;
};
const KeyboardAvoidingViewMeta: ComponentMeta<typeof KeyboardAvoidingView> = {
  title: 'stories/REACT NATIVE/KeyboardAvoidingView',
  component: KeyboardAvoidingView,
};

export default KeyboardAvoidingViewMeta;
