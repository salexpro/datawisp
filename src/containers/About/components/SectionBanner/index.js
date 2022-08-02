import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import { Button, Container } from 'react-bootstrap'

import * as s from './SectionBanner.module.scss'

const SectionBanner = (props) => {
  const { className, ...rest } = props

  return (
    <Container as="section" {...rest} className={className}>
      <div className={s.banner}>
        <h3 className={s.heading}>You wont to make your process simple?</h3>
        <p className={s.text}>
          Lorem ipsum dolor sit amet, eu viris admodum nam, ea sea blandit,
          corpora singulis vel te ad invidunt.
        </p>
        <Button
          as={Link}
          to="https://app.datawisp.io/"
          variant="secondary"
          className={s.btn}
        >
          Get to Beta App
        </Button>
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
