import { useStyled } from '@gluestack-style/react';

export const useTheme = () => {
  const { config } = useStyled();
  return config.tokens;
};
