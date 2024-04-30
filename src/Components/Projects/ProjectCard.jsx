import {
    Box,
    Flex,
    Heading,
    IconButton,
    Img,
    Link,
    Stack,
    Text,
    useStyleConfig,
  } from "@chakra-ui/react";
  import { motion } from "framer-motion";
  import { FaGithub } from "react-icons/fa";
  import { MdOnlinePrediction } from "react-icons/md";
  
  function ProjectCard({ data }) {
    const styles = useStyleConfig("ProjectCard");
  
    return (
      <Box
        as={motion.div}
        width={"25%"}
        borderRadius={"10px"}
        overflow={"hidden"}
        sx={styles}
        position="relative" // Add position relative to the Box
      >
        <motion.div
          whileHover={{ scale: 1.5 }}
          transition={{ type: "tween", stiffness: 100 }}
        >
          <Img src={data.img1} alt="Green double couch with wooden legs" />
        </motion.div>
  
        {/* Add a wrapper for the icon buttons */}
        <motion.div
          whileHover={{ scale: 1.5 }}
          transition={{ type: "tween", stiffness: 100 }}
        >
        <Box p="6" bg={"blue.900"} >
          <Heading  size="md">{data.title}</Heading>
        
          <Text fontWeight={"600"}>Web Development</Text>

        {/* <Flex
          transition="opacity 0.3s" // Add transition for opacity change
          gap={3}
        >
          <Link href={data.github} isExternal>
            <IconButton icon={<FaGithub />} />
          </Link>
          <Link href={data.live} isExternal>
            <IconButton icon={<MdOnlinePrediction />} />
          </Link>
        </Flex> */}
        </Box>
        </motion.div>

      </Box>
    );
  }
  
  export default ProjectCard;
  