import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Link from "./link"
import { EpisodeConsumer } from "../components/context"

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
                  {context.state.id === episode.id && "- in player"}
                  {/* to-do: display information about whether player is playing */}
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
