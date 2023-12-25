import { Container, Text, Box } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Container minW={"full"} backgroundColor={"#191919"} mt={12} py={4}>
      <Box textAlign={"center"} color={"wheat"}>
        <Text>Copyright@2023</Text>
      </Box>
    </Container>
  );
};

export default Footer;
