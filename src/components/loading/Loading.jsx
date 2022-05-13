import { Box } from "@mui/material";
import React from "react";
import LocateIcon from "../../icons/LocateIcon";
import "../../index.css";
const Loading = () => {
  return (
    <Box
      className="loading-container"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100%",
      }}
    >
      <div className="load-icon">
        <LocateIcon size={100} />
      </div>
      <div className="floor"/>
    </Box>
  );
};

export default Loading;
