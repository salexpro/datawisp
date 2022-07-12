import React from 'react'
import { Container } from 'react-bootstrap'
import PropTypes from 'prop-types'

import Menu from '../NavMenu'

import * as s from './Footer.module.scss'

const currentYear = new Date().getFullYear()

const Footer = ({ siteTitle }) => {
  return (
    <Container as="footer" className={s.footer}>
      <div className={s.footer__logo}>{siteTitle}</div>
      <Menu variant="footer" />
      <div className={s.footer__copy}>
        © {currentYear} {siteTitle}. All Rights Reserved
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
