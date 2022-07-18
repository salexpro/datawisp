import React from 'react'

import RouteURL from '~routes'
import { StaticImage } from 'gatsby-plugin-image'
import CardColumns from '~components/StructuredContent/components/CardColumns'

export const BREADCRUMBS = [
  { text: 'Case Studies', url: RouteURL.CASE_STUDIES },
  { text: 'LadderCaster', isActive: true },
]

// eslint-disable-next-line no-unused-vars
const CARD_COLUMNS = [
  {
    heading: 'Example Metrics',
    content: (
      <ul>
        <li>Distribution of casters</li>
        <li>Item equip rates (%)</li>
        <li>Resources burned by turn</li>
      </ul>
    ),
  },
  {
    heading: 'Data sources',
    content: (
      <ul>
        <li>Solana (all data)</li>
      </ul>
    ),
  },
  {
    heading: 'Standout Feature',
    content: (
      <ul>
        <li>Output API (show leaderboard on their website/app)</li>
      </ul>
    ),
  },
]

export const ARTICLE_CONTENT = (
  <>
    <h1>LadderCaster</h1>
    <p>
      We know from experience that data requests can be a huge burden on
      engineering. Datawisp is a visual, non-technical way to explore data that
      your whole team can use.
    </p>
    <CardColumns columns={CARD_COLUMNS} />
    <p>
      You will frequently see some sort of recommendation followed by “DYOR –
      this does not constitute financial advice” disclaimer as a means to avoid
      any backlash if you do decide to listen to them and lose money on the
      project.
    </p>
    <p>
      The reality is, for anything you plan on buying or investing in, you
      should always perform your own due diligence. NFTs are no different. It’s
      best to be cautious because you alone are responsible for your investments
      and financial well-being!
    </p>
    <p>
      But, following these steps has helped me be more successful in identifying
      quality projects while avoiding rugs...
    </p>
    <StaticImage
      src="./assets/case-img-01.jpg"
      alt="wonderland"
      sizes="(max-width: 767.98px) calc(100vw - 24px * 2), (max-width: 820px) calc(100vw - 40px * 2), 740px"
      breakpoints={[327, 654, 740, 981, 1110, 1376, 1480]}
      formats={['jpg', 'webp', 'avif']}
      quality={80}
      width={740}
    />
    <p>
      You will frequently see some sort of recommendation followed by “DYOR –
      this does not constitute financial advice” disclaimer as a means to avoid
      any backlash if you do decide to listen to them and lose money on the
      project.
    </p>
    <p>
      The reality is, for anything you plan on buying or investing in, you
      should always perform your own due diligence. NFTs are no different. It’s
      best to be cautious because you alone are responsible for your investments
      and financial well-being!
    </p>
    <p>
      But, following these steps has helped me be more successful in identifying
      quality projects while avoiding rugs...
    </p>
  </>
)
