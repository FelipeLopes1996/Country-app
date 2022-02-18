import styled, { css } from "styled-components";

export const WrapperButton = styled.div`
  ${({ theme }) => css`
    width: 100%;
    padding: 3rem 0 3rem 7.2rem;
    background-color: ${theme.bg.white};
    transition: ease-in-out 400ms;

    button {
      cursor: pointer;
      display: flex;
      align-items: center;
      padding: 0.3rem 2rem;
      border: none;
      border-radius: 6px;
      font-size: 0.8rem;
      font-weight: 400;
      color: ${theme.bg.veryDarkBlue};
      background-color: ${theme.bg.white};
      box-shadow: 0 0 0.3rem #ccc;
      svg {
        font-size: 1.6rem;
      }
    }
    @media (max-width: 1000px) {
      flex-direction: column;
      padding: 2rem 0 1rem 1.2rem;
    }
  `}
`;
