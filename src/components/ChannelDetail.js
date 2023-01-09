import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchFromApi } from "../utils/fetchFrom";
import ChannelCard from "./ChannelCard";
import Videos from "./Videos";

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetchFromApi(`channels?part=snippet&id=${id}`).then((data) =>
      setChannelDetail(data?.items[0])
    );

    fetchFromApi(`search?channelId=${id}&part=snippet&order-data`).then(
      (data) => setVideos(data?.items)
    );
  }, [id]);

  console.log(channelDetail, videos);
  return (
    <>
      <Box minHeight="95vh">
        <Box>
          <div
            style={{
              background:
                "linear-gradient(83deg, rgba(35,30,124,1) 11%, rgba(9,9,121,1) 41%, rgba(0,212,255,1) 100%)",
              zIndex: 10,
              height: "300px",
            }}
          />
          <ChannelCard channelDetail={channelDetail} marginTop="-113px" />
        </Box>
        <Box display="flex" p="2">
          <Box sx={{ mr: { sm: "120px" } }} />
          <Videos videos={videos} />
        </Box>
      </Box>
    </>
  );
};

export default ChannelDetail;
