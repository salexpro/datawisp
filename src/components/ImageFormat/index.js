import React from 'react'
import PropTypes from 'prop-types'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const ImageFormat = (props) => {
  const { format, url, file, alt, className, ...rest } = props

  return format === 'svg' ? (
    <img {...rest} src={url} alt={alt} className={className} />
  ) : (
    <div className={className}>
      <GatsbyImage {...rest} alt={alt} image={getImage(file)} />
    </div>
  )
}

ImageFormat.defaultProps = {
  url: undefined,
  file: undefined,
  className: '',
}

ImageFormat.propTypes = {
  format: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  url: PropTypes.string,
  file: PropTypes.object,
  className: PropTypes.string,
}

export default ImageFormat
