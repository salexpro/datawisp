import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { Button, Container } from 'react-bootstrap'
import PropTypes from 'prop-types'

import Menu from '../NavMenu'
import LogoLink from '../LogoLink'
import FooterSocialMedia from './components/FooterSocialMedia'

import * as s from './Footer.module.scss'

const currentYear = new Date().getFullYear()

const Footer = ({ siteTitle }) => {
  const data = useStaticQuery(graphql`
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

  const {
    logoImage,
    logoDesiredHeight,
    logoLink,
    navMenuItems,
    actionButtonLink,
    socialLinks,
    termsConditionsLink,
    privacyPolicyLink,
  } = data.datoCmsFooter

  return (
    <Container as="footer" className={s.footer}>
      <div className={s.footerWrapper}>
        <div className={s.footerTop}>
          <LogoLink
            image={logoImage}
            link={logoLink}
            className={s.logo}
            siteTitle={siteTitle}
            height={logoDesiredHeight}
          />
          <Menu variant="footer" navItems={navMenuItems} className={s.menu} />
          <Button
            variant="primary"
            as="a"
            href={actionButtonLink?.url}
            target={actionButtonLink?.target}
            rel={actionButtonLink?.rel}
            className={s.appButton}
          >
            {actionButtonLink?.text}
          </Button>
        </div>
        <div className={s.footerBottom}>
          <div className={s.footerBottom_left}>
            <span className={s.copyWrapper}>
              Copyright {currentYear} Datawisp, Inc.
            </span>
            <div className={s.links}>
              <a
                href={termsConditionsLink.url}
                rel={termsConditionsLink.rel}
                target={termsConditionsLink.target}
                className={s.footerLink}
              >
                {termsConditionsLink.text}.
              </a>
              <a
                href={privacyPolicyLink.url}
                rel={privacyPolicyLink.rel}
                target={privacyPolicyLink.target}
                className={s.footerLink}
              >
                {privacyPolicyLink.text}
              </a>
            </div>
          </div>
          <FooterSocialMedia
            socialLinks={socialLinks}
            className={s.footerSocial}
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
