/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/ssr-apis/
 */

export { wrapPageElement } from '~utils/wrapPageElement'

// Hack, to reorder the helmet components as first in <head> tag
export const onPreRenderHTML = ({
  getHeadComponents,
  replaceHeadComponents,
}) => {
  const headComponents = getHeadComponents()

  headComponents.sort((a) => {
    if (a.props && a.props['data-gatsby-head']) {
      return -1
    }
    return 1
  })

  replaceHeadComponents(headComponents)
}
