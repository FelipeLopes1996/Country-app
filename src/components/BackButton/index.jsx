import React from "react";
import * as Styles from "./styles";
import { IoIosArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

export const BackButton = () => {
  const navigate = useNavigate();
  return (
    <Styles.WrapperButton>
      <button onClick={() => navigate("/")}>
        <IoIosArrowRoundBack />
        Back
      </button>
    </Styles.WrapperButton>
  );
};
