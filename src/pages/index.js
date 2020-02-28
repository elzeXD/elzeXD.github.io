import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Button from "../components/button"
import Layout from "../components/layout"
import SEO from "../components/seo"
import SocialButton from "../components/socialButton"
import Styles from "../styles/index.module.css"
import {
  faFacebookF,
  faInstagram,
  faTelegram,
  faYoutube,
  faDeviantart,
} from "@fortawesome/free-brands-svg-icons"
import { faMoneyBill } from "@fortawesome/free-solid-svg-icons"

function IndexPage() {
  const { site } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          facebook
          youtube
          telegram
          instagram
          trakteer
          deviantart
        }
      }
    }
  `)
  return (
    <Layout>
      <SEO title="Home" />
      <div className={Styles.container}>
        <h1>{site.siteMetadata.title}</h1>
        <div className={Styles.ctaWrapper}>
          <Button url="/releases" name="Releases" />
          <Button url="/services" name="services/Jasa" />
        </div>
        <div className={Styles.buttons}>
          <SocialButton
            faIcon={faYoutube}
            url={site.siteMetadata.youtube}
            name="Youtube"
          />
          <SocialButton
            faIcon={faDeviantart}
            url={site.siteMetadata.deviantart}
            name="DeviantArt"
          />
          <SocialButton
            faIcon={faMoneyBill}
            url={site.siteMetadata.trakteer}
            name="Trakteer"
          />
          <SocialButton
            faIcon={faTelegram}
            url={site.siteMetadata.telegram}
            name="Telegram"
          />
          <SocialButton
            faIcon={faFacebookF}
            url={site.siteMetadata.facebook}
            name="Facebook"
          />
          <SocialButton
            faIcon={faInstagram}
            url={site.siteMetadata.instagram}
            name="Instagram"
          />
        </div>
        <br />
      </div>
    </Layout>
  )
}

export default IndexPage
