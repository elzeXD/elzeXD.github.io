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
        title="Alpha Centauri Store, Marketplace Premium Terlengkap, Termurah, dan Terpercaya!"
        description="Info selengkapnya klik di judul."
      />
      <div className={Styles.container}>
        <h1 className={Styles.title} style={{ marginTop: `2rem` }}>
          Alpha Centauri Store - Marketplace Premium Terlengkap, Termurah, dan Terpercaya!
        </h1>
        <div className={Styles.lang}>
          <Link to="/services/id/alphacentauristore" className={Styles.selected}>
            Indonesia
          </Link>{" "}
          | <Link to="/services/en/alphacentauristore">English</Link>
        </div>
        <div className={Styles.content}>
          <p>
            Dibuka untuk umum! 
			Alpha Centauri Store, Marketplace Premium Terlengkap, Termurah, dan Terpercaya!           
          </p>
		  <p>
			Kami akan selalu update produk, baik untuk keperluan pribadi maupun bisnis!
			Harga nyaman di kantong dan terus mengikuti sesuai perkembangan zaman!
			Metode pembayaran bervariasi, bisa dipilih sesuai keinginan!
		  </p>	
          <h2>Menyediakan:</h2>
          <ul>
			<li>Digital Product, seperti Discord Nitro, Google Drive Unlimited, Spotify Premium, Netflix Premium, dan lain-lain!</li>
            <li>Pembelian pulsa dan paket data!</li>
            <li>Tools Dunia Bisnis, seperti RDP, Google Cloud, Google AdWords, Vultr, AWS, dan lain-lain!</li>
            <li>Jasa menambah followers atau peminat di sosial media!</li>
            <li>Isi ulang atau top-up saldo e-commerce, seperti Go-Pay, OVO, DANA, Shopee Pay, dan lain-lain!</li>
            <li>Pembayaran tagihan listrik, BPJS, dan lain-lain!</li>
            <li>Jasa top-up game, pembelian voucher, serta jual beli akun game!</li>
            <li>Convert pulsa ke platform e-commerce lain, dengan rate yang bersahabat!</li>
            <li>Serta jasa-jasa menarik dari partner kami!</li>
          </ul>
          <h2>Selain itu...</h2>
          <ul>
			<li>Seller dan admin yang ramah!</li>
            <li>Testimoni 100 persen asli dan no tipu-tipu!</li>
            <li>Ada forum diskusi, dan bisa request produk!</li>
          </ul>
          <p>
            Tunggu apalagi? Yuk gabung di server Discord Alpha Centauri Store sekarang! 
            <a href="https://discord.io/acshop" class="btn"><span class="name">Link Invite</span></a>
          </p>
          <h1>MEMBELI = MENGERTI!</h1>
        </div>
        <hr />
      </div>
    </Layout>
  )
}

export default Alphacentauristore