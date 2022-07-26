import React from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'
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
          ...LinkExternalData
        }
        socialLinks {
          id
          iconName
          tooltip
          url
        }
      }
    }
  `)

  const { logoImage, logoLink, navMenuItems, actionButtonLink, socialLinks } =
    data.datoCmsFooter

  return (
    <Container as="footer" className={s.footer}>
      <div className={s.footerWrapper}>
        <div className={s.footerTop}>
          <LogoLink
            image={logoImage}
            link={logoLink}
            className={s.logo}
            siteTitle={siteTitle}
          />
          <Menu variant="footer" navItems={navMenuItems} className={s.menu} />
          <Button
            variant="primary"
            as={Link}
            href={actionButtonLink?.url}
            className={s.appButton}
          >
            {actionButtonLink?.text}
          </Button>
        </div>
        <div className={s.footerBottom}>
          <div className={s.copy}>Copyright {currentYear} Datawisp, Inc.</div>
          <FooterSocialMedia socialLinks={socialLinks} />
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
