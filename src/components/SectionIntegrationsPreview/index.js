import React from 'react'
import cn from 'clsx'
import { Button, Container } from 'react-bootstrap'
import { Link } from 'gatsby'
import ImageFormat from '~components/ImageFormat'
import * as s from './SectionIntegrationsPreview.module.scss'

const SectionIntegrationsPreview = ({
  heading,
  list,
  buttonText,
  buttonLink,
}) => {
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

      <div className={s.section_cta}>
        <Button as={Link} to={buttonLink.url} variant="outline-secondary">
          {buttonText}
        </Button>
      </div>
    </Container>
  )
}

export default SectionIntegrationsPreview
