const path = require("path")

module.exports = {
  siteMetadata: {
    title: `Elze's Gallery`,
    author: `Elze`,
    description: `Ini ubah sendiri eak`,
    facebook: `https://facebook.com/elzeXD`,
    youtube: `https://www.youtube.com/channel/UCK0o03L2vIAk_kYpACYlr8A`,
    instagram: `https://www.instagram.com/elzexd`,
    telegram: `https://t.me/elzeXD`,
    trakteer: `https://trakteer.id/elzeXD`,
    deviantart: `https://elzepc.deviantart.com`,
    discord: `https://discordapp.com/users/elze#2211`,
    siteUrl: `https://elzeXD.github.io`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: path.join(__dirname, "src"),
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Elze's Gallery`,
        short_name: `Elze`,
        start_url: `/`,
        background_color: `#121212`,
        theme_color: `#121212`,
        display: `minimal-ui`,
        icon: `src/assets/favicon.png`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        // Plugins configs
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            maxWidth: 960,
            linkImagesToOriginal: false,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [require(`autoprefixer`)],
      },
    },
    `gatsby-plugin-feed`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
