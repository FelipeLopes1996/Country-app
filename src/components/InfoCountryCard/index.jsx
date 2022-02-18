import React from "react";
import * as Styles from "./styles";

export const InfoCountryCard = ({ infoCountry = [] }) => {
  return (
    <Styles.ContainerInfoCountry>
      {infoCountry &&
        infoCountry?.map((v, i) => (
          <Styles.WrapperInfoCountry key={i}>
            <Styles.WrapperImg>
              <img src={v?.flag} alt="flag" />
            </Styles.WrapperImg>
            <Styles.WrapperInfo>
              <div className="test">
                <div className="left">
                  <h1>{v?.name}</h1>
                  <span>
                    Native Name: <p>{v?.nativeName}</p>
                  </span>
                  <span>
                    Population: <p>{v?.population}</p>
                  </span>
                  <span>
                    Region: <p>{v?.region}</p>
                  </span>
                  <span>
                    Sub Region: <p>{v?.subregion}</p>
                  </span>
                  <span>
                    Capital: <p>{v?.capital}</p>
                  </span>
                </div>
                <div className="right">
                  <span>
                    Top Level Domain: <p>{v?.topLevelDomain}</p>
                  </span>
                  {v?.currencies && (
                    <span>
                      Currencies:{" "}
                      <p>{`${v?.currencies[0]?.code},  ${v?.currencies[0]?.name},  ${v?.currencies[0]?.symbol} `}</p>
                    </span>
                  )}
                  <span className="wrap">
                    Languages:
                    {v.languages &&
                      v.languages.map((v, i) => (
                        <div key={i}>
                          <p>{v.name} ,</p>
                          <p>{v.nativeName}</p>
                        </div>
                      ))}
                  </span>
                </div>
              </div>
              {v.borders && (
                <Styles.WrapperBorderCountry>
                  <span>Border Countries:</span>
                  <div>
                    {v.borders.map((v, i) => (
                      <p key={i}>{v}</p>
                    ))}
                  </div>
                </Styles.WrapperBorderCountry>
              )}
            </Styles.WrapperInfo>
          </Styles.WrapperInfoCountry>
        ))}
    </Styles.ContainerInfoCountry>
  );
};
