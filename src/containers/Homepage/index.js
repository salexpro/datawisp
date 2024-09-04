import React from 'react'

import SectionHero from '~components/SectionHero'
// import SectionHowItWorks from '~components/SectionHowItWorks'
import SectionFeatures from '~components/SectionFeatures'
import SectionFaq from '~components/SectionFaq'
import SectionTestimonials from './components/SectionTestimonials'
import SectionAdvantages from './components/SectionAdvantages'

// import SectionRoadmap from './components/SectionRoadmap'

const Homepage = (props) => {
  const {
    hero,
    testimonials,
    popup,
    // howItWorks,
    features,
    advantages,
    faq,
    utm,
  } = props

  return (
    <>
      <SectionHero {...hero} popup={popup} utm={utm} />
      <SectionTestimonials data={testimonials} />
      {/* <SectionHowItWorks {...howItWorks} /> */}
      <SectionFeatures variant="row" {...features} utm={utm} />
      <SectionAdvantages {...advantages} />
      <SectionFaq {...faq} utm={utm} />
    </>
  )
}

export default Homepage
