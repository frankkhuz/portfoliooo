/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useContext } from "react"
import ProjectItem from "../shared/ProjectItem"
import Flickity from "react-flickity-component"
import PortfolioContext from "../../context/portfolio/PortfolioContext"
import CardSkeleton from "../shared/CardSkeleton"
import { MySlider } from "./CarouselStyle"

const Carousel = (props) => {
  let flkty
  let [carouselIndex, setCarouselIndex] = useState(null)

  const { projects } = useContext(PortfolioContext)
  console.log(projects)

  const handleChange = (index) => {
    setCarouselIndex(index) // Not working
  }

  useEffect(() => {
    if (flkty) {
      flkty.on("settle", () => {})

      flkty.on("change", (index) => {
        handleChange(index)
      })
    }
  }, [carouselIndex])

  return (
    <MySlider>
      <Flickity
        flickityRef={(c) => (flkty = c)}
        options={{
          initialIndex: props.initialIndex,
          cellAlign: "left",
          contain: true,
          autoPlay: true,
          draggable: ">1",
          freeScroll: false,
          pageDots: true,
          prevNextButtons: true,
          resize: true,
          watchCSS: false,
          wrapAround: false,
        }}
      >
        {projects.length === undefined ? (
          <CardSkeleton cards={4} cardWidth="340px" />
        ) : (
          projects.map((project, index) => {
            return (
              <ProjectItem
                key={index}
                project={project.fields}
                projectImg={project.fields.avatar.fields.file.url}
                title={project.fields.title}
                description={project.fields.description}
                projectRepo={project.fields.repoLink}
                projectDemo={project.fields.liveLink}
                cardWidth="340px"
              />
            )
          })
        )}
      </Flickity>
    </MySlider>
  )
}

export default Carousel
