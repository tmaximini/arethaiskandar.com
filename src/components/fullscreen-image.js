import styled from "styled-components"

const defaultProps = {
  isActive: false,
}

const FullScreenImage = styled("div")`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  opacity: ${props => (props.isActive ? 1 : 0)};
  transition: all 1s ease 1s;
  > div {
    position: absolute !important;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
  > div img {
    transition: all 0.3s ease 0s !important;
  }
`

export default FullScreenImage
