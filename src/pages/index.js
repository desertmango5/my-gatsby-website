import React from 'react'
import Link from 'gatsby-link'
import 'typeface-raleway'
import 'typeface-merriweather'
import style from '../styles/index.module.scss'

const IndexPage = ({ data }) => (
  <div className={style.body}>
    <section className={style.intro}>
      <h1>Frontend Web Developer Wannabe</h1>
      <p>
        I am activity looking for my first full-time Frontend Web Developer position in my hometown Phoenix, AZ, USA or certain locations in Europe. My ideal company will use modern web development tools and have a nurturing culture where I can continue learning.
      </p>
    </section>
    {/* FRONTEND */}
    <section className={style.frontend}>
      <h3>Modern Frontend Technology</h3>
      <p>Since June 2017 I have been a full-time frontend web development student focusing on modern build tools.</p>
      <section className={style.frontend__lists}>
        <ul className={style.frontend__list1}>
          <li>React</li>
          <li>JAMstack</li>
          <li>JavaScript</li>
          <li>ES6</li>
          <li>Node.js</li>
        </ul>
        <ul className={style.frontend__list2}>
          <li>Headless CMS</li>
          <li>CSS Grid</li>
          <li>Flexbox</li>
          <li>GatsbyJS</li>
          <li>GraphQL</li>
        </ul>
      </section>
      <p>Continue to my <Link to="/webdev/" className={style.link}>WebDev</Link> page to learn more about my Frontend Web Developer skills.</p>
    </section>
    {/* PHOTOGRAPHY */}
    <section className={style.photography}>
      <h3>Photography</h3>
      <p>What began as a hobby grew into much more when people began to notice my work. Even though professional photography is a part-time side gig, I am thankful to have a creative outlet.</p>
      <section className={style.photography__images}>
        <img src={`https://res.cloudinary.com/${process.env.GATSBY_CLOUD_NAME}/image/upload/v1517768591/creative2_rowt9l.jpg`} alt="Fish pier at night" className={style.photography__image}/>
        <img src={`https://res.cloudinary.com/${process.env.GATSBY_CLOUD_NAME}/image/upload/v1517768592/creative3_khq0ii.jpg`} alt="Black and white spiral stairway" className={style.photography__image}/>
        <img src={`https://res.cloudinary.com/${process.env.GATSBY_CLOUD_NAME}/image/upload/v1517768592/creative1_kxw9bv.jpg`} alt="Purple V shaped structure at night" className={style.photography__image}/>
        <Link className={style.photography__link} to="/photography/">
          <button className={style.photography__button}>See More →</button>
        </Link>
      </section>
    </section>
    {/* BLOG */}
    <section className={style.blog}>
      <h3>Recent Blog Posts</h3>
      {data.allPosts.edges.map(post => (
        <div className={style.blog__post}>
          <p className={style.blog__date}>{post.node.date}</p>
          <Link 
            key={post.node.id}
            to={`/blog/${post.node.slug}`} 
            className={style.blog__link}
          >
            <h4 className={style.blog__title}>{post.node.title}</h4>
          </Link>
          <img src={post.node.coverImage.url} alt={post.node.title} className={style.blog__image} />
        </div>
        ))}
    </section>
  </div>
)

export default IndexPage

export const lastThreePosts = graphql`
  query LastThree {
    allPosts(
      sort: { fields: [date], order: DESC }
      limit: 3
      ) {
      edges {
        node {
          id
          title
          slug
          date(formatString: "DD MMM YYYY")
          coverImage {
            id
            url
          }
        }
      }
    }
  }
`
