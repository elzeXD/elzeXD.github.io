import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import SEO from "../../../components/seo"
import Layout from "../../../components/layout"
import Styles from "../../../styles/blog.module.css"
import "../../../styles/blogButton.css"

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
        title="Jual Akun Google Drive"
        description="Saya menjual akun Google Drive dengan domain sekolah asli (sch.id), bukan asal-asalan apalagi tipu-tipu, dan ada surat resminya dari pemerintah."
      />
      <div className={Styles.container}>
        <h1 className={Styles.title} style={{ marginTop: `2rem` }}>
          Jual Akun Google Drive
        </h1>
        <div className={Styles.lang}>
          <Link to="/services/id/gdrive" className={Styles.selected}>
            Indonesia
          </Link>{" "}
          | <Link to="/services/en/gdrive">English</Link>
        </div>
        <div className={Styles.content}>
          <p>
            Saya menjual akun Google Drive dengan domain sekolah asli (sch.id),
            bukan asal-asalan apalagi tipu-tipu, dan ada surat resminya dari
            pemerintah.
          </p>
          <h2>KELEBIHAN:</h2>
          <ul>
            <li>100% LEGAL DAN RESMI, TERDAFTAR DI PEMERINTAH</li>
            <li>GOOGLE DRIVE UNLIMITED, alias tanpa batas</li>
            <li>LOGIN LANGSUNG DARI AKUN GOOGLE</li>
            <li>
              BISA REQUEST GONTA GANTI USERNAME (jika belum ada yang pakai -
              tambah waktu menunggu)
            </li>
            <li>BISA GONTA GANTI PASSWORD SESUKA HATI</li>
            <li>BISA GONTA GANTI EMAIL PEMULIHAN DAN NOMOR HP</li>
            <li>FILE BISA DI-SHARE SECARA PUBLIK</li>
            <li>AKUN MASIH FRESH, BUKAN NUMPANG</li>
            <li>FULL SUPPORT KALAU LUPA SANDI</li>
            <li>BUKAN domain .edu yang sewaktu-waktu bisa dimatikan</li>
            <li>
              KETAHANAN AKUN TAHAN LAMA, tetapi tergantung apa yang anda share,
              jika anda share konten-konten sensitif maka akan cepat hangus,
              PERGUNAKANLAH UNTUK HAL POSITIF!
            </li>
          </ul>
          <h2>KEKURANGAN:</h2>
          <ul>
            <li>Harus repot tambah email</li>
            <li>Stok terbatas</li>
          </ul>
          <p>
            Pemesanan bisa dari sini atau dari WA! Pembayaran via
            GoPay/OVO/Pulsa Tsel
          </p>
          <h1>MEMBELI = MENGERTI!</h1>
        </div>
        <hr />
      </div>
    </Layout>
  )
}

export default Gdrive
