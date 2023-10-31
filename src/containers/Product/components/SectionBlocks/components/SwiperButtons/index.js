import React from 'react'
import cn from 'clsx'

import Icon from '~components/ui/Icon'

const BUTTONS = ['prev', 'next']

const SwiperButtons = () => (
  <>
    {BUTTONS.map((side) => (
      <button
        key={side}
        type="button"
        name={`swiper-button-${side}`}
        aria-label={`swiper-button-${side}`}
        className={cn('swiper-button', `swiper-button-${side}`)}
      >
        <Icon name="icon-chevron_right" />
      </button>
    ))}
  </>
)

export default SwiperButtons
