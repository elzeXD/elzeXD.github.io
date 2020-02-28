import React from "react"
import Styles from "../styles/social.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function SocialButton({ url, name, faIcon }) {
  return (
    <a href={url} className={Styles.btn}>
      <FontAwesomeIcon icon={faIcon} className={Styles.icon} />
      <span className={Styles.name}>{name}</span>
    </a>
  )
}

export default SocialButton
