import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import { Container } from 'react-bootstrap'
import { StructuredText } from 'react-datocms'

import ImageFormat from '~components/ImageFormat'

import * as s from './SectionMission.module.scss'

const SectionMission = (props) => {
  const { heading, text, imageDesktop, imageMobile, className, ...rest } = props

  return (
    <Container
      {...rest}
      as="section"
      className={clsx(s.sectionMission, className)}
    >
      <div className={s.textWrapper}>
        <h2>{heading}</h2>
        <StructuredText data={text.value} />
      </div>
      <ImageFormat
        alt="strucute"
        file={imageDesktop}
        className={clsx(s.img, s.imgDesktop)}
      />
      <ImageFormat
        alt="strucute"
        file={imageMobile}
        className={clsx(s.img, s.imgMobile)}
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
