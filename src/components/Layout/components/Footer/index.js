import React from 'react'
import { Link } from 'gatsby'
import { Button, Container } from 'react-bootstrap'
import PropTypes from 'prop-types'

import RouteURL from '~routes'

import Menu from '../NavMenu'
import LogoLink from '../LogoLink'
import FooterSocialMedia from './components/FooterSocialMedia'

import * as s from './Footer.module.scss'

const currentYear = new Date().getFullYear()

const Footer = ({ siteTitle }) => {
  return (
    <Container as="footer" className={s.footer}>
      <div className={s.footerWrapper}>
        <div className={s.footerTop}>
          <LogoLink className={s.logo} siteTitle={siteTitle} />
          <Menu variant="footer" className={s.menu} />
          <Button
            variant="primary"
            as={Link}
            to={RouteURL.BETA_APP}
            className={s.appButton}
          >
            Beta app
          </Button>
        </div>
        <div className={s.footerBottom}>
          <div className={s.copy}>Copyright {currentYear} Datawisp, Inc.</div>
          <FooterSocialMedia />
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
