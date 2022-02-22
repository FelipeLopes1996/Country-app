import React from "react";
import * as Styles from "./styles";
import { IoIosArrowRoundBack } from "react-icons/io";

export const Pagination = ({ pages, setCurrentPage, currentPage }) => {
  return (
    <>
      {
        <Styles.WrapperPagination>
          {currentPage > 0 && (
            <Styles.BackButton
              onClick={() => setCurrentPage(Number(currentPage) - 1)}
            >
              <IoIosArrowRoundBack size={20} />
            </Styles.BackButton>
          )}

          <Styles.PageIndex>
            {currentPage + 1} / {pages}
          </Styles.PageIndex>
          {pages - 1 !== currentPage && (
            <Styles.PassButton
              onClick={() => setCurrentPage(Number(currentPage) + 1)}
            >
              <IoIosArrowRoundBack size={20} />
            </Styles.PassButton>
          )}
        </Styles.WrapperPagination>
      }
    </>
  );
};
