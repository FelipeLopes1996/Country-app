import styled, { css } from "styled-components";

export const WrapperSelect = styled.div`
  ${({ theme }) => css`
    width: 15rem;
    box-shadow: 0 0 0.3rem #ccc;
    border-radius: 0.8rem;
    transition: ease-in-out 400ms;
    @media (max-width: 768px) {
      width: 100%;
      margin-top: 1rem;
    }

    select {
      width: 100%;
      border: none;
      outline: none;
      padding: 0.8rem 0.6rem;
      border-radius: 0.8rem;
      transition: ease-in-out 400ms;
      font-weight: 600;
      color: ${theme.bg.veryDarkBlue};
      background-color: ${theme.bg.veryLightGray};
    }
  `}
`;
