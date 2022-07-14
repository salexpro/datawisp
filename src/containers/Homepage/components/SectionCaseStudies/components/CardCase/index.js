import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import { Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { Button } from 'react-bootstrap'

import Icon from '~components/Icon'

import * as s from './CardCase.module.scss'

const LINK_TITLE = 'Read more'

const CardCase = (props) => {
  const { className, name, description, file, url, ...rest } = props

  return (
    <div {...rest} className={cn(s.cardCase, className)}>
      <div className={s.imgWrapper}>
        <GatsbyImage alt={name} image={getImage(file)} width={40} height={40} />
      </div>
      <h3 className={cn('h4', s.heading)}>{name}</h3>
      <p>{description}</p>
      <Button
        variant="primary"
        className={s.arrowLink}
        as={Link}
        to="/"
        aria-label={LINK_TITLE}
        title={LINK_TITLE}
      >
        <Icon name="icon-arrow-link" size={20} />
      </Button>
    </div>
  )
}

CardCase.defaultProps = {
  className: undefined,
}

CardCase.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

export default CardCase
