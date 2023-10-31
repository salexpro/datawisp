import React from 'react'
// import { Link } from 'gatsby'
import { Container } from 'react-bootstrap'
import { StructuredText } from 'react-datocms'
import Icon from '~components/ui/Icon'

import * as s from './SectionPersonas.module.scss'

const SectionPersonas = ({ personas }) => {
  return (
    <Container as="section" className={s.section}>
      {personas.map(({ id, iconName, title, description /* , link */ }) => (
        // <Link to={link?.url} className={s.persona}>
        <div className={s.persona} key={id}>
          <div className={s.persona__top}>
            <Icon name={iconName} className={s.icon} />
            <h3 className="h5">{title}</h3>
            {/* <Icon name="icon-chevron-big" className={s.chevron} /> */}
          </div>
          <StructuredText data={description.value} />
        </div>
        // </Link>
      ))}
    </Container>
  )
}

export default SectionPersonas
