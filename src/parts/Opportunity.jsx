import {
  Container,
  Heading,
  Text,
  Flex,
  Card,
  CardBody,
  AspectRatio,
  Box,
  Input,
  Button,
  Stack,
  FormControl,
} from "@chakra-ui/react";

const Opportunity = () => {
  return (
    <Container minW={{ md: "6xl", base: "full" }} mt={10}>
      <Heading as={"h2"}>Join Opportunity</Heading>
      <Box maxW={"500px"} mt={4} mb={10}>
        <Text as={"em"}>
          Peluang bisnis dropsip dengan modal hanya Rp 100.000,
        </Text>
        <Text mt={2} textAlign={"justify"}>
          Magner Care memberikan kesempatan kepada semua orang untuk mendapatkan
          penghasilan tak terbatas dan pasif income dan menariknya bisnis ini
          dapat dijalankan oleh siapapun, kapan saja dan dimana saja.
        </Text>
      </Box>
      <Flex
        gap={4}
        justifyContent={"space-evenly"}
        flexDirection={{ base: "column", md: "row" }}
      >
        <Card minW={{ md: "600px", base: "full" }} variant={"filled"}>
          <CardBody>
            <AspectRatio maxH={"300px"}>
              <iframe
                title="prom"
                src="https://www.youtube.com/embed/YnJLTKCbcS4"
              />
            </AspectRatio>
          </CardBody>
        </Card>
        <Card variant={"filled"}>
          <Flex justifyContent={"flex-end"}>
            <Button>Daftar</Button>
            <Button fontWeight={"300"}>Masuk</Button>
          </Flex>
          <CardBody>
            <Heading as={"h4"} fontSize={"20px"}>
              Daftar
            </Heading>
            <FormControl>
              <Stack spacing={4} mt={3}>
                <Flex gap={2}>
                  <Input
                    placeholder="Nama Lengkap"
                    variant={"filled"}
                    backgroundColor={"white"}
                  />
                  <Input
                    placeholder="No. WA"
                    variant={"filled"}
                    backgroundColor={"white"}
                    type="number"
                  />
                </Flex>
                <Flex gap={2}>
                  <Input
                    placeholder="Password"
                    variant={"filled"}
                    backgroundColor={"white"}
                    type="password"
                  />
                  <Input
                    placeholder="Konfirmasi Password"
                    variant={"filled"}
                    backgroundColor={"white"}
                    type="password"
                  />
                </Flex>
                <Input
                  placeholder="Kode Refferal"
                  variant={"filled"}
                  backgroundColor={"white"}
                />
                <Box textAlign={"right"}>
                  <Button colorScheme="blue">Submit</Button>
                </Box>
              </Stack>
            </FormControl>
          </CardBody>
        </Card>
      </Flex>
    </Container>
  );
};

export default Opportunity;
