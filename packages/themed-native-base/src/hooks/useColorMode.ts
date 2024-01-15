import { useContext } from 'react';
import { HooksContext } from '../components/Provider';

export function useColorMode() {
  return useContext(HooksContext) as {
    colorMode: string;
    toggleColorMode: () => {};
  };
}
