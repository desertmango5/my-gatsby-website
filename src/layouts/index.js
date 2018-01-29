import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/Header'
import Footer from '../components/Footer'
import '../styles/styles.scss'
import icon32 from '../assets/logo/32-website-favicon.png'

const TemplateWrapper = ({ children, data }) => (
  <div>
    <Helmet
      title="Michael Manges"
      meta={[
        { name: 'description', content: 'Web developer and photographer Michael Manges' },
        { name: 'keywords', content: 'webdev, photography, gatsbyjs, reactjs, frontend, graphql, design, photo, photos' },
      ]}
      link={[
        { rel: 'shortcut icon', type: 'image/png', href: `${icon32}` } 
      ]}
    />
    <Header 
      title={data.site.siteMetadata.title} 
      byline={data.site.siteMetadata.byline}
    />
    <div>
      {children()}
    </div>
    <Footer />
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper

export const query = graphql`
  query SiteInfo {
    site {
      siteMetadata {
        title
        byline
      }
    }
  }
`
