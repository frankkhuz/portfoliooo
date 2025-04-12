import React from "react"
import { BgTextStyle } from "../../styles/BgTextStyle"

function BgText({ text, classname }) {
  return (
    <BgTextStyle
      width="100%"
      height="75vh"
      overflow="hidden"
      className={classname}
    >
      <text y="55%" x="35%" className="myBgText">
        {text}
      </text>
    </BgTextStyle>
  )
}

export default BgText
