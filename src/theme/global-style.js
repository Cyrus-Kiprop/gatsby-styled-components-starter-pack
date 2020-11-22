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
}

export const GlobalStyle = createGlobalStyle`
${reset}

html {
    box-sizing: border-box;
    --webkit-box-sizing: border-box;
    --moz-box-sizing: border-box;
    scroll-behavior: smooth;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 16px;
    color: '#1a202c';

}

*, *:before, *:after {
    box-sizing: inherit;
}

body {
    line-height: 1.5;
    letter-spacing: 0;
    background-color: '#f7fafc';
}
`
