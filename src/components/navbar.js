import React from "react"
import { Link } from "gatsby"
import Styles from "../styles/navbar.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHome } from "@fortawesome/free-solid-svg-icons"

function Navbar() {
  return (
    <div className={Styles.container}>
      <div className={Styles.wrapper}>
        <Link className={Styles.logo}>
          <FontAwesomeIcon icon={faHome} size="1x" /> ElzeXD
        </Link>
        <Link to="/search" className={Styles.item}>
          SEARCH
        </Link>
        <Link to="/about" className={Styles.item}>
          ABOUT
        </Link>
      </div>
    </div>
  )
}

export default Navbar
