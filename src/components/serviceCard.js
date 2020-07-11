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
          discordac
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
            name="Alpha Centauri Store Discord Server"
          />
          <SocialButton
            faIcon={faFacebookF}
            url={site.siteMetadata.facebook}
            name="Facebook"
          />
		  <SocialButton
            faIcon={faFacebookF}
            url={site.siteMetadata.instagram}
            name="Instagram"
          />
          <SocialButton
            faIcon={faTelegram}
            url={site.siteMetadata.telegram}
            name="Telegram"
          />
		 <SocialButton
            faIcon={faTelegram}
            url={site.siteMetadata.discord}
            name="My Discord"
          />
        </div>
      </div>
    </div>
  )
}

export default ServiceCard
