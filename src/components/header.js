import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Player from "./player"

function Header({ children }) {
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      site {
        siteMetadata {
          title
        }
      }
      allEpisode {
        totalCount
        nodes {
          id
          title
          description
          number
          enclosure_url
          fields {
            slug
          }
        }
      }
    }
  `)

  const currentEpisode = data.allEpisode.nodes[0]

  return (
    <div style={{ marginBottom: "2rem" }}>
      <Player episode={currentEpisode} />
    </div>
  )
}

Header.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Header
