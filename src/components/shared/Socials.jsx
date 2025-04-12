import React, { useState } from "react"
import { SocialHandle } from "../../styles/SocialStyle"
import { FaMapMarkerAlt } from "react-icons/fa"

const Socials = ({ mediaLink, myHandle, classname }) => {
  const [iconOpen, setIconOpen] = useState(false)

  return (
    <SocialHandle className={classname}>
      <FaMapMarkerAlt
        className={iconOpen ? "scale" : "location"}
        onClick={(e) => setIconOpen(!iconOpen)}
      />

      {iconOpen && (
        <button className={iconOpen ? "slideIn" : "mediaBtn"}>
          <a
            className="socialLinks"
            href={mediaLink}
            target="_blank"
            rel="noreferrer"
          >
            {myHandle}
          </a>
        </button>
      )}
    </SocialHandle>
  )
}

export default Socials
