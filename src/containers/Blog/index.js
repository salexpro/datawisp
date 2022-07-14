import React from 'react'

import Layout from '~components/Layout'
import S from '~components/seo'

import BlogSection from './components/BlogSection'

const Blog = (props) => {
  return (
    <Layout {...props}>
      <S title="Home" />
      <BlogSection />
      <div style={{ height: '100vh' }} />
    </Layout>
  )
}

export default Blog
