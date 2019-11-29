import React from "react"

import Layout from "../components/layout"
import Head from "../components/head"

const ContactPage = () => {
  return (
    <div>
      <Layout>
        <Head title="Contact" />
        <h1>Contact Us</h1>
        <p>Details of contact ...</p>

        <a target="_blank" href="https://facebook.com/vady.varela">
          {" "}
          Facebook
        </a>
      </Layout>
    </div>
  )
}

export default ContactPage
