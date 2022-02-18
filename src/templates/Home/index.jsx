import { useEffect, useState, useMemo } from "react";
import Card from "../../components/Card";
import GridCards from "../../components/GridCards";
import GridFilters from "../../components/GridFilters";
import { InputSearch } from "../../components/InputSearch";
import { SelectFilter } from "../../components/SelectFilter";
import { CountryNotFound } from "../../components/CountryNotFound";

import { fetchAllCountries } from "../../services/serviceCoutries";
import { filterCoutryName, filterRegionName } from "../../utils/filters";

export const Home = () => {
  const [allCountries, setAllCountries] = useState([]);
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("");
  const [isRegion, setIsRegion] = useState(false);
  const [isLoad, setIsLoad] = useState(false);

  const getCountries = async () => {
    const result = await fetchAllCountries();
    setIsLoad(false);
    if (result) {
      setIsLoad(true);
      return setAllCountries(result);
    }
    return null;
  };
  useEffect(() => {
    document.title = "Home";
    getCountries();
    if (region === "All") {
      setIsRegion(false);
    }
  }, [region]);

  const filterCountriesNameResult = useMemo(() => {
    return filterCoutryName(allCountries, search);
  }, [allCountries, search]);

  const filterCountriesRegion = useMemo(() => {
    return filterRegionName(allCountries, region);
  }, [allCountries, region]);

  const filterCountryNameRegion = useMemo(() => {
    return filterCoutryName(filterCountriesRegion, search);
  }, [filterCountriesRegion, search]);

  const returnValue = useMemo(() => {
    if (!isRegion) {
      return filterCountriesNameResult;
    }
    if (isRegion) {
      return filterCountryNameRegion;
    }
    return allCountries;
  }, [
    allCountries,
    filterCountriesNameResult,
    filterCountryNameRegion,
    isRegion,
  ]);
  return (
    <>
      <GridFilters>
        <InputSearch
          value={search}
          onInputChange={(v) => {
            setSearch(v);
          }}
          placeholder="Search for a country"
        />
        <SelectFilter
          value={region}
          onSelectChange={(v) => {
            setIsRegion(true);
            setRegion(v);
          }}
        />
      </GridFilters>
      <GridCards>
        {returnValue?.map((country, i) => (
          <Card
            key={i}
            countryImg={country.flags.png}
            name={country.name}
            population={country.population}
            region={country.region}
            capital={country.capital}
          />
        ))}
        {isLoad && returnValue.length === 0 && <CountryNotFound />}
      </GridCards>
    </>
  );
};
