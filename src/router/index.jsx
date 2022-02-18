import { Route, Routes } from "react-router-dom";
import { Home } from "../templates/Home";
import { NotFound } from "../templates/NotFound";
import { InfoCountry } from "../templates/InfoCountry";

export const Router = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/info-contry/:name" element={<InfoCountry />} />
      <Route exact path="*" element={<NotFound />} />
    </Routes>
  );
};
