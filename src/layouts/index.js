import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/Header'
import '../styles/styles.scss'

const TemplateWrapper = ({ children, data }) => (
  <div>
    <Helmet
      title="Michael Manges"
      meta={[
        { name: 'description', content: 'Web developer and photographer Michael Manges' },
        { name: 'keywords', content: 'webdev, photography, gatsbyjs, reactjs, frontend, graphql, design, photo, photos' },
      ]}
    />
    <Header 
      title={data.site.siteMetadata.title} 
      byline={data.site.siteMetadata.byline}
    />
    <div>
      {children()}
    </div>
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
