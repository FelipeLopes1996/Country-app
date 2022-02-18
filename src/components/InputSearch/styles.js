import styled, { css } from "styled-components";

export const WrapperInput = styled.div`
  ${({ theme }) => css`
    width: 20rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0 0 1rem #ccc;
    border-radius: 0.5rem;
    transition: ease-in-out 400ms;
    @media (max-width: 768px) {
      width: 100%;
    }

    input {
      width: 100%;
      border: none;
      outline: none;
      padding: 0.8rem;
      border-radius: 0.5rem;
      transition: ease-in-out 400ms;
      font-weight: 600;
      background-color: ${theme.bg.veryLightGray};
      color: ${theme.bg.veryDarkBlue};
      ::placeholder {
        color: ${theme.bg.veryDarkBlue};
      }
    }
  `}
`;
