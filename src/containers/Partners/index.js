import React from 'react'

import SeoDatoCms from '~components/SeoDatoCms'

import SectionHero from './components/SectionHero'
import SectionPartners from './components/SectionPartners'

const Partners = ({ seo, hero, partners }) => {
  return (
    <>
      <SeoDatoCms seo={seo} />
      <SectionHero {...hero} />
      <SectionPartners partners={partners} />
    </>
  )
}

export default Partners
