import React from 'react'
import { Container } from 'react-bootstrap'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper'

import RequestDemoForm from '~components/RequestDemoForm'

import { PRICE_DATA } from './mocks'
import PricePlan from './components/PricePlan'
import * as s from './SectionPrices.module.scss'

const SectionPrices = () => {
  return (
    <Container>
      <section className={s.sectionPrices}>
        <div className={s.header}>
          <h2 className={s.header__title}>
            Book a demo to see Datawisp for yourself
          </h2>
          <p className={s.header__description}>
            Open up new opportunities in working with data for yourself and your
            team
          </p>
          <RequestDemoForm className={s.header__form} />
          <p className={s.header__trialText}>
            And get a <u>free</u> trial after the demo
          </p>
        </div>

        <Swiper
          slidesPerView="auto"
          modules={[Pagination]}
          pagination={{
            el: '#swiper-pagination',
            clickable: true,
          }}
          breakpoints={{
            768: { slidesPerView: 'auto', spaceBetween: 16 },
            1200: { slidesPerView: 4, spaceBetween: 16 },
          }}
          spaceBetween={12}
          className={s.header__priceList}
        >
          {PRICE_DATA.map((item) => (
            <SwiperSlide key={item.title}>
              <PricePlan {...item} />
            </SwiperSlide>
          ))}
        </Swiper>

        <div id="swiper-pagination" />
      </section>
    </Container>
  )
}

export default SectionPrices
