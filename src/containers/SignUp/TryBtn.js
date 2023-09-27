import React from 'react'
import { Button } from 'react-bootstrap'
import { graphql, useStaticQuery } from 'gatsby'

const TryBtn = ({ variant, utm }) => {
  const btnData = useStaticQuery(graphql`
    query TryBtn {
      datoCmsLeadGenerationPage {
        heroButtonText
        heroButtonLink {
          url
          text
          linkId
        }
      }
    }
  `)

  const { heroButtonText, heroButtonLink } = btnData.datoCmsLeadGenerationPage

  return (
    <Button
      href={`${heroButtonLink.url}${utm ? `?${utm}` : ''}`}
      target="_blank"
      rel="nofollow noopener noreferrer"
      id={`${heroButtonLink.linkId}-${variant}`}
    >
      {heroButtonText || heroButtonLink.text}
    </Button>
  )
}

export default TryBtn
