import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Styles from "../styles/blog.module.css"
import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
	<div className={Styles.container}>
    <h1></h1>
    <h1></h1>
    <h1>Tentang</h1>
        <div className={Styles.lang}>
          <Link to="/about" className={Styles.selected}>
            Indonesia
          </Link>{" "}
          | <Link to="/about_en">English</Link>
        </div>
    <div className={Styles.content}>
    <p>Halo semua!</p>
	<p>Nama saya Vincent Siahaan, juga dikenal sebagai elzeXD di beberapa tempat.</p>
	<p>Saya hanya seorang anak muda yang menyukai hal-hal berbau teknologi.</p>
	<p>Masa kecil saya sudah ditemani dengan teknologi, dan itu membawa saya sampai kepada hari ini, dan saya masih menyukainya sampai sekarang.</p>
	<p>Meski begitu, saya tidak punya dasar-dasar tentang IT sebelumnya. :p</p>
    <p>Saya melakukan desain dan kustomisasi User Interface, khususnya tema HP Xiaomi dan Windows 10.</p>
    <p>Saya juga tertarik dengan dunia oprek Android.</p>
	<p>Saya yakin dan percaya, saya dapat dikenal oleh dunia suatu saat nanti. :)</p>
	</div>
    <hr />
	</div>
  </Layout>
)
	
export default AboutPage