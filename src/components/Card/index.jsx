import React from "react";
import * as Styled from "./styles";
import { useNavigate } from "react-router-dom";

const Card = ({ countryImg, name, population, region, capital }) => {
  const navigation = useNavigate();
  const getId = (name = "") => {
    navigation(`/info-contry/${name}`);
  };

  return (
    <Styled.Card onClick={() => getId(name)}>
      <img src={countryImg} alt="flag" />
      <h1>{name}</h1>
      <span>
        Population: <p>{population}</p>
      </span>
      <span>
        Region: <p>{region}</p>
      </span>
      <span>
        Capital: <p>{capital}</p>
      </span>
    </Styled.Card>
  );
};

export default Card;
