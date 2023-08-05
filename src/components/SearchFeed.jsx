import { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { colors } from "../utils/constants";
import { Videos } from "./index";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { useParams } from "react-router-dom";

function SearchFeed() {
  const [videos, setVideos] = useState([]);
  const { searchTerm } = useParams();

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) => {
      setVideos(data.items);
      const filteredVideos = data.items.filter(
        (item) => item.id.kind === "youtube#video"
      );
      setVideos(filteredVideos);
    });
  }, [searchTerm]);

  return (
    <Box
      p={2}
      sx={{
        overflowY: "auto",
        height: "90vh",
        flex: 2,
      }}
    >
      <Typography
        variant="h4"
        fontWeight="bold"
        mb={2}
        sx={{ color: colors.charcoal }}
      >
        Search results for:
        <span style={{ color: colors.watermelon }}> {searchTerm}</span>
      </Typography>

      <Videos videos={videos} />
    </Box>
  );
}
export default SearchFeed;
