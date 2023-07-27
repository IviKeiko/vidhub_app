import { Stack } from "@mui/material";
import { categories } from "../utils/constants";
import { nanoid } from "nanoid";
import { colors } from "../utils/constants";

function Sidebar({ selectedCategory, setSelectedCategory }) {
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
          onClick={() => setSelectedCategory(category.name)}
          key={nanoid()}
          style={{
            background: category.name === selectedCategory && colors.emerald,

            color: colors.columbia__blue,
          }}
        >
          <span
            style={{
              color:
                category.name === selectedCategory
                  ? colors.columbia__blue
                  : colors.emerald,
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
