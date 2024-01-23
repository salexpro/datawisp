import React from 'react'
// eslint-disable-next-line import/no-extraneous-dependencies
import { useLocation } from '@gatsbyjs/reach-router'
import PropTypes from 'prop-types'
import { Container } from 'react-bootstrap'
import cn from 'clsx'

import BlogItem from '~components/BlogItem'

import * as s from './BlogSection.module.scss'

const BlogSection = (props) => {
  const { blogs, className, utm, ...rest } = props

  const { hash } = useLocation()
  const filter = hash.replace('#', '')

  const filteredBlog = filter
    ? blogs?.filter(({ category }) => category?.slug === filter)
    : blogs

  return (
    <Container {...rest} className={cn(s.blogSection, className)}>
      {filteredBlog?.map(({ id, ...blog }) => (
        <BlogItem key={id} {...blog} utm={utm} />
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
