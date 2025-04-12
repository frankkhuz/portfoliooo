import styled from "styled-components"

export const MyNotFound = styled.div`
  position: relative;
  width: 100%;
  z-index: 20;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100vh;
  overflow: hidden;

  .pattern1 {
    background: ${({ theme }) => theme.colors.barColor};
    position: absolute;
    z-index: 10;
    height: 13rem;
    width: 100%;
    transform: skewY(-35deg);
    left: 0;
    right: 0;
    top: 12.4rem;
  }

  .pattern2 {
    background: ${({ theme }) => theme.colors.barColor};
    position: absolute;
    z-index: 10;
    height: 13rem;
    width: 100%;
    transform: skewY(-35deg);
    left: 0;
    right: 0;
    top: 30rem;
  }
  .pattern3 {
    position: absolute;
    background: ${({ theme }) => theme.colors.barColor};
    z-index: 10;
    height: 13rem;
    width: 100%;
    transform: skewY(35deg);
    left: 0;
    right: 0;
    top: 30rem;
  }

  .xbox {
    font-size: 17rem;
    position: relative;
    text-shadow: 0px 0px 5px ${({ theme }) => theme.colors.purple};
    color: ${({ theme }) => theme.colors.barColor};
    font-family: Chivo;
    font-style: normal;
    font-weight: 900;
    z-index: 99;
    top: 0;
  }

  .xbox .inside {
    font-size: 17rem;
    color: ${({ theme }) => theme.colors.purple};
    background-clip: text;
    -webkit-background-clip: text;
    text-fill-color: ${({ theme }) => theme.colors.purple};
    -webkit-text-fill-color: ${({ theme }) => theme.colors.purple};
    text-shadow: none;
    top: -1%;
    left: -1%;
    position: absolute;
    z-index: 99;
  }

  .inside2 {
    font-size: 17rem;
    color: ${({ theme }) => theme.colors.lightColor};
    background-clip: text;
    -webkit-background-clip: text;
    text-fill-color: ${({ theme }) => theme.colors.lightColor};
    -webkit-text-fill-color: ${({ theme }) => theme.colors.lightColor};
    text-shadow: none;
    top: -3%;
    left: -2.3%;
    position: absolute;
    z-index: 99;
  }

  .notFoundText {
    position: relative;
    z-index: 20;
  }
  .notFoundBtn {
    margin-top: 10px;
  }

  .NotFoundFooter {
    position: absolute;
    bottom: 10px;
    width: 89%;
    margin: auto;
  }

  @media ${({ theme }) => theme.mediaQueries.below768} {
    .xbox {
      font-size: 10rem;
    }
    .xbox .inside {
      font-size: 10rem;
    }
    .inside2 {
      font-size: 10rem;
    }
  }

  @media ${({ theme }) => theme.mediaQueries.medium} {
    .pattern1 {
      top: 12rem;
      transform: skewY(-15.5deg);
      height: 13rem;
    }
    .pattern2 {
      top: 32.5rem;
      transform: skewY(-15.5deg);
      height: 13rem;
    }
    .pattern3 {
      top: 32.5rem;
      transform: skewY(15.5deg);
      height: 13rem;
    }
  }

  @media ${({ theme }) => theme.mediaQueries.large} {
    .pattern1 {
      top: 14.3rem;
      transform: skewY(-14deg);
    }
    .pattern2 {
      top: 36rem;
      transform: skewY(-14deg);
    }
    .pattern3 {
      top: 36.5rem;
      transform: skewY(14deg);
    }
  }
  @media (min-width: 481px) and (max-width: 1023px) {
    .pattern1 {
      height: 12rem;
      transform: skewY(-17deg);
    }
    .pattern2 {
      height: 12rem;
      transform: skewY(-17deg);
      top: 32rem;
    }
    .pattern3 {
      height: 12rem;
      transform: skewY(17deg);
      top: 32rem;
    }
  }
`
