import React from 'react'
import { Button, Container } from 'react-bootstrap'
import PropTypes from 'prop-types'
import { graphql, Link, useStaticQuery } from 'gatsby'
import cn from 'classnames'
import { useCookies } from 'react-cookie'

import useScrolled from '~hooks/useScrolled'
import { GOOGLE_TAG_KEY } from '~constants'
import { gtagReportConversion } from '~utils/analytics'

import Menu from '../NavMenu'
import LogoLink from '../LogoLink'
import MobileNavMenu from './components/MobileNavMenu'

import * as s from './Header.module.scss'

const Header = ({ siteTitle, headerPageData, utm }) => {
  const isScrolled = useScrolled()
  const [cookies] = useCookies([GOOGLE_TAG_KEY])

  const headerData = useStaticQuery(graphql`
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
      linkId
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

  const data = headerPageData || headerData.datoCmsHeader

  const {
    logoImage,
    logoDesiredHeight,
    logoLink,
    navMenuItems,
    actionButtonLink: btnLink,
  } = data

  const handleClick = (e) => {
    e.preventDefault()
    const element = document.querySelector(btnLink?.anchor)
    const y = element.getBoundingClientRect().top + window.scrollY - 96
    window.scrollTo({ top: y, behavior: 'smooth' })
  }

  // eslint-disable-next-line no-underscore-dangle
  const isAnchorButton = btnLink?.__typename === 'DatoCmsLinkAnchor'

  const buttonProps = isAnchorButton
    ? {
        as: Link,
        to: `${btnLink?.ownerPage?.url}${btnLink?.anchor}`,
        text: btnLink?.text,
        onClick: handleClick,
      }
    : {
        as: 'a',
        href: `${btnLink.url}${utm ? `?${utm}` : ''}`,
        target: btnLink?.target,
        rel: btnLink?.rel,
        id: btnLink?.linkId ? `${btnLink.linkId}-header` : null,
        onClick: () => gtagReportConversion(cookies),
      }

  return (
    <>
      <header
        className={cn(s.headerWrapper, {
          [s.active]: isScrolled,
          [s.withMenu]: !!navMenuItems,
        })}
      >
        <Container className={s.headerWrapper__header}>
          <LogoLink
            image={logoImage}
            link={logoLink}
            siteTitle={siteTitle}
            height={logoDesiredHeight}
          />
          {!!navMenuItems && (
            <Menu
              navItems={navMenuItems}
              className={s.headerWrapper__header__navMenu}
            />
          )}
          <Button
            {...buttonProps}
            variant="primary-header"
            className={cn(s.headerWrapper__header__btnPrimary, {
              scrolled: isScrolled,
            })}
          >
            {btnLink?.text}
          </Button>
        </Container>
      </header>

      {!!navMenuItems && (
        <MobileNavMenu
          btnLink={btnLink}
          navItems={navMenuItems}
          className={s.navMenuMobile}
        />
      )}
    </>
  )
}

Header.defaultProps = {
  siteTitle: '',
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

export default Header
