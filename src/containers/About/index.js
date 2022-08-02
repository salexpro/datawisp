import React from 'react'
import PropTypes from 'prop-types'

import Layout from '~components/Layout'
import S from '~components/seo'

import SectionHero from './components/SectionHero'
import SectionMission from './components/SectionMission'
import SectionFounders from './components/SectionFounders'
import SectionBanner from './components/SectionBanner'

const About = (props) => {
  return (
    <Layout {...props}>
      <S title="About us" />
      <SectionHero />
      <SectionMission />
      <SectionFounders />
      <SectionBanner />
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
