// all the base global styles live in this directory
// start by adding some resets

import { createGlobalStyle } from "styled-components"
import reset from "styled-reset"

// theme provider object
export const theme = {
  font: {
    sans: "Cambay, sans-serif",
    serif: "Arvo, sans",
    fira: "Fira Code, san-serif",
    monospace: '"Ubuntu Mono", monospace',
  },

  fontSize: {
    xs: "0.75rem",
    sm: "0.875rem",
    base: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
    "6xl": "4rem",
  },

  fontWeight: {
    hairline: "100",
    thin: "200",
    light: "300",
    normal: "400",
    medium: "500",
    semibold: "600",
    bold: "700",
    extrabold: "800",
    black: "900",
  },
}

export const GlobalStyle = createGlobalStyle`
${reset}

html {
    box-sizing: border-box;
    --webkit-box-sizing: border-box;
    --moz-box-sizing: border-box;
    scroll-behavior: smooth;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-family: ${({ theme }) => theme.font.fira};
    font-size: ${({ theme }) => theme.fontSize.lg};
    color: ${({ theme }) => theme.colours.grey[900]};

}

*, *:before, *:after {
    box-sizing: inherit;
}

body {
    line-height: ${({ theme }) => theme.lineHeight.relaxed};
    letter-spacing: ${({ theme }) => theme.letterSpacing.wide};
    background-color: ${({ theme }) => theme.colours.white};
}
`
