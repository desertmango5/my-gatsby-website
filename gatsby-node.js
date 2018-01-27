const path = require('path');
const slash = require('slash');
const {
  createPaginationPages,
  createLinkedPages
} = require('gatsby-pagination');

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators
  return new Promise((resolve, reject) => {
    const postTemplate = path.resolve(`src/templates/blog-post.js`)
    const blogTemplate = path.resolve(`src/templates/blog.js`)

    graphql(`
      {
        allPosts (
          limit: 1000
        ) {
          edges {
            node {
              id
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
            }
          }
        }
      }
    `).then(result => {
        if(result.errors) {
          console.log(result.errors, 'hello')
        }

        createPaginationPages({
          createPage,
          edges: result.data.allPosts.edges,
          component: slash(blogTemplate),
          pathFormatter: path => `/blog/`,
          limit: 10
        })

        // create page for each blog post when title is clicked
        createLinkedPages({
          createPage,
          edges: result.data.allPosts.edges,
          component: slash(postTemplate),
          edgeParser: edge => ({
            path: edge.node.slug,
            context: {
              slug: edge.node.slug,
            },
          }),
          circular: true,
        })
      resolve()
    })
  })
}