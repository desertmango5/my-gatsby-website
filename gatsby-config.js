require('dotenv').config({ path: './.env.development' })
const autoprefixer = require('autoprefixer')

module.exports = {
  siteMetadata: {
    title: 'Michael Manges',
    byline: 'The Decrepit Webdev',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
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
  ],
};
