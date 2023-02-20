import type { NextPage } from "next";
import {
  Box,
  Text,
  Button,
  useColorMode,
  VStack,
  useColorModeValue,
  chakra,
  Image,
  SimpleGrid,
  Stack,
  Flex,
  Center,
} from "@chakra-ui/react";

const Home: NextPage = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box>
      <VStack>
        <Text
          fontSize={{ base: "5xl", sm: "6xl", md: "7xl", lg: "8xl" }} //TODO
          fontWeight={["thin", "medium", "bold"]} //TODO
          bgGradient="linear(to-r, cyan.400, blue.500, purple.600)"
          bgClip="text">
          ChakraUI Demo
        </Text>

        {/* //TODO useColorModeValue */}
        <Text pb={"20px"} color={useColorModeValue("teal.300", "white")}>
          Hello, welcome to my demo
        </Text>
      </VStack>
      {/* //TODO dark mode toggle button. Use variant and size.*/}
      <SimpleGrid columns={[1, 2, 3]} spacingX="40px" spacingY="20px">
        <Button
          onClick={toggleColorMode}
          borderColor={useColorModeValue("orange", "white")}
          variant="outline">
          Toggle {colorMode === "light" ? "Dark Mode" : "Light Mode"}
        </Button>
        <Button
          as={"a"}
          href="https://chakra-ui.com/docs/styled-system/style-props"
          _hover={{ background: "teal.400" }}>
          Chakra UI style props
        </Button>
        <chakra.button bg="teal.400" px="3" py="2">
          Chakra button
        </chakra.button>
      </SimpleGrid>
      <Center>
        <Image
          src={"http://placekitten.com/200/300"}
          sx={{ filter: "blur(2px)" }}
        />
      </Center>
      {/* //TODO sx prop */}
    </Box>
  );
};

export default Home;
