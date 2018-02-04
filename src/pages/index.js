import React from 'react'
import Link from 'gatsby-link'
import 'typeface-raleway'
import 'typeface-merriweather'
import styles from '../styles/index.module.scss'

const IndexPage = ({ data }) => (
  <div className={styles.body}>
    <h1>Here is my Amazing Intro</h1>
    <p>This is the one chance I'll get to catch your attention. Blow this and it's over ☹️</p>
    <h3>Frontend Junk</h3>
    <p>A brief introduction to my interest in frontend web development.</p>
    <h3>Photography</h3>
    <p>Mention that I have a little experience as a pro photographer. Pop in a few images.</p>
    <h3>My Recent Blog Posts</h3>
    {data.allPosts.edges.map(post => (
      <Link to={`/blog/${post.node.slug}`} key={post.node.id}>
        <p>{post.node.title}</p>
      </Link>
    ))}
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
        }
      }
    }
  }
`