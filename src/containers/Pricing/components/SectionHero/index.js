import React from 'react'
import { Container, Button } from 'react-bootstrap'

import Icon from '~components/Icon'

import { TAGS } from './mocks'
import * as s from './SectionHero.module.scss'

const SectionHero = () => {
  return (
    <Container className={s.sectionHero}>
      <h1>Ready to Sign Up?</h1>
      <p className={s.description}>
        Datawisp will continue to be free while in beta. Once our open beta
        ends, we expect the following pricing to take effect.
      </p>

      <div className={s.tagsWrapper}>
        {TAGS.map(({ icon, name }) => (
          <div key={name} className={s.tag}>
            <Icon name={icon} size={20} />
            <div>{name}</div>
          </div>
        ))}
      </div>

      <Button as="a">Contact us</Button>
    </Container>
  )
}

export default SectionHero
