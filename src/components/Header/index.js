import React from 'react'
import Link from 'gatsby-link'
import { NavLink } from 'react-router-dom'
import classNames from 'classnames/bind'
import style from './index.module.scss'
import logo from '../../../static/logo/website-logo.png'

class Header extends React.Component{
  constructor() {
    super();
    // bind functions to this
    
  }

  render() {
    
    return (
      <div className={style.navigation}>
        <div>
          <Link 
            to="/" 
            className={style.title__link}
            >
              <img src={logo} alt="Michael Manges logo" className={style.title} />
            </Link>
          <h4 className={style.byline}>{this.props.byline}</h4>
        </div>
        <div className={style.menu}>
          <NavLink 
            to="/blog/" 
            className={style.menu__item}
            activeClassName={style.menu__active}
            >
              Blog
            </NavLink>
          <NavLink 
            to="/about/" 
            className={style.menu__item}
            activeClassName={style.menu__active}
          >
            About
          </NavLink>
          <NavLink 
            to="/photography/" 
            className={style.menu__item}
            activeClassName={style.menu__active}
          >
            Photography
          </NavLink>
        </div>
      </div>
    )
  }
}

export default Header
