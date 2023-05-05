import React from 'react'
import { Button, Container } from 'react-bootstrap'
import { StructuredText } from 'react-datocms'

import ImageFormat from '~components/ImageFormat'

import * as s from './SectionPartners.module.scss'

const SectionPartners = ({ partners }) => {
  console.log({ partners })
  return (
    <Container className={s.sectionPartners}>
      {partners.map(({ id, title, description, name, logo, btn }) => (
        <div key={id} className={s.partner}>
          <div className={s.partner__logoWrapper}>
            <ImageFormat
              alt={name}
              file={logo}
              className={s.partner__logoWrapper__logo}
            />
          </div>
          <div>
            <h2 className={s.partner__title}>{title}</h2>
            <div className={s.partner__description}>
              <StructuredText data={description.value} />
            </div>

            {btn?.length && (
              <Button
                href={btn[0].url}
                target="_blank"
                rel="noreferrer"
                className={s.partner__button}
              >
                {btn[0].label}
              </Button>
            )}
          </div>
        </div>
      ))}
    </Container>
  )
}

export default SectionPartners
