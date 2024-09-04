import React from 'react'
import { Container } from 'react-bootstrap'
import cn from 'classnames'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper/modules'

import SwiperButtons from '~components/SwiperButtons'
import Testimonial from '../Testimonial'

import * as s from './SectionTestimonials.module.scss'

const SectionTestimonials = ({ data }) => {
  return (
    <section className={s.section}>
      <Container className={s.section_inner}>
        <Swiper
          spaceBetween={8}
          slidesPerView={1}
          modules={[Navigation, Pagination]}
          pagination={{ clickable: true }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          breakpoints={{
            768: { slidesPerView: 1.07, spaceBetween: 24 },
            1024: { slidesPerView: 1.532, spaceBetween: 24 },
          }}
          className={cn(s.items, 'testimonials')}
        >
          {data.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <Testimonial {...testimonial} />
            </SwiperSlide>
          ))}
          <SwiperButtons />
        </Swiper>
      </Container>
    </section>
  )
}

export default SectionTestimonials
