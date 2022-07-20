import React from 'react'
import { Button, Container } from 'react-bootstrap'
import PropTypes from 'prop-types'
import { graphql, Link, useStaticQuery } from 'gatsby'

import Menu from '../NavMenu'
import LogoLink from '../LogoLink'
import MobileNavMenu from './components/MobileNavMenu'

import * as s from './Header.module.scss'

const Header = ({ siteTitle }) => {
  const data = useStaticQuery(graphql`
    query HeaderNavigation {
      datoCmsHeader {
        logoImage {
          url
          width
          height
        }
        logoLink {
          url
          text
        }
        navMenuItems {
          id
          text
          url
        }
        actionButtonLink {
          text
          url
        }
      }
    }
  `)

  const { logoImage, logoLink, navMenuItems, actionButtonLink } =
    data.datoCmsHeader

  return (
    <Container as="header" className={s.header}>
      <LogoLink image={logoImage} link={logoLink} siteTitle={siteTitle} />
      <Menu navItems={navMenuItems} className={s.navMenu} />
      <Button
        variant="primary"
        as={Link}
        to={actionButtonLink?.url}
        className={s.btnPrimary}
      >
        {actionButtonLink?.text}
      </Button>
      <MobileNavMenu
        buttonLink={actionButtonLink}
        navItems={navMenuItems}
        className={s.navMenuMobile}
      />
    </Container>
  )
}

Header.defaultProps = {
  siteTitle: '',
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

export default Header
