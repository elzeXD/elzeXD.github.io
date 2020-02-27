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
          title="Jasa bikin lu bisa bernafas lagi"
          desc="Deskripsi yang panjang ea mhank, soalnya kalo ga panjang ngebug. Awkaokwoakwoakwoawoakwoakow"
        />
        <ServiceCard
          title="Jasa bikin orang tidur ga bangun lagi "
          desc="Deskripsi yang panjang ea mhank, soalnya kalo ga panjang ngebug. Awkaokwoakwoakwoawoakwoakow"
        />
      </div>
    </Layout>
  )
}
export default Services
