import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import { Button, Container } from 'react-bootstrap'

import PartnersMarquee from './components/PartnersMaruqee'
import imgHero from './assets/hero.svg'

import * as s from './SectionHero.module.scss'

const SectionHero = (props) => {
  const { className, ...rest } = props

  return (
    <section {...rest} className={cn(s.sectionHero, className)}>
      <Container className={cn(s.container, s.containerMain)}>
        <div className={s.colLeft}>
          <h1 className={s.heading}>Discover Gems in Your Data</h1>
          <p className={s.paragraph}>
            Pre-packaged analytics can only get you so far. If you want valuable
            insights about your game, defi protocol, or whatever it is
            you&apos;re building, you need to get your hands dirty. Luckily,
            Datawisp is here to help.
          </p>
          <div className="btn-group">
            <Button variant="primary">Get Started</Button>
            <Button variant="outline-secondary">Learn more</Button>
          </div>
        </div>
        <img
          src={imgHero}
          alt="hero"
          width={897}
          height={690}
          className={s.imgHero}
        />
      </Container>
      <div className={s.blockPartners}>
        <Container className={s.container}>
          <span className={s.textPartners}>Our partners</span>
        </Container>
        <PartnersMarquee />
      </div>
    </section>
  )
}

SectionHero.defaultProps = {
  className: undefined,
}

SectionHero.propTypes = {
  className: PropTypes.string,
}

export default SectionHero
