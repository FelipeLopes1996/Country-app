const baseUrl = "https://restcountries.com/v2";

export const fetchAllCountries = async () => {
  const response = await fetch(`${baseUrl}/all`, { method: "GET" })
    .then((resp) => resp.json())
    .catch((e) => console.log(e));
  return response;
};

export const fetchNameCountry = async (name) => {
  const response = await fetch(`${baseUrl}/name/${name}`)
    .then((resp) => resp.json())
    .catch((e) => console.log(e));

  return response;
};
