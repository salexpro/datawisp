import React from 'react'

import Layout from '~components/Layout'

import SectionHero from './components/SectionHero'
import SectionPartners from './components/SectionPartners'

const Partners = ({ hero, partners }) => {
  return (
    <Layout>
      <SectionHero {...hero} />
      <SectionPartners partners={partners} />
    </Layout>
  )
}

export default Partners
