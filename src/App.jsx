import {
  Box,
  Button,
  Chip,
  Divider,
  FormControl,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Navbar from "./component/Navbar";
import ProjectCard from "./component/ProjectCard";
import Footer from "./component/Footer";
import Section from "./component/Section";
import { myData } from "./data";

function App() {
  return (
    <Box>
      <Navbar />
      {/* { HOME SECTION } */}
      <Stack
        id="Home"
        sx={{
          alignItems: "center",
          gap: 6,
          paddingY: 30,
          textAlign: "center",
          paddingX: 50,
        }}
      >
        <Typography
          variant="h2"
          sx={{ textTransform: "uppercase", fontWeight: "800" }}
        >
          Hey, I'm {myData.basicInfo.name}
        </Typography>

        <Typography sx={{ fontSize: 20 }}>
          {myData.basicInfo.description}
        </Typography>
        <Button
          variant="contained"
          size="large"
          sx={{ paddingX: 10, paddingY: 2, fontSize: 20, fontWeight: "600" }}
        >
          Resume
        </Button>
      </Stack>
      <Divider />
      {/* { ABOUT SECTION } */}
      <Section
        id={"About"}
        title={"ABOUT ME"}
        subtitle={
          "Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology"
        }
        bgColor={"#e0e2e5"}
      >
        <Stack flexDirection={"row"} gap={2} alignItems={"center"}>
          <img src="/images/profile.png" alt="profile" width={300} />
          <Divider variant="middle" orientation="vertical" flexItem />
          <Typography lineHeight={3} textAlign={"left"}>
            {myData.basicInfo.aboutMe}
          </Typography>
        </Stack>
      </Section>
      <Divider />

      {/* {Skills Section} */}
      <Section
        id="Skills"
        title={"MY SKILLS"}
        subtitle={
          "Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology"
        }
      >
        <Typography variant="h6">Frontend</Typography>
        <Stack flexWrap={"wrap"} flexDirection={"row"} gap={1}>
          {myData.skills.frontend.map((skill) => (
            <Chip
              sx={{ padding: 2, borderRadius: 1, fontSize: 16, opacity: 0.6 }}
              label={skill}
            />
          ))}
        </Stack>
        <Typography variant="h6">Backend</Typography>
        <Stack flexWrap={"wrap"} flexDirection={"row"} gap={1}>
          {myData.skills.backend.map((skill) => (
            <Chip
              sx={{ padding: 2, borderRadius: 1, fontSize: 16, opacity: 0.6 }}
              label={skill}
            />
          ))}
        </Stack>
        <Typography variant="h6">Database</Typography>
        <Stack flexWrap={"wrap"} flexDirection={"row"} gap={1}>
          {myData.skills.database.map((skill) => (
            <Chip
              sx={{ padding: 2, borderRadius: 1, fontSize: 16, opacity: 0.6 }}
              label={skill}
            />
          ))}
        </Stack>
        <Typography variant="h6">Tools</Typography>
        <Stack flexWrap={"wrap"} flexDirection={"row"} gap={1}>
          {myData.skills.tools.map((skill) => (
            <Chip
              sx={{ padding: 2, borderRadius: 1, fontSize: 16, opacity: 0.6 }}
              label={skill}
            />
          ))}
        </Stack>
      </Section>
      <Divider />

      {/* {Projects Section} */}

      <Section
        id="Projects"
        title={"PROJECTS"}
        subtitle={
          "Here you will find some of the personal and clients projects that I created with each project containing its own case study"
        }
      >
        {myData.projects.map((project) => (
          <ProjectCard {...project} />
        ))}
      </Section>
      <Divider />

      {/* {Contact Section} */}

      <Section
        id="Contact"
        title={"CONTACT"}
        bgColor={"#e0e2e5"}
        subtitle={
          "Feel free to Contact me by submitting the form below and I will get back to you as soon as possible"
        }
      >
        <FormControl>
          <Stack sx={{ gap: 2 }}>
            <TextField
              label={"Name"}
              placeholder="Enter Your Name"
              autoComplete="off"
            />
            <TextField
              label={"Email"}
              placeholder="Enter Your Email"
              inputMode="email"
              autoComplete="off"
            />
            <TextField
              label={"Message"}
              multiline
              rows={4}
              placeholder="Enter Your Message"
              autoComplete="off"
            />
          </Stack>
        </FormControl>
      </Section>
      <Footer />
    </Box>
  );
}

export default App;
