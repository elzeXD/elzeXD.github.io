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
          url="/services/id/soon"
          title="Coming Soon"
          desc="Coming Soon"
        />
      </div>
    </Layout>
  )
}
export default Services
