import React from 'react'
import Marquee from 'react-fast-marquee'
import { Container } from 'react-bootstrap'
import cn from 'classnames'

import { BAKED_BY_MOCKS } from './mocks'
import * as s from './SectionBackedBy.module.scss'

/* TODO: change on <ImageFormat /> component after connect DatoCms */
const Section = () => {
  return (
    <section className={s.bakedBy}>
      <Container>
        <h2 className={s.bakedBy__title}>Backed by</h2>
      </Container>

      <div className={cn(s.marquee, 'marquee-wrapper baked')}>
        <Marquee>
          {BAKED_BY_MOCKS.map((logo) => (
            <div key={logo.alt} className={s.marquee__logo}>
              {/* eslint-disable jsx-a11y/alt-text */}
              <img {...logo} className={s.marquee__logo__img} />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  )
}

export default Section
