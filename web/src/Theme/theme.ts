export const Theme = {
  primary: {
    text: null,
    line: null,
    background: null,
    shadow: null,
  },

  secondary: {
    text: null,
    line: null,
    background: null,
    shadow: null,
  },

  tertiary: {
    text: null,
    line: null,
    background: null,
    shadow: null,
  },
};

interface IPallete {
  background: string;
  text: string;
  line: string;
  shadow: string;
}

export interface ITheme {
  primary: IPallete;

  secondary: IPallete;

  tertiary: IPallete;
}
