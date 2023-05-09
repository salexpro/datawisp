import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useLocation } from '@reach/router'
import { Offcanvas, Button, Accordion } from 'react-bootstrap'
import cn from 'classnames'

import NavLink from '~components/Layout/components/NavLink'

import BtnAnimatedBurger from './components/BtnAnimatedBurger'

const MobileNavMenu = (props) => {
  const { btnLink, navItems, ...rest } = props
  const [showMenu, setShowMenu] = useState(false)
  const [activeAnchorLink, setActiveAnchorLink] = useState('')

  const { pathname, hash } = useLocation()

  const defaultActiveKey = navItems.find(
    ({ subLinks }) =>
      subLinks &&
      subLinks.some(
        ({ url, anchor }) =>
          url === pathname ||
          (activeAnchorLink ? anchor === activeAnchorLink : anchor === hash)
      )
  )?.id

  const handleShowMenu = () => setShowMenu((prev) => !prev)

  return (
    <div {...rest}>
      <BtnAnimatedBurger onClick={handleShowMenu} aria-expanded={showMenu} />

      <Offcanvas show={showMenu} placement="top" backdrop={false}>
        <Offcanvas.Body>
          <Button
            href={btnLink?.url}
            rel={btnLink?.rel}
            target={btnLink?.target}
            variant="primary"
          >
            {btnLink?.text}
          </Button>

          <Accordion defaultActiveKey={defaultActiveKey}>
            {navItems.map((link) => {
              return (
                <Accordion.Item key={link.id} eventKey={link.id}>
                  {link?.subLinks ? (
                    <>
                      <Accordion.Header>{link.text}</Accordion.Header>
                      <Accordion.Body>
                        {link.subLinks.map((subLink) => {
                          const isActive =
                            subLink?.url === pathname ||
                            (activeAnchorLink
                              ? subLink.anchor === activeAnchorLink
                              : subLink.anchor === hash)

                          return (
                            <NavLink
                              key={subLink.id}
                              {...subLink}
                              isSubLink
                              onClick={handleShowMenu}
                              onAnchorClick={setActiveAnchorLink}
                              className={cn('accordion-subLink', {
                                active: isActive,
                              })}
                            />
                          )
                        })}
                      </Accordion.Body>
                    </>
                  ) : (
                    <NavLink
                      {...link}
                      className="accordion-link"
                      onClick={handleShowMenu}
                    />
                  )}
                </Accordion.Item>
              )
            })}
          </Accordion>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  )
}

MobileNavMenu.defaultProps = {
  navItems: undefined,
  btnLink: undefined,
  className: undefined,
}

MobileNavMenu.propTypes = {
  navItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      text: PropTypes.string,
      url: PropTypes.string,
    })
  ),
  btnLink: PropTypes.shape({
    url: PropTypes.string,
    text: PropTypes.string,
  }),
  className: PropTypes.string,
}

export default MobileNavMenu
