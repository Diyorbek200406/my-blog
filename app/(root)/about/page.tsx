"use client";

import { WithLayout } from "@/layouts";
import { motion } from "framer-motion";
import { Box, Button, Container, Heading, Stack, Text } from "@chakra-ui/react";
import Link from "next/link";

const About = () => {
  return (
    <Container maxW={"3xl"}>
      <Stack as={Box} textAlign={"center"} spacing={{ base: 8, md: 14 }} py={{ base: 20, md: 36 }}>
        <motion.div
          initial={{ opacity: 0, x: -500 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 500 }}
          transition={{ duration: 1, delay: 0.1, ease: "easeInOut" }}
        >
          <Heading fontWeight={600} fontSize={{ base: "xl", sm: "3xl", md: "3xl" }} lineHeight={"110%"}>
            Hello, my name is Diyorbek, I was born in 2004. <br /> I am a full stack developer
          </Heading>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -500 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 500 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeInOut" }}
        >
          <Text as={"span"} fontSize={"large"} color={"green.400"}>
            I learned programming at Najot Ta'lim training center
          </Text>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -500 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 500 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeInOut" }}
        >
          <Text color={"gray.500"}>Najot Ta'lim Educational Center is one of the best educational centers in Tashkent</Text>
        </motion.div>

        <Stack direction={"column"} spacing={3} align={"center"} alignSelf={"center"} position={"relative"}>
          <motion.div
            initial={{ opacity: 0, x: -500 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 500 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeInOut" }}
          >
            <Link href={"/projects"}>
              <Button
                colorScheme={"green"}
                bg={"green.400"}
                rounded={"full"}
                px={6}
                _hover={{
                  bg: "green.500",
                }}
              >
                More Projects
              </Button>
            </Link>
          </motion.div>
        </Stack>
      </Stack>
    </Container>
  );
};

export default WithLayout(About);
