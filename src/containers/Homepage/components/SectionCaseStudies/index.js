import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import { Button, Container } from 'react-bootstrap'
import { Link } from 'gatsby'
import { Swiper, SwiperSlide } from 'swiper/react'
import { StructuredText } from 'react-datocms'

import CardCase from '~components/CardCase'
import ComingSoonCase from '~components/ComingSoonCase'

import * as s from './SectionCaseStudies.module.scss'

const SectionCaseStudies = (props) => {
  const {
    heading,
    text,
    cases,
    buttonText,
    buttonLink,
    buttonHide,
    className,
    ...rest
  } = props

  const allCases = [
    ...cases,
    ...Array.from({ length: 3 - cases.length }, (_, i) => ({
      id: i,
      isComingSoon: true,
    })),
  ]

  return (
    <section {...rest} className={clsx(s.sectionCaseStudies, className)}>
      <Container className={s.container}>
        <div className={clsx(s.gridHeading, { [s.buttonHide]: buttonHide })}>
          <h2 className={s.heading}>{heading}</h2>
          <div className={s.text}>
            <StructuredText data={text.value} />
          </div>
          {!buttonHide && (
            <Button as={Link} to={buttonLink} className={s.btn}>
              {buttonText}
            </Button>
          )}
        </div>
        <Swiper
          spaceBetween={16}
          slidesPerView={1.1}
          breakpoints={{
            768: { slidesPerView: 2.05 },
            1024: { slidesPerView: 3, spaceBetween: 32 },
          }}
          className={s.swiper}
        >
          {allCases.map(({ id, isComingSoon, ...caseProps }) => (
            <SwiperSlide key={id}>
              {!isComingSoon ? (
                <CardCase {...caseProps} variant="white" />
              ) : (
                <ComingSoonCase />
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </section>
  )
}

SectionCaseStudies.defaultProps = {
  className: undefined,
}

SectionCaseStudies.propTypes = {
  heading: PropTypes.string.isRequired,
  text: PropTypes.object.isRequired,
  buttonText: PropTypes.string.isRequired,
  buttonLink: PropTypes.string.isRequired,
  className: PropTypes.string,
}

export default SectionCaseStudies
