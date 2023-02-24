/* eslint-disable no-nested-ternary */
import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { Container } from 'react-bootstrap'
import { Link } from 'gatsby'
import { range } from 'lodash'

import RouteURL from '~routes'
import BlogItem from '~components/BlogItem'

import * as s from './SectionRelatedArticles.module.scss'

const SectionRelatedArticles = (props) => {
  const { className, relatedArticles, requestError, ...rest } = props

  return (
    <section
      {...rest}
      className={classNames(s.sectionRelatedArticles, className)}
    >
      <Container>
        <h2 className={s.heading}>Related Blog Articles</h2>
        {requestError ? (
          <div className={s.blockTextError}>
            <p>
              For more articles see the{' '}
              <Link to={RouteURL.BLOG}>Blog page</Link>
            </p>
          </div>
        ) : (
          <div className={s.gridArticles}>
            {relatedArticles
              ? relatedArticles?.map(({ id, _publishedAt, ...blogProps }) => (
                  // eslint-disable-next-line react/no-array-index-key
                  <BlogItem
                    {...blogProps}
                    headingAs="h3"
                    meta={{ publishedAt: _publishedAt }}
                    key={id}
                    className={s.blogItem}
                  />
                ))
              : range(3).map((n) => <BlogItem key={n} isPlaceholder />)}
          </div>
        )}
      </Container>
    </section>
  )
}

SectionRelatedArticles.defaultProps = {
  className: undefined,
}

SectionRelatedArticles.propTypes = {
  className: PropTypes.string,
}

export default SectionRelatedArticles
