import React from 'react'
import { useLocation } from '@reach/router'
import { Nav } from 'react-bootstrap'
import { trim } from 'lodash'
import { Link } from 'gatsby'

import Icon from '~components/Icon'

const NavLink = ({
  as = Nav.Link,
  text,
  url,
  target,
  rel,
  anchor,
  ownerPage,
  iconName,
  __typename,
  isSubLink,
}) => {
  const { pathname } = useLocation()

  const isAnchorLink = __typename === 'DatoCmsLinkAnchor'
  const isExternalLink = __typename === 'DatoCmsLinkExternal'
  const isAnchorOnActivePage = trim(ownerPage?.url, '/') === trim(pathname, '/')

  const handleClick = (e) => {
    e.preventDefault()

    const element = document.querySelector(anchor)
    const y = element.getBoundingClientRect().top + window.scrollY - 96

    window.scrollTo({ top: y, behavior: 'smooth' })
  }

  const linkProps = isExternalLink
    ? { as: 'a', href: url }
    : {
        as: Link,
        activeClassName: 'active',
        partiallyActive: true,
        to: isAnchorLink ? `${ownerPage.url}${anchor}` : url,
      }

  return React.createElement(
    as,
    {
      ...linkProps,
      rel,
      target,
      onClick:
        isAnchorLink && isAnchorOnActivePage ? (e) => handleClick(e) : null,
    },
    <>
      {isSubLink && <Icon name={iconName} />}
      {text}
    </>
  )
}

export default NavLink
