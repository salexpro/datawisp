import React from 'react'
import PropTypes from 'prop-types'
import { useLocation } from '@gatsbyjs/reach-router'
import { Link } from 'gatsby'
import { Container, Nav } from 'react-bootstrap'

import TABS from './constants'
import * as s from './BlogTabs.module.scss'

const BlogTabs = (props) => {
  const { className, ...rest } = props

  const { hash } = useLocation()
  const activeKey = hash.replace('#', '')

  return (
    <Container {...rest} className={className}>
      <h1 className={s.heading}>Blog</h1>
      <Nav variant="blog" as="ul" activeKey={activeKey}>
        {TABS.map(({ key, text }) => (
          <Nav.Item key={text} as="li">
            <Nav.Link eventKey={key} as={Link} to={`#${key}`}>
              {text}
            </Nav.Link>
          </Nav.Item>
        ))}
      </Nav>
    </Container>
  )
}

BlogTabs.defaultProps = {
  className: '',
}

BlogTabs.propTypes = {
  className: PropTypes.string,
}

export default BlogTabs
