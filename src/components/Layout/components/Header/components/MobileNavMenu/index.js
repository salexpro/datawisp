import React from 'react'
import PropTypes from 'prop-types'
import { Button, Dropdown } from 'react-bootstrap'
import { Link } from 'gatsby'

import BtnAnimatedBurger from './components/BtnAnimatedBurger'

const MobileNavMenu = (props) => {
  const { buttonLink, navItems, ...rest } = props

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
          as={Link}
          to={buttonLink?.url}
          variant="primary"
          className="dropdown-button-primary"
        >
          {buttonLink?.text}
        </Button>
        {navItems?.map(({ text, url }) => (
          <Dropdown.Item key={text} to={url} as={Link}>
            {text}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  )
}

MobileNavMenu.defaultProps = {
  navItems: undefined,
  buttonLink: undefined,
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
  buttonLink: PropTypes.shape({
    url: PropTypes.string,
    text: PropTypes.string,
  }),
  className: PropTypes.string,
}

export default MobileNavMenu
