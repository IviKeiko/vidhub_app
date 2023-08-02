import { Stack } from "@mui/material";
import { colors } from "../utils/constants";
import logo from "../assets/logo.png";
import SearchBar from "./SearchBar";

function Navbar() {
  return (
    <Stack
      className="navbar"
      direction="row"
      alignItems="center"
      p={2}
      sx={{
        position: "sticky",
        top: 0,
        justifyContent: "space-between",
        backgroundColor: colors.oxford__blue,
        height: "75px",
        zIndex: 999,
      }}
    >
      <img
        src={logo}
        alt="logo"
        height={75}
        style={{
          display: "flex",
          alignItems: "center",
        }}
      />
      <SearchBar />
    </Stack>
  );
}
export default Navbar;
