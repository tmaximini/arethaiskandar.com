import styled from "styled-components"

const GridItem = styled.article`
  position: relative;

  height: 50%;
  width: 100%;
  overflow: hidden;

  @media screen and (min-width: 53em) {
    width: 50%;
  }

  @media screen and (min-width: 100em) {
    width: 33.33333%;
  }

  > div {
    position: absolute !important;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
  > div img {
    transition: all 0.3s ease 0s !important;
    max-width: 100%;
    &:hover {
      transform: ${props => (props.noEffect ? "none" : "scale3d(1.1, 1.1, 1)")};
    }
  }

  .table {
    display: table;
    height: 100%;
    width: 100%;
    text-align: center;

    z-index: 1;
    &:before {
      width: 100%;
      height: 100%;
      position: absolute;
      background-color: rgba(0, 0, 0, 0.33);
      content: "";
      left: 0;
      top: 0;
      display: none;
      z-index: 0;
    }
  }

  .table--inner {
    vertical-align: middle;
    display: table-cell;
    background-color: var(--color-text);
    p {
      color: var(--color-bg);
      padding: 20px;
    }
  }

  .table:hover::before {
    display: ${props => (props.noEffect ? "none" : "block")};
  }

  .vert-center {
    opacity: 0;
    vertical-align: middle;
    position: relative;
    transition: all 0.3s ease 0s !important;
    transform: translateY(5px);
    display: table-cell;
  }

  .table:hover .vert-center {
    opacity: 1;
    transform: translateY(-10px);
  }

  .show-gallery {
    padding: 10px 20px;
    border: 1px solid;
  }

  h2 {
    transition: all 320ms cubic-bezier(0.165, 0.84, 0.44, 1) 0ms;
    font-weight: 200;
    z-index: 10;
  }

  &:hover {
    > div img {
      transform: ${props => (props.noEffect ? "none" : "scale(1.1)")};
    }
  }
`

export default GridItem
