import React from "react"
import styled from "styled-components"

const ButtonText = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transform: skew(-62deg) translateX(-130%);
  transition: 0.3s ease-out;
  background-color: ${({ theme }) => theme.colors.lightColor};
`

const Btn = styled.p`
  position: relative;
  z-index: 99;
`

const PageButton = styled.button`
  border: 2px solid red;
  display: inline-block;
  padding: 0.77rem 1.875rem;
  font-size: 14px;
  letter-spacing: 0.0938rem;
  text-transform: capitalize;
  min-width: 150px;
  background: transparent;
  cursor: pointer;
  font-family: Work Sans;
  font-style: regular;
  font-weight: 400;
  border: 2px solid
    ${(props) => {
      console.log(props)
      return props.theme.colors.lightColor
    }};
  color: ${({ theme }) => theme.colors.lightColor};
  position: relative;
  overflow: hidden;
  z-index: 99;

  &:hover ${ButtonText} {
    transform: translateX(0%);
    color: ${({ theme }) => theme.colors.purple};
  }

  &:hover ${Btn} {
    transform: translateX(0%);
    color: ${({ theme }) => theme.colors.purple};
  }
`

function Button({ text, classname, handleClick }) {
  return (
    <PageButton className={classname} onClick={(e) => handleClick(e)}>
      <Btn>{text}</Btn>
      <ButtonText></ButtonText>
    </PageButton>
  )
}

export default Button
