import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import { Container } from 'react-bootstrap'
import { StructuredText } from 'react-datocms'

import ImageFormat from '~components/ImageFormat'

import * as s from './SectionMission.module.scss'

const SectionMission = (props) => {
  const { heading, text, imageDesktop, imageMobile, className, utm, ...rest } =
    props

  return (
    <Container
      {...rest}
      as="section"
      className={cn(s.sectionMission, className)}
    >
      <div className={s.textWrapper}>
        <h2>{heading}</h2>
        <StructuredText data={text.value} />
      </div>
      <ImageFormat
        alt="strucute"
        file={imageDesktop}
        className={cn(s.img, s.imgDesktop)}
      />
      <ImageFormat
        alt="strucute"
        file={imageMobile}
        className={cn(s.img, s.imgMobile)}
      />
    </Container>
  )
}

SectionMission.defaultProps = {
  className: undefined,
}

SectionMission.propTypes = {
  className: PropTypes.string,
}

export default SectionMission
