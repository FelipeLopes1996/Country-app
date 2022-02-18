import { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import { fetchNameCountry } from "../../services/serviceCoutries";

import { BackButton } from "../../components/BackButton";
import { InfoCountryCard } from "../../components/InfoCountryCard";

export const InfoCountry = () => {
  const params = useParams();
  const [country, setCountry] = useState([]);
  const { name } = params;

  const getParams = useCallback(async () => {
    if (name) {
      const result = await fetchNameCountry(name);
      setCountry(result);
    }
    return null;
  }, [name]);

  useEffect(() => {
    document.title = "Info Country";
    getParams();
  }, [getParams]);

  return (
    <>
      <BackButton />
      {country && <InfoCountryCard infoCountry={country} />}
    </>
  );
};
