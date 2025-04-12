import React from "react"
import styled, { keyframes } from "styled-components"

const pulseTop = keyframes`
0% {
  top: -5px;
    }
100% {
top: calc(-5px + 20%);
    }
`
const pulseBottom = keyframes`
0% {
  bottom: -5px;
    }
100% {
  bottom:  calc(-5px + 20%);
    }
`

const pulseLeft = keyframes`
0% {
  left: 0;
    }
100% {
  left: 20%;
    }
`
const pulseRight = keyframes`
0% {
  right: 0;
    }
100% {
  right:  20%;
    }
`

const pulseAlphaD = keyframes`
0%{
  transform: scale(1);
}

100%{
  transform: scale(1.5)
}
`

const load = keyframes`
0% { 
  width: 0%; 
}

25%{
  width: 35%; 

}
75% {
  width: 70%; 

}
  100% { 
    width: 100%; 
  }
`

const LoadSection = styled.div`
  background-color: ${({ theme }) => theme.colors.dark};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99;

  .loadBoxContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 130px;
    height: 115px;
    margin: auto;
    position: relative;
  }

  .loadingImg {
    height: 100%;
    width: 100%;
    position: relative;
  }

  .vector-left {
    color: ${({ theme }) => theme.colors.purple};
    border: 3.5px solid ${({ theme }) => theme.colors.purple};
    width: 40px;
    height: 40px;
    border-right: none;
    border-top: none;
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%) rotate(45deg);
    animation: ${pulseLeft} 1.7s ease-in-out infinite;
    animation-fill-mode: both;
  }
  .vector-top {
    border: 3.5px solid ${({ theme }) => theme.colors.purple};
    width: 40px;
    height: 40px;
    border-bottom: none;
    border-right: none;
    position: absolute;
    top: -5spx;
    left: 50%;
    transform: translateX(-50%) rotate(45deg);
    animation: ${pulseTop} 1.7s ease-in-out infinite;
    animation-fill-mode: both;
  }
  .vector-right {
    border: 3.5px solid ${({ theme }) => theme.colors.purple};
    width: 40px;
    height: 40px;
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%) rotate(45deg);
    border-left: none;
    border-bottom: none;
    animation: ${pulseRight} 1.7s ease-in-out infinite;
    animation-fill-mode: both;
  }
  .vector-bottom {
    border: 3.5px solid ${({ theme }) => theme.colors.purple};
    width: 40px;
    height: 40px;
    border-top: none;
    border-left: none;
    position: absolute;
    bottom: -5px;
    left: 50%;
    transform: translateX(-50%) rotate(45deg);
    animation: ${pulseBottom} 1.7s ease-in-out infinite;
    animation-fill-mode: both;
  }

  .nameInitial {
    color: ${({ theme }) => theme.colors.purple};
    position: absolute;
    font-size: 2rem;
    Font style: Medium;
    font-family: sans-serif;
    animation: ${pulseAlphaD} 1.7s ease-in-out infinite;
    animation-fill-mode: both;
  }
  
  .progress{
     width: 70vw;
    margin-top: 3.5rem;
     height: 4px;
    background-color: ${({ theme }) => theme.colors.borderColor};
    border-radius: 3px;
  }

  .progress-value {
  width: 0;
   height: inherit;
    background: linear-gradient(
      90deg,
      rgba(138, 250, 236, 1) 0%,
      rgba(113, 81, 182, 1) 35%,
      rgba(138, 250, 236, 1) 100%
    );
    animation: ${load} 3s normal forwards;
}
`

const Loading = () => {
  return (
    <LoadSection>
      <section className="loadWrapper">
        <div className="loadBoxContainer">
          <p className="nameInitial">D</p>
          <div className="loadingImg">
            <div className="vector-left"></div>
            <div className="vector-top"></div>
            <div className="vector-bottom"></div>
            <div className="vector-right"></div>
          </div>
        </div>
        <div className="progress">
          <div className="progress-value"></div>
        </div>
      </section>
    </LoadSection>
  )
}

export default Loading
