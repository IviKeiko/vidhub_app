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
            background: category.name === selectedCategory && colors.watermelon,
            color: category.name === selectedCategory && colors.neutral,
          }}
        >
          <span
            style={{
              color:
                category.name === selectedCategory
                  ? colors.neutral
                  : colors.watermelon,
              marginRight: "15px",
            }}
          >
            {category.icon}
          </span>
          <span>{category.name}</span>
        </button>
      ))}
    </Stack>
  );
}
export default Sidebar;
