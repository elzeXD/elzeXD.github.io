import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import Card from "../../components/card"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Styles from "../../styles/releases.module.css"

function Releases() {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(filter: { frontmatter: { tag: { eq: "theme" } } }) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
              desc
            }
            id
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Releases" />
      <div className={Styles.container}>
        {data.allMarkdownRemark.edges.map(({ node }) => {
          return (
            <Card
              title={node.frontmatter.title}
              desc={node.frontmatter.desc}
              slug={node.fields.slug}
            />
          )
        })}
      </div>
    </Layout>
  )
}
export default Releases
