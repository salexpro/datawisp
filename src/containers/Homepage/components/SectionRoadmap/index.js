import React from 'react'
import PropTypes from 'prop-types'
import { Container } from 'react-bootstrap'
import cn from 'classnames'

import RoadmapItem from './components/RoadmapItem'
import * as s from './SectionRoadmap.module.scss'

const SectionRoadmap = (props) => {
  const { heading, phases, className, ...rest } = props

  return (
    <Container
      as="section"
      {...rest}
      className={cn(s.sectionRoadmap, className)}
    >
      <h2>{heading}</h2>
      <div className={s.roadmapWrapper}>
        {phases.map(({ id, ...phase }, index) => (
          <RoadmapItem key={id} {...phase} style={{ gridArea: `i${index}` }} />
        ))}
      </div>
    </Container>
  )
}

SectionRoadmap.defaultProps = {
  className: '',
}

SectionRoadmap.propTypes = {
  heading: PropTypes.string.isRequired,
  phases: PropTypes.arrayOf(
    PropTypes.shape({
      variant: PropTypes.oneOf(['gray', 'purple', 'pink']),
      heading: PropTypes.string.isRequired,
      listLeft: PropTypes.object.isRequired,
      listRight: PropTypes.object.isRequired,
    })
  ).isRequired,
  className: PropTypes.string,
}

export default SectionRoadmap
