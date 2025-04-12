import styled from "styled-components"

export const MySkills = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.purple};
  position: relative;
  z-index: 10;
  display: flex;
  align-items: center;
  width: 18.75rem;
  height: 18.75rem;
  border-radius: 50%;
  background: transparent;
  margin: 50px auto;

  .skillsBorder1 {
    border: 1px solid ${({ theme }) => theme.colors.purple};
    position: absolute;
    top: 0.25rem;
    right: 0.25rem;
    left: 0.25rem;
    bottom: 0.25rem;
    border-radius: 50%;
  }

  .skillsBorder2 {
    border: 1px solid ${({ theme }) => theme.colors.purple};
    position: absolute;
    top: 1.5625rem;
    right: 1.5625rem;
    left: 1.5625rem;
    bottom: 1.5625rem;
    border-radius: 50%;
  }
  .aniIcon {
    width: 12.5rem;
    height: 12.5rem;
    display: flex;
    margin: auto;
    position: absolute;
    top: 1.5625rem;
    right: 1.5625rem;
    left: 1.5625rem;
    bottom: 1.5625rem;

    .imgIcon {
      padding-left: 15px;
      width: 100%;
      height: 100%;
    }
  }

  .jsLogo {
    position: absolute;
    top: 14px;
    left: 42px;
    width: 53.5px;
    height: 56px;
    animation: JavaScriptSpin 2s 1 linear;
    animation-fill-mode: forwards;
  }
  .cssLogo {
    width: 75px;
    height: 88px;
    position: absolute;
    top: 0;
    left: 200px;
    animation: CssSpin 2s 1 linear;
    animation-fill-mode: forwards;
  }
  .HtmlIcon {
    position: absolute;
    top: 220px;
    left: 0;
    width: 80px;
    height: 60px;
    animation: HtmlSpin 2s 1 linear;
    animation-fill-mode: forwards;
  }

  .ReactJs {
    position: absolute;
    top: 190px;
    left: 205px;
    width: 75px;
    height: 60px;
    animation: ReactSpin 2s 1 linear;
    animation-fill-mode: forwards;
  }

  @media ${({ theme }) => theme.mediaQueries.above768} {
  }
  @media ${({ theme }) => theme.mediaQueries.medium} {
    margin: unset;
  }

  @keyframes ReactSpin {
    50% {
      transform: translate3D(35px, -70px, 0);
    }

    100% {
      transform: translate3D(-85px, -205px, 10px);
    }
  }

  @keyframes HtmlSpin {
    50% {
      transform: translate3D(120px, 40px, 0);
    }

    100% {
      transform: translate3D(245px, -100px, 10px);
    }
  }
  @keyframes JavaScriptSpin {
    50% {
      transform: translate3D(-60px, 110px, 0);
    }

    100% {
      transform: translate3D(89px, 240px, 0);
    }
  }
  @keyframes CssSpin {
    50% {
      transform: translate3D(-85px, -30px, 0);
    }

    100% {
      transform: translate3D(-220px, 108px, 0);
    }
  }
`
