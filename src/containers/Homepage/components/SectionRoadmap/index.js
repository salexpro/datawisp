import React from 'react'
import PropTypes from 'prop-types'
import { Container } from 'react-bootstrap'
import clsx from 'clsx'
import { StructuredText } from 'react-datocms'

import RoadmapItem from './components/RoadmapItem'
import * as s from './SectionRoadmap.module.scss'

const SectionRoadmap = (props) => {
  const { heading, text, phases, className, ...rest } = props

  return (
    <Container
      as="section"
      {...rest}
      className={clsx(s.sectionRoadmap, className)}
      id="roadmap"
    >
      <h2>{heading}</h2>
      <div className={s.text}>
        <StructuredText data={text.value} />
      </div>
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
  text: PropTypes.object.isRequired,
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
