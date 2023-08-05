import { useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { colors } from "../utils/constants";
import { Sidebar, Videos } from "./index";
import { fetchFromAPI } from "../utils/fetchFromAPI";

function Feed() {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data) => {
      /*playlists are excluded, they render as MUI Box 0px x 0px which causes layout issues*/
      const filteredVideos = data.items.filter(
        (item) => item.id.kind === "youtube#video"
      );
      setVideos(filteredVideos);
    });
  }, [selectedCategory]);

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box
        sx={{
          height: { sx: "auto", md: "92vh" },
          borderRight: `1px solid ${colors.watermelon}`,
          px: { sx: 0, md: 2 },
        }}
      >
        <Sidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <Typography
          className="copyright"
          variant="body2"
          sx={{ mt: 1.5, color: colors.carbon }}
        >
          Copyright 2023 VidHub
        </Typography>
      </Box>
      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          sx={{ color: colors.watermelon }}
        >
          {selectedCategory}
          <span style={{ color: colors.charcoal }}> videos</span>
        </Typography>
        <Videos videos={videos} />
      </Box>
    </Stack>
  );
}
export default Feed;
