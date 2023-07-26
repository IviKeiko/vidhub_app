import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Paper, IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";
import { colors } from "../utils/constants";

function SearchBar() {
  return (
    <Paper
      component="form"
      onSubmit={() => {}}
      sx={{
        borderRadius: 8,
        pl: 2,
        boxShadow: "none",
        mr: { sm: 5 },
        background: colors.light__violet,
      }}
    >
      <input
        className="search-bar"
        placeholder="search..."
        value=""
        onChange={() => {}}
        style={{
          background: colors.light__violet,
        }}
      />
      <IconButton type="submit" sx={{ p: "10px", color: colors.vermilion }}>
        <Search />
      </IconButton>
    </Paper>
  );
}
export default SearchBar;
