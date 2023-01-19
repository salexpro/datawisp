/* eslint-disable no-underscore-dangle */
import React from 'react'
import Card from './components/Card'
import CardColumns from './components/CardColumns'
import Image from './components/Image'
import ArticleTable from './components/ArticleTable'

export const renderBlock = ({ record }) => {
  switch (record.__typename) {
    case 'DatoCmsArticleImage':
      return (
        <Image
          image={record.image}
          caption={record.imageCaption}
          width={record.imageWidth}
          position={record.imagePosition}
          wrapping={record.textWrapping}
        />
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
