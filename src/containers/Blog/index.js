import React from 'react'

import Layout from '~components/Layout'
import S from '~components/seo'

import BlogTabs from './components/BlogTabs'
import BlogSection from './components/BlogSection'

const Blog = (props) => {
  return (
    <Layout {...props}>
      <S title="Home" />
      <BlogTabs />
      <BlogSection />
    </Layout>
  )
}

export default Blog
