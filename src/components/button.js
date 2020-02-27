import React from "react"
import { Link } from "gatsby"
import Styles from "../styles/button.module.css"

function Button({ url, name }) {
  return (
    <Link to={url} className={Styles.btn}>
      <span className={Styles.name}>{name}</span>
    </Link>
  )
}

export default Button
