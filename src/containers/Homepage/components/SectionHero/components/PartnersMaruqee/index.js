import React from 'react'
import PropTypes from 'prop-types'
import Marquee from 'react-fast-marquee'
import cn from 'classnames'

import PartnerItem from './components/PartnerItem'

const PartnersMarquee = (props) => {
  const { partners, className, ...rest } = props

  const PartnersData = Array(8)
    .fill(partners)
    .flat(1)
    .map(({ id, ...item }, index) => ({ ...item, id: `${id}-${index}` }))

  return (
    <div {...rest} className={cn('marquee-wrapper', className)}>
      <Marquee gradient={false} speed={32} direction="left">
        {PartnersData.map(({ id, title, logoImage }) => (
          <PartnerItem key={id} name={title} file={logoImage} />
        ))}
      </Marquee>
    </div>
  )
}

PartnersMarquee.defaultProps = {
  className: undefined,
}

PartnersMarquee.propTypes = {
  partners: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      logoImage: PropTypes.object,
    })
  ).isRequired,
  className: PropTypes.string,
}

export default PartnersMarquee
