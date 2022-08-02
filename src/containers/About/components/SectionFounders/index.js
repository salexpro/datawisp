import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import { Container } from 'react-bootstrap'
import { graphql, useStaticQuery } from 'gatsby'

import FounderCard from './FounderCard'
import FOUNDERS_DATA from './mocks'

import * as s from './SectionFounders.module.scss'

const SectionFounders = (props) => {
  const { className, ...rest } = props

  const data = useStaticQuery(graphql`
    {
      allFile(
        filter: { relativeDirectory: { eq: "founders" } }
        sort: { fields: base, order: ASC }
      ) {
        nodes {
          base
          childImageSharp {
            gatsbyImageData(
              quality: 90
              height: 160
              formats: [AUTO, WEBP, AVIF]
              placeholder: NONE
              sizes: "(max-width: 767.98px) 120px, 160px"
              breakpoints: [120, 160, 320, 480]
            )
          }
        }
      }
    }
  `)

  const foundersWithImg = FOUNDERS_DATA.map((founder) => ({
    ...founder,
    file: data.allFile.nodes.find((file) => file.base === founder.fileName),
  }))

  return (
    <Container as="section" {...rest} className={cn(className)}>
      <h2 className={s.heading}>Our Founders</h2>
      <p className={s.text}>
        Our team has years of experience building data and gaming products.
      </p>
      <div className={s.foundersWrapper}>
        {foundersWithImg.map((founder) => (
          <div className={s.cardWrapper}>
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
