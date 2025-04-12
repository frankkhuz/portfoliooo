import React, { useState } from "react"
import { FaTimes } from "react-icons/fa"
import { SuccessPage } from "../styles/SuccessStyle"

const Success = () => {
  const [CloseModal, setCloseModal] = useState(true)

  return (
    <SuccessPage>
      <div className="successContainer">
        <div className="closeIcon">
          <FaTimes onClick={() => setCloseModal(false)} />
        </div>
        <div className="success-checkmark">
          <div className="check-icon">
            <span className="icon-line line-tip"></span>
            <span className="icon-line line-long"></span>
            <div className="icon-circle"></div>
            <div className="icon-fix"></div>
          </div>
          <p className="successText">success</p>
          <p className="voteSuccessful">Message sent successfully</p>
        </div>
      </div>
    </SuccessPage>
  )
}
export default Success
