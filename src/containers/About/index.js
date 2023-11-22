import React from 'react'
import PropTypes from 'prop-types'

import SectionBanner from '~components/SectionBanner'
import SectionHero from './components/SectionHero'
import SectionMission from './components/SectionMission'
import SectionFounders from './components/SectionFounders'

const About = (props) => {
  const { hero, mission, founders, banner, utm } = props

  return (
    <>
      <SectionHero {...hero} />
      <SectionMission {...mission} />
      <SectionFounders {...founders} />
      <SectionBanner {...banner} utm={utm} />
    </>
  )
}

About.defaultProps = {
  className: undefined,
}

About.propTypes = {
  className: PropTypes.string,
}

export default About
