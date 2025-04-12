import React from "react"
import Navbar from "../components/layouts/Navbar"
import Button from "../components/shared/Button"
import Footer from "../components/layouts/Footer"
import { MyNotFound } from "../styles/NotFoundStyle"
import { useNavigate } from "react-router-dom"

const NotFound = () => {
  const navigate = useNavigate()

  // Navigate to home
  const handleClick = () => {
    navigate("/")
  }

  return (
    <MyNotFound>
      <Navbar />
      <div className="pattern1"></div>
      <div className="pattern2"></div>
      <div className="pattern3"></div>
      <div class="xbox" data-char="404">
        404
        <div class="inside">404</div>
        <div class="inside2">404</div>
      </div>
      <p className="notFoundText">Sorry, there’s nothing here</p>
      <Button
        text={"Go Back Home"}
        classname="notFoundBtn"
        handleClick={handleClick}
      />
      <Footer classname="NotFoundFooter" />
    </MyNotFound>
  )
}

export default NotFound
