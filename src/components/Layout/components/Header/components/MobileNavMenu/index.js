/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'
import PropTypes from 'prop-types'
import { useLocation } from '@gatsbyjs/reach-router'
import { Button, Dropdown } from 'react-bootstrap'
import { Link } from 'gatsby'
import { trim } from 'lodash'

import BtnAnimatedBurger from './components/BtnAnimatedBurger'

const MobileNavMenu = (props) => {
  const { btnLink, navItems, ...rest } = props

  const { pathname } = useLocation()

  const handleClick = (e, anchor) => {
    e.preventDefault()
    document.querySelector(anchor)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <Dropdown {...rest} as="nav" align="start">
      <Dropdown.Toggle as={BtnAnimatedBurger} />
      <Dropdown.Menu
        align="start"
        popperConfig={{
          modifiers: [
            {
              name: 'offset',
              options: { offset: [16, -48 - 16] },
            },
          ],
        }}
      >
        <Button
          as="a"
          href={btnLink?.url}
          rel={btnLink?.rel}
          target={btnLink?.target}
          variant="primary"
          className="dropdown-button-primary"
        >
          {btnLink?.text}
        </Button>
        {navItems?.map(({ id, text, url, anchor, ownerPage, __typename }) => {
          const isAnchorLink = __typename === 'DatoCmsLinkAnchor'
          const isAnchorOnActivePage =
            trim(ownerPage?.url, '/') === trim(pathname, '/')

          return (
            <Dropdown.Item
              key={id}
              to={isAnchorLink ? `${ownerPage.url}${anchor}` : url}
              as={Link}
              onClick={
                isAnchorLink && isAnchorOnActivePage
                  ? (e) => handleClick(e, anchor)
                  : null
              }
            >
              {text}
            </Dropdown.Item>
          )
        })}
      </Dropdown.Menu>
    </Dropdown>
  )
}

MobileNavMenu.defaultProps = {
  navItems: undefined,
  btnLink: undefined,
  className: undefined,
}

MobileNavMenu.propTypes = {
  navItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      text: PropTypes.string,
      url: PropTypes.string,
    })
  ),
  btnLink: PropTypes.shape({
    url: PropTypes.string,
    text: PropTypes.string,
  }),
  className: PropTypes.string,
}

export default MobileNavMenu
