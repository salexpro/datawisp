import React, { useState } from 'react'
import { Button, Container } from 'react-bootstrap'

import HeroImg from './assets/hero.svg'
import ModalBecomePartner from '../ModalBecomePartner'
import * as s from './SectionHero.module.scss'

const SectionHero = () => {
  const [showModal, setShowModal] = useState(false)

  return (
    <Container className={s.sectionHero}>
      <div>
        <h1>Partners</h1>
        <p className={s.sectionHero__description}>
          Our mission is to make working with data more accessible. We&apos;re
          always looking for partners who share that mission and who want to
          partner to make it easier for their customers to find insights in
          their data.
        </p>
        <Button
          className={s.sectionHero__button}
          onClick={() => setShowModal(true)}
        >
          Become a partner
        </Button>
      </div>
      <div className={s.sectionHero__imgWrapper}>
        <img
          src={HeroImg}
          alt="hero"
          className={s.sectionHero__imgWrapper__img}
        />
      </div>

      <ModalBecomePartner show={showModal} onHide={() => setShowModal(false)} />
    </Container>
  )
}

export default SectionHero
