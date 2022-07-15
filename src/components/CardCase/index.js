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
    <Link
      {...rest}
      className={cn(s.cardCase, className)}
      to={url}
      aria-label={LINK_TITLE}
      title={LINK_TITLE}
    >
      <span className={s.imgWrapper}>
        <GatsbyImage
          as="span"
          alt={name}
          image={getImage(file)}
          width={40}
          height={40}
        />
      </span>
      <h3 className="h4">{name}</h3>
      <p>{description}</p>
      <Button variant="primary" className={s.arrowLink}>
        <Icon name="icon-arrow-link" size={20} className={s.arrowIcon} />
      </Button>
    </Link>
  )
}

CardCase.defaultProps = {
  className: undefined,
}

CardCase.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
}

export default CardCase
