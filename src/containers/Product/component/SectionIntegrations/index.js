import React from 'react'
import PropTypes from 'prop-types'
import { Container } from 'react-bootstrap'
import cn from 'classnames'

import INTEGRATION_DATA from './mock'
import IntegrationItem from './components/IntegrationItem'
import * as s from './SectionIntegrations.module.scss'

const SectionIntegrations = (props) => {
  const { className, ...rest } = props

  return (
    <Container as="section" {...rest} className={cn(className)}>
      <h2 className={s.heading}>Integrations</h2>
      <div className={s.integrationsWrapper}>
        {INTEGRATION_DATA.map((item) => (
          <IntegrationItem key={item.name} {...item} />
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
