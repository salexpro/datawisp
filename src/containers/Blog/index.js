import React from 'react'

import BlogTabs from './components/BlogTabs'
import BlogSection from './components/BlogSection'

const Blog = (props) => {
  const { heading, tabs, blogs } = props

  return (
    <>
      <BlogTabs heading={heading} tabs={tabs} />
      <BlogSection blogs={blogs} />
    </>
  )
}

export default Blog
