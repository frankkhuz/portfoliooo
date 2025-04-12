import styled from "styled-components"

export const BgTextStyle = styled.svg`
  position: absolute;
  z-index: 20;

  text {
    font-size: 22rem;
    font-family: chivo;
    stroke-width: 1px;
    fill: transparent;
    stroke: #7151b6;
    letter-spacing: 4px;
    animation: effect 6s infinite alternate;
    z-index: 20;
    opacity: 0.4;
  }

  @keyframes effect {
    0% {
      stroke-dasharray: 100% 40%;
    }
    100% {
      stroke-dasharray: 40% 0%;
      stroke-dashoffset: 40%;
    }
  }
  @media ${({ theme }) => theme.mediaQueries.below768} {
    text {
      font-size: 17rem;
    }
  }
`
