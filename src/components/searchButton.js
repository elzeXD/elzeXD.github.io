import React from "react"
import Styles from "../styles/button.module.css"

function SearchButton({ url, name, onClick }) {
  return (
    <button className={Styles.btn} onClick={onClick} id="search-btn">
      <span className={Styles.name}>{name}</span>
    </button>
  )
}

export default SearchButton
