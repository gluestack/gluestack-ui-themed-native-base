import { useStyled } from '@gluestack-style/react';
import { modifyConfig } from '../utils';

export const useTheme = () => {
  const { config } = useStyled();
  const theme = modifyConfig(config);
  return theme;
};
