import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Player from "../components/player"

function IndexPage({ data: { episode, markdownRemark } }) {
  return (
    <Layout>
      {/* <Player episode={episode} /> */}
      <button>play episode {episode.number}</button>
      <SEO title="Home" />
      <h1>{episode.title}</h1>
      <p>{episode.description && episode.description}</p>

      {markdownRemark && (
        <div>
          <div dangerouslySetInnerHTML={{ __html: markdownRemark.html }} />
        </div>
      )}
    </Layout>
  )
}
export default IndexPage

export const indexQuery = graphql`
  query {
    episode {
      id
      title
      number
      description
      fields {
        slug
      }
    }
    markdownRemark {
      html
      frontmatter {
        id
        title
        slug
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
`
