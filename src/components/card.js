import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Styles from "../styles/card.module.css"
import Img from "gatsby-image"
import moment from "moment"

function Card({ slug, title, desc, date, cover }) {
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
          <p className={Styles.date}>
            Posted on {moment(date).format("dddd, DD MMMM YYYY")}
          </p>
          <hr />
          <p className={Styles.desc}>{desc}</p>
        </div>
      </div>
    </Link>
  )
}

export default Card
