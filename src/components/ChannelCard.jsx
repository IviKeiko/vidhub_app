import { Box, CardContent, CardMedia, Typography } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { Link } from "react-router-dom";

import { colors } from "../utils/constants";

function ChannelCard({ channelDetail, marginTop }) {
  return (
    <Box
      sx={{
        boxShadow: "none",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: { xs: "356px", md: "320px" },
        height: "326px",
        margin: "auto",
        marginTop,
      }}
    >
      <Link to={`/channel/${channelDetail?.id?.channelId}`}>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "center",
            color: colors.charcoal,
          }}
        >
          <CardMedia
            image={channelDetail?.snippet?.thumbnails?.high?.url}
            alt={channelDetail?.snippet?.title}
            sx={{
              borderRadius: "50%",
              height: "180px",
              width: "180px",
              mb: 2,
            }}
          />
          <Typography variant="h6">
            {channelDetail?.snippet?.title}
            <CheckCircle
              sx={{ fontSize: 14, color: colors.watermelon, ml: "5px" }}
            />
            <span
              style={{
                display: "block",
                letterSpacing: 1.5,
                color: colors.charcoal,
                fontSize: "14px",
              }}
            >
              channel
            </span>
          </Typography>
          {channelDetail?.statistics?.subscriberCount && (
            <Typography>
              {parseInt(
                channelDetail?.statistics?.subscriberCount
              ).toLocaleString()}
            </Typography>
          )}
        </CardContent>
      </Link>
    </Box>
  );
}
export default ChannelCard;
