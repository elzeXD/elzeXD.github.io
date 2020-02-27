import { graphql, Link, useStaticQuery } from "gatsby"
import React from "react"
import Styles from "../styles/serviceCard.module.css"
import SocialButton from "./socialButton"

function ServiceCard({ slug, title, desc, date }) {
  const { site } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          facebook
          telegram
          discord
        }
      }
    }
  `)

  return (
    <Link to="/services">
      <div className={Styles.container}>
        <div className={Styles.wrapper}>
          <span className={Styles.title}>{title}</span>
          <hr />
          <p className={Styles.desc}>{desc}</p>
          <div className={Styles.buttons}>
            <SocialButton url={site.siteMetadata.facebook} name="Facebook" />
            <SocialButton url={site.siteMetadata.telegram} name="Telegram" />
            <SocialButton url={site.siteMetadata.discord} name="Discord" />
          </div>
        </div>
      </div>
    </Link>
  )
}

export default ServiceCard
