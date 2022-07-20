import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'gatsby'
import { StructuredText } from 'react-datocms'
import PropTypes from 'prop-types'
import cn from 'classnames'

import ListItem from './components/ListItem'
import * as s from './FeaturesList.module.scss'

const FeaturesList = (props) => {
  const {
    heading,
    text,
    buttonText,
    buttonLink,
    featuresList,
    className,
    ...rest
  } = props

  return (
    <div {...rest} className={cn(s.featuresList, className)}>
      <h2>{heading}</h2>
      <StructuredText data={text.value} />
      <div className={s.listWrapper}>
        {featuresList?.map(({ id, ...item }) => (
          <ListItem key={id} {...item} />
        ))}
      </div>
      <Button variant="primary" as={Link} to={buttonLink} className={s.button}>
        {buttonText}
      </Button>
    </div>
  )
}

FeaturesList.defaultProps = {
  className: '',
}

FeaturesList.propTypes = {
  heading: PropTypes.string.isRequired,
  text: PropTypes.object.isRequired,
  buttonText: PropTypes.string.isRequired,
  buttonLink: PropTypes.string.isRequired,
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
