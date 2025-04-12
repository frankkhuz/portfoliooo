import styled from "styled-components"

export const SocialHandle = styled.div`
  display: flex;
  flex-direction: column;
  width: 150px;

  .location {
    font-size: 36px;
    margin: auto;
    color: ${({ theme }) => theme.colors.lightColor};
    cursor: pointer;
    margin-bottom: 5px;
  }

  .scale {
    font-size: 36px;
    margin: auto;
    color: ${({ theme }) => theme.colors.lightColor};
    cursor: pointer;
    margin-bottom: 3px;
    transform: scale(0.8);
  }

  .mediaBtn {
    padding: 10px 35px;
    transform: translateY(-100%);
    transition: all linear 3s;
    background-color: transparent;
    border: 1px solid ${({ theme }) => theme.colors.lightColor};
    cursor: pointer;
  }
  .slideIn {
    padding: 10px 35px;
    transform: translateY(0%);
    background-color: transparent;
    border: 1px solid ${({ theme }) => theme.colors.lightColor};
    cursor: pointer;
  }
  .socialLinks {
    color: ${({ theme }) => theme.colors.lightColor};
    font-size: 16px;
  }
`
