import styled, { css } from "styled-components";

export const Small = styled.small`
  ${({ theme }) => css`
    width: 100%;
    font-weight: 600;
    font-size: 1.5rem;
    margin-top: 2rem;
    text-align: center;

    color: ${theme.bg.veryDarkBlue};
  `}
`;
