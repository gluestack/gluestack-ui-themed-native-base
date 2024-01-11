import { useContext } from 'react';
import { HooksContext } from '../components/Provider';

export function useColorMode() {
  const { colorMode, toggleColorMode } = useContext(HooksContext) as {
    colorMode: string;
    toggleColorMode: any;
  };
  // const toggleColorMode = () => {
  //   setColorMode((prevColorMode: string) => {
  //     return prevColorMode === 'light' ? 'dark' : 'light';
  //   });
  // };
  return { colorMode: colorMode, toggleColorMode: toggleColorMode };
}
