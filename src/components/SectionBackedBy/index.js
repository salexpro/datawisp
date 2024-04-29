import React from 'react'
import Marquee from 'react-fast-marquee'
import { Container } from 'react-bootstrap'
import cn from 'classnames'

import * as s from './SectionBackedBy.module.scss'

const Section = ({ list }) => {
  return (
    <section className={s.section}>
      <Container>
        <h2 className={cn('h6', s.title)}>Backed by</h2>
      </Container>

      <div className={cn(s.marquee, 'marquee-wrapper baked')}>
        <Marquee>
          {list.map(({ image, name }) => (
            <div key={name} className={s.marquee__logo}>
              <img
                src={image.url}
                height={56}
                alt={name}
                className={s.marquee__logo__img}
              />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  )
}

export default Section
