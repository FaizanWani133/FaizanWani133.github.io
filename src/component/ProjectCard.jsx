import {  Button, Stack, Typography } from "@mui/material";
import React from "react";

const ProjectCard = ({ media, liveDemo, sourceCode, description, title }) => {
  return (
    <Stack flexDirection={"row"} alignItems={"center"}>
        <img src={media[0].url} width={800} alt={media[0].altText} />
      <Stack gap={4}>
        <Typography variant="h5">{title}</Typography>
        <Typography variant="body1">{description}</Typography>
        <Stack flexDirection={"row"} gap={1}>
          <Button variant="contained">LIVE</Button>
          <Button variant="outlined">GITHUB</Button>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default ProjectCard;
