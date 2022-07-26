import React from 'react'
import { Button, Container } from 'react-bootstrap'
import PropTypes from 'prop-types'
import { graphql, useStaticQuery } from 'gatsby'

import Menu from '../NavMenu'
import LogoLink from '../LogoLink'
import MobileNavMenu from './components/MobileNavMenu'

import * as s from './Header.module.scss'

const Header = ({ siteTitle }) => {
  const data = useStaticQuery(graphql`
    fragment LinkInternalData on DatoCmsLinkInternal {
      text
      url
    }

    fragment LinkExternalData on DatoCmsLinkExternal {
      text
      url
      rel
      target
    }

    query HeaderNavigation {
      datoCmsHeader {
        logoImage {
          url
          width
          height
        }
        logoLink {
          ...LinkInternalData
        }
        navMenuItems {
          id
          text
          url
        }
        actionButtonLink {
          ...LinkExternalData
        }
      }
    }
  `)

  const {
    logoImage,
    logoLink,
    navMenuItems,
    actionButtonLink: btnLink,
  } = data.datoCmsHeader

  return (
    <Container as="header" className={s.header}>
      <LogoLink image={logoImage} link={logoLink} siteTitle={siteTitle} />
      <Menu navItems={navMenuItems} className={s.navMenu} />
      <Button
        variant="primary"
        as="a"
        href={btnLink?.url}
        target={btnLink?.target}
        rel={btnLink?.rel}
        className={s.btnPrimary}
      >
        {btnLink?.text}
      </Button>
      <MobileNavMenu
        btnLink={btnLink}
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
