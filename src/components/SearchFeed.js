import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import Videos from "./Videos";
import { fetchFromApi } from "../utils/fetchFrom";
import { useParams } from "react-router-dom";

const SearchFeed = () => {
  const { searchTerm } = useParams();

  const [videos, setVideos] = useState([]);
  useEffect(() => {
    fetchFromApi(`search?part=snippet&q=${searchTerm}`).then((data) => {
      setVideos(data.items);
    });
  }, [searchTerm]);

  return (
    <>
      <Box p={2} sx={{ overflowY: "auto", height: "95vh", flex: 2 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          sx={{ color: "white" }}
        >
          Search Results For: <span style={{ color: "#FC1503" }}>${searchTerm}</span> Videos
        </Typography>
        <Videos videos={videos} />
      </Box>
    </>
  );
};

export default SearchFeed;
