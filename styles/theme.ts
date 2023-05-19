import { extendTheme, ChakraTheme } from '@chakra-ui/react';

const customTheme: Partial<ChakraTheme> = {
  config: {
    initialColorMode: 'system',
  },
  fonts: {
    heading: 'Roboto',
    body: 'Roboto',
  },
};

export const theme = extendTheme(customTheme);