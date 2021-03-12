require('dotenv').config({ path: '.env' });

module.exports = {
  siteMetadata: {
    title: "KRC Website",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: `gatsby-source-sanity`,
      options: {
        projectId: `bnib2d25`,
        dataset: `production`,
        watchMode: true,
        token: process.env.SANITY_TOKEN
      }
    }
  ],
};
