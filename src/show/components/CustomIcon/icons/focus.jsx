import * as React from "react"
import Svg, { Path } from "react-native-svg"

const Focus = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={600}
    height={600}
    viewBox="0 0 500 500"
    {...props}
  >
    <Path
      fill="none"
      strokeOpacity={0.6}
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={2.613}
      strokeWidth={1}
      d="M150 200 Q150 150 200 150 M300 150 Q350 150 350 200 M350 300 Q350 350 300 350 M200 350 Q150 350 150 300"
    />
  </Svg>

)
export default Focus
