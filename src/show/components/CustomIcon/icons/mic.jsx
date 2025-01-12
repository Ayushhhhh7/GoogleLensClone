import * as React from "react"
import Svg, { Path } from "react-native-svg"

const Mic = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="#fff"
    viewBox="0 -960 960 960"
    {...props}
  >
    <Path d="M480-423q-43 0-72-30.917-29-30.916-29-74V-767q0-41.667 29.441-70.833Q437.882-867 479.941-867T551-837.833q29 29.167 29 70.833v239.083q0 43.084-29 74Q523-423 480-423Zm-40 303v-107q-104-14-172-93t-68-184h80q0 83 58.5 141.5T480-304q83 0 141.5-58.5T680-504h80q0 105-68 184t-172 93v107h-80Z" />
  </Svg>
)
export default Mic
