import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Styles from "../styles/search.module.css"
import SearchButton from "../components/searchButton"
import Card from "../components/card"

function Search() {
  const [query, setQuery] = useState("")
  const [results, setResults] = useState([])

  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: frontmatter___date }
        filter: { frontmatter: { lang: { eq: "id" } } }
      ) {
        edges {
          node {
            id
            frontmatter {
              title
              desc
              date(formatString: "MMMM DD, YYYY")
              tags
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  const onChange = e => setQuery(e.target.value)

  const submitData = () => {
    const posts = data.allMarkdownRemark.edges || []

    // Set filtered result
    const filtered = posts.filter(post => {
      const { desc, title, tags } = post.node.frontmatter
      return (
        desc.toLowerCase().includes(query.toLowerCase()) ||
        title.toLowerCase().includes(query.toLowerCase()) ||
        tags
          .join("")
          .toLowerCase()
          .includes(query.toLowerCase())
      )
    })
    setResults(filtered)
    console.log(filtered)
  }

  const checkSubmitKey = e => {
    // Number 13 is the "Enter" key on the keyboard
    if (e.keyCode === 13) {
      // Cancel the default action, if needed
      e.preventDefault()
      // Trigger the button element with a click
      document.getElementById("search-btn").click()
    }
  }

  return (
    <Layout>
      <SEO title="Search" />
      <div className={Styles.container}>
        <h1 className={Styles.title}>Cari release</h1>
        <div className={Styles.search}>
          <input
            type="text"
            placeholder="Masukkan keyword disini"
            className={Styles.input}
            value={query}
            onChange={onChange}
            onKeyUp={checkSubmitKey}
          />
          <SearchButton name="Cari" onClick={submitData} />
        </div>
        <div className={Styles.results}></div>
        {results.map(({ node }) => {
          return (
            <Card
              key={node.id}
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

export default Search
