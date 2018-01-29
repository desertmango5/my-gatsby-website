import React from 'react'
import Link from 'gatsby-link'
import 'typeface-open-sans'
import styles from '../styles/index.module.scss'

const IndexPage = () => (
  <div className={styles.body}>
    <h1>Here is my Amazing Intro</h1>
    <p>This is the one chance I'll get to catch your attention. Blow this and it's over ☹️</p>
    <h3>Frontend Junk</h3>
    <p>A brief introduction to my interest in frontend web development.</p>
    <h3>Photography</h3>
    <p>Mention that I have a little experience as a pro photographer. Pop in a few images.</p>
    <h3>Blog Stuff</h3>
    <p>Maybe post the lastest 2 or 3 blog entries here.</p>
  </div>
)

export default IndexPage
