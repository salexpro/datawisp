import React, { useState } from 'react'
import { Button, Container } from 'react-bootstrap'

import ImageFormat from '~components/ui/ImageFormat'
import ModalBecomePartner from '../ModalBecomePartner'
import * as s from './SectionHero.module.scss'

const SectionHero = ({ title, description, image, buttonText }) => {
  const [showModal, setShowModal] = useState(false)

  return (
    <Container className={s.sectionHero}>
      <div>
        <h1>{title}</h1>
        <p className={s.sectionHero__description}>{description}</p>
        <Button
          className={s.sectionHero__button}
          onClick={() => setShowModal(true)}
        >
          {buttonText}
        </Button>
      </div>
      <div className={s.sectionHero__imgWrapper}>
        <ImageFormat
          alt="partners page hero"
          file={image}
          className={s.sectionHero__imgWrapper__img}
        />
      </div>

      <ModalBecomePartner show={showModal} onHide={() => setShowModal(false)} />
    </Container>
  )
}

export default SectionHero
