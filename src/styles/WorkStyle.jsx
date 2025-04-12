import styled from "styled-components"

export const MyWorks = styled.div`
  padding-top: 5rem;
  position: relative;
  width: 100%;
  z-index: 20;

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

  .workSection {
    position: relative;
    z-index: 20;
    width: 100%;
    padding-bottom: 5rem;
  }

  .WorkBgText {
    position: absolute;
    top: 35px;
  }

  .workFooter {
    border: 1px solid transparent;
    width: 89%;
    margin: auto;
  }

  .myProject {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    // border: 1px solid green;
    // grid-gap: 1.5rem;

    &.myproject-works {
      .jrmCnS {
        // background-color: red;
      }
    }
  }

  .btnPro {
    border: 2px solid red;
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
