import React, { useState } from "react";
import { gql, useQuery } from "@apollo/client";
import { useContext, useEffect } from "react";
import GlobalContext from "../context/GlobalContext";
import CountryCards from "../components/CountryCards";
import { Box, Divider, Grid, Typography } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";

const FIND_COUNTRY = gql`
  query getCountry {
    getCountriesContinent: continents {
      name
      countries {
        name
        code
        phone
        capital
        currency
        emoji
        continent {
          name
        }
      }
    }

    getCountryLang: countries {
      name
      code
      phone
      capital
      currency
      emoji
      languages {
        name
      }
    }
  }
`;

const MainContent = () => {
  const { formValue } = useContext(GlobalContext);
  const { loading, data } = useQuery(FIND_COUNTRY);
  const [countryData, setCountryData] = useState([]);

  function getCountry() {
    if (!loading) {
      if (formValue.groupBy === "continent") {
        let results = [];
        data?.getCountriesContinent.forEach((elem) => {
          let result = {
            name: elem.name,
            countries: elem.countries.filter((el) =>
              el.name.toLowerCase().includes(formValue.country.toLowerCase())
            ),
          };

          results.push(result);
        });
        setCountryData(results);
      } else {
        if (formValue.country) {
          let results = data?.getCountryLang.filter((el) =>
            el.name.toLowerCase().includes(formValue?.country.toLowerCase())
          );
          let elem = results.map((el) => {
            return {
              ...el,
              languages: el.languages.map((e) => e.name),
            };
          });
          setCountryData(elem);
        }
      }
    }
  }
  useEffect(() => {
    getCountry();
  }, [formValue]);

  if (loading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box sx={{ flexGrow: 1, width: "100%" }}>
      <Grid
        direction="row"
        alignItems="center"
        container
        spacing={2}
        columns={{ xs: 4, sm: 8, md: 16 }}
        mb={4}
      >
        {formValue.groupBy === "continent"
          ? countryData?.map((country, key) => {
              return (
                <>
                  {country?.countries.length ? (
                    <Grid item xs={16} key={key}>
                      <Divider textAlign="left">
                        <Typography
                          color="primary"
                          variant="h2"
                          sx={{
                            fontWeight: "400",
                          }}
                        >
                          {country.name}
                        </Typography>
                      </Divider>
                    </Grid>
                  ) : (
                    <></>
                  )}
                  {country?.countries.map((el, key) => {
                    return (
                      <Grid item xs={4} md={4} key={key + 1}>
                        <CountryCards country={el} />
                      </Grid>
                    );
                  })}
                </>
              );
            })
          : countryData?.map((country, key) => {
              return (
                <>
                  {country?.languages != undefined ? (
                    <Grid item xs={16} key={key}>
                      <Divider textAlign="left">
                        <Typography
                          color="primary"
                          variant="h2"
                          sx={{
                            fontWeight: "400",
                          }}
                        >
                          {country?.languages.find(
                            (element) => element != undefined
                          )}
                        </Typography>
                      </Divider>
                    </Grid>
                  ) : (
                    ""
                  )}

                  <Grid item xs={4} md={4} key={key + 1}>
                    <CountryCards country={country} />
                  </Grid>
                </>
              );
            })}
      </Grid>
    </Box>
  );
};

export default MainContent;
