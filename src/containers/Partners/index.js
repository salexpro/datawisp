import React from 'react'

import SeoDatoCms from '~components/SeoDatoCms'
import Layout from '../Layout'

import SectionHero from './components/SectionHero'
import SectionPartners from './components/SectionPartners'

const Partners = ({ seo, hero, partners }) => {
  return (
    <Layout>
      <SeoDatoCms seo={seo} />
      <SectionHero {...hero} />
      <SectionPartners partners={partners} />
    </Layout>
  )
}

export default Partners
