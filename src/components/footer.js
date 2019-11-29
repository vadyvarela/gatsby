import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styleFooter from "./styles/footer.module.scss"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)
  return (
    <footer className={styleFooter.footer}>
      <p className={styleFooter.title}>
        {" "}
        Create with love by {data.site.siteMetadata.author}{" "}
        <small> &copy; 2019 </small>{" "}
      </p>
    </footer>
  )
}

export default Footer
