import { Box, Container, Stack, Typography } from "@mui/material";
import React from "react";

const Section = ({ id, title, subtitle, children ,bgColor}) => {
  return (
    <Box id={id} sx={{backgroundColor:bgColor}}>
      <Container>
        <Stack paddingY={14} gap={4}>
          <Box textAlign="center" mb={3}>
            {/* Title text */}
            <Typography
              variant="h4"
              color="textPrimary"
              fontWeight="bold"
              sx={{ letterSpacing: 1.5 }}
            >
              {title}
            </Typography>

            {/* Underline effect */}
            <Box
              sx={{
                width: 40,
                height: 4,
                bgcolor: "purple", // Color of the underline
                mx: "auto", // Center align
                mt: 1, // Margin top
              }}
            />
            <Typography sx={{ mt: 6 }}>{subtitle}</Typography>
          </Box>
          {children}
        </Stack>
      </Container>
    </Box>
  );
};

export default Section;
