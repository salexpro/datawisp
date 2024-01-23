import React from 'react'
import cn from 'clsx'
import { Container } from 'react-bootstrap'

import ImageFormat from '~components/ImageFormat'
import ButtonGroup from '~components/ui/ButtonGroup'

import * as s from './SectionIntegrationsPreview.module.scss'

const SectionIntegrationsPreview = ({ heading, list, buttons, utm }) => {
  return (
    <Container as="section" className={s.section}>
      <h2 className={cn('h6', s.section_title)}>{heading}</h2>

      <ul className={s.section_list}>
        {list.map(({ icon, name }) => (
          <li key={name} className={s.section_item}>
            <ImageFormat
              alt={icon.alt || name}
              file={icon}
              width={32}
              height={32}
              className={s.section_pic}
            />
            {name}
          </li>
        ))}
      </ul>

      {buttons && (
        <ButtonGroup className={s.section_cta} data={buttons} utm={utm} />
      )}
    </Container>
  )
}

export default SectionIntegrationsPreview
