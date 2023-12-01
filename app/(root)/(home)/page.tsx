"use client";

import { WithLayout } from "@/layouts";
import { Box, Heading, Container, Text, Button, Stack, Icon, useColorModeValue, createIcon } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";

const Home = () => {
  return (
    <Container maxW={"3xl"}>
      <Stack as={Box} textAlign={"center"} spacing={{ base: 8, md: 14 }} py={{ base: 20, md: 36 }}>
        <motion.div
          initial={{ opacity: 0, x: -500 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 500 }}
          transition={{ duration: 1, delay: 0.1, ease: "easeInOut" }}
        >
          <Heading fontWeight={600} fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }} lineHeight={"110%"}>
            Diyorbek Erkinov
          </Heading>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -500 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 500 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeInOut" }}
        >
          {/* <Text as={"span"} fontSize={"large"} color={"green.400"}>
            I'm a{" "}
            <TypeAnimation
              // sequence={[
              //   ...WordAnimate("Frontend Developer"),
              //   2000,
              //   ...WordAnimate("Backend Developer"),
              //   2000,
              //   ...WordAnimate("Full Stack Developer"),
              //   2000,
              // ]}
              repeat={Infinity}
            />
          </Text> */}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -500 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 500 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeInOut" }}
        >
          <Text color={"gray.500"}>If you want to know more about me, click the button</Text>
        </motion.div>

        <Stack direction={"column"} spacing={3} align={"center"} alignSelf={"center"} position={"relative"}>
          <motion.div
            initial={{ opacity: 0, x: -500 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 500 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeInOut" }}
          >
            <Link href={"/about"}>
              <Button
                colorScheme={"green"}
                bg={"green.400"}
                rounded={"full"}
                px={6}
                _hover={{
                  bg: "green.500",
                }}
              >
                More About
              </Button>
            </Link>
          </motion.div>
        </Stack>
      </Stack>
    </Container>
  );
};

export default WithLayout(Home);
