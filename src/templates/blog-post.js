import React from 'react' 
import Link from 'gatsby-link'
import Markdown from 'react-markdown'
import shortid from 'shortid'
import style from '../styles/blog-post.module.scss'
import twitter from '../assets/icons/64-twitter.png'
import linkedin from '../assets/icons/64-linkedin.png'
import github from '../assets/icons/GitHub-Mark-64px.png'

class BlogPost extends React.Component {
  render() {
    const post = this.props.data.contentfulBlogPost
    const { next, prev } = this.props.pathContext

    const createTitle = (slug) => {
      let noBlog = slug.slice(6, next.length)
      let title = noBlog.replace(/-/g, ' ')
      return title
    }

    const nextTitle = createTitle(next)
    const prevTitle = createTitle(prev)
    
    return (
      <div>
        <div className={style.body}>
          <div key={post.id} className={style.post}>
            <p className={style.date}>{post.date}</p>
            <h2 className={style.title}>{post.title}</h2>
            
            <div className={style.main}>
              <img 
                src={post.heroImage.file.url} 
                alt={post.title}
                className={style.coverImage}  
              />
              <Markdown
                source={post.content.content}
                className={style.content}
              />
                <div className={style.authorSection}>
                  <p><strong>Let's connect!</strong></p>
                  <section>
                    <a href="https://twitter.com/decrepit_webdev" target="_blank" title="@decrepit_webdev"><img src={twitter} alt="Twitter logo" className={style.icons} /></a>
                    <a href="https://github.com/mkmanges" target="_blank" title="@mkmanges"><img src={github} alt="Github logo" className={style.icons} /></a>
                    <a href="https://www.linkedin.com/in/michaelmanges/" target="_blank" title="@michaelmanges"><img src={linkedin} alt="LinkedIn logo" className={style.icons} /></a>
                  </section>
                </div>
              <hr className={style.divider}/>
              <h5>Tags</h5>
              <div className={style.tag}>
                {post.tag.map(tag => (
                  <button key={shortid.generate()} className={style.tags__button}>{tag}</button>
                ))}
              </div>
            </div>
            <div className={style.postNav}>
              <div className={style.postNav__prev}>
                <p className={style.prev}>← Previous Post</p>
                <hr/>
                <Link to={prev} className={style.postNav__item}>{prevTitle}</Link>
              </div>
              <div className={style.postNav__next}>
                <p className={style.next}>Next Post →</p>
                <hr/>
                <Link to={next} className={style.postNav__item}>{nextTitle}</Link>
              </div>
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
    contentfulBlogPost(
      slug: { eq: $slug }
    ) {
      id
      title
      slug
      tag
      content {
        id
        content
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
`