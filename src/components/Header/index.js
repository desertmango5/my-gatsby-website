import React from 'react'
import Link from 'gatsby-link'
import classnames from 'classnames'
import style from './index.module.scss'

class Header extends React.Component{
  constructor() {
    super();
    // bind functions to this
    this.click = this.click.bind(this)

    // states
    this.state = { active: false }
  }

  // functions
  click() {
    this.setState({ active: true })
  }

  render() {
    return (
      <div className={style.navigation}>
        <div>
          <h1 className={style.title}>
            <Link to="/" className={style.title__link}>{this.props.title}</Link>
          </h1>
          <h4 className={style.byline}>{this.props.byline}</h4>
        </div>
        <div className={style.menu}>
          <Link to="/blog/" className={style.menu__item}>Blog</Link>
          <Link 
            to="/about/" 
            className={style.menu__item}
            onClick={this.click}
          >
            About
          </Link>
          <Link to="/photography/" className={style.menu__item}>Photography</Link>
        </div>
      </div>
    )
  }
}

export default Header
