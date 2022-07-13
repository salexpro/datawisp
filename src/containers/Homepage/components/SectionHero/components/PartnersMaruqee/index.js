import React from 'react'
import PropTypes from 'prop-types'
import Marquee from 'react-fast-marquee'
import cn from 'classnames'
import { graphql, useStaticQuery } from 'gatsby'

import PartnerItem from './components/PartnerItem'

import { PartnersDataSrc } from './mocks'

const PartnersMarquee = (props) => {
  const { className, ...rest } = props

  const data = useStaticQuery(graphql`
    {
      allFile(
        filter: { relativeDirectory: { eq: "img/partners" } }
        sort: { fields: base, order: ASC }
      ) {
        nodes {
          base
          childImageSharp {
            gatsbyImageData(
              quality: 80
              height: 24
              formats: [AUTO, WEBP, AVIF]
              placeholder: NONE
              outputPixelDensities: [1, 1.5, 2, 3]
            )
            blurHash {
              base64Image
            }
          }
        }
      }
    }
  `)

  const PartnersWithImg = PartnersDataSrc.map((partner) => ({
    ...partner,
    file: data.allFile.nodes.find((file) => file.base === partner.fileName),
  }))

  const PartnersData = Array(8)
    .fill(PartnersWithImg)
    .flat(1)
    .map((item, index) => ({ ...item, id: index }))

  return (
    <div {...rest} className={cn('marquee-wrapper', className)}>
      <Marquee gradient={false} speed={32} direction="left">
        {PartnersData.map(({ id, name, file }) => (
          <PartnerItem key={id} name={name} file={file} />
        ))}
      </Marquee>
    </div>
  )
}

PartnersMarquee.defaultProps = {
  className: undefined,
}

PartnersMarquee.propTypes = {
  className: PropTypes.string,
}

export default PartnersMarquee
