import {
  Link,
  Flex,
  Box,
  List,
  ListItem,
  Container,
  Spacer,
  HStack,
  Image,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

const Header = () => {
  return (
    <Container
      as={"header"}
      maxW={{ lg: "6xl", base: "full" }}
      backgroundColor={"transparent"}
      position={"fixed"}
      left={0}
      right={0}
      zIndex={2}
    >
      <Flex alignItems={"center"} py={2} as={"nav"}>
        <Link>
          <Image
            src="https://sin1.contabostorage.com/10162138889b4438bab811ecee1a60ce:general/images/logo/logo.svg"
            alt="logo"
            height={{ md: "50px", base: "30px" }}
          />
        </Link>

        <Spacer />

        <HStack>
          <Box display={{ base: "block", md: "none" }}>
            <HamburgerIcon />
          </Box>
          <Box display={{ md: "block", base: "none" }}>
            <List color={"white"}>
              <Flex gap={8}>
                <ListItem>
                  <Link>Home</Link>
                </ListItem>
                <ListItem>
                  <Link>Tentang</Link>
                </ListItem>
                <ListItem>
                  <Link>Peluang</Link>
                </ListItem>
                <ListItem>
                  <Link>Produk</Link>
                </ListItem>
                <ListItem>
                  <Link>Testimoni</Link>
                </ListItem>
                <ListItem>
                  <Link>Artikel</Link>
                </ListItem>
              </Flex>
            </List>
          </Box>
        </HStack>
      </Flex>
    </Container>
  );
};

export default Header;
