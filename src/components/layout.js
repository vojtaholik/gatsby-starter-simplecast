import React from "react"
import PropTypes from "prop-types"
import List from "./list"
import "./layout.css"
import { EpisodeConsumer } from "./context"

function Layout({ children }) {
  return (
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 1180,
        padding: `3rem 1.0875rem 1.45rem`,
        display: "flex",
      }}
    >
      <List />
      <div style={{ width: "100%", maxWidth: "100%", marginLeft: "60px" }}>
        <main>{children}</main>
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
