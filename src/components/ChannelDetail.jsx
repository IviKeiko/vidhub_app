import { Box } from "@mui/material";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Videos, ChannelCard } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { colors } from "../utils/constants";

function ChannelDetail() {
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);
  const { id } = useParams();
  console.log(channelDetail, videos);
  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`).then((data) =>
      setChannelDetail(data?.items[0])
    );

    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then(
      (data) => {
        const filteredVideos = data.items.filter(
          (item) => item.id.kind === "youtube#video"
        );
        setVideos(filteredVideos);
      }
    );
  }, [id]);

  return (
    <Box sx={{ minHeight: "95vh" }}>
      <Box>
        <div
          style={{
            backgroundImage: `url(
             "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.dev/svgjs' width='2000' height='200' preserveAspectRatio='none' viewBox='0 0 2000 200'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1495%26quot%3b)' fill='none'%3e%3crect width='2000' height='200' x='0' y='0' fill='rgba(239%2c 239%2c 239%2c 1)'%3e%3c/rect%3e%3cpath d='M 0%2c69 C 25%2c60.8 75%2c26.4 125%2c28 C 175%2c29.6 200%2c80.8 250%2c77 C 300%2c73.2 325%2c8.8 375%2c9 C 425%2c9.2 450%2c70.6 500%2c78 C 550%2c85.4 575%2c41.6 625%2c46 C 675%2c50.4 700%2c102.4 750%2c100 C 800%2c97.6 825%2c41 875%2c34 C 925%2c27 950%2c68.8 1000%2c65 C 1050%2c61.2 1075%2c16.8 1125%2c15 C 1175%2c13.2 1200%2c53.2 1250%2c56 C 1300%2c58.8 1325%2c29.8 1375%2c29 C 1425%2c28.2 1450%2c54.8 1500%2c52 C 1550%2c49.2 1575%2c11.4 1625%2c15 C 1675%2c18.6 1700%2c67 1750%2c70 C 1800%2c73 1825%2c29.4 1875%2c30 C 1925%2c30.6 1975%2c64.4 2000%2c73L2000 200L0 200z' fill='rgba(198%2c 219%2c 240%2c 1)'%3e%3c/path%3e%3cpath d='M 0%2c186 C 133.4%2c177.8 400.2%2c146.6 667%2c145 C 933.8%2c143.4 1067.4%2c179.4 1334%2c178 C 1600.6%2c176.6 1866.8%2c146 2000%2c138L2000 200L0 200z' fill='rgba(255%2c 59%2c 63%2c 1)'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1495'%3e%3crect width='2000' height='200' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e")`,

            zIndex: 10,
            height: "180px",
          }}
        />
        <ChannelCard channelDetail={channelDetail} marginTop={"-100px"} />
      </Box>
      <Box display="flex" p="2">
        <Box sx={{ mr: { sm: "100px" } }} />
        <Videos videos={videos} />
      </Box>
    </Box>
  );
}
export default ChannelDetail;
