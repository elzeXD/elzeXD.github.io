import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Styles from "../styles/error.module.css"
import img from "../assets/error.png"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div className={Styles.container}>
      <h1>Sorry bro, halamannya ilang. Gua gatau ilang kemana.</h1>
      <img src={img} alt="404" />
    </div>
  </Layout>
)

export default NotFoundPage
