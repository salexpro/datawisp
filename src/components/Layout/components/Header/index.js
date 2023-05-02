import React from 'react'
import { Button, Container } from 'react-bootstrap'
import PropTypes from 'prop-types'
import { graphql, useStaticQuery } from 'gatsby'
import classNames from 'classnames'
import { useCookies } from 'react-cookie'

import useScrolled from '~hooks/useScrolled'
import { GOOGLE_ADS_COOKIE_KEY, GOOGLE_ANALYTIC_COOKIE_KEY } from '~constants'
import { gtagReportConversion } from '~utils/analytics'

import Menu from '../NavMenu'
import LogoLink from '../LogoLink'
import MobileNavMenu from './components/MobileNavMenu'

import * as s from './Header.module.scss'

const Header = ({ siteTitle }) => {
  const isScrolled = useScrolled()
  const [cookies] = useCookies([
    GOOGLE_ANALYTIC_COOKIE_KEY,
    GOOGLE_ADS_COOKIE_KEY,
  ])

  const data = useStaticQuery(graphql`
    fragment LinkInternalData on DatoCmsLinkInternal {
      id
      text
      url
      iconName
    }

    fragment LinkExternalData on DatoCmsLinkExternal {
      id
      text
      url
      rel
      target
      iconName
    }

    fragment LinkAnchorData on DatoCmsLinkAnchor {
      id
      text
      anchor
      iconName
      ownerPage {
        url
      }
    }

    fragment LinkContainerData on DatoCmsLinkContainer {
      id
      text
      subLinks {
        __typename
        ... on DatoCmsLinkInternal {
          ...LinkInternalData
        }
        ... on DatoCmsLinkExternal {
          ...LinkExternalData
        }
        ... on DatoCmsLinkAnchor {
          ...LinkAnchorData
        }
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
          ... on DatoCmsLinkContainer {
            ...LinkContainerData
          }
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
    <header className={classNames(s.headerWrapper, { [s.active]: isScrolled })}>
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
          onClick={() => gtagReportConversion(cookies)}
          className={classNames(s.btnPrimary, { scrolled: isScrolled })}
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
