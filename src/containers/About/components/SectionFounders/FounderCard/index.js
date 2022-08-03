import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import PropTypes from 'prop-types'
import cn from 'classnames'

import Icon from '~components/Icon'

import * as s from './FounderCard.module.scss'

const FounderCard = (props) => {
  const { file, name, position, text, links, className, ...rest } = props

  return (
    <div {...rest} className={cn(s.founderCard, className)}>
      <GatsbyImage alt={name} image={getImage(file)} className={s.img} />
      <h3 className={s.heading}>{name}</h3>
      <span className={s.position}>{position}</span>
      <p className={s.text}>{text}</p>
      <div className={s.linkWrapper}>
        {links.map(({ iconName, url, hoverColor }) => (
          <a
            rel="noreferrer"
            target="_blank"
            href={url}
            className={url}
            style={{ color: hoverColor.hex }}
          >
            <Icon name={iconName} size={24} />
          </a>
        ))}
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
