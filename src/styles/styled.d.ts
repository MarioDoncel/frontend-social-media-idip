// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    color: {
      dark: string,
      black: string,
      light: string,
      grey: string,
      primary: string,
      secondary: string,
      success: string,
      danger: string,
    }
  }
}