import React from 'react'
import PropTypes from 'prop-types'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const ImageFormat = (props) => {
  const { file, alt, ...rest } = props
  const { format, url } = file || {}

  console.log()

  return format === 'svg' ? (
    <img {...rest} src={url} alt={alt} />
  ) : (
    <GatsbyImage alt={alt} image={getImage(file)} width="10" {...rest} />
  )
}

ImageFormat.defaultProps = {
  className: '',
}

ImageFormat.propTypes = {
  file: PropTypes.object.isRequired,
  className: PropTypes.string,
}

export default ImageFormat
