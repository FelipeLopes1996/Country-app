import React from "react";
import * as Styled from "./styles";
import { HiOutlineMoon } from "react-icons/hi";
import { BsSunFill } from "react-icons/bs";
import useDarkMode from "../../hooks/useDarkMode";

const Header = () => {
  const [theme, toggleTheme] = useDarkMode();
  return (
    <Styled.Header>
      <span>Where in the world?</span>
      {theme.title === "light" ? (
        <button onClick={toggleTheme}>
          <HiOutlineMoon />
          Dark Mode
        </button>
      ) : (
        <button onClick={toggleTheme}>
          <BsSunFill />
          Light Mode
        </button>
      )}
    </Styled.Header>
  );
};

export default Header;
