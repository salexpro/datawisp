import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import { Container } from 'react-bootstrap'
import { graphql, useStaticQuery } from 'gatsby'

import CardCase from '~components/CardCase'

import CasesData from './mocks'
import * as s from './SectionCases.module.scss'

const SectionCases = (props) => {
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

  const CasesDataImg = CasesData.map((step, index) => ({
    ...step,
    file: data?.allFile?.nodes[index],
  }))

  return (
    <Container {...rest} className={cn(s.sectionCases, className)}>
      {CasesDataImg.map((item) => (
        <CardCase {...item} />
      ))}
    </Container>
  )
}

SectionCases.defaultProps = {
  className: '',
}

SectionCases.propTypes = {
  className: PropTypes.string,
}

export default SectionCases
