import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import { Button, Container } from 'react-bootstrap'
import { Link } from 'gatsby'
import { StructuredText } from 'react-datocms'
import { Swiper, SwiperSlide } from 'swiper/react'

import ImageFormat from '~components/ImageFormat'

import CardStep from './components/CardStep'
import * as s from './SectionHowItWorks.module.scss'

const SectionHowItWorks = (props) => {
  const {
    heading,
    text,
    image,
    buttonText,
    buttonLink,
    steps,
    className,
    ...rest
  } = props

  return (
    <section {...rest} className={cn(s.sectionHowItWorks, className)}>
      <Container>
        <div className={s.gridHeading}>
          <h2 className={s.heading}>{heading}</h2>
          <StructuredText data={text.value} />
          <Button variant="primary" className={s.btn} as={Link} to={buttonLink}>
            {buttonText}
          </Button>
        </div>
        <div className={s.imgWrapper}>
          <ImageFormat alt="app" file={image} />
          <div className={s.gridSteps}>
            {steps.map(
              ({ id, heading: stepHeading, image: stepImage }, index) => (
                <CardStep
                  stepNumber={index + 1}
                  key={id}
                  text={stepHeading}
                  file={stepImage}
                />
              )
            )}
          </div>
          <Swiper spaceBetween={16} slidesPerView={2.1} className={s.swiper}>
            {steps.map(
              ({ id, heading: stepHeading, image: stepImage }, index) => (
                <SwiperSlide key={id}>
                  <CardStep
                    stepNumber={index + 1}
                    text={stepHeading}
                    file={stepImage}
                  />
                </SwiperSlide>
              )
            )}
          </Swiper>
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
