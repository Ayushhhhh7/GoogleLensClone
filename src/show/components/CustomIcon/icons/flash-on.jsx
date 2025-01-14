import * as React from "react"
import Svg, { Path } from "react-native-svg"

const FlashOn = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="#CCC"
    viewBox="0 -960 960 960"
    {...props}
  >
    <Path d="m480-336 128-184H494l80-280H360v320h120v144ZM400-80v-320H280v-480h400l-80 280h160L400-80Zm80-400H360h120Z" />
  </Svg>
)
export default FlashOn
