module.exports = {
  siteMetadata: {
    title: `Lewis Gatsby Starter Basic`,
    description: `A custom basic Gatsby starter template to start a new website.`,
    author: `Lewis Llobera`,
    twitter: `@lewislbr`,
    email: `billobera@gmail.com`,
    siteUrl: `https://www.lewis-gatsby-starter-basic.firebaseapp.com`,
    gitUrl: `https://github.com/lewislbr/lewis-gatsby-starter-basic`,
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
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Lewis Gatsby Starter i18n`,
        short_name: `LGSi18n`,
        start_url: `/`,
        background_color: `#fafafa`,
        theme_color: `#fafafa`,
        display: `standalone`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-robots-txt`,
  ],
};
