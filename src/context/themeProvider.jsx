import React from "react";

import { ThemeProvider } from "styled-components";

import themes from "../styles/themes";
import useStore from "../hooks/useStore";
import STORAGE from "../constants/storage";

export const ThemeContext = React.createContext([]);

const Provider = ({ children }) => {
  const [theme, setTheme] = useStore(STORAGE.THEME, themes.light);

  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default Provider;
