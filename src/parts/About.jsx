import { Container, Box, Image, Heading, Text, Flex } from "@chakra-ui/react";

const About = () => {
  return (
    <Box backgroundColor={"#191919"} position={"relative"}>
      <Container as={"section"} py={{ md: 20, base: 10 }} maxW={"6xl"}>
        <Flex
          alignItems={"center"}
          justifyContent={"space-between"}
          flexDirection={{ base: "column", md: "row" }}
        >
          <Box w={{ md: "600px", base: "full" }} color={"wheat"}>
            <Heading as={"h2"} mb={4}>
              Tentang Kami
            </Heading>
            <Text textAlign={"justify"} mb={2}>
              Magner Care didirikan dengan tujuan memberikan kesempatan kepada
              jutaan orang di Indonesia untuk menjadi seorang entrepreneur.
              Magner Care memberikan kesempatan kepada semua orang untuk
              mendapatkan penghasilan tak terbatas dan pasif income dan
              menariknya bisnis ini dapat dijalankan oleh siapapun, kapan saja
              dan dimana saja.
            </Text>
            <Text textAlign={"justify"} as={"em"}>
              Magner Care telah memiliki legalitas lengkap dan telah terdaftar
              sebagai Anggota dari Asosiasi Penjualan Langsung Indonesia (APLI)
              No. Anggota : 0250/08/23
            </Text>
          </Box>
          <Box
            backgroundColor={"#9E9FA5"}
            p={{ md: 12, base: 3 }}
            borderTopLeftRadius={{ md: 8, base: 0 }}
            borderBottomLeftRadius={{ md: 8, base: 0 }}
            position={{ base: "static", md: "absolute" }}
            right={0}
            bottom={-7}
          >
            <Image
              src="https://sin1.contabostorage.com/10162138889b4438bab811ecee1a60ce:general/images/bbizsite/legalitas-usaha-magnercare.webp"
              alt="tentang-kami"
              objectFit={"cover"}
              width={"500px"}
            />
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default About;
