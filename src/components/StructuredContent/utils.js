/* eslint-disable no-underscore-dangle */
import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

import Card from './components/Card'
import CardColumns from './components/CardColumns'
import ArticleTable from './components/ArticleTable'

export const renderBlock = ({ record }) => {
  switch (record.__typename) {
    case 'DatoCmsArticleImage':
      return (
        <figure>
          <GatsbyImage alt="hero" image={getImage(record.image)} />
          {record.imageCaption && (
            <figcaption>{record.imageCaption}</figcaption>
          )}
        </figure>
      )
    case 'DatoCmsArticleCard':
      return <Card content={record.content} />
    case 'DatoCmsArticleColumnsCard':
      return <CardColumns columns={record.columns} />
    case 'DatoCmsArticleTable':
      return (
        <ArticleTable caption={record.tableCaption} rows={record.tableRows} />
      )
    default:
      return null
  }
}
