import {
  Container,
  Heading,
  Flex,
  Box,
  Text,
  Card,
  CardBody,
  Image,
  Stack,
  CardFooter,
  Button,
  Badge,
} from "@chakra-ui/react";
import { Icon } from "@chakra-ui/icons";
import { FaCartShopping } from "react-icons/fa6";

const Product = () => {
  return (
    <Container maxW={{ md: "6xl" }} mt={12} as={"div"}>
      <Flex alignItems={"center"} justifyContent={"space-between"}>
        <Heading as={"h2"}>Product</Heading>
        <Box backgroundColor={"#191919"} borderRadius={6} py={2} px={6}>
          <Text color={"wheat"}>Filter</Text>
        </Box>
      </Flex>
      <Flex mt={18} gap={6} flexDirection={{ base: "column", md: "row" }}>
        <Card maxW="sm">
          <CardBody>
            <Image
              src="https://sin1.contabostorage.com/10162138889b4438bab811ecee1a60ce:magner-prod/assets/products/Petrol%20+%20motor%20Product_kysnhe.webp"
              alt="photo-product"
              borderRadius="lg"
              maxHeight={"229px"}
              width={"300px"}
              objectFit={"cover"}
            />
            <Stack mt="6" spacing="1">
              <Heading size="md">Petrol Plus Treatment</Heading>
              <Badge
                width={"fit-content"}
                colorScheme="green"
                borderRadius={3}
                fontSize={9}
              >
                Bensin
              </Badge>
            </Stack>
          </CardBody>

          <CardFooter>
            <Flex
              alignItems={"center"}
              justifyContent={"space-between"}
              w={"full"}
            >
              <Text color="black.600" fontSize="2xl">
                Rp. 200.000
              </Text>
              <Button variant="solid" colorScheme="blue">
                <Icon as={FaCartShopping} />
              </Button>
            </Flex>
          </CardFooter>
        </Card>
        <Card maxW="sm">
          <CardBody>
            <Image
              src="https://sin1.contabostorage.com/10162138889b4438bab811ecee1a60ce:magner-prod/assets/products/Petrol%20+%20Solar%20Product_m3r2yg.webp"
              alt="photo-product"
              borderRadius="lg"
              maxHeight={"229px"}
              width={"300px"}
              objectFit={"cover"}
            />
            <Stack mt="6" spacing="1">
              <Heading size="md">Petrol Plus Treatment</Heading>
              <Badge
                width={"fit-content"}
                colorScheme="green"
                borderRadius={3}
                fontSize={9}
              >
                Solar
              </Badge>
            </Stack>
          </CardBody>
          <CardFooter>
            <Flex
              alignItems={"center"}
              justifyContent={"space-between"}
              w={"full"}
            >
              <Text color="black.600" fontSize="2xl">
                Rp. 200.000
              </Text>
              <Button variant="solid" colorScheme="blue">
                <Icon as={FaCartShopping} />
              </Button>
            </Flex>
          </CardFooter>
        </Card>
      </Flex>
    </Container>
  );
};

export default Product;
