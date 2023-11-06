import { addParameters } from '@storybook/client-api';
import { DocsContainer } from '@storybook/addon-docs/blocks';
import {
  Center,
  GluestackUIProvider,
  NativeBaseProvider,
  extendTheme,
} from '@gluestack-ui/themed';
import { config } from '@gluestack-ui/themed';
import { useState } from 'react';
export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: {
    // inlineStories: false,
  },
  options: {
    storySort: {
      method: '',
      order: [
        'Overview',
        ['Introduction', 'Accessibility'],
        'Getting Started',
        ['Installation'],

        'Configuration',
        ['Theme Tokens', 'Server-Side Rendering', 'React Server Components'],
        'Components',
        [
          'Provider',
          ['GluestackUIProvider'],
          'Typography',
          ['Heading', 'Text'],
          'Layout',
          ['Box', 'Center', 'Divider', 'Stack', 'HStack', 'VStack'],
          'Feedback',
          ['Alert', 'Progress', 'Spinner', 'Toast'],
          'Data Display',
          ['Badge', 'Table'],
          'Forms',
          [
            'Button',
            'Checkbox',
            'FormControl',
            'Input',
            'iconButton',
            'Link',
            'Pressable',
            'Radio',
            'Select',
            'Slider',
            'Switch',
            'Tabs',
            'Textarea',
          ],
          'Overlay',
          ['AlertDialog', 'Menu', 'Modal', 'Popover', 'Tooltip'],
          'Disclosure',
          ['Actionsheet', 'Accordion', 'Tabs'],
          'Media And Icons',
          ['Avatar', 'Icon', 'Image'],
          'Others',
          ['Fab'],
        ],
        'Guides',
        ['Install in Next.js', 'Install in Expo', 'Install in React Native'],
        'Advanced',
        ['Fonts', 'Animations', 'CLI'],
        'More',
        ['Roadmap', 'Changelog'],
      ],
    },
  },
};

import { useDarkMode } from '../src/hooks/useDarkMode';
import { Platform } from 'react-native';

export const decorators = [
  (Story) => {
    let value = false;

    if (Platform.OS === 'web') {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      value = useDarkMode();
    }
    const [isDark] = useState(false);

    function getColorMode() {
      //@ts-ignore
      if (Platform.OS === 'web') {
        return value ? 'dark' : 'light';
      } else {
        return isDark ? 'dark' : 'light';
      }
    }

    // console.log(NativeBaseProvider, "h")

    return (
      <NativeBaseProvider
        config={config.theme}
        theme={extendTheme({
          colors: {
            // Add new color
            primary: {
              50: '#E3F2F9',
              100: '#C5E4F3',
              200: '#A2D4EC',
              300: '#7AC1E4',
              400: '#47A9DA',
              500: '#0088CC',
              600: '#007AB8',
              700: '#006BA1',
              800: '#005885',
              900: '#003F5E',
            },
            // Redefining only one shade, rest of the color will remain same.
            amber: {
              400: '#d97706',
            },
          },

          components: {
            Box: {
              baseStyle: {
                color: 'emerald.400',
              },
              defaultProps: {
                size: 'lg',
              },
              sizes: {
                xl: {
                  fontSize: '64px',
                },
                lg: {
                  fontSize: '32px',
                },
                md: {
                  fontSize: '16px',
                },
                sm: {
                  fontSize: '12px',
                },
              },
            },
          },
        })}
        colorMode={getColorMode()}
      >
        <Center>
          <Story />
        </Center>
      </NativeBaseProvider>
    );

    // return (
    //   <GluestackUIProvider config={config.theme} colorMode={getColorMode()}>
    //     <Center>
    //       <Story />
    //     </Center>
    //   </GluestackUIProvider>
    // );
  },
];

addParameters({
  docs: {
    container: ({ children, context }) => {
      let value = false;

      if (Platform.OS === 'web') {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        value = useDarkMode();
      }
      const [isDark] = useState(false);

      function getColorMode() {
        //@ts-ignore
        if (Platform.OS === 'web') {
          return value ? 'dark' : 'light';
        } else {
          return isDark ? 'dark' : 'light';
        }
      }
      return (
        <DocsContainer context={context}>
          {/* <GluestackUIProvider config={config.theme} colorMode={getColorMode()}> */}
          {children}
          {/* </GluestackUIProvider> */}
        </DocsContainer>
      );
    },
  },
});
