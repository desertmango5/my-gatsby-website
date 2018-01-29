import React from 'react' 
import Link from 'gatsby-link'
import style from './index.module.scss'
import GraphcmsLogo from '../../assets/svg/powered_by_graphcms.svg'
import GatsbyLogo from '../../assets/svg/gatsby.svg'


const Footer = () => (
  <div className={style.footer}>
    <p className={style.gatsby}>A GatsbyJS Project Made With <span className={style.heart}>❤️</span></p>
    <div className={style.logos}>
      <a href="https://gatsbyjs.org" target="_blank">
        <GatsbyLogo className={style.gatsbylogo} />
      </a>
      <a href="https://graphcms.com" target="_blank">
        <GraphcmsLogo className={style.graphcmslogo} />
      </a>
    </div>
    <p className={style.copyright}>Copyright © 2018 Michael Manges</p>
  </div>
)

export default Footer
