/* eslint-disable import/no-extraneous-dependencies,no-nested-ternary */
import React from 'react'
import { Nav } from 'react-bootstrap'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import { useLocation } from '@gatsbyjs/reach-router'
import { trim } from 'lodash'

const NavMenu = (props) => {
  const { navItems, variant, ...rest } = props

  const { pathname } = useLocation()

  const handleClick = (e, anchor) => {
    e.preventDefault()
    document.querySelector(anchor)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav {...rest}>
      <Nav as="ul" variant={variant}>
        {navItems?.map(({ id, text, url, anchor, ownerPage, __typename }) => {
          const isAnchorLink = __typename === 'DatoCmsLinkAnchor'
          const isAnchorOnActivePage =
            trim(ownerPage?.url, '/') === trim(pathname, '/')

          return (
            <Nav.Item key={id} as="li">
              <Nav.Link
                as={Link}
                to={isAnchorLink ? `${ownerPage.url}${anchor}` : url}
                activeClassName="active"
                partiallyActive
                onClick={
                  isAnchorLink && isAnchorOnActivePage
                    ? (e) => handleClick(e, anchor)
                    : null
                }
              >
                {text}
              </Nav.Link>
            </Nav.Item>
          )
        })}
      </Nav>
    </nav>
  )
}

NavMenu.defaultProps = {
  variant: 'header',
  navItems: undefined,
}

NavMenu.propTypes = {
  variant: PropTypes.oneOf(['header', 'footer']),
  navItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      text: PropTypes.string,
      url: PropTypes.string,
    })
  ),
}

export default NavMenu
