import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Styles from "../styles/card.module.css"
import Img from "gatsby-image"

function Card({ slug, title, desc, cover }) {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "assets/placeholder.png" }) {
        childImageSharp {
          fluid(maxHeight: 640) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Link to={slug}>
      <div className={Styles.container}>
        <Img
          className={Styles.img}
          fluid={cover || data.file.childImageSharp.fluid}
          alt="Image"
        />
        <div className={Styles.wrapper}>
          <span className={Styles.title}>{title}</span>
          <hr />
          <p className={Styles.desc}>{desc}</p>
        </div>
      </div>
    </Link>
  )
}

export default Card
