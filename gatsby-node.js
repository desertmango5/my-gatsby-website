const path = require('path');
const slash = require('slash'); 
const {
  createPaginationPages,
  createLinkedPages,
  prefixPathFormatter,
} = require('gatsby-pagination');

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;
  return new Promise((resolve, reject) => {
    const postTemplate = path.resolve(`src/templates/blog-post.jsx`);
    const blogTemplate = path.resolve(`src/templates/blog.jsx`);

    graphql(`
      {
        allContentfulBlogPost {
          edges {
            node {
              id
              title
              slug
              content {
                id
                content
              }
              date
              heroImage {
                id
                file {
                  url
                }
              }
              authorInfo {
                id
                name
                photo {
                  id
                  file {
                    url
                  }
                }
              }
            }
          }
        }
      }
    `).then((result) => {
        if (result.errors) {
          console.error(result.errors);
        }

        // create blog.js page that passes pathContext props to blog-post.js
        createPaginationPages({
          createPage,
          edges: result.data.allContentfulBlogPost.edges,
          component: slash(blogTemplate),
          pathFormatter: prefixPathFormatter("/blog"),
          limit: 10,
        });

        // create page for each blog post when title is clicked
        createLinkedPages({
          createPage,
          edges: result.data.allContentfulBlogPost.edges,
          component: slash(postTemplate),
          edgeParser: edge => ({
            path: `/blog/${edge.node.slug}`,
            context: {
              slug: edge.node.slug,
            },
          }),
          circular: true,
        });
      resolve();
    });
  });
};
