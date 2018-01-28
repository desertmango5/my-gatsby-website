import React from 'react' 
import Link from 'gatsby-link'
import Markdown from 'react-markdown'
import shortid from 'shortid'
import style from '../styles/blog-post.module.scss'

class BlogPost extends React.Component {
  render() {
    const post = this.props.data.posts
    const { next, prev } = this.props.pathContext

    return (
      <div>
        <div className={style.body}>
          <div key={post.id} className={style.post}>
            <p className={style.date}>{post.date}</p>
            <h2 className={style.title}>{post.title}</h2>
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
              <h5>Tags</h5>
              <div className={style.tags}>
                {post.tags.map(tag => (
                  <button key={shortid.generate()} className={style.tags__button}>{tag}</button>
                ))}
              </div>
              <hr/>
            </div>
            <div className={style.postNav}>
              <Link to={prev} className={style.postNav__item}>← Previous</Link>
              <Link to={next} className={style.postNav__item}>Next →</Link>
            </div>
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