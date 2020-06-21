export declare const theme: {
  colors: {
    primary: string;
    secondary: string;
    red0: string;
    red1: string;
    red2: string;
    red3: string;
    light: string;
  };
  breakpoints: number[];
  borderWidths: number[];
  fontSizes: number[];
  space: number[];
  sizes: number[];
  fonts: {
    sans: string;
    mono: string;
  };
  fontWeights: {
    normal: string;
    medium: number;
    bold: string;
  };
  shadows: {
    small: string;
    large: string;
  };
};

export declare const renderWithTheme: (
  Comp: any,
  props?: any
) => {
  firstChild: HTMLElement;
  debug: any;
};

export declare const testBreakpoints: (title: string, cb: any) => any;
