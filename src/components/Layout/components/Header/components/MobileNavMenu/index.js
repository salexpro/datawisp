import React from 'react'
import PropTypes from 'prop-types'
import { Button, Dropdown } from 'react-bootstrap'
import { Link } from 'gatsby'

import RouteURL from '~routes'
import NavMenuStructure from '~constants/navMenuStructure'

import BtnAnimatedBurger from './components/BtnAnimatedBurger'

const MobileNavMenu = (props) => {
  return (
    <Dropdown {...props} as="nav" align="start">
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
          as={Link}
          to={RouteURL.BETA_APP}
          variant="primary"
          className="dropdown-button-primary"
        >
          Beta app
        </Button>
        {NavMenuStructure.map(({ text, url }) => (
          <Dropdown.Item key={text} to={url} as={Link}>
            {text}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  )
}

MobileNavMenu.defaultProps = {
  className: undefined,
}

MobileNavMenu.propTypes = {
  className: PropTypes.string,
}

export default MobileNavMenu
