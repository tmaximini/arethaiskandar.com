import styled from "styled-components"

const FullScreenImage = styled("div")`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  opacity: ${props => (props.isActive ? 1 : 0)};
  transition: ${props => props.isFirst ? 'opacity 0.5s ease' : 'opacity 1s ease 0.5s'};
  background-color: #000;
  
  > div {
    position: absolute !important;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
  
  > div img {
    transition: all 0.3s ease 0s !important;
    width: 100% !important;
    height: 100% !important;
    object-fit: cover !important;
  }
`

export default FullScreenImage
