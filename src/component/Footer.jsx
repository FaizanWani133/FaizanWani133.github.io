import React from "react";
import { Box, Typography, IconButton, Link } from "@mui/material";
import {
  LinkedIn,
  GitHub,
  Instagram,
  YouTube,
} from "@mui/icons-material";
import data from "../data.json";

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "black",
        color: "white",
        py: 4,
        textAlign: "center",
      }}
    >
      {/* Name and description */}
      <Typography variant="h6" fontWeight="bold">
       {data.basicInfo.name}
      </Typography>
      <Typography variant="body1" sx={{ mt: 1 }}>
        {data.basicInfo.description}
      </Typography>

      {/* Social Icons */}
      <Box sx={{ mt: 2, display: "flex", justifyContent: "center", gap: 2 }}>
        <IconButton
          color="inherit"
          component="a"
          href={data.basicInfo.socialMedia.linkedin}
          target="_blank"
        >
          <LinkedIn />
        </IconButton>
        <IconButton
          color="inherit"
          component="a"
          href={data.basicInfo.socialMedia.github}
          target="_blank"
        >
          <GitHub />
        </IconButton>
        <IconButton
          color="inherit"
          component="a"
          href={data.basicInfo.socialMedia.instagram}
          target="_blank"
        >
          <Instagram />
        </IconButton>
        <IconButton
          color="inherit"
          component="a"
          href={data.basicInfo.socialMedia.youtube}
          target="_blank"
        >
          <YouTube />
        </IconButton>
      </Box>

      {/* Copyright */}
      <Box sx={{ mt: 4, borderTop: "1px solid gray", pt: 2 }}>
        <Typography variant="caption" display="block">
          © Copyright 2024. Made by{" "}
          <Link
            href="https://www.example.com"
            target="_blank"
            color="inherit"
            underline="hover"
            fontWeight="bold"
          >
            {data.basicInfo.name}
          </Link>
        </Typography>
      </Box>
    </Box>
  );
}

export default Footer;
