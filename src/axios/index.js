import axios from 'axios'
import dayjs from 'dayjs'

/**
 * GraphQL tag to enable prettier formatting
 * @param str
 */
const gql = (str) => str[0]

const ApiUrl = {
  DATO_CMS: 'https://graphql.datocms.com/',
}

const axiosDatoCms = axios.create({
  baseURL: ApiUrl.DATO_CMS,
  timeout: 5 * 1000,
  headers: { Authorization: `Bearer ${process.env.GATSBY_DATOCMS_API_TOKEN}` },
})

export const getRelatedCases = (originalId) => {
  const dateRecently = dayjs().subtract(20, 'm')
  const isoTimeString = dateRecently.toISOString()

  return axiosDatoCms
    .post('/', {
      query: gql`
        query RelatedCases($originalId: ItemId, $publishedBefore: DateTime) {
          allArticles(
            orderBy: _publishedAt_DESC
            filter: {
              id: { neq: $originalId }
              postType: { eq: "caseStudy" }
              comingSoon: { eq: false }
              _publishedAt: { lte: $publishedBefore }
            }
            first: 6
          ) {
            id
            heading
            badgeText
            postIcon {
              format
              url
            }
            slug
          }
        }
      `,
      variables: { publishedBefore: isoTimeString, originalId },
    })
    .then((response) => response.data?.data)
}
export const getRelatedArticles = (originalId) => {
  const dateRecently = dayjs().subtract(20, 'm')
  const isoTimeString = dateRecently.toISOString()

  return axiosDatoCms
    .post('/', {
      query: gql`
        fragment responsiveImageFragment on ResponsiveImage {
          srcSet
          webpSrcSet
          sizes
          src
          width
          height
          aspectRatio
          alt
          title
          bgColor
          base64
        }

        query RelatedArticles($originalId: ItemId, $publishedBefore: DateTime) {
          allArticles(
            orderBy: _publishedAt_DESC
            filter: {
              id: { neq: $originalId }
              postType: { eq: "blogpost" }
              comingSoon: { eq: false }
              _publishedAt: { lte: $publishedBefore }
            }
            first: 3
          ) {
            id
            heroImage {
              responsiveImage(
                imgixParams: {
                  fit: crop
                  auto: [compress, format]
                  h: "540"
                  w: "720"
                }
                sizes: "(max-width: 767.98px) calc(100vw - 24px * 2), (max-width: 1023.98px) calc((100vw - 40px * 2 - 24px) / 2), (max-width: 1439.98px)  calc((100vw - 40px * 2 - 32px * 2) / 3), 392px"
              ) {
                ...responsiveImageFragment
              }
            }
            _publishedAt
            heading
            seo {
              description
            }
            slug
          }
        }
      `,
      variables: { publishedBefore: isoTimeString, originalId },
    })
    .then((response) => response.data?.data)
}
