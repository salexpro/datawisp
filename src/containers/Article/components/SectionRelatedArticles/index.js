import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import { Container } from 'react-bootstrap'
import { graphql, useStaticQuery } from 'gatsby'

import BlogItem from '~components/BlogItem'
import BLOG_DATA from '~containers/Blog/components/BlogSection/mocks'

import * as s from './SectionRelatedArticles.module.scss'

const SectionRelatedArticles = (props) => {
  const { className, latestArticles, ...rest } = props

  const data = useStaticQuery(graphql`
    {
      allFile(
        filter: { relativeDirectory: { eq: "img/blog" } }
        sort: { fields: base, order: ASC }
        limit: 3
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

  const BlogWithImg = BLOG_DATA.slice(0, 3).map(({ fileName, ...blog }) => ({
    ...blog,
    file: data.allFile.nodes.find((file) => file.base === fileName),
  }))

  return (
    <section {...rest} className={cn(s.sectionRelatedArticles, className)}>
      <Container>
        <h2 className={s.heading}>Related Blog Articles</h2>
        <div className={s.gridArticles}>
          {BlogWithImg.map((blog, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <BlogItem {...blog} key={`blog${index}`} className={s.blogItem} />
          ))}
        </div>
      </Container>
    </section>
  )
}

SectionRelatedArticles.defaultProps = {
  className: undefined,
}

SectionRelatedArticles.propTypes = {
  className: PropTypes.string,
}

export default SectionRelatedArticles
