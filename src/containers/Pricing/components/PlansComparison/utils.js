export const processHeaderData = (keys, pricingPlans) => {
  return pricingPlans.reduce(
    (prev, cur) => {
      const {
        priceAnnual,
        periodAnnual,
        priceMonthly,
        periodMonthly,
        currentPriceAnnual,
        previewPriceAnnual,
        currentPriceMonthly,
        previewPriceMonthly,
        ...rest
      } = cur

      return {
        [keys.annual]: [
          ...prev[keys.annual],
          {
            price: priceAnnual,
            period: periodAnnual,
            discount: {
              currentPrice: currentPriceAnnual,
              previousPrice: previewPriceAnnual,
            },
            ...rest,
          },
        ],
        [keys.monthly]: [
          ...prev[keys.monthly],
          {
            price: priceMonthly,
            period: periodMonthly,
            discount: {
              current: currentPriceMonthly,
              preview: previewPriceMonthly,
            },
            ...rest,
          },
        ],
      }
    },
    { [keys.annual]: [], [keys.monthly]: [] }
  )
}
