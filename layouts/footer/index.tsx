import { FooterIcons } from "@/config/constants";
import { Box, Flex, IconButton, Text, useColorModeValue } from "@chakra-ui/react";
import { format } from "date-fns";
import Link from "next/link";

const Footer = () => {
  return (
    <Box
      zIndex={1001}
      w={"full"}
      h={"10vh"}
      px={10}
      pos={"relative"}
      bottom={0}
      left={0}
      right={0}
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
      borderTop={"1px"}
      borderTopColor={useColorModeValue("gray.200", "gray.900")}
    >
      <Flex justify={"space-between"} align={"center"} h={"full"} w={"full"}>
        <Text>© {format(new Date(), "yyyy")} Erkinov Diyorbek. All Right Reserved.</Text>

        <Flex gap={4}>
          {FooterIcons.map((item, index) => (
            <Link href={item.href} target="_blank">
              <IconButton key={index} aria-label={item.title} icon={<item.icon />} colorScheme="facebook" variant="outline" />
            </Link>
          ))}
        </Flex>
      </Flex>
    </Box>
  );
};

export default Footer;
