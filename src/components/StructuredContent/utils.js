/* eslint-disable no-underscore-dangle */
import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

import Card from './components/Card'
import CardColumns from './components/CardColumns'

export const renderBlock = ({ record }) => {
  switch (record.__typename) {
    case 'DatoCmsArticleImage':
      return <GatsbyImage alt="hero" image={getImage(record.image)} />
    case 'DatoCmsArticleCard':
      return <Card content={record.content} />
    case 'DatoCmsArticleColumnsCard':
      return <CardColumns columns={record.columns} />
    default:
      return null
  }
}
