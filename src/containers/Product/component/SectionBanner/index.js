import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import { Button, Container } from 'react-bootstrap'

import RouteURL from '~routes'

import illustration from './assets/Illustration.svg'
import * as s from './SectionBanner.module.scss'

const SectionBanner = (props) => {
  const { className, ...rest } = props

  return (
    <Container as="section" {...rest} className={className}>
      <div className={s.sectionBanner}>
        <div className={s.infoWrapper}>
          <h3 className={s.heading}>Would like to check real cases?</h3>
          <p className={s.text}>
            Lorem ipsum dolor sit amet, eu viris admodum nam, ea sea blandit,
            corpora singulis vel te ad invidunt.
          </p>
          <Button
            variant="outline-secondary"
            as={Link}
            to={RouteURL.CASE_STUDIES}
            className={s.btnPrimary}
          >
            Case studies
          </Button>
        </div>
        <img src={illustration} alt="banner illustration" />
      </div>
    </Container>
  )
}

SectionBanner.defaultProps = {
  className: '',
}

SectionBanner.propTypes = {
  className: PropTypes.string,
}

export default SectionBanner
