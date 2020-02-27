import React from "react"
import { Link, graphql } from "gatsby"
import SEO from "../components/seo"
import Layout from "../components/layout"
import Styles from "../styles/blog.module.css"
import moment from "moment"

function BlogPage({ data }) {
  const { title, date, cover, lang } = data.markdownRemark.frontmatter
  const { slug } = data.markdownRemark.fields
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
        <div className={Styles.lang}>
          <Link
            className={lang == "id" ? Styles.selected : null}
            to={slug.replace(/\/en\//, "/id/")}
          >
            Indonesia
          </Link>{" "}
          |{" "}
          <Link
            className={lang == "en" ? Styles.selected : null}
            to={slug.replace(/\/id\//, "/en/")}
          >
            English
          </Link>
        </div>
        <hr />
        <div
          className={Styles.content}
          dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
        ></div>
        <hr />
      </div>
    </Layout>
  )
}

export default BlogPage

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      fields {
        slug
      }
      frontmatter {
        title
        date
        lang
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
