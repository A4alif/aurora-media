import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => {
  return (
    <>
      <Card sx={{width: {md: '320px', xs: '100%'}, boxShadow: 'none', borderRadius:0}}>
        <Link to={videoId && `/video/${videoId}`}>
          <CardMedia
            image={snippet?.thumbnails?.high?.url}
            alt={snippet?.title}
            sx={{ width: 358, height: 180 }}
          />
          <CardContent sx={{ backgroundColor: "#1e1e1e", height: "106px" }}>
            <Link to={videoId && `/video/${videoId}`}>
              <Typography variant="subtitle1" fontWeight="bold" color="#fff">
                {snippet?.title.slice(0, 60)}
              </Typography>
            </Link>
            <Link to={snippet?.channelId && `/channel/${snippet?.channelId}`}>
              <Typography variant="subtitle2" fontWeight="bold" color="gray">
                {snippet?.channelTitle.slice(0, 60)}
                <CheckCircleIcon sx={{fontSize: 12, color: 'gray', ml: '5px'}} />
              </Typography>
            </Link>
          </CardContent>
        </Link>
      </Card>
    </>
  );
};

export default VideoCard;
