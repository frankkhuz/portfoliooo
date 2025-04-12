import React from "react"
import { ProjectItemStyle } from "../../styles/ProjectItemStyle"
import Skeleton from "react-loading-skeleton"

const CardSkeleton = ({ cards, cardWidth }) => {
  return Array(cards)
    .fill(0)
    .map((item, index) => (
      <ProjectItemStyle
        key={index}
        style={{
          width: cardWidth,
        }}
      >
        <section className="projectContainer">
          <div className="projectBg">
            <Skeleton height={180} />
          </div>
          <div className="projectSummary">
            <p className="projectTitle">
              <Skeleton />
            </p>
            <div className="skillsTag"></div>
            <p className="projectDescription">
              <Skeleton count={4} />
            </p>
            <div className="projectLinks">
              <div>
                <Skeleton width={80} height={20} />
              </div>
              <div>
                <Skeleton width={80} height={20} />
              </div>
            </div>
          </div>
        </section>
      </ProjectItemStyle>
    ))
}

export default CardSkeleton
