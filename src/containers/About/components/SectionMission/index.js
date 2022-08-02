import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import { Container } from 'react-bootstrap'
import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

import getImgWithBlurHash from '~utils/getImgWithBlurHash'

import * as s from './SectionMission.module.scss'

const SectionMission = (props) => {
  const { className, ...rest } = props

  const data = useStaticQuery(graphql`
    {
      imgDesktop: file(
        relativePath: { eq: "about/ourMission/our-mission-desktop.png" }
      ) {
        id
        relativePath
        childImageSharp {
          gatsbyImageData(
            quality: 80
            width: 1360
            formats: [JPG, WEBP, AVIF]
            placeholder: NONE
            sizes: "(max-width: 1439.98px) calc(100vw - 40px * 2), 1240px"
            breakpoints: [688, 1032, 1240, 1860, 2064, 2480]
          )
          blurHash {
            base64Image
          }
        }
      }
      imgMobile: file(
        relativePath: { eq: "about/ourMission/our-mission-mobile.png" }
      ) {
        id
        relativePath
        childImageSharp {
          gatsbyImageData(
            quality: 80
            width: 720
            formats: [JPG, WEBP, AVIF]
            placeholder: NONE
            sizes: "(max-width: 767.98px) calc(100vw - 24px * 2), 720px"
            breakpoints: [327, 654, 981, 1140]
          )
          blurHash {
            base64Image
          }
        }
      }
    }
  `)

  return (
    <Container
      {...rest}
      as="section"
      className={cn(s.sectionMission, className)}
    >
      <h2>Our Mission</h2>
      <p className={s.text}>
        Most companies need more data than their BI/data teams can provide. This
        creates logs and expectations periods that reduce efficiency and
        decision-making ability.
        <br /> Our mission is to make this process simple.
      </p>
      <GatsbyImage
        alt="strucute"
        image={getImgWithBlurHash(data.imgDesktop)}
        className={cn(s.img, s.imgDesktop)}
      />
      <GatsbyImage
        alt="strucute"
        image={getImgWithBlurHash(data.imgMobile)}
        className={cn(s.img, s.imgMobile)}
      />
    </Container>
  )
}

SectionMission.defaultProps = {
  className: undefined,
}

SectionMission.propTypes = {
  className: PropTypes.string,
}

export default SectionMission
