// all the base global styles live in this directory
// start by adding some resets

import { createGlobalStyle } from "styled-components"
import reset from "styled-reset"

export const GlobalStyle = createGlobalStyle`
${reset}
/* add some browser base styles */

html {
    box-sizing: border-box
}

*, *:before, *:after {
    box-sizing: inherit;
}

`
