import React from 'react'
import { graphql } from 'gatsby'

import Pricing from '~containers/Pricing'
import SeoDatoCms from '~components/SeoDatoCms'

export const Head = ({ data }) => {
  const { seo } = data.datoCmsPricingPage

  return <SeoDatoCms seo={seo} />
}

const PricingPage = ({ data }) => {
  const {
    heading,
    description,
    tags,
    heroButtons,
    switchAnnualText,
    switchMonthlyText,
    switchAnnualDiscount,
  } = data.datoCmsPricingPage

  const plans = data.allDatoCmsPricingPlan.nodes
  const features = data.allDatoCmsPricingFeaturesCategory.nodes

  return (
    <Pricing
      heroSection={{ heading, description, tags, heroButtons }}
      switchButton={{
        annual: switchAnnualText,
        monthly: switchMonthlyText,
        discount: switchAnnualDiscount,
      }}
      pricingPlans={plans}
      pricingFeatures={features}
    />
  )
}

export const query = graphql`
  fragment PricingFeatures on DatoCmsPricingFeaturesCategoryConnection {
    nodes {
      name
      pricingPage
      features {
        id
        name
        customValue {
          value
          plansAppliedTo {
            id
          }
        }
        customReplace
        tooltipText
        tooltipRelation {
          id
        }
      }
    }
  }

  fragment PricingPlan on DatoCmsPricingPlanConnection {
    nodes {
      id
      position
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
      featuresList {
        id
      }
      button {
        ...Buttons
      }
    }
  }

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
      heroButtons {
        ...Buttons
      }

      switchAnnualText
      switchMonthlyText
      switchAnnualDiscount
    }

    allDatoCmsPricingFeaturesCategory(sort: { position: ASC }) {
      ...PricingFeatures
    }

    allDatoCmsPricingPlan(sort: { position: ASC }) {
      ...PricingPlan
    }
  }
`

export default PricingPage
