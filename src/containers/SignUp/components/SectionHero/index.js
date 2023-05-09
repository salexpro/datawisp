import React from 'react'
import { Container } from 'react-bootstrap'

import Icon from '~components/Icon'
import RequestDemoForm from '~components/RequestDemoForm'

import { BADGE_MOCKS } from './mocks'
import HeroImg from './assets/hero.svg'
import * as s from './SectionHero.module.scss'

const SectionHero = () => {
  return (
    <Container className={s.heroSection}>
      <div>
        <h1>Data Done Differently</h1>
        <p className={s.heroSection__description}>
          Connect, transform, and get to insights faster. Datawisp helps anyone
          in your organization make use of your valuable data.
        </p>

        <RequestDemoForm className={s.heroSection__form} />

        <div className={s.badgeWrapper}>
          {BADGE_MOCKS.map(({ id, iconName, text }) => (
            <div key={id} className={s.badgeWrapper__badge}>
              <Icon
                name={`icon-${iconName}`}
                size={20}
                className={s.badgeWrapper__badge__icon}
              />
              {text}
            </div>
          ))}
        </div>
      </div>
      <img src={HeroImg} alt="hero" className={s.heroSection__img} />
    </Container>
  )
}

export default SectionHero
