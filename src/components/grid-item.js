import styled from "styled-components"
import { Link } from "gatsby"

const GridItem = styled(Link)`
  position: relative;
  padding: 10px;

    height: 300px;
    width: 300px;

  > div {
    position: absolute !important;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
  > div img {
    transition: all 0.3s ease 0s !important;
    &:hover {
        transform: scale3d(1.1, 1.1, 1);
    }
  }
  > span {
    z-index: 10;
    color: white;
    position: absolute;
    left: 0;
    right: 0;
    text-align: right;
    font-weight: 700;
    font-size: "1.728rem;
    padding: 1.5rem;
    text-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);

    @media (max-width: 1000px) {
      font-size: 1.728rem;
      padding: 1rem;
    }
  }
  &:hover {
    > div img {
      transform: scale(1.1);
    }
  }
`

export default GridItem
