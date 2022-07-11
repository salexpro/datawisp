import React from 'react'
import { Button, Container } from 'react-bootstrap'

import Layout from '~components/Layout'
import S from '~components/seo'

import * as s from './Homepage.module.scss'

const Homepage = (props) => {
  // eslint-disable-next-line react/prop-types
  const { datoCmsData, ...rest } = props

  return (
    <Layout {...rest}>
      <S title="Home" />
      <Container className={s.container}>
        <h1>Discover Gems in Your Data</h1>
        <p>
          Pre-packaged analytics can only get you so far. If you want valuable
          insights about your game, defi protocol, or whatever it is you&apos;re
          building, you need to get your hands dirty. Luckily, Datawisp is here
          to help.
        </p>
        <div className="btn-group">
          <Button variant="primary">Get Started</Button>
          <Button variant="outline-secondary">Learn more</Button>
        </div>
      </Container>
    </Layout>
  )
}

export default Homepage
