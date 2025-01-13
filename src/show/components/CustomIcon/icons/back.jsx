import * as React from "react"
import Svg, { Path } from "react-native-svg"

const Back = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={28}
    height={28}
    fill="#CCC"
    viewBox="0 -960 960 960"
    {...props}
  >
    <Path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z" />
  </Svg>
)
export default Back
