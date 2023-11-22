import React from 'react'

import SectionFeatures from '~components/SectionFeatures'
import SectionPersonas from '~components/SectionPersonas'
import SectionHero from './components/SectionHero'
import SectionVideo from './components/SectionVideo'

const Persona = ({ data, utm }) => {
  const {
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
    <>
      <SectionHero
        heading={heroHeading}
        descr={heroDescription}
        buttons={heroButtons}
        bg={heroBg}
        utm={utm}
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
        utm={utm}
      />
      <SectionPersonas
        heading={moreHeading}
        text={moreText}
        personas={moreItems}
        variant="more"
      />
    </>
  )
}

export default Persona
