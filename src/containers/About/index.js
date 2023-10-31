import React from 'react'
import PropTypes from 'prop-types'

import SectionBanner from '~components/SectionBanner'
import SeoDatoCms from '~components/SeoDatoCms'
import Layout from '../Layout'

import SectionHero from './components/SectionHero'
import SectionMission from './components/SectionMission'
import SectionFounders from './components/SectionFounders'

const About = (props) => {
  const { seo, hero, mission, founders, banner } = props

  return (
    <Layout {...props}>
      <SeoDatoCms seo={seo} />
      <SectionHero {...hero} />
      <SectionMission {...mission} />
      <SectionFounders {...founders} />
      <SectionBanner {...banner} />
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
