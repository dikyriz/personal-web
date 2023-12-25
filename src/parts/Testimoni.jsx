import {
  Container,
  Heading,
  Text,
  Card,
  Stack,
  CardBody,
  Flex,
  Avatar,
} from "@chakra-ui/react";

const Testimoni = () => {
  return (
    <Container maxW={"6xl"} mt={12}>
      <Heading as={"h2"}>Testimoni</Heading>
      <Flex mt={10} gap={6} flexDirection={{ base: "column", md: "row" }}>
        <Card
          direction={{ base: "column", sm: "row" }}
          overflow="hidden"
          borderTop={"8px"}
          borderColor={"wheat"}
          maxW={"400px"}
        >
          <CardBody alignItems={"center"} textAlign={"center"}>
            <Avatar name="cust" />

            <Heading size="md" mt={17}>
              The perfect latte
            </Heading>
            <Stack>
              <Text py="2">
                Caffè latte is a coffee beverage of Italian origin made with
                espresso and steamed milk.
              </Text>
            </Stack>
          </CardBody>
        </Card>
        <Card
          direction={{ base: "column", sm: "row" }}
          overflow="hidden"
          borderTop={"8px"}
          borderColor={"wheat"}
          maxW={"400px"}
        >
          <CardBody alignItems={"center"} textAlign={"center"}>
            <Avatar name="cust" />

            <Heading size="md" mt={17}>
              The perfect latte
            </Heading>
            <Stack>
              <Text py="2">
                Caffè latte is a coffee beverage of Italian origin made with
                espresso and steamed milk.
              </Text>
            </Stack>
          </CardBody>
        </Card>
        <Card
          direction={{ base: "column", sm: "row" }}
          overflow="hidden"
          borderTop={"8px"}
          borderColor={"wheat"}
          maxW={"400px"}
        >
          <CardBody alignItems={"center"} textAlign={"center"}>
            <Avatar name="cust" />

            <Heading size="md" mt={17}>
              The perfect latte
            </Heading>
            <Stack>
              <Text py="2">
                Caffè latte is a coffee beverage of Italian origin made with
                espresso and steamed milk.
              </Text>
            </Stack>
          </CardBody>
        </Card>
      </Flex>
    </Container>
  );
};

export default Testimoni;
