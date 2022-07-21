import React from 'react'
import PropTypes from 'prop-types'

import Layout from '~components/Layout'
import S from '~components/seo'

import SectionCaseHero from './components/SectionCaseHero'
import SectionCases from './components/SectionCases'

const CaseStudies = (props) => {
  const { hero, cases, className, ...rest } = props

  return (
    <Layout {...rest} className={className}>
      <S title="Case Studies" />
      <SectionCaseHero {...hero} />
      <SectionCases cases={cases} />
    </Layout>
  )
}

CaseStudies.defaultProps = {
  className: '',
}

CaseStudies.propTypes = {
  className: PropTypes.string,
}

export default CaseStudies
