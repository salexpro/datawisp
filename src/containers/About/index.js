import React from 'react'
import PropTypes from 'prop-types'

import Layout from '~components/Layout'
import S from '~components/seo'
import SectionBanner from '~components/SectionBanner'

import SectionHero from './components/SectionHero'
import SectionMission from './components/SectionMission'
import SectionFounders from './components/SectionFounders'

const About = (props) => {
  const { hero, mission, founders, banner } = props

  return (
    <Layout {...props}>
      <S title="About us" />
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
