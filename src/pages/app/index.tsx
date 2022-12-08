import Paper from "@mui/material/Paper";
import React from "react";
import SearchInput from "../../components/SearchInput";

const AppPage: React.FC = () => {
  return (
    <Paper elevation={0} square className="body">
      <SearchInput />
      AppPage
    </Paper>
  );
};

export default AppPage;
