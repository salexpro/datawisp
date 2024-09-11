import React from 'react'
import cn from 'classnames'
import { Accordion, Container } from 'react-bootstrap'
import { StructuredText } from 'react-datocms'
import { Link } from '@gatsbyjs/reach-router'
import * as s from './SectionFaq.module.scss'

const SectionFaq = (props) => {
  const { heading, items } = props

  return (
    <Container as="section" id="faq" className={s.faq}>
      <h2 className={s.faq_heading}>{heading}</h2>

      <Accordion
        defaultActiveKey={items[0].id}
        className={cn('accordion--faq', s.faq_list)}
      >
        {items.map(({ id, question, answer }) => (
          <Accordion.Item key={id} eventKey={id}>
            <Accordion.Header>{question}</Accordion.Header>
            <Accordion.Body>
              <StructuredText
                data={answer}
                renderLinkToRecord={({
                  record: { category, slug, __typename },
                  children,
                }) => {
                  switch (__typename) {
                    case 'DatoCmsArticle':
                      return (
                        <Link
                          to={`/${category?.slug === 'case-studies' ? category.slug : 'blog'}/${slug}`}
                        >
                          {children}
                        </Link>
                      )
                    default:
                      return null
                  }
                }}
              />
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </Container>
  )
}

SectionFaq.defaultProps = {}

export default SectionFaq
