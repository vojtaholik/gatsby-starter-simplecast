import React from "react"
import { graphql } from "gatsby"
import { EpisodeConsumer } from "../components/context"

function EpisodeTemplate({ data: { episode, markdownRemark } }) {
  return (
    <>
      <h1>{episode.title}</h1>
      <EpisodeConsumer>
        {context => (
          <>
            <button onClick={() => context.setCurrent(episode)}>
              play episode {episode.number}
            </button>
          </>
        )}
      </EpisodeConsumer>
      <p>{episode.description && episode.description}</p>
      {markdownRemark && (
        <div>
          <div dangerouslySetInnerHTML={{ __html: markdownRemark.html }} />
        </div>
      )}
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
