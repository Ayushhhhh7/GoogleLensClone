import * as React from "react"
import Svg, { Path } from "react-native-svg"

const Home = ({ iconColor = "#CCC", ...props }) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill={iconColor}
    viewBox="0 -960 960 960"
    {...props}
  >
    <Path d="M160-200v-360l320-240 320 240v360H560v-240H400v240H160Z" />
  </Svg>
)

export default Home