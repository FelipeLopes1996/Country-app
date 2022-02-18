import styled, { css } from "styled-components";

export const Card = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    width: 19rem;
    margin: 2rem 0 0 7.8rem;
    border-radius: 5px;
    padding-bottom: 3.5rem;
    box-shadow: 0 0 0.3rem ${theme.bg.veryLightGray};
    background-color: ${theme.bg.veryLightGray};
    transition: ease-in-out 400ms;

    &:hover {
      cursor: pointer;
      transform: scale(1.1);
    }
    img {
      border-radius: 5px 5px 0 0;
      width: 100%;
      height: 12rem;
    }
    h1 {
      padding: 1.3rem 1rem;
      color: ${theme.bg.veryDarkBlue};
    }
    span {
      display: flex;
      align-items: baseline;
      font-size: 1rem;
      font-weight: 600;
      padding: 0.2rem 1rem;
      color: ${theme.bg.veryDarkBlue};
      p {
        font-size: 0.9rem;
        font-weight: 300;
        margin-left: 6px;
        color: ${theme.bg.veryDarkBlue};
      }
    }
    @media (max-width: 768px) {
      margin: 2rem 0 0 0;
    }
  `}
`;
