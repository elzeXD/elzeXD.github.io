import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import SEO from "../../../components/seo"
import Layout from "../../../components/layout"
import Styles from "../../../styles/blog.module.css"
import "../../../styles/blogButton.css"
import Img from "gatsby-image"

function Gdrive({ data }) {
  const { site } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          url
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO
        url={site.siteMetadata.url}
        title="Sellin Google Drive Account"
        description="I sell Google Drive account with real school domain (sch.id), not a scam. There's also an official letter from the government"
      />
      <div className={Styles.container}>
        <h1 className={Styles.title} style={{ marginTop: `2rem` }}>
          Selling Google Drive Account
        </h1>
        <div className={Styles.lang}>
          <Link to="/services/id/gdrive">Indonesia</Link> |{" "}
          <Link to="/services/en/gdrive" className={Styles.selected}>
            English
          </Link>
        </div>
        <div className={Styles.content}>
          <p>
            I sell Google Drive account with real school domain (sch.id), not a
            scam. There's also an official letter from the government
          </p>
          <h2>PROS:</h2>
          <ul>
            <li>100% LEGAL AND OFFICIAL, REGISTERED ON GOVERNMENT</li>
            <li>GOOGLE DRIVE UNLIMITED, A.K.A there's no limit</li>
            <li>DIRECT LOGIN FROM GOOGLE ACCOUNT</li>
            <li>CUSTOM USERNAME (if available)</li>
            <li>CUSTOM PASSWORD</li>
            <li>CUSTOM RECOVERY EMAIL AND PHONE NUMBER</li>
            <li>FILES CAN BE SHARED PUBLICLY</li>
            <li>FRESH ACCOUNT</li>
            <li>FULL SUPPORT IF YOU FORGET YOUR PASSWORD</li>
            <li>NOT .edu domain that can be disabled anytime</li>
          </ul>
          <h2>CONS:</h2>
          <ul>
            <li>Need to add additional email</li>
            <li>Limited stock</li>
          </ul>
          <p>
            For more payment info, contact me! Payment methods are
            GoPay/OVO/Telkomsel
          </p>
          <h2>BUYING = UNDERSTAND!</h2>
        </div>
        <hr />
      </div>
    </Layout>
  )
}

export default Gdrive
