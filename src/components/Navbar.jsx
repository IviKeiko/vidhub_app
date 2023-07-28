import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { colors } from "../utils/constants";

import logo from "../assets/logo.png";
import SearchBar from "./SearchBar";
function Navbar() {
  return (
    <Stack
      direction="row"
      alignItems="center"
      p={2}
      sx={{
        position: "sticky",
        top: 0,
        justifyContent: "space-between",
      }}
    >
      <Link to="/" style={{ display: "flex", alignItems: "center" }}>
        <img src={logo} alt="logo" height={75} />
      </Link>
      <SearchBar />
    </Stack>
  );
}
export default Navbar;
