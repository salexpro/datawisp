import React from 'react'
import { Link } from 'gatsby'
import { StructuredText } from 'react-datocms'
import cn from 'classnames'

import Icon from '../ui/Icon'

import * as s from './PersonasList.module.scss'

const PersonasList = ({ data, className, utm }) => {
  return (
    <div className={cn(s.items, className)}>
      {data.map(({ id, iconName, title, description, link }) => (
        <Link
          to={`${link.url}${utm ? `?${utm}` : ''}`}
          className={s.persona}
          key={id}
        >
          <div className={s.persona__top}>
            <Icon name={iconName} className={s.icon} />
            <h3 className="h5">{title}</h3>
            <Icon name="icon-chevron-big" className={s.chevron} />
          </div>
          <StructuredText data={description.value} />
        </Link>
      ))}
    </div>
  )
}

export default PersonasList
