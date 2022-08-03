import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import { Button, Container } from 'react-bootstrap'
import { Link } from 'gatsby'
import { StructuredText } from 'react-datocms'

import ImageFormat from '~components/ImageFormat'

import * as s from './SectionHowItWorks.module.scss'

const SectionHowItWorks = (props) => {
  const {
    heading,
    text,
    image,
    buttonText,
    buttonLink,
    buttonHide,
    steps,
    className,
    ...rest
  } = props

  return (
    <section {...rest} className={clsx(s.sectionHowItWorks, className)}>
      <Container>
        <div className={s.gridHeading}>
          <h2 className={s.heading}>{heading}</h2>
          <StructuredText data={text.value} />
          {!buttonHide && (
            <Button
              variant="primary"
              className={s.btn}
              as={Link}
              to={buttonLink}
            >
              {buttonText}
            </Button>
          )}
        </div>
        <div className={s.imgWrapper}>
          <div className={s.imgInner}>
            <ImageFormat alt="app" file={image} />
          </div>
        </div>
      </Container>
    </section>
  )
}

SectionHowItWorks.defaultProps = {
  className: undefined,
}

SectionHowItWorks.propTypes = {
  className: PropTypes.string,
}

export default SectionHowItWorks
