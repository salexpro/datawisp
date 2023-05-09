import React, { useState } from 'react'
import { Dropdown } from 'react-bootstrap'
import { useLocation } from '@reach/router'
import cn from 'classnames'

import Icon from '~components/Icon'

import NavLink from '../NavLink'

const MenuDropdown = ({ text, subLinks, variant }) => {
  const { pathname, hash } = useLocation()
  const [activeAnchorLink, setActiveAnchorLink] = useState('')

  const isActive = subLinks.some(
    ({ url, anchor }) =>
      url === pathname ||
      (activeAnchorLink ? anchor === activeAnchorLink : anchor === hash)
  )

  const dropDownPosition =
    variant === 'footer' ? 'up-centered' : 'down-centered'

  return (
    <Dropdown drop={dropDownPosition}>
      <Dropdown.Toggle
        as="button"
        className={cn({ active: isActive, [variant]: variant }, 'nav-link')}
      >
        {text}
        <Icon
          name="icon-chevron_top"
          size={18}
          isFromInlineDefs
          className="dropdown-toggle-icon"
        />
      </Dropdown.Toggle>

      <Dropdown.Menu
        popperConfig={{
          modifiers: [
            {
              name: 'offset',
              options: { offset: [0, 6] },
            },
          ],
        }}
      >
        {subLinks.map((subLink) => {
          const isSubLinkActive =
            subLink?.url === pathname ||
            (activeAnchorLink
              ? subLink.anchor === activeAnchorLink
              : subLink.anchor === hash)

          return (
            <NavLink
              {...subLink}
              key={subLink.id}
              as={Dropdown.Item}
              isSubLink
              onAnchorClick={setActiveAnchorLink}
              className={cn({ active: isSubLinkActive })}
            />
          )
        })}
      </Dropdown.Menu>
    </Dropdown>
  )
}

export default MenuDropdown
