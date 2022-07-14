import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import PropTypes from 'prop-types'
import { Container } from 'react-bootstrap'
import cn from 'classnames'

import BLOG_DATA from './mocks'
import BlogItem from './components/BlogItem'
import * as s from './BlogSection.module.scss'

const BlogSection = (props) => {
  const { className, ...rest } = props

  const data = useStaticQuery(graphql`
    {
      allFile(
        filter: { relativeDirectory: { eq: "img/blog" } }
        sort: { fields: base, order: ASC }
      ) {
        nodes {
          base
          childImageSharp {
            gatsbyImageData(
              quality: 90
              width: 768
              aspectRatio: 1.49
              formats: [AUTO, WEBP, AVIF]
              placeholder: NONE
              sizes: "(max-width: 767.98) calc(100vw - 24 * 2), (max-width: 1023.98) calc(100vw - 40 * 2 - 24), (max-width: 1439.98)  calc(100vw - 40 * 2 - 24 * 2), 392px"
              breakpoints: [327, 460, 784, 981, 1176, 1440]
            )
            blurHash {
              base64Image
            }
          }
        }
      }
    }
  `)

  const BlogWithImg = BLOG_DATA.map(({ fileName, ...blog }) => ({
    ...blog,
    file: data.allFile.nodes.find((file) => file.base === fileName),
  }))

  return (
    <Container {...rest} className={cn(s.blogSection, className)}>
      {BlogWithImg.map((blog, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <BlogItem key={`blog${index}`} {...blog} />
      ))}
    </Container>
  )
}

BlogSection.defaultProps = {
  className: '',
}

BlogSection.propTypes = {
  className: PropTypes.string,
}

export default BlogSection
