import { Grid, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useContext } from "react";
import Head from "./components/Head";
import MainContent from "./components/MainContent";
import CountryDetailsModal from "./components/modal/CountryDetailsModal";
import GlobalContext from "./context/GlobalContext";

function App() {
  const { countryDetailsModal } = useContext(GlobalContext);

  return (
    <div style={{ margin: "4rem 6.5rem", height: "100%" }}>
      <main>
        <Head />
      </main>
      <section>
        <Paper sx={{ mt: 4, p: 2 }} variant="secondary">
          <MainContent />
        </Paper>
        {countryDetailsModal && <CountryDetailsModal />}
      </section>
    </div>
  );
}

export default App;
