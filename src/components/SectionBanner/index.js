/* eslint-disable no-nested-ternary */
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Container } from 'react-bootstrap'
import { StructuredText } from 'react-datocms'
import cn from 'clsx'

import RequestDemoForm from '~components/RequestDemoForm'
import ButtonGroup from '~components/ui/ButtonGroup'

import * as s from './SectionBanner.module.scss'

const SectionBanner = (props) => {
  const {
    heading,
    text,
    buttons,
    buttonText,
    buttonLink,
    withForm,
    notificationText,
    className,
    utm,
    ...rest
  } = props

  const [message, setMessage] = useState({ text: '', isError: false })

  return (
    <Container
      as="section"
      {...rest}
      className={cn(s.bannerWrapper, className)}
    >
      <div className={cn(s.banner, { [s.withForm]: withForm })}>
        <h3 className={s.banner__heading}>{heading}</h3>
        <div className={s.banner__text}>
          <StructuredText data={text.value} />
        </div>
        {withForm ? (
          <RequestDemoForm
            id="banner"
            variant="secondary"
            handleMessage={setMessage}
            className={s.banner__form}
          />
        ) : (
          buttons && (
            <ButtonGroup
              className={s.banner__btn}
              data={buttons}
              utm={utm}
              ctaId="cta"
            />
          )
        )}
        {notificationText && (
          <div
            className={cn(s.banner__notification, {
              [s.error]: message?.isError,
              [s.message]: message?.text,
            })}
          >
            {message?.text || notificationText?.value ? (
              <StructuredText data={notificationText.value} />
            ) : (
              notificationText
            )}
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
