import React from 'react'
import { Container } from 'react-bootstrap'

import * as s from './SectionQuote.module.scss'

const SectionQuote = ({ text, author, cite }) => {
  return (
    <section className={s.section}>
      <Container className={s.inner}>
        <blockquote className={s.quote}>
          <p className={s.quote__text}>{text}</p>
          {author && (
            <footer className={s.quote__footer}>
              <strong className={s.quote__author}>{author}</strong>
              {cite && <cite className={s.quote__cite}>{cite}</cite>}
            </footer>
          )}
        </blockquote>
      </Container>
    </section>
  )
}

export default SectionQuote
