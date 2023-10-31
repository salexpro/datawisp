import React from 'react'

import SeoDatoCms from '~components/SeoDatoCms'
import Layout from '../Layout'

import BlogTabs from './components/BlogTabs'
import BlogSection from './components/BlogSection'

const Blog = (props) => {
  const { heading, tabs, blogs, seo } = props
  return (
    <Layout {...props}>
      <SeoDatoCms seo={seo} />
      <BlogTabs heading={heading} tabs={tabs} />
      <BlogSection blogs={blogs} />
    </Layout>
  )
}

export default Blog
