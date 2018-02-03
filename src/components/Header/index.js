import React from 'react'
import Link from 'gatsby-link'
import { NavLink } from 'react-router-dom'
import ToggleDisplay from 'react-toggle-display'
import classNames from 'classnames/bind'
import style from './index.module.scss'
import logo from '../../assets/logo/website-logo.png'
import hamburger from '../../assets/icons/hamburger.png'

class Header extends React.Component {
  constructor() {
    super()
    this.state = { show: false }
  }

  handleClick() {
    this.setState({ show: !this.state.show })
  }

  render() {
    return (
      <div className={style.navigation}>
        <div>
          <Link 
            to="/" 
            className={style.title__link}
            onClick={ () => this.handleClick() }
            >
              <img src={logo} alt="Michael Manges logo" className={style.title} />
            </Link>
          <h4 className={style.byline}>{this.props.byline}</h4>
        </div>
        <nav className={style.menu}>
          
          {/* MOBILE NAVIGATION */}
          <nav className={style.mobile}>
            <button 
              onClick={ () => this.handleClick() } 
              className={style.mobile__button}
            >
              
              <ToggleDisplay if={this.state.show} className={style.mobile__close}>
                &times;
              </ToggleDisplay>Menu</button>
          </nav>
          

          {/* DESKTOP NAVIGATION */}
          <NavLink 
            to="/webdev/" 
            className={style.menu__item}
            activeClassName={style.menu__active}
          >
              WebDev
          </NavLink>
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
        </nav>

        {/* MOBILE MENU ITEMS */}
        <ToggleDisplay show={this.state.show} className={style.mobile__items}>
          <NavLink 
            to="/webdev/" 
            className={style.mobile__item}
            activeClassName={style.menu__active}
            onClick={ () => this.handleClick() }
          >
              WebDev
          </NavLink>
          <NavLink 
            to="/blog/" 
            className={style.mobile__item}
            activeClassName={style.menu__active}
            onClick={ () => this.handleClick() }
          >
            Blog
          </NavLink>
          <NavLink 
            to="/about/" 
            className={style.mobile__item}
            activeClassName={style.menu__active}
            onClick={ () => this.handleClick() }
          >
            About
          </NavLink>
          <NavLink 
            to="/photography/" 
            className={style.mobile__item}
            activeClassName={style.menu__active}
            onClick={ () => this.handleClick() }
          >
            Photography
          </NavLink>
        </ToggleDisplay>

      </div>
    )
  }
} 



export default Header
