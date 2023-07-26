import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { colors } from "../utils/constants";
// import { logo } from "../utils/constants";
import SearchBar from "./SearchBar";
function Navbar() {
  return (
    <Stack
      direction="row"
      alignItems="center"
      p={2}
      sx={{
        position: "sticky",
        background: colors.federal__blue,
        top: 0,
        justifyContent: "space-between",
      }}
    >
      <Link to="/" style={{ display: "flex", alignItems: "center" }}>
        <img src="../utils/logo.png" alt="logo" height={45} />
      </Link>
      <SearchBar />
    </Stack>
  );
}
export default Navbar;
