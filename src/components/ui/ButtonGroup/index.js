import React from 'react'
import cn from 'clsx'
import { Link } from 'gatsby'
import { Button } from 'react-bootstrap'

import * as s from './ButtonGroup.module.scss'

const ButtonGroup = ({ data, utm, className }) => {
  return (
    <div className={cn('btn-group', s.buttongroup, className)}>
      {data.map(({ id, label, link, variant: v }) => {
        const isExternal = link?.internal?.type === 'DatoCmsLinkExternal'

        const linkProps = isExternal
          ? {
              as: 'a',
              href: `${link.url}${utm ? `?${utm}` : ''}`,
              target: '_blank',
            }
          : {
              as: Link,
              to: link?.url || link?.anchor,
            }

        return (
          <Button {...linkProps} variant={v} className={s.button} key={id}>
            {label}
          </Button>
        )
      })}
    </div>
  )
}

export default ButtonGroup
