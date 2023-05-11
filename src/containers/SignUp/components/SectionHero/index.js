import React from 'react'
import { Container } from 'react-bootstrap'
import { StaticImage } from 'gatsby-plugin-image'

import Icon from '~components/Icon'
import RequestDemoForm from '~components/RequestDemoForm'

import { BADGE_MOCKS } from './mocks'
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

        <RequestDemoForm id="hero" className={s.heroSection__form} />

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
      <StaticImage
        width={943}
        height={376}
        quality={100}
        loading="eager"
        layout="constrained"
        sizes="(max-width: 767.98px) calc(100vw - 24px * 2), (max-width: 1023.98px) calc(100vw - 40px * 2), min(calc(100vw - 520px - 17px - 40px * 2), 703px)"
        placeholder="none"
        src="./assets/hero.svg"
        alt="hero"
        className={s.heroSection__img}
      />
    </Container>
  )
}

export default SectionHero
