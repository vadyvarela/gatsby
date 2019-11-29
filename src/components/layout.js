import React from "react"

import Header from "./header"
import Footer from "./footer"

import styleLayout from "./styles/layout.module.scss"

import "../styles/index.scss"

const Layout = props => {
  return (
    <div className={styleLayout.container}>
      <div className={styleLayout.content}>
        <Header />
        {props.children}
      </div>

      <Footer />
    </div>
  )
}

export default Layout
