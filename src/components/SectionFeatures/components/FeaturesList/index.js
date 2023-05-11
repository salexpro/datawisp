import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'gatsby'
import { StructuredText } from 'react-datocms'
import PropTypes from 'prop-types'
import cn from 'classnames'

import CardFeature from './components/CardFeature'

import * as s from './FeaturesList.module.scss'

const FeaturesList = (props) => {
  const {
    heading,
    text,
    buttonText,
    buttonLink,
    buttonHide,
    featuresList,
    variant,
    className,
    ...rest
  } = props

  return (
    <div
      {...rest}
      className={cn(
        s.featuresList,
        { [s.buttonHidden]: buttonHide },
        { [s[variant]]: variant },
        className
      )}
    >
      <h2 className={s.heading}>{heading}</h2>
      <div className={s.text}>
        <StructuredText data={text.value} />
      </div>
      <div className={s.gridFeatures}>
        {featuresList?.map(({ id, ...item }) => (
          <CardFeature key={id} {...item} />
        ))}
      </div>
      {!buttonHide && (
        <Button
          variant="primary"
          as={Link}
          to={buttonLink}
          className={s.button}
        >
          {buttonText}
        </Button>
      )}
    </div>
  )
}

FeaturesList.defaultProps = {
  buttonText: '',
  buttonLink: '',
  className: '',
}

FeaturesList.propTypes = {
  heading: PropTypes.string.isRequired,
  text: PropTypes.object.isRequired,
  buttonText: PropTypes.string,
  buttonLink: PropTypes.string,
  featuresList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      heading: PropTypes.string,
      text: PropTypes.object,
      iconName: PropTypes.string,
    })
  ).isRequired,
  className: PropTypes.string,
}

export default FeaturesList
