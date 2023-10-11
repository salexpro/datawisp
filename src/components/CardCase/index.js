import React, { createElement } from 'react'
import PropTypes from 'prop-types'
import cn from 'clsx'
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
    seo,
    postIcon,
    slug,
    comingSoon: isComingSoon,
    isFeatureCard,
    isPlaceholder,
    variant,
    ...rest
  } = props

  if (isPlaceholder)
    return (
      <div
        {...rest}
        className={cn('placeholder-glow', s.card, s.placeholder, className)}
      >
        <Placeholder className={s.placeholderImg} />
        <Placeholder as={headingAs} className={cn('h4', s.placeholderHeader)} />
        <Placeholder as="p" className={s.placeholderText} />
        <Placeholder className={s.placeholderBtn} />
      </div>
    )

  const linkTitle = `Learn more about ${heading}`

  const componentProps = isFeatureCard
    ? { className: cn(s.card, s.featureCard, className) }
    : {
        className: cn(s.card, { [s[variant]]: variant }, className),
        to: `${RouteURL.CASE_STUDIES}/${slug}`,
        'aria-label': linkTitle,
        title: linkTitle,
        disabled: isComingSoon,
      }

  const { description } = seo || {}

  return React.createElement(
    isFeatureCard ? 'div' : Link,
    {
      ...rest,
      ...componentProps,
    },
    <>
      <span className={cn(s.imgWrapper, { [s[variant]]: variant })}>
        {!isFeatureCard ? (
          <ImageFormat width={40} height={40} alt={heading} file={postIcon} />
        ) : (
          <Icon name={postIcon} size={20} />
        )}
      </span>
      {createElement(headingAs, { className: cn('h4', s.heading) }, heading)}
      <p>{description}</p>
      {!isFeatureCard && (
        <div className={s.buttonWrapper}>
          <Button
            variant="primary"
            className={cn(s.arrowLink, { [s[variant]]: variant })}
            aria-label={linkTitle}
          >
            <Icon name="icon-arrow-link" size={20} className={s.arrowIcon} />
          </Button>
          {isComingSoon && (
            <Badge bg={cn({ [`primary-gray`]: variant === 'white' })}>
              Coming Soon
            </Badge>
          )}
        </div>
      )}
    </>
  )
}

CardCase.defaultProps = {
  className: undefined,
  heading: undefined,
  postIcon: undefined,
  slug: undefined,
  isFeatureCard: false,
  isPlaceholder: false,
  headingAs: 'h2',
  variant: undefined,
}

CardCase.propTypes = {
  className: PropTypes.string,
  heading: PropTypes.string,
  postIcon: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  slug: PropTypes.string,
  isFeatureCard: PropTypes.bool,
  isPlaceholder: PropTypes.bool,
  headingAs: PropTypes.string,
  variant: PropTypes.oneOf(['white']),
}

export default CardCase
