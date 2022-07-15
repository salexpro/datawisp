import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import { Button, Container } from 'react-bootstrap'
import { graphql, Link, useStaticQuery } from 'gatsby'
import { Swiper, SwiperSlide } from 'swiper/react'

import RouteURL from '~routes'
import CardCase from '~components/CardCase'

import { CasesData } from './mocks'

import * as s from './SectionCaseStudies.module.scss'

const SectionCaseStudies = (props) => {
  const { className, ...rest } = props

  const data = useStaticQuery(graphql`
    {
      allFile(
        filter: { relativeDirectory: { eq: "img/cases" } }
        sort: { fields: base, order: ASC }
      ) {
        nodes {
          base
          childImageSharp {
            gatsbyImageData(
              quality: 80
              height: 40
              formats: [AUTO, WEBP, AVIF]
              placeholder: NONE
              outputPixelDensities: [1, 1.5, 2, 3]
            )
          }
        }
      }
    }
  `)

  const CasesDataWImg = CasesData.map((step, index) => ({
    ...step,
    file: data?.allFile?.nodes[index],
  }))

  return (
    <Container
      {...rest}
      as="section"
      className={cn(s.sectionCaseStudies, className)}
    >
      <div className={s.gridHeading}>
        <h2 className={s.heading}>Case Studies</h2>
        <p className={s.paragraph}>
          Here’s how a few companies are using Datawisp to better understand
          their data.
        </p>
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
        {CasesDataWImg.map(({ id, ...caseProps }) => (
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
  className: PropTypes.string,
}

export default SectionCaseStudies
