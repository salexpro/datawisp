import React from 'react'
import { Button, Container } from 'react-bootstrap'

import { PARTNERS } from './mocks'
import * as s from './SectionPartners.module.scss'

const SectionPartners = () => {
  return (
    <Container className={s.sectionPartners}>
      {PARTNERS.map(({ id, title, description, logo, link }) => (
        <div key={id} className={s.partner}>
          <div className={s.partner__logoWrapper}>
            <img
              src={logo}
              alt={title}
              className={s.partner__logoWrapper__logo}
            />
          </div>
          <div>
            <h2 className={s.partner__title}>{title}</h2>
            <p className={s.partner__description}>{description}</p>
            <Button href={link} target="_blank" className={s.partner__button}>
              Sign up now
            </Button>
          </div>
        </div>
      ))}
    </Container>
  )
}

export default SectionPartners
