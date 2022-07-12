import React from 'react'
import { Button, Container } from 'react-bootstrap'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import RouteURL from '~routes'

import Menu from '../NavMenu'
import LogoLink from '../LogoLink'
import MobileNavMenu from './components/MobileNavMenu'

import * as s from './Header.module.scss'

const Header = ({ siteTitle }) => (
  <Container as="header" className={s.header}>
    <LogoLink siteTitle={siteTitle} />
    <Menu className="hide-d-lg" />
    <Button
      variant="primary"
      as={Link}
      to={RouteURL.BETA_APP}
      className="hide-d-md"
    >
      Beta app
    </Button>
    <MobileNavMenu className="hide-up-lg" />
  </Container>
)

Header.defaultProps = {
  siteTitle: '',
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

export default Header
