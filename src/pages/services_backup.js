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
          url="/services/id/alphacentauristore"
          title="Alpha Centauri Store - Marketplace Premium Terlengkap, Termurah, dan Terpercaya!"
          desc="Official Partner, bukan asal-asalan apalagi tipu-tipu! Info selengkapnya klik di judul."
        />
      </div>
    </Layout>
  )
}
export default Services
