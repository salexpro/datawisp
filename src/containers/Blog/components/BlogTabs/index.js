/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'
import PropTypes from 'prop-types'
import { useLocation } from '@gatsbyjs/reach-router'
import { Link } from 'gatsby'
import { Container, Nav } from 'react-bootstrap'

import * as s from './BlogTabs.module.scss'

const BlogTabs = (props) => {
  const { heading, tabs, className, ...rest } = props

  const { hash } = useLocation()
  const activeKey = hash.replace('#', '')

  return (
    <Container {...rest} className={className}>
      <h1 className={s.heading}>{heading}</h1>
      <nav className="nav-blog-wrapper">
        <Nav variant="blog" as="ul" activeKey={activeKey}>
          {tabs.map(({ name, slug }) => (
            <Nav.Item key={slug} as="li">
              <Nav.Link eventKey={slug} as={Link} to={`#${slug}`}>
                {name}
              </Nav.Link>
            </Nav.Item>
          ))}
        </Nav>
      </nav>
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
