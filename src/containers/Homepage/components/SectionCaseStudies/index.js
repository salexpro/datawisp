import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import { Button, Container } from 'react-bootstrap'
import { Link } from 'gatsby'
import { Swiper, SwiperSlide } from 'swiper/react'
import { StructuredText } from 'react-datocms'

import RouteURL from '~routes'
import CardCase from '~components/CardCase'

import * as s from './SectionCaseStudies.module.scss'

const SectionCaseStudies = (props) => {
  const { heading, text, cases, className, ...rest } = props

  return (
    <Container
      {...rest}
      as="section"
      className={cn(s.sectionCaseStudies, className)}
    >
      <div className={s.gridHeading}>
        <h2 className={s.heading}>{heading}</h2>
        <StructuredText data={text.value} />
        <Button as={Link} to={RouteURL.CASE_STUDIES} className={s.btn}>
          Explore more
        </Button>
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
        {cases.map(({ id, ...caseProps }) => (
          <SwiperSlide key={id}>
            <CardCase {...caseProps} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  )
}

SectionCaseStudies.defaultProps = {
  className: undefined,
}

SectionCaseStudies.propTypes = {
  heading: PropTypes.string.isRequired,
  text: PropTypes.object.isRequired,
  className: PropTypes.string,
}

export default SectionCaseStudies
