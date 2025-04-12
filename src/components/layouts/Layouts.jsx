import React, { useContext, useEffect, useRef } from "react"
import Navbar from "./Navbar"
import PortfolioContext from "../../context/portfolio/PortfolioContext"
import MobileMenu from "./MobileMenu"
import Loading from "./Loading"
import { MyLayout } from "../../styles/LayoutStyle"
import { Outlet } from "react-router-dom"
import { useLocation } from "react-router-dom"
import { getProjects } from "../../context/portfolio/PortfolioActions"

const Layouts = () => {
  const location = useLocation()
  const path = location.pathname || ""

  const { menu, loading, dispatch } = useContext(PortfolioContext)
  const ref = useRef(path)

  useEffect(() => {
    const getprod = async () => {
      const { projects } = await getProjects()
      // console.log(projects)
      dispatch({ type: "GET_PROJECTS", payload: projects })
    }

    getprod()
  }, [dispatch])

  useEffect(() => {
    if (path) {
      dispatch({ type: "SET_LOADING", payload: true })
      dispatch({ type: "SET_MENU", payload: false })

      ref.current = path
    }
  }, [path, dispatch])

  useEffect(() => {
    if (ref.current === path) {
      setTimeout(() => {
        dispatch({ type: "SET_LOADING", payload: false })
      }, 3000)
    }
  }, [path, dispatch])

  return (
    <MyLayout>
      <Navbar />
      {menu && <MobileMenu />}
      {loading ? <Loading /> : <Outlet />}
    </MyLayout>
  )
}

export default Layouts
