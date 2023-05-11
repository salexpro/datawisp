import React from 'react'
import PropTypes from 'prop-types'
import { Container } from 'react-bootstrap'
import { StructuredText } from 'react-datocms'
import cn from 'classnames'

import IntegrationItem from './components/IntegrationItem'
import * as s from './SectionIntegrations.module.scss'

const SectionIntegrations = (props) => {
  const { variant, heading, text, integrations, className, ...rest } = props

  const isTwoColumn = integrations?.length === 2

  return (
    <Container
      id="integrations"
      as="section"
      {...rest}
      className={cn(
        s.sectionIntegrations,
        { [s[variant]]: variant },
        className
      )}
    >
      <h2>{heading}</h2>
      <StructuredText data={text.value} />
      <div
        className={cn(s.integrationsWrapper, {
          [s.twoColumns]: isTwoColumn,
        })}
      >
        {integrations.map(({ id, ...integration }) => (
          <IntegrationItem
            key={id}
            {...integration}
            isThreeColumn={!isTwoColumn}
          />
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
