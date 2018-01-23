import React from 'react'
import Link from 'gatsby-link'
import style from './index.module.scss'

const Header = (props) => (
  <div className={style.navigation}>
    <div>
      <h1 className={style.title}>
        <Link to="/" className={style.title__link}>{props.title}</Link>
      </h1>
      <h4 className={style.byline}>{props.byline}</h4>
    </div>
    <div className={style.menu}>
      <Link to="/" className={style.menu__item}>Blog</Link>
      <Link to="/about/" className={style.menu__item}>About</Link>
      <Link to="/" className={style.menu__item}>Photography</Link>
    </div>
  </div>
)

export default Header
