import { Stack, Box } from "@mui/material";
import { nanoid } from "nanoid";
import { VideoCard, ChannelCard } from "./";

Stack;

function Videos({ videos }) {
  console.log(videos);
  return (
    <Stack direction="row" flexWrap="wrap" justifyContent="start" gap={2}>
      {videos.map((video) => {
        return (
          <Box key={nanoid()}>
            {video.id.videoId && <VideoCard video={video} />}
            {video.id.channelId && <ChannelCard channelDetail={video} />}
          </Box>
        );
      })}
    </Stack>
  );
}
export default Videos;
