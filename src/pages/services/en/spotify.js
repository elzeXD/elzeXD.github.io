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
        title="Jual Akun & Jasa Upgrade Spotify Premium 12 Bulan"
        description="Tersedia paket 12 bulan! Harga cuma 50k!"
      />
      <div className={Styles.container}>
        <h1 className={Styles.title} style={{ marginTop: `2rem` }}>
          Jual & Upgrade Akun Spotify Premium 12 Bulan
        </h1>
        <div className={Styles.lang}>
          <Link to="/services/id/spotify" className={Styles.selected}>
            Indonesia
          </Link>{" "}
          | <Link to="/services/en/spotify">English</Link>
        </div>
        <div className={Styles.content}>
          <p>
            100% Premium Asli!
			BUKAN AKUN CURIAN ATAU MOD!
          </p>
		  <p>
			Bisa dipasang di Android, iOS, PC, dan Smart TV!
		  </p>
		  <p>
		    CATATAN PENTING:
			Untuk akun jadi premium, kami butuh akun Spotify anda, berikut email dan passwordnya.
			Tenang, kami tidak akan mencuri akun anda.
			Kami tidak butuh informasi pribadi anda.
			Kami akan jaga amanah 100%, jadi setelah akun menjadi premium, anda disarankan untuk mengganti password.
			Jika masih tidak mau, kami akan membuatkan akun baru, anda tinggal ganti saja emailnya.
          <h2>KELEBIHAN:</h2>
          <ul>
            <li>Bebas Iklan</li>
            <li>Bebas Gonta-ganti lagu</li>
            <li>Bebas download lagu dengan kualitas tertinggi</li>  
          <h2>BERGARANSI!</h2>
          <ul>
            <li>Garansi 6 bulan, jika premium hilang hubungi saya!</li>
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
