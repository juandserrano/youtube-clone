import React, { useState } from "react";
import { Paper, TextField } from "@material-ui/core";

const SearchBar = (props) => {
  const [state, setState] = useState({
    searchTerm: "",
  });

  const handleChange = (event) => {
    setState({ searchTerm: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const { searchTerm } = state;
    const { onFormSubmit } = props;
    onFormSubmit(searchTerm);
  };

  return (
    <Paper
      elevation={6}
      style={{ padding: "25px", background: "rgb(230, 230, 230)" }}
    >
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Search..."
          onChange={handleChange}
          style={{ background: "rgb(230, 230, 230)" }}
        />
      </form>
    </Paper>
  );
};

export default SearchBar;
