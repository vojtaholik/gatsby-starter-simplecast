import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Player from "../components/player"

function EpisodeTemplate({ data: { episode, markdownRemark } }) {
  return (
    <>
      <Layout data={episode}>
        <Player episode={episode} />
        <h1>{episode.title}</h1>
        <p>{episode.description && episode.description}</p>

        {markdownRemark && (
          <div>
            <div dangerouslySetInnerHTML={{ __html: markdownRemark.html }} />
          </div>
        )}
      </Layout>
    </>
  )
}

export default EpisodeTemplate

export const episodeQuery = graphql`
  query($id: String!) {
    episode(id: { eq: $id }) {
      id
      title
      description
      number
      enclosure_url
      fields {
        slug
      }
    }
    markdownRemark(frontmatter: { id: { eq: $id } }) {
      html
      frontmatter {
        id
        title
        slug
      }
    }
  }
`

// export const episodeQuery = graphql`
//   query($id: String!) {
//     episode(id: { eq: $id }) {
//       id
//       title
//       description
//     }
//   }
// `
