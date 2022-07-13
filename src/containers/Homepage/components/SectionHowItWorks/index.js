import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import { Button, Container } from 'react-bootstrap'
import { graphql, Link, useStaticQuery } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import { Swiper, SwiperSlide } from 'swiper/react'

import RouteURL from '~routes'
import getImgWithBlurHash from '~utils/getImgWithBlurHash'

import { StepsData } from './mocks'
import CardStep from './components/CardStep'

import * as s from './SectionHowItWorks.module.scss'

const SectionHowItWorks = (props) => {
  const { className, ...rest } = props

  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "img/howItWorks/main.png" }) {
        id
        relativePath
        childImageSharp {
          gatsbyImageData(
            quality: 80
            width: 992
            formats: [JPG, WEBP, AVIF]
            placeholder: NONE
            sizes: "(max-width: 767.98px) calc(100vw - 24px * 2), (max-width: 1439.98px) calc((100vw - 40px * 2) * 0.8), 992px"
            breakpoints: [327, 550, 654, 992, 1100, 1308, 1488, 1650, 1984]
          )
        }
      }
      allFile(
        filter: { relativeDirectory: { eq: "img/howItWorks/steps" } }
        sort: { fields: base, order: ASC }
      ) {
        nodes {
          base
          childImageSharp {
            gatsbyImageData(
              quality: 80
              width: 352
              formats: [AUTO, WEBP, AVIF]
              placeholder: NONE
              sizes: "(max-width: 767.98px) 37vw, (max-width: 1023.98px) 197px, (max-width: 1199.98px) 281px, 352px"
              breakpoints: [135, 270, 352, 405, 480, 540, 644, 704, 966]
            )
            blurHash {
              base64Image
            }
          }
        }
      }
    }
  `)

  const StepsDataWImg = StepsData.map((step, index) => ({
    ...step,
    file: data?.allFile?.nodes[index],
  }))

  return (
    <section {...rest} className={cn(s.sectionHowItWorks, className)}>
      <Container>
        <div className={s.gridHeading}>
          <h2 className={s.heading}>How it Works</h2>
          <p className={s.paragraph}>
            No code, no problem. Learning code shouldn’t be a requirement to
            working with and better understanding data. With Datawisp, anyone on
            your team can easily find the information they’re looking for and
            use it to make smarter decisions. Spend less time looking at
            dashboards and more time taking ownership of your data.
          </p>
          <Button
            variant="primary"
            className={s.btn}
            as={Link}
            to={RouteURL.HOW_IT_WORKS}
          >
            Learn more
          </Button>
        </div>
        <div className={s.imgWrapper}>
          <GatsbyImage
            alt="app"
            image={getImgWithBlurHash(data.file)}
            className={s.img}
          />
          <div className={s.gridSteps}>
            {StepsDataWImg.map(({ id, text, file }, index) => (
              <CardStep
                stepNumber={index + 1}
                key={id}
                text={text}
                file={file}
              />
            ))}
          </div>
          <Swiper spaceBetween={16} slidesPerView={2.1} className={s.swiper}>
            {StepsDataWImg.map(({ id, text, file }, index) => (
              <SwiperSlide key={id}>
                <CardStep stepNumber={index + 1} text={text} file={file} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </section>
  )
}

SectionHowItWorks.defaultProps = {
  className: undefined,
}

SectionHowItWorks.propTypes = {
  className: PropTypes.string,
}

export default SectionHowItWorks
