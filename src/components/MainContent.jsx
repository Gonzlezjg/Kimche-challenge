import React from "react";
import { gql, useLazyQuery } from "@apollo/client";
import { useContext, useEffect } from "react";
import GlobalContext from "../context/GlobalContext";
import CountryCards from "../components/CountryCards";
import { Box, Divider, Grid, Typography } from "@mui/material";

const FIND_COUNTRY_CONTINENT = gql`
  query {
    continents {
      name
      code
      countries {
        code
        name
        native
        currency
        capital
        phone
        states {
          name
          country {
            name
            capital
          }
        }
        languages {
          name
          code
        }
        emoji
      }
    }
  }
`;
const MainContent = () => {
  const { formValue } = useContext(GlobalContext);
  const [findCountryContinent, { loading, data }] = useLazyQuery(
    FIND_COUNTRY_CONTINENT
  );

  useEffect(() => {
    findCountryContinent();
  }, []);
  return (
    <Box sx={{ flexGrow: 1, width: "100%" }}>
      {data?.continents.map((continent, key) => {
        return (
          <Grid
            direction="row"
            alignItems="center"
            container
            spacing={2}
            columns={{ xs: 4, sm: 8, md: 16 }}
            mb={4}
          >
            <Grid item xs={16} key={key}>
              <Divider textAlign="left">
                <Typography
                  color="primary"
                  variant="h2"
                  sx={{
                    fontWeight: "400",
                  }}
                >
                  {continent.name}
                </Typography>
              </Divider>
            </Grid>
            {continent.countries.map((country, key) => {
              return (
                <Grid item xs={4} md={4} key={key}>
                  <CountryCards country={country} />
                </Grid>
              );
            })}
          </Grid>
        );
      })}
    </Box>
  );
};

export default MainContent;
