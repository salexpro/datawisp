import React from 'react'
import cn from 'classnames'
import { Accordion, Container } from 'react-bootstrap'
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
        {items.map((item) => (
          <Accordion.Item key={item.id} eventKey={item.id}>
            <Accordion.Header>{item.question}</Accordion.Header>
            <Accordion.Body>{item.answer}</Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </Container>
  )
}

SectionFaq.defaultProps = {
  className: '',
}

export default SectionFaq
