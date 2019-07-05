import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/seo"

function IndexPage({ data: { episode, allEpisode, markdownRemark } }) {
  return (
    <>
      <button>play episode {episode.number}</button>
      <SEO title="Home" />
      <h1>{episode.title}</h1>
      <p>{episode.description && episode.description}</p>
      {markdownRemark && (
        <div>
          <div dangerouslySetInnerHTML={{ __html: markdownRemark.html }} />
        </div>
      )}
    </>
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
