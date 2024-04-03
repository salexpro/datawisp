import React from 'react'
import { Button, Container, Nav } from 'react-bootstrap'
import PropTypes from 'prop-types'
import { graphql, Link, useStaticQuery } from 'gatsby'
import cn from 'clsx'
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
      internal {
        type
      }
    }

    fragment LinkExternalData on DatoCmsLinkExternal {
      id
      text
      url
      rel
      target
      iconName
      linkId
      internal {
        type
      }
    }

    fragment LinkAnchorData on DatoCmsLinkAnchor {
      id
      text
      anchor
      iconName
      ownerPage {
        url
      }
      internal {
        type
      }
    }

    fragment LinkContainerData on DatoCmsLinkContainer {
      id
      text
      subLinks {
        __typename
        ...LinkInternalData
        ...LinkExternalData
        ...LinkAnchorData
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
          ...LinkContainerData
          ...LinkInternalData
          ...LinkAnchorData
        }
        actionButtonLink {
          ...LinkExternalData
        }
        loginLink {
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
    loginLink,
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
        to: `${btnLink?.ownerPage?.url}${btnLink?.anchor}${
          utm ? `?${utm}` : ''
        }`,
        text: btnLink?.text,
        onClick: handleClick,
      }
    : {
        as: 'a',
        href: `${btnLink?.url}${utm ? `?${utm}` : ''}`,
        target: btnLink?.target,
        rel: btnLink?.rel || null,
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
            utm={utm}
          />
          {!!navMenuItems && (
            <Menu
              navItems={navMenuItems}
              className={s.headerWrapper__header__navMenu}
              utm={utm}
            />
          )}
          <div className={s.actions}>
            <Nav variant="header">
              <Nav.Item>
                <Nav.Link
                  {...{
                    href: `${loginLink.url}${utm ? `?${utm}` : ''}`,
                    target: loginLink?.target,
                    rel: loginLink?.rel || null,
                    id: `login-header`,
                  }}
                >
                  {loginLink?.text}
                </Nav.Link>
              </Nav.Item>
            </Nav>
            <Button
              {...buttonProps}
              variant="primary-header"
              className={cn(s.headerWrapper__header__btnPrimary, {
                scrolled: isScrolled,
              })}
            >
              {btnLink?.text}
            </Button>
          </div>
        </Container>
      </header>

      {!!navMenuItems && (
        <MobileNavMenu
          btnLink={btnLink}
          loginLink={loginLink}
          navItems={navMenuItems}
          className={s.navMenuMobile}
          utm={utm}
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
