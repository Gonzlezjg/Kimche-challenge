import { Grid, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Head from "./components/Head";
import MainContent from "./components/MainContent";

function App() {

  return (
    <div style={{ margin: "4rem 6.5rem", height: "100%" }}>
      <main>
        <Head />
      </main>
      <section>
        <Paper sx={{ mt: 4, p: 2 }} variant="secondary">
         <MainContent />
        </Paper>
      </section>
    </div>
  );
}

export default App;
