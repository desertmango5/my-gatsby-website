import React from 'react' 
import Link from 'gatsby-link'
import Markdown from 'react-markdown'
import style from '../styles/blog.module.scss'

const Blog = ({ data }) => (
  <div className={style.body}>
    <h2>📚 BLOG 📚</h2>
    {data.allPosts.edges.map(post => (
      <div key={post.node.id} className={style.post}>
        <p className={style.date}>{post.node.date}</p>
        <Link to="/" className={style.link}>
          <h2 className={style.title}>{post.node.title}</h2>
        </Link>
        {post.node.authors.map(author => (
          <div key={author.id}>
            <p className={style.author}>Post by <span className={style.name}>{author.name}</span></p>
            <img src={author.image.url} alt={author.name} className={style.authorImage} />
          </div>
        ))}
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
    ))}
    <p>{data.allPosts.edges[0].node.title}</p>
  </div>
)

export default Blog

export const allPostsQuery = graphql`
  query allPosts {
    allPosts {
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