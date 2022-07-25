/* eslint-disable react/no-array-index-key */
import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import { Link } from 'gatsby'
import { Breadcrumb, Button } from 'react-bootstrap'

import * as s from './Breadcrumbs.module.scss'

const Breadcrumbs = (props) => {
  const { className, breadcrumbs, ...rest } = props

  const baseBreadcrumb = breadcrumbs?.[0]

  return (
    <>
      <Breadcrumb {...rest} className={cn(s.breadcrumbs, className)}>
        {breadcrumbs.map(({ text, url, isActive }, index) => (
          <Breadcrumb.Item
            key={index}
            linkAs={Link}
            linkProps={{ to: url }}
            active={isActive}
          >
            {text}
          </Breadcrumb.Item>
        ))}
      </Breadcrumb>
      <nav className={cn(s.mobileNav, className)}>
        <Button
          variant="outline-secondary"
          className={s.btn}
          as={Link}
          to={baseBreadcrumb?.url}
        >
          Back
        </Button>
      </nav>
    </>
  )
}

Breadcrumbs.defaultProps = {
  className: undefined,
}

Breadcrumbs.propTypes = {
  className: PropTypes.string,
}

export default Breadcrumbs
