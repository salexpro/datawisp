import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { Container } from 'react-bootstrap'
import { StructuredText } from 'react-datocms'

import FounderCard from './FounderCard'

import * as s from './SectionFounders.module.scss'

const SectionFounders = (props) => {
  const { heading, text, founders, className, ...rest } = props

  return (
    <Container
      as="section"
      {...rest}
      className={classNames(s.sectionFounders, className)}
    >
      <h2 className={s.heading}>{heading}</h2>
      <StructuredText data={text.value} />
      <div className={s.foundersWrapper}>
        {founders.map((founder) => (
          <div key={founder.id} className={s.cardWrapper}>
            <FounderCard {...founder} />
          </div>
        ))}
      </div>
    </Container>
  )
}

SectionFounders.defaultProps = {
  className: '',
}

SectionFounders.propTypes = {
  className: PropTypes.string,
}

export default SectionFounders
