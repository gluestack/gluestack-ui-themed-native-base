import { useContext } from 'react';
import { HooksContext } from '../components/Provider';

export function useColorModeValue(prop1: any, prop2: any) {
  const { colorMode } = useContext(HooksContext);
  if (colorMode === 'light') return prop1;
  return prop2;
}
