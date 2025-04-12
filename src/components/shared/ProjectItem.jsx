import React from "react"
import Skeleton from "react-loading-skeleton"
import "react-loading-skeleton/dist/skeleton.css"
import { FiGithub, FiExternalLink } from "react-icons/fi"
import { ProjectItemStyle } from "../../styles/ProjectItemStyle"

const ProjectItem = ({
  project,
  title,
  description,
  projectImg,
  cardWidth,
  projectRepo,
  projectDemo,
}) => {
  return (
    <ProjectItemStyle
      className="my-project-cards"
      primary={true}
      style={{
        width: cardWidth,
      }}
    >
      <section className="projectContainer">
        <div
          className="projectBg"
          style={{
            backgroundImage: `url(${projectImg})`,
          }}
        ></div>
        <div className="projectSummary">
          <p className="projectTitle">{title || <Skeleton />}</p>
          <div className="skillsTag"></div>
          <p className="projectDescription">
            {description || <Skeleton count={5} />}
          </p>
          <div className="projectLinks">
            <a
              className="socialLink"
              href={projectRepo}
              target="_blank"
              rel="noreferrer"
            >
              <button className="projectItemBtn">
                Repo
                <FiGithub />
              </button>
            </a>

            <a
              className="socialLink"
              href={projectDemo}
              target="_blank"
              rel="noreferrer"
            >
              <button className="projectItemBtn">
                Live Link
                <FiExternalLink />
              </button>
            </a>
          </div>
        </div>
      </section>
    </ProjectItemStyle>
  )
}
export default ProjectItem
