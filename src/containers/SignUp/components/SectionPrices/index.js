import React from 'react'
import { Container } from 'react-bootstrap'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper'

import RequestDemoForm from '~components/RequestDemoForm'
import TryBtn from '~containers/SignUp/TryBtn'

import { PRICE_DATA } from './mocks'
import PricePlan from './components/PricePlan'
import * as s from './SectionPrices.module.scss'

const data = [
  {
    title: 'Book a demo to see Datawisp for yourself',
    cta: <RequestDemoForm id="price" className={s.header__form} />,
    trialText: (
      <>
        And get a <u>free</u> trial after the demo
      </>
    ),
  },
  {
    title: 'Try it now and see Datawisp for yourself',
    cta: (
      <div className={s.sectionPrices__btn}>
        <TryBtn />
      </div>
    ),
    trialText: 'Free for 60 days. No credit card required',
  },
]

const SectionPrices = ({ isSecondaryLP }) => {
  return (
    <Container id="prices">
      <section className={s.sectionPrices}>
        <div className={s.header}>
          <h2 className={s.header__title}>{data[+!!isSecondaryLP]?.title}</h2>
          <p className={s.header__description}>
            Open up new opportunities in working with data for yourself and your
            team
          </p>

          {data[+!!isSecondaryLP]?.cta}

          <p className={s.header__trialText}>
            {data[+!!isSecondaryLP]?.trialText}
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
