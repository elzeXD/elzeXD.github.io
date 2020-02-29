import React from "react"
import { Link, graphql } from "gatsby"
import SEO from "../components/seo"
import Layout from "../components/layout"
import Styles from "../styles/blog.module.css"
import "../styles/blogButton.css"
import moment from "moment"

function BlogPage({ data }) {
  const { title, date, cover, lang } = data.markdownRemark.frontmatter
  const { slug } = data.markdownRemark.fields
  return (
    <Layout>
      <SEO
        url={slug}
        title={title}
        description={data.markdownRemark.desc}
        image={cover.childImageSharp.fluid.src}
      />
      <div className={Styles.container}>
        <h1 className={Styles.title}>{title}</h1>
        <p className={Styles.date}>
          Posted on {moment(date).format("dddd, DD MMMM YYYY")}
        </p>
        <div className={Styles.lang}>
          <Link
            to={slug.replace(/\/en\//, "/id/")}
            className={lang == "id" ? Styles.selected : null}
          >
            Indonesia
          </Link>{" "}
          |{" "}
          <Link
            to={slug.replace(/\/id\//, "/en/")}
            className={lang == "en" ? Styles.selected : null}
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
          }
        }
      }
    }
  }
`
