module.exports = {
  siteMetadata: {
    title: `Lewis Gatsby Starter Basic`,
    description: `A custom basic Gatsby starter template to start a website.`,
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
    `gatsby-plugin-offline`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-robots-txt`,
  ],
};
