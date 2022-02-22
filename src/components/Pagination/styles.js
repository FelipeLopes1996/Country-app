import styled, { css } from "styled-components";

export const WrapperPagination = styled.button`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    background-color: ${theme.bg.white};
    margin: 3rem auto;
  `}
`;

export const PageIndex = styled.span`
  ${({ theme }) => css`
    cursor: pointer;
    padding: 0.3rem 0.6rem;
    margin: 0 1rem;
    border: none;
    border-radius: 6px;
    font-size: 1.05rem;
    font-weight: 600;
    color: ${theme.bg.white};
    background-color: ${theme.bg.veryDarkBlue};
    box-shadow: 0 0 0.3rem #ccc;
  `}
`;

export const BackButton = styled.button`
  ${({ theme }) => css`
    cursor: pointer;
    display: flex;
    align-items: center;
    padding: 0.3rem 0.6rem;
    border: none;
    border-radius: 6px;
    font-weight: 400;
    color: ${theme.bg.white};
    background-color: ${theme.bg.veryDarkBlue};
    box-shadow: 0 0 0.3rem #ccc;
  `}
`;
export const PassButton = styled.button`
  ${({ theme }) => css`
    cursor: pointer;
    display: flex;
    align-items: center;
    padding: 0.3rem 0.6rem;
    border: none;
    border-radius: 6px;
    font-weight: 400;
    color: ${theme.bg.white};
    background-color: ${theme.bg.veryDarkBlue};
    box-shadow: 0 0 0.3rem #ccc;

    svg {
      transform: rotate(180deg);
    }
  `}
`;
