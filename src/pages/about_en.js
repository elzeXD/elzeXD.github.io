import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Styles from "../../styles/blog.module.css"
import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
	<div className={Styles.container}>
    <h1>About</h1>
	   <div className={Styles.lang}>
         <Link to="/about">Indonesia</Link> |{" "}
         <Link to="/about_en" className={Styles.selected}>
            English
          </Link>
        </div>
    <div className={Styles.content}>
    <p>Hello internet people!</p>
	<p>My name is Vincent Siahaan, also known as elzeXD in some places.</p>
	<p>I'm a big childish boy who like tech stuffs.</p>
	<p>My childhood has been accompanied by technology, and it has brought me to this day, and until now I still like it.</p>
	<p>Although, I have no basics about IT. :p</p>
    <p>I do Designs and UI Customizations, especially theming Xiaomi phones and Windows 10.</p>
    <p>I also interested in Android tweaking and development.</p>
	<p>I'm sure and I hope it will bring me to my world tomorrow. :)</p>
	</div>
    <hr />
	</div>
  </Layout>
)
	
export default AboutPage
