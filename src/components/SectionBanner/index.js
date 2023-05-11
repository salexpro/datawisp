import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Button, Container } from 'react-bootstrap'
import { StructuredText } from 'react-datocms'
import cn from 'classnames'

import RequestDemoForm from '~components/RequestDemoForm'

import * as s from './SectionBanner.module.scss'

const SectionBanner = (props) => {
  const {
    heading,
    text,
    buttonText,
    buttonLink,
    withForm,
    notificationText,
    className,
    ...rest
  } = props

  const [message, setMessage] = useState({ text: '', isError: false })

  return (
    <Container
      as="section"
      {...rest}
      className={cn(s.bannerWrapper, { [s.withForm]: withForm }, className)}
    >
      <div className={cn(s.banner, { [s.withForm]: withForm })}>
        <h3 className={s.banner__heading}>{heading}</h3>
        <div className={s.banner__text}>
          <StructuredText data={text.value} />
        </div>
        {withForm ? (
          <RequestDemoForm
            variant="secondary"
            handleMessage={setMessage}
            className={s.banner__form}
          />
        ) : (
          <Button
            as="a"
            variant="secondary"
            href={buttonLink.url}
            rel={buttonLink.rel}
            target={buttonLink.target}
            className={s.banner__btn}
          >
            {buttonText}
          </Button>
        )}
        {notificationText && (
          <div
            className={cn(s.banner__notification, {
              [s.error]: message?.isError,
              [s.message]: message?.text,
            })}
          >
            {message?.text || <StructuredText data={notificationText.value} />}
          </div>
        )}
      </div>
    </Container>
  )
}

SectionBanner.defaultProps = {
  className: '',
}

SectionBanner.propTypes = {
  className: PropTypes.string,
}

export default SectionBanner
