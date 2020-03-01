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
    <Link to={url}>
      <div className={Styles.container}>
        <div className={Styles.wrapper}>
          <span className={Styles.title}>{title}</span>
          <hr />
          <p className={Styles.desc}>{desc}</p>
          <div className={Styles.buttons}>
            <SocialButton
              faIcon={faFacebookF}
              url={site.siteMetadata.facebook}
              name="Facebook"
            />
            <SocialButton
              faIcon={faTelegram}
              url={site.siteMetadata.telegram}
              name="Telegram"
            />
            <SocialButton
              faIcon={faDiscord}
              url={site.siteMetadata.discord}
              name="Discord"
            />
          </div>
        </div>
      </div>
    </Link>
  )
}

export default ServiceCard
