import React from 'react'
import { Container } from 'react-bootstrap'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import { StructuredText } from 'react-datocms'
import cn from 'classnames'

import Card from './components/Card'
import SwiperButtons from './components/SwiperButtons'
import * as s from './SectionBlocks.module.scss'

const SectionBlocks = ({ heading, description, functions }) => {
  return (
    <section id="functions" className={s.wrapper}>
      <Container className={s.heading}>
        <h2>{heading}</h2>
        <StructuredText data={description.value} />
      </Container>

      <Swiper
        slidesPerView={1}
        spaceBetween={16}
        modules={[Navigation]}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        breakpoints={{
          768: { slidesPerView: 2, spaceBetween: 24 },
          1200: { slidesPerView: 3.2, spaceBetween: 32 },
          1440: { slidesPerView: 3, spaceBetween: 32 },
        }}
        className={cn(s.swiperWrapper, 'features')}
      >
        {functions.map((card) => (
          <SwiperSlide key={card.id}>
            <Card {...card} />
          </SwiperSlide>
        ))}

        <SwiperButtons />
      </Swiper>
    </section>
  )
}

export default SectionBlocks
