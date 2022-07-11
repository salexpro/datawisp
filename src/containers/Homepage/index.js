import React from 'react'
import { Container } from 'react-bootstrap'

import Layout from '~components/Layout'
import S from '~components/seo'

import * as s from './Homepage.module.scss'

const Homepage = (props) => {
  // eslint-disable-next-line react/prop-types
  const { datoCmsData, ...rest } = props

  return (
    <Layout {...rest}>
      <Container className={s.container}>
        <S title="Home" />
        <h1>Discover Gems in Your Data2</h1>
        <p>
          Pre-packaged analytics can only get you so far. If you want valuable
          insights about your game, defi protocol, or whatever it is you&apos;re
          building, you need to get your hands dirty. Luckily, Datawisp is here
          to help.
        </p>
      </Container>
    </Layout>
  )
}

export default Homepage
