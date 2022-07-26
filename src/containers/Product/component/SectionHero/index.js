import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import { graphql, Link, useStaticQuery } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { Button, Container } from 'react-bootstrap'

import RouteURL from '~routes'

import * as s from './SectionHero.module.scss'

const SectionHero = (props) => {
  const { className, ...rest } = props

  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "img/product/hero.png" }) {
        childImageSharp {
          gatsbyImageData(
            quality: 80
            width: 816
            formats: [AUTO, WEBP, AVIF]
            placeholder: NONE
            sizes: "(max-width: 767.98px) calc(100vw - 24px * 2), (max-width: 1023.98px) calc(100vw - 40px * 2), (max-width: 1439.98px) calc(100vw - 424px - 40px * 2), 816px"
            breakpoints: [327, 720, 940, 1220, 1440, 1600]
          )
        }
      }
    }
  `)

  return (
    <Container as="section" {...rest} className={cn(s.sectionHero, className)}>
      <div className={s.colLeft}>
        <h1>Product</h1>
        <p className={s.text}>
          We know from experience that data requests can be a huge burden on
          engineering. Datawisp is a visual, non-technical way to explore data
          that your whole team can use.
        </p>
        <Button variant="primary" as={Link} to={RouteURL.HOMEPAGE}>
          Open app
        </Button>
      </div>
      <GatsbyImage alt="Product hero" image={getImage(data.file)} />
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
