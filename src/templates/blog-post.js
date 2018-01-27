import React from 'react' 
import Link from 'gatsby-link'
import Markdown from 'react-markdown'
import style from '../styles/blog-post.module.scss'

class BlogPost extends React.Component {
  render() {
    const post = this.props.data.posts
    const { next, prev } = this.props.pathContext
    console.log(next)
    console.log(prev)

    return (
      <div>
        <div className={style.body}>
          <div key={post.id} className={style.post}>
            <p className={style.date}>{post.date}</p>
            <Link to="/" className={style.link}>
              <h2 className={style.title}>{post.title}</h2>
            </Link>
            {post.authors.map(author => (
              <div key={author.id} className={style.authorSection}>
                <p className={style.author}>Posted by <span className={style.name}>{author.name}</span></p>
                <img src={author.image.url} alt={author.name} className={style.authorImage} />
              </div>
            ))}
            <div className={style.main}>
              <img 
                src={post.coverImage.url} 
                alt={post.title}
                className={style.coverImage}  
              />
              <Markdown
                source={post.content}
                className={style.content}
              />
            </div>
            <Link
              to={this.props.pathContext.next}
            >
              Next Post
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

export default BlogPost

export const postQuery = graphql`
  query readEachBlogPost(
    $slug: String!
  ) {
    posts(
      slug: { eq: $slug }
    ) {
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
`