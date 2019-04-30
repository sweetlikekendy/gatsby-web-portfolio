module.exports = {
  siteMetadata: {
    title: `Kendy Nguyen`,
    description: `Welcome to Kendy's web developer portfolio! Hope you enjoy what you see and connect with you!`,
    author: `@Kendy Nguyen`,
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
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
