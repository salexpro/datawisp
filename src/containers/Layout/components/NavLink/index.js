import React from 'react'
import { useLocation } from '@reach/router'
import { Nav } from 'react-bootstrap'
import { trim } from 'lodash'
import { Link } from 'gatsby'

import Icon from '~components/ui/Icon'

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
  onClick,
  onAnchorClick,
  id,
  internal,
  ...rest
}) => {
  const { pathname } = useLocation()

  const isAnchorLink = __typename === 'DatoCmsLinkAnchor'
  const isExternalLink = __typename === 'DatoCmsLinkExternal'
  const isAnchorOnActivePage = trim(ownerPage?.url, '/') === trim(pathname, '/')

  const handleClick = (e) => {
    e.preventDefault()

    if (onClick) onClick()
    const element = document.querySelector(anchor)
    const y = element.getBoundingClientRect().top + window.scrollY - 96
    if (onAnchorClick) onAnchorClick(anchor)
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
      ...rest,
      ...linkProps,
      rel,
      target,
      onClick:
        isAnchorLink && isAnchorOnActivePage ? (e) => handleClick(e) : onClick,
    },
    <>
      {isSubLink && <Icon name={iconName} />}
      {text}
    </>
  )
}

export default NavLink
