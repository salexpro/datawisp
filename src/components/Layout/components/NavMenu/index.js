import React from 'react'
import { Nav } from 'react-bootstrap'
import { Link } from 'gatsby'

import NavMenuStructure from '~constants/navMenuStructure'

const NavMenu = (props) => {
  return (
    <nav {...props}>
      <Nav as="ul" variant="header">
        {NavMenuStructure.map(({ text, url }) => (
          <Nav.Item key={text} as="li">
            <Nav.Link as={Link} to={url}>
              {text}
            </Nav.Link>
          </Nav.Item>
        ))}
      </Nav>
    </nav>
  )
}

export default NavMenu
