import React from 'react' 
import Link from 'gatsby-link'
import style from './index.module.scss'
import Gatsby from '../../assets/icons/gatsby-logo.png'
import Netlify from '../../assets/icons/netlify-logo.png'
import Contentful from '../../assets/icons/contentful-logo.png'


const Footer = () => (
  <div className={style.footer}>
    <p className={style.power}>Powered by</p>
    <div className={style.logos}>
      <a href="https://gatsbyjs.org" target="_blank">
        <img 
          src={Gatsby} 
          alt="GatsbyJS logo"
          title="Gatsby"
        />
      </a>
      <a href="https://netlify.com" target="_blank">
        <img 
          src={Netlify} 
          alt="Netlify logo"
          title="Netlify"
        />
      </a>
      <a href="https://contentful.com" target="_blank">
        <img 
          src={Contentful} 
          alt="Contentful logo"
          title="Contentful CMS"
        />
      </a>
    </div>
    <p className={style.copyright}>Copyright © 2018 Michael Manges</p>
  </div>
)

export default Footer
