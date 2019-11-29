import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import styleHeader from "./styles/header.module.scss"

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <header className={styleHeader.header}>
      <h1>
        <Link className={styleHeader.title} to="/">
          {data.site.siteMetadata.title}
        </Link>
      </h1>

      <nav>
        <ul className={styleHeader.navList}>
          <li>
            {" "}
            <Link
              className={styleHeader.navItem}
              activeClassName={styleHeader.activeNavItem}
              to="/"
            >
              {" "}
              HOME
            </Link>
          </li>
          <li>
            {" "}
            <Link
              className={styleHeader.navItem}
              activeClassName={styleHeader.activeNavItem}
              to="/about"
            >
              {" "}
              ABOUT
            </Link>
          </li>
          <li>
            {" "}
            <Link
              className={styleHeader.navItem}
              activeClassName={styleHeader.activeNavItem}
              to="/blog"
            >
              {" "}
              BLOG
            </Link>
          </li>
          <li>
            {" "}
            <Link
              className={styleHeader.navItem}
              activeClassName={styleHeader.activeNavItem}
              to="/contact"
            >
              {" "}
              CONTACT
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
