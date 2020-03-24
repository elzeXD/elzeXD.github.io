import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import SEO from "../../../components/seo"
import Layout from "../../../components/layout"
import Styles from "../../../styles/blog.module.css"
import "../../../styles/blogButton.css"

function Ytpremium({ data }) {
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
        title="Jual & Upgrade Akun YouTube Premium"
        description="Tersedia untuk 3, 6, dan 12 bulan! Khusus Region Indonesia saja! Hanya butuh email saja, tidak perlu password!"
      />
      <div className={Styles.container}>
        <h1 className={Styles.title} style={{ marginTop: `2rem` }}>
          Jual & Upgrade Akun YouTube Premium
        </h1>
        <div className={Styles.lang}>
          <Link to="/services/id/ytpremium" className={Styles.selected}>
            Indonesia
          </Link>{" "}
          | <Link to="/services/en/ytpremium">English</Link>
        </div>
        <div className={Styles.content}>
          <p>
            Tersedia untuk 3, 6, dan 12 bulan!
          </p>
		  <p>
			Khusus Region Indonesia saja!			
		  </p>	
  		  <p>
			Hanya butuh email saja, tidak perlu password!			
		  </p>  		 
		  <p>
			100% ASLI, BUKAN AKUN CURIAN ATAU MOD!
			Support Android, iOS, PC, dan Smart TV!
		  </p>	
          <h2>KELEBIHAN:</h2>
          <ul>
            <li>Tanpa Iklan</li>
            <li>Putar Video di Background, video masih terputar saat keluar dari aplikasi</li>
            <li>Download semua video di YouTube tanpa batasan</li>
            <li>Akses YouTube Music Premium</li>
          </ul>
			
		  <ul>
            <li>
              Garansi hanya berlaku jika akun tiba-tiba menjadi free dalam pemakaian biasa, 
			  tidak menggunakan akun Google untuk komentar aneh-aneh
            </li>
		  </ul>
		  
          <h2>Jika akun premium ini digunakan untuk komentar aneh-aneh dan bernuansa kebencian atau SARA, maka tidak segan-segan kami BANNED Permanen!</h2>
          
          <p>
            Pemesanan bisa langsung hubungi kontak di halaman ini! Pembayaran via
            GoPay/OVO/Pulsa Tsel
          </p>
          <h1>MEMBELI = MENGERTI!</h1>
        </div>
        <hr />
      </div>
    </Layout>
  )
}

export default Ytpremium
