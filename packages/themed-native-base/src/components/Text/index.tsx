import React, { createContext, useContext } from 'react';
import { usePropResolution } from '../../hooks/usePropResolution';
import { Root as AccessibleText } from './styled-components';
import { GenericComponentType } from '../../types';
import { deepMerge } from '../../utils';
import { filterProps } from '../../utils/NBsupport';

const TextAncestorContext = createContext({
  hasTextAncestor: false,
  propsPassed: {},
});

const TextTemp = ({ children, ...props }: any) => {
  const { hasTextAncestor, propsPassed } = useContext(TextAncestorContext);
  let finalPropsToApply = props;
  if (hasTextAncestor) {
    finalPropsToApply = deepMerge(propsPassed, props);
  }
  const resolvedPropForGluestack = usePropResolution(finalPropsToApply);

  const finalPropsToPassDown = filterProps(finalPropsToApply);

  return (
    <TextAncestorContext.Provider
      value={{
        hasTextAncestor: true,
        propsPassed: finalPropsToPassDown,
      }}
    >
      <AccessibleText {...resolvedPropForGluestack}>{children}</AccessibleText>
    </TextAncestorContext.Provider>
  );
};

export type ITextComponentType<Text> = GenericComponentType<Text>;

// @ts-ignore
export const Text = TextTemp as ITextComponentType<typeof AccessibleText>;
