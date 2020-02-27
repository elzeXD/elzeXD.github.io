/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import Navbar from "./navbar"
import "../styles/layout.css"

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: `960px`,
          minHeight: `100vh`,
          padding: `0 1.0875rem 1.45rem`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <main
          style={{
            width: `100%`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flex: 1,
          }}
        >
          {children}
        </main>
        <footer
          style={{
            textAlign: "center",
            fontSize: `.75rem`,
            color: "#ffffff",
            fontFamily: `'Lato', Helvetica, sans-serif`,
          }}
        >
          &copy; 2020 Elze
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
