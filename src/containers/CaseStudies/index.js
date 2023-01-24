import React from 'react'
import PropTypes from 'prop-types'

import Layout from '~components/Layout'
import SeoDatoCms from '~components/SeoDatoCms'

import SectionCaseHero from './components/SectionCaseHero'
import SectionCases from './components/SectionCases'

const CaseStudies = (props) => {
  const { hero, cases, className, seo, ...rest } = props

  return (
    <Layout {...rest} className={className}>
      <SeoDatoCms seo={seo} />
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
