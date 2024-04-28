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

  
  const borderColor = useColorModeValue("orange", "white"); // N.B. !!!this overrides component styles!!!

  return (
    <Box>
      <VStack>
        <Text
          fontSize={{ base: "5xl", sm: "6xl", md: "7xl", lg: "8xl" }}
          fontWeight={["thin", "medium", "bold"]}
          bgGradient="linear(to-r, cyan.400, blue.500, purple.600)"
          bgClip="text">
          ChakraUI Demo
        </Text>
        {/* //TODO useColorModeValue */}
        <Text
          fontSize={["xl", "2xl", "3xl"]}
          color={useColorModeValue("teal.300", "white")}
          pb={"20px"}>
          Hello, welcome to my demo
        </Text>
      </VStack>
      <SimpleGrid columns={[1, 2, 3]} spacingX="40px" spacingY="20px">
        {/* //TODO dark mode toggle button */}
        <Button
          onClick={toggleColorMode}
          borderColor={borderColor}
          // variant and size is overidden by useColorMode

          variant="outline"
          size="lg">
          Toggle {colorMode === "light" ? "Dark Mode" : "Light Mode"}
        </Button>

        {/* //TODO as prop */}
        <Button
          as="a"
          _hover={{ background: "teal.400" }} //TODO Pseudo props
          href="https://chakra-ui.com/docs/styled-system/style-props"
          target="_blank">
          Chakra UI style props
        </Button>

        {/* //TODO Chakra JSX elements */}
        <chakra.button
          // can't use size or variant
          px="3"
          py="2"
          bg="teal.700"
          color="white"
          rounded="md"
          _hover={{ bg: "teal.300" }}>
          chakra button
        </chakra.button>

        {/* //TODO: make responsive grid  */}
      </SimpleGrid>{" "}
      {/* //TODO sx prop */}
      <Flex flexDirection={"row"} justifyContent={"space-around"} mt="20px">
        {/* //TODO Or use <Center></Center> */}
        <Image
          src="http://placekitten.com/200/300"
          alt="a kitten"
          height="500px"
          sx={{ filter: "blur(2px)" }}
        />
      </Flex>
    </Box>
  );
};

export default Home;
