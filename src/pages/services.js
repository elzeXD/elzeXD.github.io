import React from "react"
import ServiceCard from "../components/serviceCard"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Styles from "../styles/releases.module.css"

function Services() {
  return (
    <Layout>
      <SEO title="Services" />
      <div className={Styles.container}>
        <ServiceCard
          url="/services/id/gdrive"
          title="Jual Akun Google Drive Unlimited"
          desc="Saya menjual akun Google Drive, bukan asal-asalan apalagi tipu-tipu. Bisa custom username, domain: @nndrive.my.id"
        />
		<ServiceCard
          url="/services/id/spotify"
          title="Jual & Upgrade Akun Spotify Premium"
          desc="Jual Jasa Upgrade Spotify ke Premium. Bisa pakai akun sendiri, atau akun dari kami. Asli, bukan curian apalagi mod. Bergaransi, jadi kalau akun tidak premium silahkan hubungi kembali."
        />
      </div>
    </Layout>
  )
}
export default Services
