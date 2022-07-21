import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import { Container } from 'react-bootstrap'
import { Link } from 'gatsby'
import { range } from 'lodash'

import CardCase from '~components/CardCase'
import RouteURL from '~routes'

import * as s from './SectionRelatedCases.module.scss'

const SectionRelatedCases = (props) => {
  const { className, relatedCases, requestError, ...rest } = props

  return (
    <section {...rest} className={cn(s.sectionRelatedCases, className)}>
      <Container>
        <h2 className={s.heading}>Related Case Studies</h2>
        {requestError ? (
          <div className={s.blockTextError}>
            <p>
              For more articles see the{' '}
              <Link to={RouteURL.CASE_STUDIES}>Case Studies page</Link>
            </p>
          </div>
        ) : (
          <div className={s.gridCases}>
            {relatedCases
              ? relatedCases?.map(({ id, ...caseStudyProps }) => (
                  <CardCase
                    {...caseStudyProps}
                    key={id}
                    className={s.cardCase}
                  />
                ))
              : range(5).map((n) => (
                  <CardCase key={n} isPlaceholder className={s.cardCase} />
                ))}
          </div>
        )}
      </Container>
    </section>
  )
}

SectionRelatedCases.defaultProps = {
  className: undefined,
}

SectionRelatedCases.propTypes = {
  className: PropTypes.string,
}

export default SectionRelatedCases
