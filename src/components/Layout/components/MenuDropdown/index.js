import React from 'react'
import { Dropdown, Nav } from 'react-bootstrap'
import { useLocation } from '@reach/router'
import cn from 'classnames'

import Icon from '~components/Icon'

import NavLink from '../NavLink'

const MenuDropdown = ({ text, subLinks }) => {
  const { pathname } = useLocation()

  const isActive = subLinks.some(
    (item) => item.url === pathname || item?.ownerPage?.url === pathname
  )

  return (
    <Dropdown drop="down-centered">
      <Dropdown.Toggle as={Nav.Link} className={cn({ active: isActive })}>
        {text}
        <Icon
          name="icon-chevron_top"
          size={18}
          isFromInlineDefs
          className="dropdown-toggle-icon"
        />
      </Dropdown.Toggle>

      <Dropdown.Menu
        variant="header"
        popperConfig={{
          modifiers: [
            {
              name: 'offset',
              options: { offset: [0, 14] },
            },
          ],
        }}
      >
        {subLinks.map((item) => (
          <NavLink {...item} key={item.id} as={Dropdown.Item} isSubLink />
        ))}
      </Dropdown.Menu>
    </Dropdown>
  )
}

export default MenuDropdown
