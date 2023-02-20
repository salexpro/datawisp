import React from 'react'

import Layout from '~components/Layout'

import SectionHero from './components/SectionHero'
import PricingTable from './components/PricingTable'

const Pricing = () => {
  return (
    <Layout>
      <SectionHero />
      <PricingTable />
    </Layout>
  )
}

export default Pricing
