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
      id
      text
      url
    }

    fragment LinkExternalData on DatoCmsLinkExternal {
      id
      text
      url
      rel
      target
    }

    fragment LinkAnchorData on DatoCmsLinkAnchor {
      id
      text
      anchor
      ownerPage {
        url
      }
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
          __typename
          ... on DatoCmsLinkInternal {
            ...LinkInternalData
          }
          ... on DatoCmsLinkAnchor {
            ...LinkAnchorData
          }
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
        <Button
          {...buttonProps}
          variant="primary-header"
          className={clsx(s.btnPrimary, { scrolled: isScrolled })}
        >
          {btnLink?.text}
        </Button>

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
