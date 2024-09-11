import React from 'react'
import { graphql } from 'gatsby'

import Blog from '~containers/Blog'
import SeoDatoCms from '~components/SeoDatoCms'

export const Head = ({ data }) => {
  const { seo } = data.datoCmsBlogPage

  return <SeoDatoCms seo={seo} />
}

const BlogPage = ({ data, utm }) => {
  const { blogSectionHeading, defaultCategoryName, seo } = data.datoCmsBlogPage
  const blogs = data.allDatoCmsArticle?.nodes
  const tabs = data.allDatoCmsCategory?.nodes

  const allTabs = defaultCategoryName
    ? [
        { id: defaultCategoryName, name: defaultCategoryName, slug: '' },
        ...tabs,
      ]
    : tabs

  return (
    <Blog
      heading={blogSectionHeading}
      tabs={allTabs}
      blogs={blogs}
      seo={seo}
      utm={utm}
    />
  )
}

export const query = graphql`
  query BlogPage {
    datoCmsBlogPage {
      seo {
        ...SEO
      }
      blogSectionHeading
      defaultCategoryName
    }

    allDatoCmsArticle(
      sort: { meta: { createdAt: DESC } }
      filter: { category: { slug: { ne: "case-studies" } } }
    ) {
      nodes {
        id
        heroImage {
          gatsbyImageData(
            width: 768
            aspectRatio: 1.49
            forceBlurhash: true
            sizes: "(max-width: 767.98px) calc(100vw - 24px * 2), (max-width: 1023.98px) calc((100vw - 40px * 2 - 24px) / 2), (max-width: 1439.98px)  calc((100vw - 40px * 2 - 32px * 2) / 3), 392px"
            breakpoints: [327, 460, 784, 981, 1176, 1440]
            imgixParams: { fit: "crop", auto: "compress,format" }
          )
        }
        meta {
          createdAt
        }
        heading
        seo {
          description
        }
        category {
          id
          name
          slug
        }
        slug
      }
    }

    allDatoCmsCategory {
      nodes {
        name
        slug
      }
    }
  }
`

export default BlogPage
