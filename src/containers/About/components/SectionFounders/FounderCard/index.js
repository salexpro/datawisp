import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { StructuredText } from 'react-datocms'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import Icon from '~components/Icon'

import * as s from './FounderCard.module.scss'

const FounderCard = (props) => {
  const {
    image,
    name,
    founderPosition,
    text,
    socialLinks,
    className,
    ...rest
  } = props

  return (
    <div {...rest} className={clsx(s.founderCard, className)}>
      <GatsbyImage alt={name} image={getImage(image)} className={s.img} />
      <h3 className={s.heading}>{name}</h3>
      <span className={s.position}>{founderPosition}</span>
      <StructuredText data={text.value} />
      <div className={s.linkWrapper}>
        {socialLinks.map(
          ({ id, url, socialLink: { iconName, hoverColor } }) => (
            <a
              key={id}
              rel="noreferrer"
              target="_blank"
              href={url}
              style={{ color: hoverColor.hex }}
            >
              <Icon name={iconName} size={24} />
            </a>
          )
        )}
      </div>
    </div>
  )
}

FounderCard.defaultProps = {
  className: '',
}

FounderCard.propTypes = {
  className: PropTypes.string,
}

export default FounderCard
