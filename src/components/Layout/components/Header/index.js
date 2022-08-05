import React from 'react'
import { Button, Container } from 'react-bootstrap'
import PropTypes from 'prop-types'
import { graphql, useStaticQuery } from 'gatsby'
import clsx from 'clsx'

import useScrolled from '~hooks/useScrolled'

import Menu from '../NavMenu'
import LogoLink from '../LogoLink'
import MobileNavMenu from './components/MobileNavMenu'

import * as s from './Header.module.scss'

const Header = ({ siteTitle }) => {
  const isScrolled = useScrolled()

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
        logoDesiredHeight
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
    logoDesiredHeight,
    logoLink,
    navMenuItems,
    actionButtonLink: btnLink,
  } = data.datoCmsHeader

  const buttonProps = {
    as: 'a',
    href: btnLink?.url,
    target: btnLink?.target,
    rel: btnLink?.rel,
  }

  return (
    <header className={clsx(s.headerWrapper, { [s.active]: isScrolled })}>
      <Container className={s.header}>
        <LogoLink
          image={logoImage}
          link={logoLink}
          siteTitle={siteTitle}
          height={logoDesiredHeight}
        />
        <Menu navItems={navMenuItems} className={s.navMenu} />
        <div className={s.btnWrapper}>
          <Button
            {...buttonProps}
            variant="primary-header"
            className={clsx(s.btnPrimary, { scrolled: isScrolled })}
          >
            {btnLink?.text}
          </Button>
        </div>
        <MobileNavMenu
          btnLink={btnLink}
          navItems={navMenuItems}
          className={s.navMenuMobile}
        />
      </Container>
    </header>
  )
}

Header.defaultProps = {
  siteTitle: '',
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

export default Header
