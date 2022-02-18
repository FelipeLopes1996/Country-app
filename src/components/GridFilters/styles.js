import styled, { css } from "styled-components";
export const GridFilters = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.5rem 7.8rem;

    @media (max-width: 768px) {
      flex-direction: column;
      padding: 1.5rem 2rem;
    }
  `}
`;
