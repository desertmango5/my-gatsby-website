import React from 'react'
import Link from 'gatsby-link'
import classNames from 'classnames/bind'
import style from './index.module.scss'

class Header extends React.Component{
  constructor() {
    super();
    // bind functions to this
    this.click = this.click.bind(this)
    this.clickAbout = this.clickAbout.bind(this)
    this.clickBlog = this.clickBlog.bind(this)
    this.clickPhotography = this.clickPhotography.bind(this)

    // states
    this.state = { 
      blogActive: false,
      aboutActive: false,
      photographyActive: false
     }
  }

  // functions
  clickAbout() {
    this.setState({ 
      blogActive: false,
      aboutActive: true,
      photographyActive: false
    })
  }

  clickBlog() {
    this.setState({ 
      blogActive: true,
      aboutActive: false,
      photographyActive: false
    })
  }

  clickPhotography() {
    this.setState({ 
      blogActive: false,
      aboutActive: false,
      photographyActive: true
    })
  }

  click() {
    this.setState({
      blogActive: false,
      aboutActive: false,
      photographyActive: false
    })
  }

  render() {
    // bind style to 
    let cx = classNames.bind(style)

    const setClassesAbout = cx(
      {
        menu__item: true,
        menu__active: this.state.aboutActive,
      }
    )

    const setClassesBlog = cx(
      {
        menu__item: true,
        menu__active: this.state.blogActive,
      }
    )

    const setClassesPhotography = cx(
      {
        menu__item: true,
        menu__active: this.state.photographyActive,
      }
    )

    return (
      <div className={style.navigation}>
        <div>
          <h1 className={style.title}>
            <Link 
              to="/" 
              className={style.title__link}
              onClick={this.click}
              >
                {this.props.title}
              </Link>
          </h1>
          <h4 className={style.byline}>{this.props.byline}</h4>
        </div>
        <div className={style.menu}>
          <Link 
            to="/blog/" 
            className={setClassesBlog}
            onClick={this.clickBlog}
            >
              Blog
            </Link>
          <Link 
            to="/about/" 
            className={setClassesAbout}
            onClick={this.clickAbout}
          >
            About
          </Link>
          <Link 
            to="/photography/" 
            className={setClassesPhotography}
            onClick={this.clickPhotography}
          >
            Photography
          </Link>
        </div>
      </div>
    )
  }
}

export default Header
