import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { Button, Container } from 'react-bootstrap'
import PropTypes from 'prop-types'
import cn from 'clsx'

import Menu from '../NavMenu'
import LogoLink from '../LogoLink'
import FooterSocialMedia from './components/FooterSocialMedia'

import * as s from './Footer.module.scss'

const currentYear = new Date().getFullYear()

const Footer = ({ siteTitle, footerPageData, utm }) => {
  const footerData = useStaticQuery(graphql`
    query FooterNavigation {
      datoCmsFooter {
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
        socialLinks {
          id
          iconName
          tooltip
          url
          hoverColor {
            hex
          }
        }
        termsConditionsLink {
          ...LinkExternalData
        }
        privacyPolicyLink {
          ...LinkExternalData
        }
      }
    }
  `)

  const data = footerPageData || footerData.datoCmsFooter

  const {
    logoImage,
    logoDesiredHeight,
    logoLink,
    navMenuItems,
    actionButtonLink,
    socialLinks,
    termsConditionsLink,
    privacyPolicyLink,
  } = data

  return (
    <Container as="footer" className={s.footer}>
      <div className={s.footerWrapper}>
        <div
          className={cn(s.footerTop, { [s.withButton]: !!actionButtonLink })}
        >
          <LogoLink
            image={logoImage}
            link={logoLink}
            className={s.footerTop__logo}
            siteTitle={siteTitle}
            height={logoDesiredHeight}
          />
          <Menu
            variant="footer"
            navItems={navMenuItems}
            className={s.footerTop__menu}
          />
          {!!actionButtonLink && (
            <Button
              variant="primary"
              as="a"
              id={
                actionButtonLink?.linkId
                  ? `${actionButtonLink.linkId}-footer`
                  : null
              }
              href={`${actionButtonLink?.url}${utm && `?${utm}`}`}
              target={actionButtonLink?.target}
              rel={actionButtonLink?.rel}
              className={s.footerTop__appButton}
            >
              {actionButtonLink?.text}
            </Button>
          )}
        </div>
        <div className={s.footerBottom}>
          <div className={s.footerBottom__left}>
            <span className={s.footerBottom__copyWrapper}>
              Copyright {currentYear} Datawisp, Inc.
            </span>
            <div className={s.footerBottom__links}>
              <a
                href={termsConditionsLink.url}
                rel={termsConditionsLink.rel}
                target={termsConditionsLink.target}
                className={s.footerBottom__footerLink}
              >
                {termsConditionsLink.text}.
              </a>
              <a
                href={privacyPolicyLink.url}
                rel={privacyPolicyLink.rel}
                target={privacyPolicyLink.target}
                className={s.footerBottom__footerLink}
              >
                {privacyPolicyLink.text}
              </a>
            </div>
          </div>
          <FooterSocialMedia
            socialLinks={socialLinks}
            className={s.footerBottom__footerSocial}
          />
        </div>
      </div>
    </Container>
  )
}

Footer.defaultProps = {
  siteTitle: '',
}

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

export default Footer
