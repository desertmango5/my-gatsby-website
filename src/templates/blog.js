import React from 'react' 
import Link from 'gatsby-link'
import Markdown from 'react-markdown'
import style from '../styles/blog.module.scss'

const Blog = ({ data }) => (
  <div>
    <div className={style.body}>
      {data.allPosts.edges.map(post => (
        <div key={post.node.id} className={style.post}>
          <p className={style.date}>{post.node.date}</p>
          <Link to={post.node.slug} className={style.link}>
            <h2 className={style.title}>{post.node.title}</h2>
          </Link>
          {post.node.authors.map(author => (
            <div key={author.id} className={style.authorSection}>
              <p className={style.author}>Posted by <span className={style.name}>{author.name}</span></p>
              <img src={author.image.url} alt={author.name} className={style.authorImage} />
            </div>
          ))}
          <div className={style.main}>
            <img 
              src={post.node.coverImage.url} 
              alt={post.node.title}
              className={style.coverImage}  
            />
            <Markdown
              source={post.node.excerpt}
              className={style.excerpt}
            />
            <Link to={post.node.slug} className={style.buttonLink}>
              <button className={style.button}>Read More <span className={style.arrow}>→</span></button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  </div>
  
)

export default Blog

export const allPostsQuery = graphql`
  query allPosts {
    allPosts(sort: {fields: [date], order: DESC}) {
      edges {
        node {
          id
          title
          slug
          date(formatString: "DD MMM YYYY")
          tags
          category
          excerpt
          coverImage {
            id
            url
            width
            height
            handle
          }
          authors {
            id
            name
            image {
              id
              url
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
`