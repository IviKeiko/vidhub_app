import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Paper, IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";
import { colors } from "../utils/constants";

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm) {
      navigate(`/search/${searchTerm}`);
      setSearchTerm("");
    }
  };
  return (
    <Paper
      className="searchBar"
      component="form"
      onSubmit={handleSubmit}
      sx={{
        borderRadius: 0,
        pl: 2,
        boxShadow: "none",
        mr: { sm: 5 },
        background: colors.neutral,
      }}
    >
      <input
        className="search-bar"
        placeholder="search..."
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
        style={{
          background: colors.neutral,
        }}
      />
      <IconButton
        type="submit"
        sx={{ p: "10px", color: colors.watermelon }}
        aria-label="search"
      >
        <Search />
      </IconButton>
    </Paper>
  );
}
export default SearchBar;
