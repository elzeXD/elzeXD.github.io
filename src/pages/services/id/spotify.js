import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import SEO from "../../../components/seo"
import Layout from "../../../components/layout"
import Styles from "../../../styles/blog.module.css"
import "../../../styles/blogButton.css"

function Spotify({ data }) {
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
        title="Jual dan Upgrade Akun Spotify Premium"
        description="Tersedia paket 12 bulan! Akun asli, bukan APK mod! 100 persen amanah!"
      />
      <div className={Styles.container}>
        <h1 className={Styles.title} style={{ marginTop: `2rem` }}>
          Jual dan Upgrade Akun Spotify Premium
        </h1>
        <div className={Styles.lang}>
          <Link to="/services/id/spotify" className={Styles.selected}>
            Indonesia
          </Link>{" "}
          | <Link to="/services/en/spotify">English</Link>
        </div>
        <div className={Styles.content}>
          <p>
            Tersedia paket 12 bulan!
			Akun yang kami jual adalah asli dan legal!
          </p>
		  <p>
			Butuh email dan password Spotify anda, kami akan jaga amanah anda, data tidak akan kami salahgunakan!		
			Jika mau, bisa akun	dari kami juga, emailnya tinggal diganti!
		  </p>    		  
		  <p>
			PS. Tidak support akun Facebook!
		  </p>  		 
		  <p>
			100% ASLI, BUKAN AKUN CURIAN ATAU MOD!
			Support Android, iOS, PC, dan Smart TV!
		  </p>	
          <h2>KELEBIHAN:</h2>
          <ul>
            <li>Tanpa Iklan</li>
            <li>Bebas gonta-ganti lagu</li>
            <li>Download semua lagu tanpa batasan</li>
            <li>Dengarkan musik dengan kualitas tertinggi</li>
          </ul>
		  <h2>BERGARANSI, jika akun tiba-tiba menjadi free, bisa langsung hubungi kami!</h2>			
		  <ul>
            <li>
              Garansi hanya berlaku jika akun tiba-tiba menjadi free dalam pemakaian biasa, 
			  tidak menggunakan akun untuk perbuatan aneh-aneh!
            </li>
		  </ul>		            
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

export default Spotify
