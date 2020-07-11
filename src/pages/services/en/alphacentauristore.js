import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import SEO from "../../../components/seo"
import Layout from "../../../components/layout"
import Styles from "../../../styles/blog.module.css"
import "../../../styles/blogButton.css"

function Alphacentauristore({ data }) {
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
        title="Alpha Centauri Store - The Cheapest and Reliable Premium Marketplace!"
        description="Click on the title for more info."
      />
      <div className={Styles.container}>
        <h1 className={Styles.title} style={{ marginTop: `2rem` }}>
          Alpha Centauri Store - The Cheapest and Reliable Premium Marketplace!
        </h1>
        <div className={Styles.lang}>
          <Link to="/services/id/alphacentauristore">Indonesia</Link> |{" "}
          <Link to="/services/en/alphacentauristore" className={Styles.selected}>
            English
          </Link>
        </div>
        <div className={Styles.content}>
          <p>
            INDONESIAN ONLY MARKETPLACE!        
          </p>
		  <p>
		We will always update products, both for personal and business purposes!
 
		Prices are very comfortable!
 
		Provides vary payment methods, that you can choose!
		  </p>	
          <h2>We provide:</h2>
          <ul>
			<li>Digital Products, such as Discord Nitro, Google Drive Unlimited, Spotify Premium, Netflix Premium, and more!</li>
            <li>Credit and data packages purchase!</li>
            <li>Business Tools, such as RDP, Google Cloud, Google AdWords, Vultr, AWS, and more!</li>
            <li>Add followers in your social media!</li>
            <li>Top-up e-commerce balances, such as Go-Pay, OVO, DANA, Shopee Pay, and more!</li>
            <li>Payment of electricity bills, BPJS, and more</li>
            <li>Game top-up services, voucher purchases, and buying and selling game accounts!</li>
            <li>Convert your balance to other e-commerce platforms, at a friendly rate!</li>
            <li>And more attractive services from our partners!</li>
          </ul>
          <h2>Other than that...</h2>
          <ul>
			<li>Friendly seller and admins!</li>
            <li>100% genuine testimonials!</li>
            <li>Have access to discussion forum, and you can request products!</li>
          </ul>
          <p>
            What are you waiting for? Come and join now in Alpha Centauri Store Discord Server! 
			</p>	
            <a href="https://discord.io/acshop" class="btn"><span class="name">Join via Invite Link</span></a>
			<p>For those who don't have Discord, you can contact me directly via the contact person in the home page.</p>
          <h1>MEMBELI = MENGERTI!</h1>
        </div>
        <hr />
      </div>
    </Layout>
  )
}

export default Alphacentauristore