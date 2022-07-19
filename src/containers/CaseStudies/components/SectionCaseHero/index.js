import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { Container } from 'react-bootstrap'
import PropTypes from 'prop-types'
import cn from 'classnames'

import * as s from './SectionCaseHero.module.scss'

const SectionCaseHero = (props) => {
  const { className, ...rest } = props

  const data = useStaticQuery(
    graphql`
      {
        file(relativePath: { eq: "img/cases/hero.webp" }) {
          childImageSharp {
            gatsbyImageData(
              quality: 90
              width: 716
              formats: [AUTO, JPG, AVIF]
              placeholder: NONE
              sizes: "(max-width: 767.98px) calc(100vw - 24px * 2), (max-width: 1439.98) calc((100vw - 40px * 2) * 0.66), 716px"
              breakpoints: [720, 1080, 1440]
            )
          }
        }
      }
    `
  )

  return (
    <Container {...rest} className={cn(s.sectionCaseHero, className)}>
      <div className={s.colLeft}>
        <h1>Example Case Studies</h1>
        <p>
          Here’s how a few companies are using Datawisp to better understand
          their data.
        </p>
      </div>
      <div className={s.imgHero}>
        <GatsbyImage alt="hero" image={getImage(data.file)} />
      </div>
    </Container>
  )
}

SectionCaseHero.defaultProps = {
  className: '',
}

SectionCaseHero.propTypes = {
  className: PropTypes.string,
}

export default SectionCaseHero
