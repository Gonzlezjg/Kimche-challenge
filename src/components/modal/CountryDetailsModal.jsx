import React, { useContext } from "react";
import GlobalContext from "../../context/GlobalContext";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { gql, useQuery } from "@apollo/client";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import CountryIcon from "../../icons/CountryIcon";
import CurrencyIcon from "../../icons/CurrencyIcon";
import LangsIconFlags from "../../icons/LangsIconFlags";
import CircularProgress from "@mui/material/CircularProgress";
import ArrowUpIcon from "../../icons/ArrowUpIcon";

const GET_COUNTRY_DETAILS = gql`
  query getCountryInfo($code: ID!) {
    country(code: $code) {
      name
      code
      native
      continent {
        name
      }
      languages {
        name
      }
      currency
      emoji
      states {
        name
      }
    }
  }
`;

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 450,
  bgcolor: "background.paper",
  border: "2px solid #000",
  borderRadius: "8px",
  boxShadow: 24,
  p: 4,
  outline: "none",
  transitionDelay: "0s",
};

const CountryDetailsModal = () => {
  const { countryDetailsModal, setGlobalValue } = useContext(GlobalContext);
  const { code } = countryDetailsModal;
  const { loading, data } = useQuery(GET_COUNTRY_DETAILS, {
    variables: { code: code?.toString() },
  });
  const handleClose = () =>
    setGlobalValue("countryDetailsModal", {
      active: false,
      code: null,
    });
  return (
    <div>
      <Modal open={countryDetailsModal.active} onClose={handleClose}>
        <Box sx={style}>
          {loading ? (
            <div style={{ display: "flex", justifyContent: "center" }}>
              <CircularProgress />
            </div>
          ) : (
            <>
              <div style={{ textAlign: "center" }}>
                <Typography mb={1} variant="h4" sx={{ color: "#fff" }}>
                  More info about{" "}
                  <Typography variant="h6" color="secondary">
                    {data?.country.emoji} &nbsp;
                    {data?.country.name}
                  </Typography>
                </Typography>
                <Divider sx={{ width: "100%" }} />
              </div>

              <List>
                <ListItem>
                  <ListItemIcon>
                    <CountryIcon size={30} />
                  </ListItemIcon>
                  <ListItemText
                    sx={{ color: "#fff" }}
                    primary={
                      "Native country name:" + " " + data?.country.native
                    }
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CurrencyIcon size={30} />
                  </ListItemIcon>
                  <ListItemText
                    sx={{ color: "#fff" }}
                    primary={"Currency:" + " " + data?.country.currency}
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <LangsIconFlags size={30} />
                  </ListItemIcon>
                  <ListItemText sx={{ color: "#fff" }} primary="Languages" />
                </ListItem>

                {data?.country.languages.map((lang, key) => {
                  return (
                    <ListItem key={key}>
                      <Divider textAlign="left" sx={{ width: "100%" }}>
                        <ListItemText
                          sx={{ color: "#fff" }}
                          primary={lang.name}
                        />
                      </Divider>
                    </ListItem>
                  );
                })}
              </List>

              <Accordion>
                <AccordionSummary
                  expandIcon={<ArrowUpIcon size={15} />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>States</Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ overflow: "scroll", height: "100px" }}>
                  {data?.country.states.map((state, key) => {
                    return (
                      <Typography variant="body1" key={key}>
                        {state.name}
                      </Typography>
                    );
                  })}
                </AccordionDetails>
              </Accordion>
            </>
          )}
        </Box>
      </Modal>
    </div>
  );
};

export default CountryDetailsModal;
