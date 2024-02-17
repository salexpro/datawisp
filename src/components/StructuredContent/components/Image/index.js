import React from 'react'
import PropTypes from 'prop-types'
import Zoom from 'react-medium-image-zoom'

import cn from 'clsx'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import * as s from './Image.module.scss'

const Image = (props) => {
  const { className, image, caption, width, position, wrapping, ...rest } =
    props

  return (
    <figure
      {...rest}
      className={cn(
        s.image,
        { [s[position]]: position },
        { [s[wrapping]]: wrapping },
        className
      )}
    >
      <div className={s.image_inner} style={{ maxWidth: width || null }}>
        <Zoom>
          <GatsbyImage
            alt={image.alt || image.basename}
            image={getImage(image)}
          />
        </Zoom>

        {caption && <figcaption>{caption}</figcaption>}
      </div>
    </figure>
  )
}

Image.defaultProps = {
  className: undefined,
}

Image.propTypes = {
  className: PropTypes.string,
}

export default Image
