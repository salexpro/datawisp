import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import { Button, Container } from 'react-bootstrap'
import { StructuredText } from 'react-datocms'
import { useCookies } from 'react-cookie'

import ImageFormat from '~components/ImageFormat'
import { GOOGLE_TAG_KEY } from '~constants'
import { gtagReportConversion } from '~utils/analytics'

import * as s from './SectionHero.module.scss'

const SectionHero = (props) => {
  const {
    heading,
    text,
    image,
    buttonText,
    buttonLink,
    buttonSecond,
    className,
    utm,
    ...rest
  } = props

  const [cookies] = useCookies([GOOGLE_TAG_KEY])

  return (
    <Container as="section" {...rest} className={cn(s.sectionHero, className)}>
      <div className={s.colLeft}>
        <h1>{heading}</h1>
        <StructuredText data={text.value} />
        <div className={s.buttonWrapper}>
          <Button
            variant="primary"
            href={`${buttonLink.url}${utm && `?${utm}`}`}
            target={buttonLink.target}
            rel={buttonLink.rel}
            onClick={() => gtagReportConversion(cookies)}
          >
            {buttonText}
          </Button>
          <Button
            variant="outline-secondary"
            href={buttonSecond.url}
            target={buttonSecond.target}
            rel={buttonSecond.rel}
          >
            {buttonSecond.text}
          </Button>
        </div>
      </div>
      <ImageFormat file={image} alt="Product hero" />
    </Container>
  )
}

SectionHero.defaultProps = {
  className: '',
}

SectionHero.propTypes = {
  className: PropTypes.string,
}

export default SectionHero
