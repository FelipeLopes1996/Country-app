import { BrowserRouter } from "react-router-dom";
import { Router } from "./router";
import GlobalStyles from "./styles/global";
import ThemeProvider from "./context/themeProvider";
import Header from "./components/Header";

const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <GlobalStyles />
        <Header />
        <Router />
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
