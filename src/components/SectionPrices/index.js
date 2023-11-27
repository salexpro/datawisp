import React from 'react'
import { Container } from 'react-bootstrap'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'

import ButtonGroup from '~components/ui/ButtonGroup'
import PricePlan from './components/PricePlan'

import * as s from './SectionPrices.module.scss'

const SectionPrices = ({
  heading,
  text,
  buttons,
  caption,
  plans,
  features,
  utm,
}) => {
  return (
    <Container as="section" id="prices">
      <div className={s.sectionPrices}>
        <div className={s.header}>
          <h2 className={s.header__title}>{heading}</h2>
          <p className={s.header__description}>{text}</p>

          <ButtonGroup
            data={buttons}
            className={s.sectionPrices__btn}
            ctaId="prices"
            utm={utm}
          />

          <p className={s.header__trialText}>{caption}</p>
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
          autoHeight
          className={s.header__priceList}
        >
          {plans.map((plan) => (
            <SwiperSlide key={plan.title}>
              <PricePlan {...plan} items={features} />
            </SwiperSlide>
          ))}
        </Swiper>

        <div id="swiper-pagination" />
      </div>
    </Container>
  )
}

export default SectionPrices
