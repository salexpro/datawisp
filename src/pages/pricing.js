import React from 'react'

import Pricing from '~containers/Pricing'
import { graphql } from 'gatsby'

const PricingPage = ({ data }) => {
  const {
    heading,
    description,
    tags,
    buttonText,
    buttonLink,
    switchAnnualText,
    switchMonthlyText,
    switchAnnualDiscount,
    pricingPlans,
    plansComparison,
    seo,
  } = data.datoCmsPricingPage

  return (
    <Pricing
      seo={seo}
      heroSection={{ heading, description, tags, buttonText, buttonLink }}
      switchButton={{
        annual: switchAnnualText,
        monthly: switchMonthlyText,
        discount: switchAnnualDiscount,
      }}
      pricingPlans={pricingPlans}
      plansComparison={plansComparison}
    />
  )
}

export const query = graphql`
  query PricingPage {
    datoCmsPricingPage {
      seo {
        ...SEO
      }

      heading
      description
      tags {
        id
        iconName
        tagText
      }
      buttonText
      buttonLink

      switchAnnualText
      switchMonthlyText
      switchAnnualDiscount

      pricingPlans {
        id
        tagText
        isComingSoon
        title
        description
        isSelected
        priceAnnual
        periodAnnual
        priceMonthly
        periodMonthly
        currentPriceAnnual
        previewPriceAnnual
        currentPriceMonthly
        previewPriceMonthly
        showButton
        buttonText
        buttonLink
      }

      plansComparison {
        id
        title
        rows {
          id
          title
          cells {
            id
            cellType
            text
          }
        }
      }
    }
  }
`

export default PricingPage
