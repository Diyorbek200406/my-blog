"use client";

import { Navigation, language } from "@/config/constants";
import {
  Box,
  Button,
  Flex,
  HStack,
  Icon,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { AlignLeftIcon, Globe, Moon, Sun, User } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next-router-mock";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  const pathname = usePathname();

  const { t, i18n } = useTranslation();

  const router = useRouter();
  const onLanguage = (lng: string) => {
    router.replace(router.asPath);
    i18n.changeLanguage(lng);
  };

  return (
    <Box
      zIndex={1001}
      w={"full"}
      h={"10vh"}
      px={10}
      pos={"fixed"}
      top={0}
      left={0}
      right={0}
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
      borderBottom={"1px"}
      borderBottomColor={useColorModeValue("gray.200", "gray.900")}
    >
      <Flex h={"full"} justify={"space-between"} align={"center"}>
        <HStack>
          <Icon as={AlignLeftIcon} w={6} h={6} cursor={"pointer"} />
          <Link href="/">
            <Text fontWeight={900} fontSize={32}>
              D/&gt;
            </Text>
          </Link>
        </HStack>

        <HStack gap={8}>
          {Navigation.map((item, index) => {
            return (
              <Link key={index} href={item.route}>
                <Text borderBottom={item.route === pathname ? "2px" : "none"} _hover={{ borderBottom: "2px" }}>
                  {t(item.title, { ns: "layout" })}
                </Text>
              </Link>
            );
          })}

          <HStack gap={2}>
            <Menu placement="bottom">
              <MenuButton
                as={Button}
                rightIcon={<Globe strokeWidth={1.5} size={"20px"} />}
                colorScheme="facebook"
                variant={"solid"}
                textTransform={"capitalize"}
              >
                {i18n.resolvedLanguage}
              </MenuButton>

              <MenuList p={0}>
                {language.map((e) => (
                  <MenuItem
                    key={e.lng}
                    onClick={() => onLanguage(e.lng)}
                    icon={<e.icon />}
                    backgroundColor={i18n.resolvedLanguage === e.lng ? "facebook.500" : ""}
                  >
                    {e.nativeLng}
                  </MenuItem>
                ))}
              </MenuList>
            </Menu>

            <IconButton
              aria-label="color-mode"
              icon={colorMode == "light" ? <Moon strokeWidth={1.75} size={"20px"} /> : <Sun size={"20px"} strokeWidth={1.75} />}
              colorScheme="facebook"
              variant={"outline"}
              onClick={toggleColorMode}
            />

            <Button rightIcon={<User size={20} strokeWidth={1.5} />} colorScheme="facebook">
              {t("login", { ns: "layout" })}
            </Button>
          </HStack>
        </HStack>
      </Flex>
    </Box>
  );
};
export default Header;
