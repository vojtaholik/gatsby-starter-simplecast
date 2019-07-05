import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Link from "./link"
import { EpisodeConsumer } from "../components/context"
import Bars from "./bars"

function List() {
  const data = useStaticQuery(graphql`
    query listQuery {
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
    <aside>
      <ul>
        {data.allEpisode.nodes.map(episode => (
          <li key={episode.id}>
            <Link
              to={"/show" + "/" + episode.number + "/" + episode.fields.slug}
            >
              {episode.title}
            </Link>
            <EpisodeConsumer>
              {context => (
                <>
                  {context.state.id === episode.id ? (
                    <Bars />
                  ) : (
                    <button onClick={() => context.setCurrentPlaying(episode)}>
                      play
                    </button>
                  )}
                </>
              )}
            </EpisodeConsumer>
          </li>
        ))}
      </ul>
    </aside>
  )
}

export default List
