import * as React from "react"
import Svg, { Path } from "react-native-svg"

const More = ({ iconColor = "#CCC", ...props }) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill={iconColor}
    viewBox="0 -960 960 960"
    {...props}
  >
    <Path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
  </Svg>
)

export default More