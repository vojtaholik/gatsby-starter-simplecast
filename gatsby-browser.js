import React from "react"
import Layout from "./src/components/layout"
import Player from "./src/components/player"
import { EpisodeProvider, EpisodeConsumer } from "./src/components/context"

export const wrapPageElement = ({ element, props }) => {
  // props provide same data to Layout as Page element will get
  // including location, data, etc - you don't need to pass it
  return (
    <EpisodeProvider>
      <Layout {...props}>
        <EpisodeConsumer>
          {context => <Player episode={context.state} />}
        </EpisodeConsumer>
        {element}
      </Layout>
    </EpisodeProvider>
  )
}
