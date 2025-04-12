import React from "react"
import { NavLink as NavLinkReactRouterDom } from "react-router-dom"

const Link = function ({ to, children, className, ...props }) {
  return (
    <NavLinkReactRouterDom
      {...props}
      className={({ isActive }) =>
        [className, isActive ? "is-active" : null].filter(Boolean).join(" ")
      }
      to={to}
    >
      {children}
    </NavLinkReactRouterDom>
  )
}

export default Link
