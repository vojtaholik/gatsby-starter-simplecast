/** @jsx jsx */
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { jsx, Styled } from "theme-ui"
import Link from "./link"
import { EpisodeConsumer } from "./context"
import Bars from "./bars"
import { FaPlay as PlayIcon } from "react-icons/fa"
import tcbLogo from "../images/the-coding-bros-logo.svg"

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
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              id
              summary
            }
          }
        }
      }
    }
  `)

  return (
    <EpisodeConsumer>
      {context => (
        <>
        <section sx={{ display: 'flex', flexDirection: ['column'] }}>
          <div sx={{ m: ['15px 0 15px'], display: 'flex', minHeight: 125, justifyContent: 'center' }}>
            <a href="/" title={'Ana Sayfa'}>
              <img sx={{ maxHeight: 125, mb: 0 }} src={tcbLogo} alt={'The Coding Bros Logo'} />
            </a>
          </div>

          <nav sx={{ maxWidth: ['100%', '100%', '300px'], ml: [0] }}>
            <ul role="menu">
              {data.allEpisode.nodes.map(episode => (
                <li
                  role="none"
                  key={episode.id}
                  sx={{
                    position: "relative",
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    borderLeft: "3px solid",
                    borderColor: "background",
                    ".active": {
                      borderLeft: "3px solid",
                      backgroundColor: "background-lighten-10",
                      borderColor:
                        context.state && episode.id === context.state.id
                          ? "primary"
                          : "primary",
                    },
                    a: {
                      p: 20,
                      pl: 20,
                      borderLeft: "3px solid",
                      borderColor: "background",
                      fontSize: 4,
                      width: "100%",
                    },
                    h4: {
                      mb: 0,
                    },
                    ":hover": {
                      a: { borderColor: "background-lighten-10" },
                      ".active": {
                        borderColor: "primary",
                      },
                      button: {
                        opacity: 1,
                        ":hover": {
                          opacity: 1,
                        },
                      },
                    },
                    button: {
                      position: "absolute",
                      opacity: 0,
                      ml: -10,
                      backgroundColor: "background",
                      border: "1px solid",
                      borderColor: "text",
                      color: "text",
                      display: "flex",
                      width: "100%",
                      maxWidth: "24px",
                      height: "24px",
                      flexGrow: "1",
                      borderRadius: "50%",
                      alignItems: "center",
                      justifyContent: "center",
                      svg: { mt: 1, ml: 1 },
                      cursor: "pointer",
                    },
                  }}
                >
                  {episode.id === context.state.id && <Bars />}

                  <Link
                    role="menuitem"
                    activeClassName="active"
                    to={
                      "/bolum" + "/" + episode.number + "/" + episode.fields.slug
                    }
                  >
                    <h4>{episode.title}</h4>
                    {data.allMarkdownRemark.edges.map(({ node: markdown }) => {
                      if (markdown.frontmatter.id === episode.id)
                        return (
                          <p
                            key={markdown.frontmatter.id}
                            sx={{
                              fontSize: 2,
                              lineHeight: 1.4,
                              fontWeight: 300,
                              opacity: 0.7,
                              mt: 10,
                            }}
                          >
                            {markdown.frontmatter.summary}
                          </p>
                        )
                      else return null
                    })}
                  </Link>

                  {episode.id !== context.state.id && (
                    <button
                      tabIndex="-1"
                      onClick={() => context.setCurrentPlaying(episode)}
                    >
                      <PlayIcon />
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </section>
        </>
      )}
    </EpisodeConsumer>
  )
}

export default List
