import {
  Box,
  Button,
  Card,
  CardContent,
  Tooltip,
  Typography,
} from "@mui/material";

import "../styles/countryCards.css";

const CountryCards = ({ country }) => {
  return (
    <Tooltip placement="right" title="Click for more details" arrow>
      <Card sx={{ height: 150 }} className="country-cards">
        <CardContent>
          <Typography variant="h5" component="div">
            {country.emoji} &nbsp;
            {country.name}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="secondary">
            {country.code}
          </Typography>
          {country.capital !== null && (
            <Typography variant="body2">Capital : {country.capital}</Typography>
          )}
        </CardContent>
      </Card>
    </Tooltip>
  );
};

export default CountryCards;
