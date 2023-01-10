import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Box, Stack } from "@mui/system";
import { Link, useParams } from "react-router-dom";
import { fetchFromApi } from "../utils/fetchFrom";
import { Typography } from "@mui/material";
import Videos from "./Videos";

const VideoDetail = () => {
    const [videoDetail, setVideoDetail] = useState(null);
    const [videos, setVideos] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        fetchFromApi(`videos?part=snippet,statistics&id=${id}`).then((data) =>
            setVideoDetail(data.items[0])
        );

        fetchFromApi(
            `search?part=snippet&relatedToVideoId=${id}&type=video`
        ).then((data) => setVideos(data.items));
    }, [id]);

    // const {snippet : { title, channelId, channelTitle}, statistics: {viewCount, likeCount}} = videoDetail;

    return (
        <>
            <Box minHeight="95vh">
                <Stack direction={{ xs: "column", md: "row" }}>
                    <Box flex={1}>
                        <Box
                            sx={{
                                width: "100%",
                                position: "sticky",
                                top: "86px",
                            }}
                        >
                            <ReactPlayer
                                url={`https://www.youtube.com/watch?v=${id}`}
                                className="react-player"
                                controls
                            />
                            <Typography
                                color="#fff"
                                variant="h5"
                                fontWeight="bold"
                                p={2}
                            >
                                {videoDetail?.snippet.title}
                            </Typography>
                            <Stack
                                direction="row"
                                justifyContent="space-between"
                                sx={{ color: "#fff" }}
                                px={2}
                                py={2}
                            >
                                <Link
                                    to={`/channel/${videoDetail?.snippet.channelId}`}
                                >
                                    <Typography
                                        color="#fff"
                                        variant={{ sm: "subtitle1", md: "h6" }}
                                    >
                                        {videoDetail?.snippet.channelTitle}
                                        <CheckCircleIcon
                                            sx={{
                                                fontSize: "12px",
                                                color: "gray",
                                                ml: "5px",
                                            }}
                                        />
                                    </Typography>
                                </Link>
                                <Stack
                                    direction="row"
                                    alignItems="center"
                                    sx={{ gap: "20px" }}
                                >
                                    <Typography
                                        variant="body1"
                                        sx={{ opacity: 0.7 }}
                                    >
                                        {parseInt(
                                            videoDetail?.statistics.viewCount
                                        ).toLocaleString()}{" "}
                                        Views
                                    </Typography>
                                    <Typography
                                        variant="body1"
                                        sx={{ opacity: 0.7 }}
                                    >
                                        {parseInt(
                                            videoDetail?.statistics.likeCount
                                        ).toLocaleString()}{" "}
                                        Likes
                                    </Typography>
                                </Stack>
                            </Stack>
                        </Box>
                    </Box>
                    // related videos
                    <Box
                        px={2}
                        py={{ md: 1, xs: 5 }}
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Videos videos={videos} direction="column" />
                    </Box>
                </Stack>
            </Box>
        </>
    );
};

export default VideoDetail;
