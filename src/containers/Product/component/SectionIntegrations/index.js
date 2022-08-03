import React from 'react'
import PropTypes from 'prop-types'
import { Container } from 'react-bootstrap'
import { StructuredText } from 'react-datocms'
import clsx from 'clsx'

import IntegrationItem from './components/IntegrationItem'
import * as s from './SectionIntegrations.module.scss'

const SectionIntegrations = (props) => {
  const { heading, text, integrations, className, ...rest } = props

  return (
    <Container
      as="section"
      {...rest}
      className={clsx(s.sectionIntegrations, className)}
    >
      <h2 className={s.heading}>{heading}</h2>
      <StructuredText data={text.value} />
      <div className={s.integrationsWrapper}>
        {integrations.map(({ id, ...integration }) => (
          <IntegrationItem key={id} {...integration} />
        ))}
      </div>
    </Container>
  )
}

SectionIntegrations.defaultProps = {
  className: '',
}

SectionIntegrations.propTypes = {
  className: PropTypes.string,
}

export default SectionIntegrations
