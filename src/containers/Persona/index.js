import React from 'react'

import SeoDatoCms from '~components/SeoDatoCms'
import SectionFeatures from '~components/SectionFeatures'
import SectionPersonas from '~components/SectionPersonas'
import Layout from '../Layout'
import SectionHero from './components/SectionHero'
import SectionVideo from './components/SectionVideo'

const Persona = ({ data }) => {
  const {
    seo,
    heroHeading,
    heroDescription,
    heroButtons,
    heroBg,
    featuresHeading,
    featuresText,
    featuresList,
    videoHeading,
    videoText,
    video,
    videoButtons,
    videoCaption,
    moreHeading,
    moreText,
    moreItems,
  } = data.datoCmsPersonaPage

  return (
    <Layout>
      <SeoDatoCms seo={seo} />
      <SectionHero
        heading={heroHeading}
        descr={heroDescription}
        buttons={heroButtons}
        bg={heroBg}
      />
      <SectionFeatures
        heading={featuresHeading}
        text={featuresText}
        items={featuresList}
        variant="short"
      />
      <SectionVideo
        heading={videoHeading}
        text={videoText}
        video={video}
        buttons={videoButtons}
        caption={videoCaption}
      />
      <SectionPersonas
        heading={moreHeading}
        text={moreText}
        personas={moreItems}
        variant="more"
      />
    </Layout>
  )
}

export default Persona
