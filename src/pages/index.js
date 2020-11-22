import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { H1 } from "../components/page-elements/h1"
import { P } from "../components/page-elements/p"

const IndexPage = () => (
  // <Layout>
  <>
    <SEO title="Home" />
    <H1>Hi people</H1>
    <P>Welcome to your new Gatsby site.</P>
    <P>Now go build something great.</P>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    {/* </Layout> */}
  </>
)

export default IndexPage
