const path = require("path")

module.exports = {
  siteMetadata: {
    title: `Elze's Gallery`,
	image: "./src/assets/logo.jpg",
    author: `Vincent S`,
    description: `Welcome to my website. I do design and User Interface Customizing, also interested in Android Development. `,
    repo: `https://github.com/elzeXD`,
    facebook: `https://facebook.com/elzeXD`,
    youtube: `https://www.youtube.com/elzeXD`,
    instagram: `https://www.instagram.com/elzexd`,
    telegram: `https://t.me/elzeXD`,
    trakteer: `https://trakteer.id/elzeXD`,
    deviantart: `https://elzepc.deviantart.com`,
    discord: `https://discordapp.com/users/elze#2211`,
    discordac: `https://discord.io/acshop`,
    url: `https://elzeXD.github.io`,
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
            options: {
				maxWidth: 960,
				linkImagesToOriginal: false,
			},
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
