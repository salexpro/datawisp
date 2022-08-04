import React, { createElement } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import { Link } from 'gatsby'
import { Badge, Button, Placeholder } from 'react-bootstrap'

import RouteURL from '~routes'
import Icon from '~components/Icon'
import ImageFormat from '~components/ImageFormat'

import * as s from './CardCase.module.scss'

const CardCase = (props) => {
  const {
    className,
    heading,
    headingAs,
    badgeText,
    postIcon,
    slug,
    comingSoon,
    isProduct,
    isPlaceholder,
    ...rest
  } = props

  if (isPlaceholder)
    return (
      <div
        {...rest}
        className={clsx(
          'placeholder-glow',
          s.cardCase,
          s.placeholder,
          className
        )}
      >
        <Placeholder className={s.placeholderImg} />
        <Placeholder
          as={headingAs}
          className={clsx('h4', s.placeholderHeader)}
        />
        <Placeholder as="p" className={s.placeholderText} />
        <Placeholder className={s.placeholderBtn} />
      </div>
    )

  const linkTitle = `Learn more about ${heading}`

  const componentProps = isProduct
    ? { className: clsx(s.cardCase, s.product, className) }
    : {
        className: clsx(s.cardCase, s.home, className),
        to: `${RouteURL.CASE_STUDIES}/${slug}`,
        'aria-label': linkTitle,
        title: linkTitle,
      }

  return React.createElement(
    isProduct ? 'div' : Link,
    {
      ...rest,
      ...componentProps,
      disabled: comingSoon,
    },
    <>
      <span className={s.imgWrapper}>
        {!isProduct ? (
          <ImageFormat width={40} height={40} alt={heading} file={postIcon} />
        ) : (
          <Icon name={postIcon} size={20} />
        )}
      </span>
      {createElement(headingAs, { className: clsx('h4', s.heading) }, heading)}
      <p className={s.text}>{badgeText}</p>
      {!isProduct && (
        <div className={s.buttonWrapper}>
          <Button
            variant="primary"
            className={s.arrowLink}
            aria-label={linkTitle}
          >
            <Icon name="icon-arrow-link" size={20} className={s.arrowIcon} />
          </Button>
          {comingSoon && <Badge>Coming Soon</Badge>}
        </div>
      )}
    </>
  )
}

CardCase.defaultProps = {
  className: undefined,
  heading: undefined,
  badgeText: undefined,
  postIcon: undefined,
  slug: undefined,
  isProduct: false,
  isPlaceholder: false,
  headingAs: 'h2',
}

CardCase.propTypes = {
  className: PropTypes.string,
  heading: PropTypes.string,
  badgeText: PropTypes.string,
  postIcon: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  slug: PropTypes.string,
  isProduct: PropTypes.bool,
  isPlaceholder: PropTypes.bool,
  headingAs: PropTypes.string,
}

export default CardCase
