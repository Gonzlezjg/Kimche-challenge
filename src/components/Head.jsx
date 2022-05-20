import { useState, useReducer, useContext, useEffect } from "react";
import {
  Box,
  Paper,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import { LanguageIcon, ContinentIcon, SearchIconFlag } from "../icons/icons.js";
import GlobalContext from "../context/GlobalContext";
import { gql, useLazyQuery } from "@apollo/client";

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
      continent {
        name
      }
      languages {
        name
      }
    }
  }
`;

const formDataReducer = (state, event) => {
  return {
    ...state,
    [event.name]: event.value,
  };
};

const Head = () => {
  const { setGlobalValue } = useContext(GlobalContext);
  const [formData, setFormData] = useReducer(formDataReducer, {
    country: "",
    groupBy: "continent",
  });
  const [alignment, setAlignment] = useState("continent");

  const [loadCountry, { called, loading, data }] = useLazyQuery(FIND_COUNTRY);

  useEffect(() => {
    setGlobalValue("formValue", formData);
    getCountry();
  }, [formData]);

  function getCountry() {
    if (called && loading) return;
    if (formData.groupBy === "language") {
      if (formData.country) {
        let results = data?.getCountryLang.filter((el) =>
          el.name.toLowerCase().includes(formData?.country.toLowerCase())
        );
        let elem = results.map((el) => {
          return {
            ...el,
            languages: el.languages.map((e) => e.name),
          };
        });
        setGlobalValue("countryData", {
          data: elem,
          loading,
          called,
          group: "language",
        });
      }
    } else {
      if (formData.country) {
        let results = data?.getCountriesContinent.map((el) => {
          return {
            continent: el.name,
            countries: el.countries.filter((e) =>
              e.name.toLowerCase().includes(formData.country.toLowerCase())
            ),
          };
        });
        let country = results?.filter((el) => el.countries.length > 0);

        setGlobalValue("countryData", {
          data: country,
          loading,
          called,
          group: "continent",
        });
      }
    }
  }
  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
    setFormData({
      name: event.target.name,
      value: event.target.value,
    });
  };

  return (
    <Box>
      <Box sx={{ display: "flex" }}>
        <SearchIconFlag size={80} />
        <Typography sx={{ color: "#FFFFFF", fontWeight: "600" }} variant="h2">
          {" "}
          &nbsp; Country search
        </Typography>
      </Box>

      <Box
        onSubmit={(e) => e.preventDefault()}
        component="form"
        mt={4}
        sx={{
          "& > :not(style)": { width: "100%" },
        }}
      >
        <TextField
          fullWidth
          label="Input a country"
          id="fullWidth"
          name="country"
          onChange={handleChange}
          sx={{ borderColor: "#424242" }}
        />
        <Typography
          variant="body2"
          sx={{ color: "#FFFFFF", fontWeight: "200" }}
        >
          Example: Angola, Mexico, South Africa ,United States.
        </Typography>
        <Paper
          variant="secondary"
          style={{ margin: "10px 0" }}
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography py={1} pl={1} variant="subtitle1">
            Search By
          </Typography>
          <Box>
            <ToggleButtonGroup
              value={alignment}
              exclusive
              onChange={handleChange}
              aria-label="text alignment"
            >
              <ToggleButton
                onClick={loadCountry}
                name="groupBy"
                value="continent"
                sx={{
                  mr: 1,
                }}
              >
                <ContinentIcon size={30} /> &nbsp; Continent
              </ToggleButton>

              <ToggleButton
                onClick={loadCountry}
                name="groupBy"
                value="language"
              >
                <LanguageIcon size={30} /> &nbsp; Language
              </ToggleButton>
            </ToggleButtonGroup>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
};

export default Head;
