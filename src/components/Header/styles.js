import styled, { css } from "styled-components";

export const Header = styled.header`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.5rem 7.8rem;
    border-bottom: 4px solid ${theme.bg.white};
    background-color: ${theme.bg.veryLightGray};
    transition: ease-in-out 400ms;
    span {
      color: ${theme.bg.veryDarkBlue};
      font-weight: 700;
    }
    button {
      cursor: pointer;
      border: none;
      background: ${theme.bg.veryLightGray};
      display: flex;
      justify-content: space-between;
      font-size: 0.8rem;
      font-weight: 600;
      color: ${theme.bg.veryDarkBlue};
      transition: ease-in-out 400ms;

      svg {
        margin-right: 0.4rem;
      }
    }
    @media (max-width: 768px) {
      padding: 1.5rem 1rem;
    }
  `}
`;
