import React from 'react'
import { Button } from 'react-bootstrap'
import { graphql, useStaticQuery } from 'gatsby'

const TryBtn = () => {
  const btnData = useStaticQuery(graphql`
    query TryBtn {
      datoCmsLeadGenerationPage {
        heroButtonText
        heroButtonLink {
          url
          text
        }
      }
    }
  `)

  const { heroButtonText, heroButtonLink } = btnData.datoCmsLeadGenerationPage

  return (
    <Button
      href={heroButtonLink.url}
      target="_blank"
      rel="nofollow noopener noreferrer"
    >
      {heroButtonText || heroButtonLink.text}
    </Button>
  )
}

export default TryBtn
