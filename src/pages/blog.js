import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import Head from "../components/head"
import BlogStyle from "./blog.module.scss"

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            title
            slug
            publishedDate(fromNow: true)
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <Head title="Blog" />
      <h1>Blog</h1>

      <ol className={BlogStyle.posts}>
        {data.allContentfulBlogPost.edges.map(edge => {
          return (
            <li className={BlogStyle.post} key={edge.node.title}>
              <Link to={`/blog/${edge.node.slug}`}>
                <h2> {edge.node.title} </h2>
                <small> {edge.node.publishedDate} </small>
              </Link>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default BlogPage
