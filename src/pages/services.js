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
          title="Jual akun Google Drive Unlimited"
          desc="Saya menjual akun Google Drive dengan domain sekolah asli (sch.id), bukan asal-asalan apalagi tipu-tipu, dan ada surat resminya dari pemerintah."
        />
      </div>
    </Layout>
  )
}
export default Services
