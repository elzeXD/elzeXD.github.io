import React from "react"
import { Link } from "gatsby"
import Styles from "../styles/navbar.module.css"

function Navbar() {
  return (
    <div className={Styles.container}>
      <div className={Styles.wrapper}>
        <Link className={Styles.logo}>ELZE</Link>
        <Link to="/about" className={Styles.item}>
          ABOUT
        </Link>
      </div>
    </div>
  )
}

export default Navbar
