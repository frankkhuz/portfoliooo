import styled from "styled-components"
import Link from "../components/shared/NavLink"

export const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: transparent;
  padding: clamp(0.3rem, 1.3vw, 2rem);
  color: ${({ theme }) => theme.colors.textColor};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99;
  width: 100%;
  margin: auto;
  padding-left: 4.375rem;
  padding-right: 4.375rem;
  background: rgba(9, 13, 15, 0.2);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);

  .myIntials {
    font-family: Wingdings 3;
    font-style: Regular;
    font-size: 20px;
    line-height: 100%;
    font-weight: lighter;
    color: ${({ theme }) => theme.colors.neutral};
  }
  .logo {
    border: 2px solid red;
    width: 50px;
    height: 50px;
  }
  .logo img {
    width: 100%;
    height: 100%;
  }

  .navLinkList {
    display: flex;
    font-family: work sans;
    font-style: regular;
  }

  .navLinkItem {
    list-style-type: none;
    display: flex;
    padding: 0 2rem;
  }
  .socialIcons {
    display: flex;
    grid-gap: 1rem;
    font-size: 1.3rem;
  }
  .socialLink {
    color: ${({ theme }) => theme.colors.textColor};
    cursor: pointer;
  }

  .socialLink:hover {
    color: ${({ theme }) => theme.colors.lightColor};
  }
  .sortIcon {
    display: none;
  }

  // Media Query
  @media ${({ theme }) => theme.mediaQueries.below768} {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 99;
    background: rgba(9, 13, 15, 0.2);
    backdrop-filter: blur(24px);
    -webkit-backdrop-filter: blur(24px);
    width: unset;
    padding: clamp(0.5rem, 1.3vw, 3rem) clamp(0.6rem, 3vw, 2.8rem);

    .navLinkList,
    .socialIcons {
      display: none;
    }

    .sortIcon {
      display: block;
      font-size: 2.6rem;
      cursor: pointer;
    }
  }
`

export const MyLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.textColor};
  font-size: 1rem;
  line-height: 1rem;
  line-height: 100%;
  font-family: work sans;

  &.is-active,
  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.lightColor};
  }
`

export const Hamburger = styled.div`
  border: 2px solid transparent;
  height: 100vh;
  text-align: center;
  padding-bottom: 2rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99;
  background-color: ${({ theme }) => theme.colors.dark};
  z-index: 99;

  .MobileNavLink {
    margin-top: 4rem;
  }

  .socialIcons {
    grid-gap: 1rem;
    font-size: 1.3rem;
    margin-top: 7rem;
    display: flex;
    justify-content: center;
    margin-bottom: 1rem;
  }
  .socialLink {
    color: ${({ theme }) => theme.colors.textColor};
    cursor: pointer;
  }

  .socialLink:hover {
    color: ${({ theme }) => theme.colors.lightColor};
  }
  .closeMenu {
    border: 1px solid ${({ theme }) => theme.colors.textColor};
    color: ${({ theme }) => theme.colors.textColor};
    font-size: 35px;
    font-weight: lighter;
    font-family: 300;
    margin-top: 2.5rem;
    border-radius: 50%;
    padding: 8px;
    cursor: pointer;
  }
`
