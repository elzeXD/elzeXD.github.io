import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Button from "../components/button"
import Layout from "../components/layout"
import SEO from "../components/seo"
import SocialButton from "../components/socialButton"
import Styles from "../styles/index.module.css"

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
          <Button url="/releases/utility" name="utility" />
          <Button url="/releases/themes" name="themes" />
        </div>
        <div className={Styles.buttons}>
          <SocialButton url={site.siteMetadata.facebook} name="Facebook" />
          <SocialButton url={site.siteMetadata.youtube} name="Youtube" />
          <SocialButton url={site.siteMetadata.instagram} name="Instagram" />
          <SocialButton url={site.siteMetadata.telegram} name="Telegram" />
        </div>
        <br />
      </div>
    </Layout>
  )
}

export default IndexPage
