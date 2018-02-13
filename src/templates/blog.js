import React from 'react' 
import Link from 'gatsby-link'
import Markdown from 'react-markdown'
import style from '../styles/blog.module.scss'

const Blog = ({ data }) => {

  return (
    <div>
      <div className={style.body}>
        {data.allContentfulBlogPost.edges.map(post => (
          <div key={post.node.id} className={style.post}>
            <p className={style.date}>{post.node.date}</p>
            <Link to={post.node.slug} className={style.link}>
              <h2 className={style.title}>{post.node.title}</h2>
            </Link>
            {/* AUTHOR SECTION */}
            {/* <div key={post.node.authorInfo.id} className={style.authorSection}>
              <p className={style.author}>Posted by <span className={style.name}>{post.node.authorInfo.name}</span></p>
              <img src={post.node.authorInfo.photo.file.url} alt={post.node.authorInfo.name} className={style.authorImage} />
            </div> */}
            <div className={style.main}>
              <img 
                src={post.node.heroImage.file.url} 
                alt={post.node.title}
                className={style.heroImage}  
              />
              <Markdown
                source={post.node.excerpt.excerpt}
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
}

export default Blog

export const allPostsQuery = graphql`
  query allPosts {
    allContentfulBlogPost(
      sort: {fields: [date], order: DESC}
      ) {
      edges {
        node {
          id
          title
          slug
          excerpt {
            id
            excerpt
          }
          date(formatString: "MMM DD, YYYY")
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
`