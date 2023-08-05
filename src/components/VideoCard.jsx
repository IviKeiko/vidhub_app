import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { colors } from "../utils/constants";

function VideoCard({
  video: {
    id: { videoId },
    snippet,
  },
}) {
  return (
    <Card
      sx={{
        width: { xs: "92vw", sm: "358px", md: "320px" },
        boxShadow: "none",
        borderRadius: 0,
      }}
    >
      <Link to={videoId && `/video/${videoId}`}>
        <CardMedia
          image={snippet?.thumbnails?.high?.url}
          alt={snippet?.title}
          sx={{
            width: {
              xs: "100%",
              sm: "358px",
              md: "320px",
            },
            height: 180,
          }}
        />
      </Link>
      <CardContent sx={{ backgroundColor: colors.neutral, height: "106px" }}>
        <Link to={videoId && `/video/${videoId}`}>
          <Typography
            variant="subtitle1"
            fontWeight="bold"
            color={colors.charcoal}
          >
            {snippet?.title.slice(0, 60)}
          </Typography>
        </Link>
        <Link to={snippet?.channelId && `/channel/${snippet?.channelId}`}>
          <Typography
            variant="subtitle2"
            fontWeight="bold"
            color={colors.charcoal}
          >
            {snippet?.channelTitle}
            <CheckCircle
              sx={{ fontSize: 12, color: colors.watermelon, ml: "5px" }}
            />
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
}
export default VideoCard;
