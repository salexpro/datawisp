import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import cn from 'classnames'

import RouteURL from '~routes'

import FEATURES_LIST from './constants'
import ListItem from './components/ListItem'
import * as s from './FeaturesList.module.scss'

const FeaturesList = (props) => {
  const { className, ...rest } = props

  return (
    <div {...rest} className={cn(s.featuresList, className)}>
      <h2>Features</h2>
      <div>
        Datawisp comes packed with features to help everyone on your team work
        effectively with data and drive your business forward.
      </div>
      <div className={s.listWrapper}>
        {FEATURES_LIST.map((item) => (
          <ListItem key={item.heading} {...item} />
        ))}
      </div>
      <Button
        variant="primary"
        as={Link}
        to={RouteURL.BETA_APP}
        className={s.button}
      >
        Find out more
      </Button>
    </div>
  )
}

FeaturesList.defaultProps = {
  className: '',
}

FeaturesList.propTypes = {
  className: PropTypes.string,
}

export default FeaturesList
