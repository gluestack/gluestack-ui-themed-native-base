import React, { createContext, useContext } from 'react';
import { usePropResolution } from '../../hooks/usePropResolution';
import { Root as AccessibleText } from './styled-components';
import { GenericComponentType } from '../../types';
import { deepMerge } from '../../utils';

const TextAncestorContext = createContext({
  propsPassed: {},
});

const TextTemp = ({ children, ...props }: any) => {
  const { propsPassed } = useContext(TextAncestorContext);
  const finalProps = deepMerge(propsPassed, props);
  const resolvedPropForGluestack = usePropResolution(finalProps);

  return (
    <TextAncestorContext.Provider
      value={{
        propsPassed: finalProps,
      }}
    >
      <AccessibleText {...resolvedPropForGluestack}>{children}</AccessibleText>
    </TextAncestorContext.Provider>
  );
};

export type ITextComponentType<Text> = GenericComponentType<Text>;

export const Text = TextTemp as ITextComponentType<typeof AccessibleText>;

export { AccessibleText };
