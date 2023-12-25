import {
  Container,
  Heading,
  Flex,
  Card,
  Image,
  Stack,
  CardBody,
  CardFooter,
  Text,
  Box,
  Badge,
} from "@chakra-ui/react";

const Articles = () => {
  return (
    <Container maxW={"6xl"} mt={12} mb={5}>
      <Heading as={"h2"}>Articles</Heading>
      <Flex mt={10} flexDirection={"column"} gap={6}>
        <Card
          direction={{ base: "column", sm: "row" }}
          overflow="hidden"
          variant="outline"
          minWidth={"full"}
          position={"relative"}
        >
          <Image
            objectFit="cover"
            maxW={{ base: "100%", sm: "200px" }}
            src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
            alt="Caffe Latte"
          />

          <Stack>
            <CardBody>
              <Badge colorScheme="red" fontSize={8} borderRadius={2}>
                Author
              </Badge>
              <Heading size="md">The perfect latte</Heading>

              <Text py="2">
                Caffè latte is a coffee beverage of Italian origin made with
                espresso and steamed milk.
              </Text>
            </CardBody>

            <CardFooter pb={0} position={"absolute"} right={0} bottom={0}>
              <Box>
                <Text color={"gray.400"} fontSize={"xs"}>
                  25 Desember 2023
                </Text>
              </Box>
            </CardFooter>
          </Stack>
        </Card>
        <Card
          direction={{ base: "column", sm: "row" }}
          overflow="hidden"
          variant="outline"
          minWidth={"full"}
          position={"relative"}
        >
          <Image
            objectFit="cover"
            maxW={{ base: "100%", sm: "200px" }}
            src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
            alt="Caffe Latte"
          />

          <Stack>
            <CardBody>
              <Badge colorScheme="red" fontSize={8} borderRadius={2}>
                Author
              </Badge>
              <Heading size="md">The perfect latte</Heading>

              <Text py="2">
                Caffè latte is a coffee beverage of Italian origin made with
                espresso and steamed milk.
              </Text>
            </CardBody>

            <CardFooter pb={0} position={"absolute"} right={0} bottom={0}>
              <Box>
                <Text color={"gray.400"} fontSize={"xs"}>
                  25 Desember 2023
                </Text>
              </Box>
            </CardFooter>
          </Stack>
        </Card>
        <Card
          direction={{ base: "column", sm: "row" }}
          overflow="hidden"
          variant="outline"
          minWidth={"full"}
          position={"relative"}
        >
          <Image
            objectFit="cover"
            maxW={{ base: "100%", sm: "200px" }}
            src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
            alt="Caffe Latte"
          />

          <Stack>
            <CardBody>
              <Badge colorScheme="red" fontSize={8} borderRadius={2}>
                Author
              </Badge>
              <Heading size="md">The perfect latte</Heading>

              <Text py="2">
                Caffè latte is a coffee beverage of Italian origin made with
                espresso and steamed milk.
              </Text>
            </CardBody>

            <CardFooter pb={0} position={"absolute"} right={0} bottom={0}>
              <Box>
                <Text color={"gray.400"} fontSize={"xs"}>
                  25 Desember 2023
                </Text>
              </Box>
            </CardFooter>
          </Stack>
        </Card>
      </Flex>
    </Container>
  );
};

export default Articles;
