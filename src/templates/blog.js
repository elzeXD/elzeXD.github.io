import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import Layout from "../components/layout"
import Styles from "../styles/blog.module.css"
import moment from "moment"

function BlogPage({ data }) {
  const { title, date, cover } = data.markdownRemark.frontmatter
  return (
    <Layout>
      <SEO
        title={title}
        description={data.markdownRemark.desc}
        image={cover.childImageSharp.fixed.src}
      />
      <div className={Styles.container}>
        <h1 className={Styles.title}>{title}</h1>
        <p className={Styles.date}>
          Posted on {moment(date).format("dddd, DD MMMM YYYY")}
        </p>
        <hr />
        <div
          className={Styles.content}
          dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
        ></div>
      </div>
    </Layout>
  )
}

export default BlogPage

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
        cover {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
            fixed {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  }
`
