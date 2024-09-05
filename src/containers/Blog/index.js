import React from 'react'

import BlogTabs from './components/BlogTabs'
import BlogSection from './components/BlogSection'

const Blog = (props) => {
  const { heading, tabs, blogs, utm, isCaseStudy } = props

  return (
    <>
      <BlogTabs heading={heading} tabs={tabs} />
      <BlogSection blogs={blogs} utm={utm} isCaseStudy={isCaseStudy} />
    </>
  )
}

export default Blog
