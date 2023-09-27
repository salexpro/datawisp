import React, { useEffect, useRef } from 'react'
import { StructuredText } from 'react-datocms'

import useMatchMedia from '~hooks/useMatchMedia'

import CardUseCase from './components/CardUseCase'

import * as s from './SectionUseCases.module.scss'

const SectionUseCases = ({ heading, text, useCases }) => {
  const isUpMd = useMatchMedia('(min-width: 768px)')

  const scrollContainerRef = useRef()

  useEffect(() => {
    scrollContainerRef.current?.scrollTo(0, 0)
  }, [isUpMd])

  return (
    <section className={s.sectionUseCasesBg}>
      <div className={s.sectionUseCasesWrapper}>
        <div className={s.sectionUseCases}>
          <div className={s.gridHeading}>
            <h2>{heading}</h2>
            <StructuredText data={text} />
          </div>
          <div className={s.cardsScrollContainer} ref={scrollContainerRef}>
            <div className={s.gridCards}>
              {useCases.map(
                ({ id, iconName, heading: cardHeading, text: cardText }) => (
                  <CardUseCase
                    key={id}
                    iconName={iconName}
                    heading={cardHeading}
                    text={cardText}
                  />
                )
              )}
              <CardUseCase isPlaceholder />
              <CardUseCase isPlaceholder className={s.hideMobile} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionUseCases
