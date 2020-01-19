module.exports = {
  siteMetadata: {
    title: `The Coding Bros`,
    description: `Global web teknolojileri gündemini ve güncel web yazılım geliştirme tekniklerini, yaşadıkları kişisel tecrübeler üzerinden anlatan, Hollanda'da yaşayan iki kardeş yazılımcı Önder Ceylan ve Osman Fikret Ceylan'dan dinleyin.`,
    author: `Önder Ceylan & Osman Fikret Ceylan`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/content/episodes`,
        name: "episodes",
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/the-coding-bros-icon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-156501073-1",
        head: false,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
