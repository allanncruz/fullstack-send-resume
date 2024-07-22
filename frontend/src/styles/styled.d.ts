import 'styled-components';

declare module 'styled-components' {
  export interface defaultTheme {
    title: 'string',
    colors: {
      primary: 'string',
      primaryLight: 'string',
      secondary: 'string',

      white: 'string',
      black: 'string',
      gray: 'string',
    },
  };
}