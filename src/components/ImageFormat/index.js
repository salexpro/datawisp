import React from 'react'
import PropTypes from 'prop-types'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const ImageFormat = (props) => {
  const { file, alt, className, ...rest } = props
  const { format, url } = file

  return format === 'svg' ? (
    <img {...rest} src={url} alt={alt} className={className} />
  ) : (
    <div className={className}>
      <GatsbyImage {...rest} alt={alt} image={getImage(file)} />
    </div>
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
