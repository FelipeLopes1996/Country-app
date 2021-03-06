import { useContext } from "react";

import { ThemeContext } from "../context/themeProvider";
import STORAGE from "../constants/storage";
import THEME from "../constants/theme";
import themes from "../styles/themes";

function useDarkMode() {
  const [theme, setTheme] = useContext(ThemeContext);

  const toogleTheme = () => {
    const _theme = theme.title === THEME.DARK ? themes.light : themes.dark;
    localStorage.setItem(STORAGE.THEME, JSON.stringify(theme));
    setTheme(_theme);
  };
  return [theme, toogleTheme];
}

export default useDarkMode;
