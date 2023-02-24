import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { StructuredText } from 'react-datocms'
import { Button, Container } from 'react-bootstrap'

import * as s from './SectionHero.module.scss'

const SectionHero = (props) => {
  const { heading, buttonText, buttonLink, className, ...rest } = props

  return (
    <Container
      {...rest}
      as="section"
      className={classNames(s.sectionHero, className)}
    >
      <StructuredText data={heading.value} />
      <Button
        variant="primary"
        as="a"
        href={buttonLink}
        target="_blank"
        rel="noreferrer"
        className={s.button}
      >
        {buttonText}
      </Button>
    </Container>
  )
}

SectionHero.defaultProps = {
  className: undefined,
}

SectionHero.propTypes = {
  className: PropTypes.string,
}

export default SectionHero
