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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `img`,
        path: `${__dirname}/src/assets/images/`,
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
      resolve: `gatsby-source-graphcms`,
      options: {
        endpoint: process.env.GATSBY_BLOG_ENDPOINT,
        query: `{
          allPosts {
            id
            isPublished
            title
            date
            slug
            excerpt
            content
            category
            tags
            coverImage {
              id
              handle
              height
              width
              url
            }
            authors {
              id
              bio
              name
              image {
                id
                url
                handle
              }
              posts {
                id
                title
              }
            }
          },
          allAuthors {
            id
            name
            bio
            posts {
              id
              title
            }
            image {
              id
              url
            }
          },
        }`
      }
    }
  ],
};

