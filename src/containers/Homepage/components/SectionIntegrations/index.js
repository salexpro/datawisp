import React from 'react'

import { Button, Container } from 'react-bootstrap'
import { Link } from 'gatsby'
import ImageFormat from '~components/ImageFormat'
import * as s from './SectionIntegrations.module.scss'

const SectionIntegrations = ({
  heading,
  list,
  subheading,
  buttonText,
  buttonLink,
}) => {
  return (
    <Container as="section" className={s.section}>
      <span className={s.section_title}>{heading}</span>

      <ul className={s.section_list}>
        {list.map(({ icon, name }) => (
          <li key={name} className={s.section_item}>
            <ImageFormat
              alt={icon.alt || name}
              file={icon}
              width={40}
              height={40}
              className={s.section_pic}
            />
            {name}
          </li>
        ))}
      </ul>

      <div className={s.section_cta}>
        <span className={s.section_subtitle}>{subheading}</span>

        <Button as={Link} to={buttonLink.url} variant="outline-secondary">
          {buttonText}
        </Button>
      </div>
    </Container>
  )
}

export default SectionIntegrations
