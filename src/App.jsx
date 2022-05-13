import { Box, Paper, TextField, ToggleButton, Typography } from "@mui/material";
import { LanguageIcon, ContinentIcon } from "./icons/icons.js";
import { gql, useQuery } from "@apollo/client";

function App() {
  return (
    <>
      <Box sx={{ margin: "4rem 6.5rem", height: "100%" }}>
        <Typography sx={{ color: "#FFFFFF", fontWeight: "600" }} variant="h2">
          Country search
        </Typography>
        <Box
          component="form"
          mt={4}
          sx={{
            "& > :not(style)": { width: "100%" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            fullWidth
            label="Input a country"
            id="fullWidth"
            sx={{ borderColor: "#424242" }}
          />
          <Paper
            style={{ margin: " 5px 0" }}
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography py={1} pl={1} variant="subtitle1">
              Group By
            </Typography>
            <Box>
              <ToggleButton
                value="check"
                selected={() => console.log("hello")}
                onChange={() => {
                  setSelected(!selected);
                }}
                sx={{
                  mr: 1,
                }}
              >
                <ContinentIcon size={30} /> &nbsp; Continent
              </ToggleButton>
              <ToggleButton
                value="check"
                selected={() => console.log("hello")}
                onChange={() => {
                  setSelected(!selected);
                }}
              >
                <LanguageIcon size={30} /> &nbsp; Language
              </ToggleButton>
            </Box>
          </Paper>
        </Box>
      </Box>
    </>
  );
}

export default App;
