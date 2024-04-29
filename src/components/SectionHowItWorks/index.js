import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import { Container } from 'react-bootstrap'
import { StructuredText } from 'react-datocms'

import CardStep from './components/CardStep'
import * as s from './SectionHowItWorks.module.scss'

const SectionHowItWorks = (props) => {
  const { variant, heading, text, steps, className, utm, ...rest } = props

  return (
    <section
      {...rest}
      className={cn(s.sectionHowItWorks, { [s[variant]]: variant }, className)}
    >
      <Container>
        <div className={s.gridHeading}>
          <h2 className={s.gridHeading__heading}>{heading}</h2>
          <StructuredText data={text.value} />
        </div>
        <div className={s.sectionHowItWorks__stepsWrapper}>
          {steps.map(({ id, ...step }, i) => (
            <CardStep key={id} step={i + 1} {...step} />
          ))}
        </div>
      </Container>
    </section>
  )
}

SectionHowItWorks.defaultProps = {
  className: undefined,
}

SectionHowItWorks.propTypes = {
  className: PropTypes.string,
}

export default SectionHowItWorks
