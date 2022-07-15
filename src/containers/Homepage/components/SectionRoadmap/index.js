import React from 'react'
import PropTypes from 'prop-types'
import { Container } from 'react-bootstrap'
import cn from 'classnames'

import RoadmapItem from './components/RoadmapItem'
import ROADMAP from './constants'
import * as s from './SectionRoadmap.module.scss'

const SectionRoadmap = (props) => {
  const { className, ...rest } = props

  return (
    <Container
      as="section"
      {...rest}
      className={cn(s.sectionRoadmap, className)}
    >
      <h2>Roadmap</h2>
      <div className={s.roadmapWrapper}>
        {ROADMAP.map((item, index) => (
          <RoadmapItem
            key={item.heading}
            {...item}
            style={{ gridArea: `i${index}` }}
          />
        ))}
      </div>
    </Container>
  )
}

SectionRoadmap.defaultProps = {
  className: '',
}

SectionRoadmap.propTypes = {
  className: PropTypes.string,
}

export default SectionRoadmap
