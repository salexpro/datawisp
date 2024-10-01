import React from 'react'
import { Container } from 'react-bootstrap'
import { StructuredText } from 'react-datocms'
import cn from 'classnames'
import ImageFormat from '~components/ui/ImageFormat'

import * as s from './SectionHow.module.scss'

const SectionHow = ({ heading, description, image, imageMobile }) => {
  const isDescription = description?.value?.document?.children.some((child) =>
    child.children?.some((subChild) => subChild.value?.trim() !== '')
  )
  return (
    <Container as="section" className={s.section}>
      <div className={s.heading}>
        <h2>{heading}</h2>
        {isDescription && <StructuredText data={description.value} />}
      </div>
      <ImageFormat
        file={image}
        alt="Illustration"
        className={cn(s.pic, { [s.desktop]: imageMobile })}
      />
      {imageMobile && (
        <ImageFormat
          file={imageMobile}
          alt="Illustration"
          className={cn(s.pic, s.mobile)}
        />
      )}
    </Container>
  )
}

export default SectionHow
