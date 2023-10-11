import React from 'react'
import PropTypes from 'prop-types'
import Marquee from 'react-fast-marquee'
import cn from 'clsx'

import PartnerItem from './components/PartnerItem'

const PartnersMarquee = (props) => {
  const { partners, className, ...rest } = props

  return (
    <div {...rest} className={cn('marquee-wrapper', className)}>
      <Marquee gradient={false} speed={32} direction="left">
        {partners.map(({ id, title, logoImage }) => (
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
