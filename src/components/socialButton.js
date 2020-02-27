import React from "react"
import Styles from "../styles/social.module.css"

function SocialButton({ url, name }) {
  return (
    <a href={url} className={Styles.btn}>
      <span className={Styles.name}>{name}</span>
    </a>
  )
}

export default SocialButton
