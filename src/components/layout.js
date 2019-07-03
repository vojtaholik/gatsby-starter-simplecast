import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
//import Link from "./link"
import { Link, navigate } from "gatsby"
import Player from "./player"

import Header from "./header"
import "./layout.css"

function Layout({ children }) {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
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

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 1180,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
          display: "flex",
        }}
      >
        {/* 
          to-do: Global state-populated player 
          <Player episode={data.allEpisode.nodes[0]} /> */}

        {/* <iframe
          title="player"
          height="200px"
          width="100%"
          frameBorder="no"
          scrolling="no"
          seamless
          src={`https://player.simplecast.com/7979994f-c577-4728-aa5e-4f2c1e9314ae?dark=false`}
        /> */}
      </div>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 1180,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
          display: "flex",
        }}
      >
        <aside>
          <ul>
            {data.allEpisode.nodes.map(episode => (
              <li key={episode.id}>
                <Link to={`show/${episode.number}/${episode.fields.slug}`}>
                  {episode.title}
                </Link>
              </li>
            ))}
          </ul>
        </aside>
        <div style={{ width: "100%", maxWidth: "100%", marginLeft: "60px" }}>
          <main>{children}</main>
          <footer>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </footer>
        </div>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
