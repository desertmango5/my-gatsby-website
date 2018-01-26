import React from 'react' 
import Link from 'gatsby-link'
import Markdown from 'react-markdown'
import style from '../styles/blog-post.module.scss'

const Blog = ({ data }) => (
  <div>
    <div className={style.body}>
      {data.allPosts.edges.map(post => (
        <div key={post.node.id} className={style.post}>
          <p className={style.date}>{post.node.date}</p>
          <Link to="/" className={style.link}>
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
              source={post.node.content}
              className={style.content}
            />
          </div>
        </div>
      ))}
    </div>
    <hr/>
  </div>
  
)

export default Blog

export const PostQuery = graphql`
  query Posts {
    allPosts(sort: {fields: [date], order: DESC}) {
      edges {
        node {
          id
          title
          slug
          date(formatString: "DD MMM YYYY")
          tags
          category
          content
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