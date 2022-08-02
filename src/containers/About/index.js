import React from 'react'
import PropTypes from 'prop-types'

import Layout from '~components/Layout'

import SectionHero from './components/SectionHero'

const About = (props) => {
  return (
    <Layout {...props}>
      <SectionHero />
    </Layout>
  )
}

About.defaultProps = {
  className: undefined,
}

About.propTypes = {
  className: PropTypes.string,
}

export default About
