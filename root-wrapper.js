import React from "react"
import Layout from "./src/components/layout"
import { GlobalStyle, theme } from "./src/theme/global-style"
import { ThemeProvider } from "styled-components"

export const WrapRootElement = ({ element }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Layout>{element}</Layout>
    </ThemeProvider>
  )
}
