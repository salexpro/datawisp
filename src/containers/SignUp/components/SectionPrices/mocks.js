import React from 'react'

export const PRICE_DATA = [
  {
    title: 'Student',
    description: 'With .edu email',
    price: 'Free',
    sections: [
      {
        title: 'Imports',
        items: [
          { title: 'CSV, Excel, Google Sheets' },
          { title: 'Live database connections', isNotReady: true },
          { title: 'Web3 data imports', isNotReady: true },
        ],
      },
      {
        title: 'Analysis',
        items: [
          {
            title:
              'All logic blocks to transform & chart your data without code',
          },
        ],
      },
      {
        title: 'Storage',
        items: [
          {
            title: '1 GB',
          },
        ],
      },
      {
        title: 'Export & Sharing',
        items: [
          {
            title: (
              <p>
                Public share links – <b>Branded, read only</b>
              </p>
            ),
          },
        ],
      },
    ],
  },
  {
    badgeText: 'Early bird',
    title: 'Basic',
    description: 'Per user, billed annually',
    price: (
      <>
        $39<span>/mo</span>
      </>
    ),
    discount: { prevPrice: '$588', curPrice: '$468/year' },
    sections: [
      {
        title: 'Imports',
        items: [{ title: 'CSV, Excel, Google Sheets' }],
      },
      {
        title: 'Analysis',
        items: [
          {
            title:
              'All logic blocks to transform & chart your data without code',
          },
        ],
      },
      {
        title: 'Storage',
        items: [
          {
            title: '1 GB',
          },
        ],
      },
      {
        title: 'Export & Sharing',
        items: [
          {
            title: (
              <p>
                Public share links – <b>Branded, read only</b>
              </p>
            ),
          },
        ],
      },
    ],
  },
  {
    badgeText: 'Early bird',
    title: 'Pro',
    description: 'Per user, billed annually',
    price: (
      <>
        $99<span>/mo</span>
      </>
    ),
    discount: { prevPrice: '$1,488', curPrice: '$1,188/year' },
    sections: [
      {
        title: 'Imports',
        items: [
          { title: 'CSV, Excel, Google Sheets' },
          { title: 'Live database connections' },
          { title: 'Web3 data imports' },
        ],
      },
      {
        title: 'Analysis',
        items: [
          {
            title:
              'All logic blocks to transform & chart your data without code',
          },
          {
            title: 'Web3 specific blocks',
          },
        ],
      },
      {
        title: 'Storage',
        items: [
          {
            title: '100 GB',
          },
        ],
      },
      {
        title: 'Export & Sharing',
        items: [
          {
            title: (
              <p>
                Public share links – <b>Branded, read only</b>
              </p>
            ),
          },
          {
            title: 'Datawisp output API',
          },
          {
            title: 'Database export',
          },
        ],
      },
    ],
  },
  {
    title: 'Enterprise',
    sections: [
      {
        title: 'Imports',
        items: [
          { title: 'CSV, Excel, Google Sheets' },
          { title: 'Live database connections' },
          { title: 'Web3 data imports' },
          { title: 'Datawisp ingest API' },
          { title: 'Custom data integrations' },
        ],
      },
      {
        title: 'Analysis',
        items: [
          {
            title:
              'All logic blocks to transform & chart your data without code',
          },
          { title: 'Web3 specific blocks' },
          { title: 'Custom blocks' },
        ],
      },
      {
        title: 'Storage',
        items: [
          {
            title: 'Custom',
          },
        ],
      },
      {
        title: 'Export & Sharing',
        items: [
          {
            title: <b>Bespoke</b>,
          },
          {
            title: 'Datawisp output API',
          },
          {
            title: 'Database export',
          },
        ],
      },
    ],
  },
]
