export const BILLING_PLANS = { annual: 'Annual', monthly: 'Monthly' }

export const PRICING_TABLE = {
  headerAnnual: [
    {
      title: 'Student',
      subTitle: 'With .edu email',
      price: { value: 'Free' },
    },
    {
      tag: 'Early bird',
      title: 'Basic',
      subTitle: 'Per user, billed annually',
      price: { value: '$39', period: 'mo' },
      discount: {
        previousPrice: '$588',
        currentPrice: '$468/year',
      },
    },
    {
      tag: 'Early bird',
      title: 'Pro',
      subTitle: 'Per user, billed annually',
      isSelected: true,
      price: { value: '$99', period: 'mo' },
      discount: {
        previousPrice: '$1,488',
        currentPrice: '$1,188/year',
      },
    },
    {
      isComingSoon: true,
      tag: 'Coming soon',
      title: 'Enterprise',
      button: 'Contact us',
    },
  ],
  headerMonthly: [
    {
      title: 'Student',
      subTitle: 'With .edu email',
      price: { value: 'Free' },
    },
    {
      tag: 'Early bird',
      title: 'Basic',
      subTitle: 'Per user, billed annually',
      price: { value: '$49', period: 'mo' },
    },
    {
      tag: 'Early bird',
      title: 'Pro',
      isSelected: true,
      subTitle: 'Per user, billed annually',
      price: { value: '$124', period: 'mo' },
    },
    {
      isComingSoon: true,
      tag: 'Coming soon',
      title: 'Enterprise',
      button: 'Contact us',
    },
  ],
  body: [
    {
      title: 'Imports',
      rows: [
        [
          { type: 'text', text: 'CSV, Excel, Google Sheets' },
          { type: 'checkBox' },
          { type: 'checkBox' },
          { type: 'checkBox' },
          { type: 'checkBox' },
        ],
        [
          { type: 'text', text: 'Live database connections' },
          { type: 'text', text: 'Contact us' },
          { type: 'inactive' },
          { type: 'checkBox' },
          { type: 'checkBox' },
        ],
        [
          { type: 'text', text: 'Web3 data imports' },
          { type: 'text', text: 'Contact us' },
          { type: 'inactive' },
          { type: 'checkBox' },
          { type: 'checkBox' },
        ],
        [
          { type: 'text', text: 'Datawisp ingest API' },
          { type: 'inactive' },
          { type: 'inactive' },
          { type: 'inactive' },
          { type: 'checkBox' },
        ],
        [
          { type: 'text', text: 'Custom data integrations' },
          { type: 'inactive' },
          { type: 'inactive' },
          { type: 'inactive' },
          { type: 'checkBox' },
        ],
      ],
    },
    {
      title: 'Analysis',
      rows: [
        [
          {
            type: 'text',
            text: 'All logic blocks to transform & chart your data without code',
          },
          { type: 'checkBox' },
          { type: 'checkBox' },
          { type: 'checkBox' },
          { type: 'checkBox' },
        ],
        [
          {
            type: 'text',
            text: 'Web3 specific blocks',
          },
          { type: 'inactive' },
          { type: 'inactive' },
          { type: 'checkBox' },
          { type: 'checkBox' },
        ],
        [
          {
            type: 'text',
            text: 'Custom blocks',
          },
          { type: 'inactive' },
          { type: 'inactive' },
          { type: 'inactive' },
          { type: 'checkBox' },
        ],
      ],
    },
    {
      title: 'Storage',
      rows: [
        [
          { type: 'text', text: 'Storage' },
          {
            type: 'text',
            text: '1 GB',
          },
          {
            type: 'text',
            text: '1 GB',
          },
          {
            type: 'text',
            text: '100 GB',
          },
          {
            type: 'text',
            text: 'Custom',
          },
        ],
      ],
    },
    {
      title: 'Collaboration & Other',
      rows: [
        [
          { type: 'text', text: 'Teams' },
          {
            type: 'inactive',
          },
          {
            type: 'inactive',
          },
          {
            type: 'checkBox',
          },
          {
            type: 'checkBox',
          },
        ],
        [
          { type: 'text', text: 'Advanced data governance features' },
          {
            type: 'inactive',
          },
          {
            type: 'inactive',
          },
          {
            type: 'inactive',
          },
          {
            type: 'checkBox',
          },
        ],
      ],
    },
    {
      title: 'Support',
      rows: [
        [
          { type: 'text', text: 'Public Discord' },
          {
            type: 'checkBox',
          },
          {
            type: 'checkBox',
          },
          {
            type: 'checkBox',
          },
          {
            type: 'checkBox',
          },
        ],
        [
          { type: 'text', text: 'Dedicated Discord or Slack channel' },
          {
            type: 'inactive',
          },
          {
            type: 'inactive',
          },
          {
            type: 'checkBox',
          },
          {
            type: 'checkBox',
          },
        ],
        [
          { type: 'text', text: 'Customized support package' },
          {
            type: 'inactive',
          },
          {
            type: 'inactive',
          },
          {
            type: 'inactive',
          },
          {
            type: 'checkBox',
          },
        ],
      ],
    },
  ],
}
