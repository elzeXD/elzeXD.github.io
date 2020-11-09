import { graphql, Link, useStaticQuery } from "gatsby"
import React from "react"
import Styles from "../styles/serviceCard.module.css"
import SocialButton from "./socialButton"
import {
  faFacebookF,
  faTelegram,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons"

function ServiceCard({ slug, title, desc, date, url }) {
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
    <div className={Styles.container}>
      <div className={Styles.wrapper}>
        <Link to={url}>
          <span className={Styles.title}>{title}</span>
        </Link>
        <hr />
        <p className={Styles.desc}>{desc}</p>
        <div className={Styles.buttons}>
		  <SocialButton
            faIcon={faDiscord}
            url={site.siteMetadata.discordac}
            name="Soon"
          />
        </div>
      </div>
    </div>
  )
}

export default ServiceCard
