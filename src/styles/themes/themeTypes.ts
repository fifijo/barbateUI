interface Theme {
  default: object
}

interface Text {
  font: {
    heading: string;
    body: string;
  };
  size: {
    heading: {
      desktop: {
        h1: number;
        h2: number;
        h3: number;
        h4: number;
        h5: number;
        h6: number;
      };
    },
    body: {
      desktop: {
        regular: number;
      }
    }
  },
  weight: {
    light: number,
    regular: number,
    bold: number,
  }
}

interface Colors {
  primary: {
    primary1: string
  },
  secondary: {
    secondary1: string
  }
}

interface Typography {
  primary: {
    primary1: string
  },
  secondary: {
    secondary1: string
  }
}

export {
  Text,
  Theme,
  Colors,
  Typography
}
