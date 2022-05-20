import React, { useState } from "react";
import { useContext, useEffect } from "react";
import GlobalContext from "../context/GlobalContext";
import CountryCards from "../components/CountryCards";
import { Box, Divider, Grid, Typography } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";

const MainContent = () => {
  const { countryData } = useContext(GlobalContext);
  const { called, loading, group, data } = countryData;

  if (called && loading) {
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
        {group === "continent"
          ? data?.map((country, key) => {
              return (
                <>
                  {country?.countries != undefined ? (
                    <Grid item xs={16} key={key}>
                      <Divider textAlign="left">
                        <Typography
                          color="primary"
                          variant="h2"
                          sx={{
                            fontWeight: "400",
                          }}
                        >
                          {country.continent}
                        </Typography>
                      </Divider>
                    </Grid>
                  ) : (
                    <></>
                  )}

                  {country?.countries.length || country?.countries != undefined
                    ? country?.countries.map((el, key) => (
                        <Grid item xs={4} md={4} key={key + 1}>
                          <CountryCards country={el} />
                        </Grid>
                      ))
                    : ""}
                </>
              );
            })
          : data?.map((country, key) => {
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
