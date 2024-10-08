import React from 'react'
import { Analytics } from '@vercel/analytics/react'
import Layout from '~containers/Layout'

export const wrapPageElement = ({ element, props }) => {
  if (
    props.location.pathname === '/signup' ||
    props.pageContext?.id?.includes('DatoCmsLandingPage')
  ) {
    const { data } = props

    return (
      <Layout
        headerPageData={{
          ...data?.datoCmsHeader,
          actionButtonLink:
            data?.datoCmsLeadGenerationPage?.actionButtonLinkSecondary ||
            data?.datoCmsLandingPage?.actionButtonLink,
        }}
        footerPageData={{
          ...data?.datoCmsFooter,
          navMenuItems: data?.datoCmsLeadGenerationPage?.navMenuItems,
        }}
        {...props}
      >
        {element}
        <Analytics />
      </Layout>
    )
  }

  return (
    <Layout {...props}>
      {element}
      <Analytics />
    </Layout>
  )
}
