import React from 'react'

import Layout from '~components/Layout'
import S from '~components/seo'

import BlogTabs from './components/BlogTabs'
import BlogSection from './components/BlogSection'

const Blog = (props) => {
  const { heading, tabs, blogs } = props
  return (
    <Layout {...props}>
      <S title="Home" />
      <BlogTabs heading={heading} tabs={tabs} />
      <BlogSection blogs={blogs} />
    </Layout>
  )
}

export default Blog
