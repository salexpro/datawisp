import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

import Icon from '~components/ui/Icon'

import * as s from './Testimonial.module.scss'

const Testimonial = ({ photo, text, author, companyPosition }) => {
  return (
    <div className={s.testimonial}>
      <GatsbyImage
        alt={author}
        image={getImage(photo)}
        className={s.testimonial_image}
      />

      <div className={s.testimonial_content}>
        <Icon name="icon-quote" />
        <p className="h5">{text}</p>
      </div>

      <div className={s.testimonial_author}>
        <h5>{author}</h5>
        <span>{companyPosition}</span>
      </div>
    </div>
  )
}

export default Testimonial
