import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Head from "../components/head"

const AbouPage = () => {
  return (
    <div>
      <Layout>
        <Head title="About" />
        <h1>About</h1>
        <p>Lorem ipusum ...</p>

        <p>
          Need a solution <Link to="/contact">Contact Me </Link>{" "}
        </p>
      </Layout>
    </div>
  )
}

export default AbouPage
