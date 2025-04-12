import styled from "styled-components"

export const SuccessPage = styled.div`
  background: rgba(0, 0, 0, 0.55);
  height: 100vh;
  padding-top: 6rem;

  .successContainer {
    background-color: ${({ theme }) => theme.colors.dark};
    width: 80%;
    margin: auto;
    padding: 25px;
    border-radius: 10px;
  }

  .closeIcon {
    float: right;
    font-size: 22px;
    margin-top: -8px;
    cursor: pointer;
  }

  .success-checkmark {
    width: 90%;
    margin: 30px auto;
    background-color: ${({ theme }) => theme.colors.dark};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .check-icon {
    width: 80px;
    height: 80px;
    position: relative;
    border-radius: 50%;
    box-sizing: content-box;
    border: 4px solid #4caf50;
  }
  .check-icon::before {
    top: 3px;
    left: -2px;
    width: 30px;
    transform-origin: 100% 50%;
    border-radius: 100px 0 0 100px;
  }
  .check-icon::after {
    top: 0;
    left: 30px;
    width: 60px;
    transform-origin: 0 50%;
    border-radius: 0 100px 100px 0;
    animation: rotate-circle 4.25s ease-in;
  }

  .check-icon::before,
  .check-icon::after {
    content: "";
    height: 100px;
    position: absolute;
    background: ${({ theme }) => theme.colors.dark};
    transform: rotate(-45deg);
  }
  .icon-line {
    height: 5px;
    background-color: #4caf50;
    display: block;
    border-radius: 2px;
    position: absolute;
    z-index: 10;
  }
  .line-tip {
    top: 46px;
    left: 14px;
    width: 25px;
    transform: rotate(45deg);
    animation: icon-line-tip 0.75s;
  }
  .line-long {
    top: 38px;
    right: 8px;
    width: 47px;
    transform: rotate(-45deg);
    animation: icon-line-long 0.75s;
  }

  .icon-circle {
    /* border: 2px solid red; */
    top: -4px;
    left: -4px;
    z-index: 10;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    position: absolute;
    box-sizing: content-box;
    border: 4px solid rgba(76, 175, 80, 0.5);
  }
  .icon-fix {
    top: 8px;
    width: 5px;
    left: 26px;
    z-index: 1;
    height: 85px;
    position: absolute;
    transform: rotate(-45deg);
    background-color: ${({ theme }) => theme.colors.dark};
  }

  .successText {
    // font-family: "lato";
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    line-height: 42px;
    display: flex;
    align-items: center;
    color: #27ae60;
    margin-top: 1rem;
  }

  .voteSuccessful {
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 30px;
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.colors.textColor};
  }

  /* Success Animation */
  @keyframes rotate-circle {
    0% {
      transform: rotate(-45deg);
    }
    5% {
      transform: rotate(-45deg);
    }
    12% {
      transform: rotate(-405deg);
    }
    100% {
      transform: rotate(-405deg);
    }
  }

  @keyframes icon-line-tip {
    0% {
      width: 0;
      left: 1px;
      top: 19px;
    }
    54% {
      width: 0;
      left: 1px;
      top: 19px;
    }
    70% {
      width: 50px;
      left: -8px;
      top: 37px;
    }
    84% {
      width: 17px;
      left: 21px;
      top: 48px;
    }
    100% {
      width: 25px;
      left: 14px;
      top: 45px;
    }
  }

  @keyframes icon-line-long {
    0% {
      width: 0;
      right: 46px;
      top: 54px;
    }
    65% {
      width: 0;
      right: 46px;
      top: 54px;
    }
    84% {
      width: 55px;
      right: 0px;
      top: 35px;
    }
    100% {
      width: 47px;
      right: 8px;
      top: 38px;
    }
  }

  @media (min-width: 56.875rem) {
    .successContainer {
      width: 50%;
    }
  }

  @media (min-width: 70.875rem) {
    .successContainer {
      width: 35%;
    }
  }
`
