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
        spaceId: `tmvc2qm2l3zx`,
        accessToken: `6b844873e161896f2793bbdbf5bba34deb637c08576e2258d311cc968858a453`,
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
        }`
      }
    }
  ],
};

