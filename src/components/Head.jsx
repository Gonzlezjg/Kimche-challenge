import { useState, useReducer, useContext, useEffect } from "react";
import {
  Box,
  Paper,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import { LanguageIcon, ContinentIcon } from "../icons/icons.js";
import GlobalContext from "../context/GlobalContext";

const formDataReducer = (state, event) => {
  return {
    ...state,
    [event.name]: event.value,
  };
};

const Head = () => {
  const { formValue, setGlobalValue } = useContext(GlobalContext);
  const [formData, setFormData] = useReducer(formDataReducer, {
    country: "",
    groupBy: "continent",
  });
  const [alignment, setAlignment] = useState("continent");

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
    setFormData({
      name: event.target.name,
      value: event.target.value,
    });
  };

  useEffect(() => {
    setGlobalValue("formValue", formData);
  }, [formData]);
  return (
    <Box>
      <Typography sx={{ color: "#FFFFFF", fontWeight: "600" }} variant="h2">
        Country search
      </Typography>
      <Box
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
        <Typography variant="body2" sx={{ color: "#FFFFFF", fontWeight: "200" }}>
          Example: Angola, Mexico, South Africa ,United States.
        </Typography>
        <Paper
          variant="secondary"
          style={{ margin: "5px 0" }}
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
                name="groupBy"
                value="continent"
                sx={{
                  mr: 1,
                }}
              >
                <ContinentIcon size={30} /> &nbsp; Continent
              </ToggleButton>
              <ToggleButton name="groupBy" value="language">
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
