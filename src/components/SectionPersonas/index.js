import React from 'react'
import { Link } from 'gatsby'
import { Container } from 'react-bootstrap'
import { StructuredText } from 'react-datocms'
import cn from 'clsx'

import Icon from '~components/ui/Icon'

import * as s from './SectionPersonas.module.scss'

const SectionPersonas = ({ heading, text, personas, variant, utm }) => {
  return (
    <Container as="section" className={cn(s.section, s[variant])}>
      {heading && (
        <div className={s.heading}>
          <h2>{heading}</h2>
          <p className={s.text}>{text}</p>
        </div>
      )}
      <div className={s.items}>
        {personas.map(({ id, iconName, title, description, link }) => (
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
    </Container>
  )
}

export default SectionPersonas
