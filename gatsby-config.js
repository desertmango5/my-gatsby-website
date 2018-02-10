require('dotenv').config({ path: './.env.development' })
const autoprefixer = require('autoprefixer')

module.exports = {
  siteMetadata: {
    title: 'Michael Manges',
    byline: 'The Decrepit Webdev',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-postcss-sass`,
      options: {
        postCssPlugins: [autoprefixer()],
        precision: 8,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-plugin-svgr`,
      options: {
        dir: `./src/assets/svg`,
        icon: true,
        viewBox: false,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.GATSBY_CONTENTFUL_SPACEID,
        accessToken: process.env.GATSBY_CONTENTFUL_ACCESS_TOKEN,
      },
    },
  ],
};

