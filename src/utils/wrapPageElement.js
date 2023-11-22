import React from 'react'
import Layout from '~containers/Layout'

export const wrapPageElement = ({ element, props }) => {
  if (props.location.pathname === '/signup') {
    const { data } = props

    return (
      <Layout
        headerPageData={{
          ...data?.datoCmsHeader,
          actionButtonLink:
            data?.datoCmsLeadGenerationPage?.actionButtonLinkSecondary,
        }}
        footerPageData={{
          ...data?.datoCmsFooter,
          navMenuItems: data?.datoCmsLeadGenerationPage?.navMenuItems,
        }}
        {...props}
      >
        {element}
      </Layout>
    )
  }

  return <Layout {...props}>{element}</Layout>
}
