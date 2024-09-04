import React from 'react'
import PropTypes from 'prop-types'
import { Container } from 'react-bootstrap'
import Card from '~components/Card'

import * as s from './SectionAdvantages.module.scss'

const SectionAdvantages = (props) => {
  const { heading, text, items } = props

  return (
    <section id="advantages" className={s.advantages}>
      <Container>
        <div className={s.advantages_heading}>
          <h2>{heading}</h2>
          <p>{text}</p>
        </div>
        <div className={s.advantages_list}>
          {items.map((item) => (
            <Card key={item.id} {...item} variant="wide" />
          ))}
        </div>
      </Container>
    </section>
  )
}

SectionAdvantages.defaultProps = {
  className: '',
}

SectionAdvantages.propTypes = {
  className: PropTypes.string,
}

export default SectionAdvantages
