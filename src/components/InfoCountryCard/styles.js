import styled, { css } from "styled-components";

export const ContainerInfoCountry = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    padding: 0 7rem;
    margin-top: 2rem;
    background-color: ${theme.bg.white};
    transition: ease-in-out 400ms;

    @media (max-width: 1000px) {
      padding: 1rem;
      margin: 0;
    }
  `}
`;

export const WrapperInfoCountry = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: flex;
    @media (max-width: 1000px) {
      flex-direction: column;
    }
  `}
`;
export const WrapperImg = styled.div`
  ${({ theme }) => css`

  margin: 1rem 0;

    img {
      width: 40rem;
      height: 30rem;
    }
    @media (max-width: 1000px) {
        height: 15rem;
      img {
        width: 100%;
        height: 100%;
      }
    }
    }
  `}
`;
export const WrapperInfo = styled.section`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 4rem;

    .test {
      display: flex;
      flex-direction: flex;
    }

    .right {
      padding-top: 4.75rem;
      padding-left: 10rem;
    }

    h1 {
      font-size: 2rem;
      font-weight: 600;
      padding: 1rem 0 1rem 1rem;
      color: ${theme.bg.veryDarkBlue};
    }

    .wrap {
      display: flex;
      flex-wrap: wrap;
    }
    span {
      display: flex;
      align-items: baseline;
      font-size: 1.2rem;
      font-weight: 600;
      padding: 0.5rem 1rem;
      color: ${theme.bg.veryDarkBlue};
      div {
        display: flex;
      }
      p {
        font-size: 1rem;
        font-weight: 300;
        margin-left: 6px;
        color: ${theme.bg.veryDarkBlue};
      }
    }
    @media (max-width: 1000px) {
      margin-left: 0;
      padding: 0;

      .test {
        flex-direction: column;
      }
      .right {
        padding-top: 2rem;
        padding-left: 0;
      }

      h1 {
        padding: 0;
      }
      span {
        padding: 0.3rem 0;
      }
    }
  `}
`;
export const WrapperBorderCountry = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    margin-top: 2.5rem;
    padding-left: 1rem;

    div {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
    }

    span {
      font-size: 1.2rem;
      padding: 0;
      margin: 0rem 0rem 0.4rem;
    }

    p {
      padding: 0.3rem 2.2rem;
      border: none;
      border-radius: 4px;
      font-size: 1rem;
      color: ${theme.bg.veryDarkBlue};
      background-color: ${theme.bg.white};
      box-shadow: 0 0 0.3rem #ccc;
      margin: 0rem 0.4rem 0.4rem;
    }
    @media (max-width: 1000px) {
      flex-direction: column;
      align-items: start;
      padding: 0;

      p {
        margin: 0 0.4rem 0.4rem 0;
      }
    }
  `}
`;
