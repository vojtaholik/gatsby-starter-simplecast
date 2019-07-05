import React from "react"
import { useStaticQuery } from "gatsby"
import Link from "./link"

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
          </li>
        ))}
      </ul>
    </aside>
  )
}

export default List
