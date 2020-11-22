import React from "react"
import Layout from "./src/components/layout"
import { GlobalStyle } from "./src/theme/global-style"

export const WrapRootElement = ({ element }) => {
  return (
    <div>
      <GlobalStyle />
      <Layout>{element}</Layout>
    </div>
  )
}
