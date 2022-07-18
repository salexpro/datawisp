import React from 'react'
import PropTypes from 'prop-types'
import { GatsbyImage } from 'gatsby-plugin-image'
import { Container } from 'react-bootstrap'

import getImgWithBlurHash from '~utils/getImgWithBlurHash'

import Breadcrumbs from './components/Breadcrumbs'

import * as s from './StructuredContent.module.scss'

const StructuredContent = (props) => {
  // TODO: update props
  const { breadcrumbs, content, imgFile, ...rest } = props

  return (
    <Container {...rest}>
      <section className={s.article}>
        <Breadcrumbs className={s.navBlog} breadcrumbs={breadcrumbs} />
        <GatsbyImage
          alt="hero"
          image={getImgWithBlurHash(imgFile)}
          className={s.imgHero}
        />
        <div className={s.rowPostData}>
          <time className={s.colorPrimary} dateTime="2022-01-02">
            January 2, 2022
          </time>
          <span>
            Posted by: <span className={s.colorPrimary}>K Matthew Coyle</span>
          </span>
        </div>
        {content}
      </section>
    </Container>
  )
}

StructuredContent.defaultProps = {
  className: undefined,
}

StructuredContent.propTypes = {
  className: PropTypes.string,
}

export default StructuredContent
