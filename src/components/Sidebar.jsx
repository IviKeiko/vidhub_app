import { Stack } from "@mui/material";
import { categories } from "../utils/constants";
import { nanoid } from "nanoid";
import { colors } from "../utils/constants";
const selectedCategory = "New";

function Sidebar() {
  return (
    <Stack
      direction="row"
      sx={{
        overflowY: "auto",
        height: { sx: "auto", md: "95%" },
        flexDirection: { md: "column" },
      }}
    >
      {categories.map((category) => (
        <button
          className="category-btn"
          key={nanoid()}
          style={{
            background: category.name === selectedCategory && colors.vermilion,

            color: colors.light__violet,
          }}
        >
          <span
            style={{
              color:
                category.name === selectedCategory
                  ? colors.light__violet
                  : colors.vermilion,
              marginRight: "15px",
            }}
          >
            {category.icon}
          </span>
          <span
            style={{
              opacity: category.name === selectedCategory ? "1" : "0.8",
            }}
          >
            {category.name}
          </span>
        </button>
      ))}
    </Stack>
  );
}
export default Sidebar;
