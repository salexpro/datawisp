import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { Container } from 'react-bootstrap'
import { StructuredText } from 'react-datocms'

import * as s from './SectionProblem.module.scss'

const renderBlock = ({ record }) => {
  // eslint-disable-next-line no-underscore-dangle
  switch (record.__typename) {
    case 'DatoCmsArticleImage':
      return (
        <GatsbyImage
          alt={record.image.alt || record.image.basename}
          image={getImage(record.image)}
        />
      )
    // case 'DatoCmsArticleCard':
    //   return <Card content={record.content} />
    // case 'DatoCmsArticleColumnsCard':
    //   return <CardColumns columns={record.columns} />
    // case 'DatoCmsArticleTable':
    //   return (
    //     <ArticleTable caption={record.tableCaption} rows={record.tableRows} />
    //   )
    // case 'DatoCmsArticleHtmlEmbed':
    //   return <div dangerouslySetInnerHTML={{ __html: record.htmlEmbed }} />
    default:
      return null
  }
}

const SectionProblem = ({ content }) => {
  return (
    <Container as="section" className={s.section}>
      <div className={s.inner}>
        <StructuredText data={content} renderBlock={renderBlock} />
      </div>
    </Container>
  )
}

export default SectionProblem
