import styled, { css } from "styled-components";
export const GridCards = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    flex-wrap: wrap;

    @media (max-width: 768px) {
      padding: 1rem 1rem;
      justify-content: space-around;
    }
  `}
`;
